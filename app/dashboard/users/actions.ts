"use server"

import { z } from "zod"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { CreateUserFormValues, createUserSchema } from "./schema"



export async function createUserAction(data: CreateUserFormValues) {
  try {
    const validatedData = createUserSchema.parse(data)
    const token = process.env.AUTHENTIK_API_TOKEN

    if (!token) {
      throw new Error("Authentik API token missing.")
    }

    // 1. Create User in Authentik
    const authentikHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    })

    const authentikUserData = {
      username: validatedData.email,
      name: validatedData.name,
      email: validatedData.email,
      is_active: true,
      type: "internal", 
      // Add other fields as necessary
    }

    const createRes = await fetch("http://localhost:9000/api/v3/core/users/", {
      method: "POST",
      headers: authentikHeaders,
      body: JSON.stringify(authentikUserData),
    })

    if (!createRes.ok) {
      const errText = await createRes.text()
      console.error("Failed to create user in Authentik:", errText)
      throw new Error("Failed to create user in identity provider.")
    }

    const authentikUser = await createRes.json()
    const authentikUserId = authentikUser.pk.toString()

    // 2. Set temporary password in Authentik
    const tempPassword = Math.random().toString(36).slice(-8) + "Aa1!"

    const setPwRes = await fetch(
      `http://localhost:9000/api/v3/core/users/${authentikUserId}/set_password/`,
      {
        method: "POST",
        headers: authentikHeaders,
        body: JSON.stringify({ password: tempPassword }),
      }
    )

    if (!setPwRes.ok) {
      const errText = await setPwRes.text()
      console.error("Failed to set password in Authentik:", errText)
      // Note: User exists in Authentik but has no password set. We proceed anyway or delete user.
    } else {
      console.log(`Password set for user ${validatedData.email}: ${tempPassword}`)
    }

    // 3. Create user in local database
    const newDbUser = await prisma.user.create({
      data: {
        id: authentikUserId,
        name: validatedData.name,
        email: validatedData.email,
        type: validatedData.role,
        groupId: validatedData.groupId || null,
        memberId: Math.random().toString(36).substring(2, 9), // generate a random member ID if required
      },
    })

    revalidatePath("/dashboard/users")

    return { 
      success: true, 
      user: newDbUser,
      tempPassword 
    }
  } catch (error) {
    console.error("createUserAction Error:", error)
    if (error instanceof Error) {
      return { success: false, error: error.message }
    }
    return { success: false, error: "An unknown error occurred." }
  }
}
