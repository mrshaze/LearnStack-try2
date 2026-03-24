"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PlusCircle, Loader2, Copy } from "lucide-react"
import { toast } from "sonner"
import { createUserSchema, CreateUserFormValues } from "./schema"
import GroupPicker from "./group-picker"
import { Group } from "@/app/generated/prisma/client"
import { createUserAction } from "./actions"

export default function CreateUserForm({ groups }: { groups: Group[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [createdCredentials, setCreatedCredentials] = useState<{ email: string; password?: string } | null>(null)

  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "STUDENT",
      groupId: null,
    },
  })

  async function onSubmit(data: CreateUserFormValues) {
    setIsSubmitting(true)
    try {
      const res = await createUserAction(data)
      if (res?.success) {
        toast.success("User created successfully!")
        setCreatedCredentials({ email: data.email, password: res.tempPassword })
        form.reset()
      } else {
        toast.error("Error: " + res?.error)
      }
    } catch (error) {
      toast.error("An unexpected error occurred.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const {
    formState: { errors },
  } = form

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-primary" />
            New User Account
          </CardTitle>
          <CardDescription>
            Manually add a single user to the platform.
          </CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...form.register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@university.edu"
                {...form.register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Controller
                  name="role"
                  control={form.control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="STUDENT">Student</SelectItem>
                        <SelectItem value="TUTOR">Instructor</SelectItem>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.role && (
                  <p className="text-xs text-destructive">
                    {errors.role.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2 pt-px">
                <Label htmlFor="dept">Department</Label>
                <Controller
                  name="groupId"
                  control={form.control}
                  render={({ field }) => {
                    const selectedGroup =
                      groups.find((g) => g.id === field.value) || null
                    return (
                      <GroupPicker
                        groups={groups}
                        value={selectedGroup}
                        onValueChange={(group) =>
                          field.onChange(group?.id || null)
                        }
                      />
                    )
                  }}
                />
                {errors.groupId && (
                  <p className="text-xs text-destructive">
                    {errors.groupId.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Create Account
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Dialog open={!!createdCredentials} onOpenChange={(open) => !open && setCreatedCredentials(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Created Successfully</DialogTitle>
            <DialogDescription>
              Please save these login credentials. The password will only be shown once.
            </DialogDescription>
          </DialogHeader>
          {createdCredentials && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="flex items-center gap-2">
                  <Input readOnly value={createdCredentials.email} />
                  <Button
                    size="icon"
                    variant="outline"
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(createdCredentials.email)
                      toast.success("Email copied to clipboard")
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Temporary Password</Label>
                <div className="flex items-center gap-2">
                  <Input readOnly value={createdCredentials.password || ""} />
                  <Button
                    size="icon"
                    variant="outline"
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(createdCredentials.password || "")
                      toast.success("Password copied to clipboard")
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setCreatedCredentials(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
