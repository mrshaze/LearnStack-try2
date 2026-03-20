"use client"

import { useSession } from "@/lib/auth-client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  if (session?.user) router.push("/dashboard")
  else router.push("/login")

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="flex gap-4">
        Nothing to see here... When redirect is not working, here is a link
        <Link href="/login">Login</Link>
      </div>
    </main>
  )
}
