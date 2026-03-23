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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  PlusCircle,
  Info,
  MoreVertical,
  Filter,
  UserPlus,
  User,
  GraduationCap,
  ShieldCheck,
  Edit2,
} from "lucide-react"
import prisma from "@/lib/prisma"
import { Role } from "@/app/generated/prisma/enums"

async function CreateUser() {
  "use server"
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Accept", "application/json")
  myHeaders.append(
    "Authorization",
    "Bearer d4AhxKIJUwZgDqwq7zAf3FFbmMvacJTzoJvgG6cHeNSCUfJDFsvAaFYOlgCN"
  )

  const raw = JSON.stringify({
    username: "IT012503",
    name: "IT012503",
    is_active: true,
    type: "internal",
  })

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }

  fetch("http://localhost:9000/api/v3/core/users/", requestOptions)
    .then((response) => response.json())
    .then(async (result) => {
      await SetPassword(result.pk)
      console.log(result)
    })
    .catch((error) => console.error(error))
}

async function SetPassword(id: string) {
  "use server"
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append(
    "Authorization",
    "Bearer d4AhxKIJUwZgDqwq7zAf3FFbmMvacJTzoJvgG6cHeNSCUfJDFsvAaFYOlgCN"
  )

  const raw = JSON.stringify({
    password: "test1234",
  })

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }

  fetch(
    "http://localhost:9000/api/v3/core/users/" + id + "/set_password/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log("PW set" + result)
    })
    .catch((error) => console.error(error))
}

export default async function Page() {
  const users = [
    {
      id: "1",
      name: "Sarah Mitchell",
      email: "s.mitchell@university.edu",
      role: "Instructor",
      department: "Computer Science",
      status: "Active",
      initials: "SM",
    },
    {
      id: "2",
      name: "Alex Johnson",
      email: "a.johnson@student.edu",
      role: "Student",
      department: "Mathematics",
      status: "Active",
      initials: "AJ",
    },
    {
      id: "3",
      name: "Emma Lee",
      email: "e.lee@university.edu",
      role: "Instructor",
      department: "Physics",
      status: "Pending",
      initials: "EL",
    },
    {
      id: "4",
      name: "David Chen",
      email: "d.chen@student.edu",
      role: "Student",
      department: "Computer Science",
      status: "Active",
      initials: "DC",
    },
  ]

  const usrs = await prisma.user.findMany({
    include: {
      enrollments: true,
      group: true,
    },
  })

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage institutional access for students, instructors, and admins.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" /> Invite User
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: User Creation Form */}
        <div className="space-y-6">
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
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@university.edu"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dept">Department</Label>
                  <Select>
                    <SelectTrigger id="dept">
                      <SelectValue placeholder="Select dept" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="arts">Arts & Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={CreateUser}>
                Create Account
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Info className="mt-0.5 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Quick Tip</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Use Batch Upload via CSV to invite multiple users at once.
                    Temporary passwords will be sent to their emails.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: User List */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="instructors">Instructors</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usrs.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">
                            {user.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm leading-none font-medium">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium">
                        {user.type === Role.STUDENT && (
                          <GraduationCap className="mr-1 h-3 w-3" />
                        )}
                        {user.type === Role.TUTOR && (
                          <User className="mr-1 h-3 w-3" />
                        )}
                        {user.type === Role.ADMIN && (
                          <ShieldCheck className="mr-1 h-3 w-3" />
                        )}
                        {user.type.toLowerCase().charAt(0).toUpperCase() +
                          user.type.toLowerCase().slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {user.group ? (
                        <Badge
                          variant="outline"
                          className="font-medium"
                          style={{
                            backgroundColor: user.group.color || undefined,
                            color: user.group.color ? "white" : undefined,
                          }}
                        >
                          {user.group.code}
                        </Badge>
                      ) : (
                        <span>-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            user.banned === false
                              ? "bg-emerald-500"
                              : "bg-amber-500"
                          }`}
                        />
                        <span className="text-xs font-medium">
                          {user.banned ? "Banned" : "Active"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">
                            {user.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm leading-none font-medium">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium">
                        {user.role === "Student" && (
                          <GraduationCap className="mr-1 h-3 w-3" />
                        )}
                        {user.role === "Instructor" && (
                          <User className="mr-1 h-3 w-3" />
                        )}
                        {user.role === "Admin" && (
                          <ShieldCheck className="mr-1 h-3 w-3" />
                        )}
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {user.department}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            user.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-amber-500"
                          }`}
                        />
                        <span className="text-xs font-medium">
                          {user.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <CardFooter className="flex items-center justify-between border-t py-4">
              <p className="text-xs text-muted-foreground">
                Showing 1 to 4 of 48 users
              </p>
              <Pagination className="mx-0 w-auto justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="pointer-events-none opacity-50"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
