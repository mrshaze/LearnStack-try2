import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  role: z.enum(["STUDENT", "TUTOR", "ADMIN"]),
  groupId: z.string().optional().nullable(),
})

export type CreateUserFormValues = z.infer<typeof createUserSchema>