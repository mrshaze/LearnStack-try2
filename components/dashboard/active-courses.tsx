import { Plus, Globe } from "lucide-react"
import { CourseCard } from "@/app/dashboard/courses/course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Course, Enrollment } from "@/app/generated/prisma/client"

type EnrollmentWithCourse = Enrollment & { course: Course }

export function ActiveCourses({ enrollments = [] }: { enrollments?: EnrollmentWithCourse[] }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight">Active Courses</h3>
        <Button
          variant="link"
          className="px-0 text-primary hover:text-primary/80"
          asChild
        >
          <Link href="/dashboard/courses">View all</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {enrollments.map((enr, i) => {
          const icons = [LayoutDashboard, Database, Brain]
          const colors = [
            "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
            "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
            "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
            "bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
          ]
          const Icon = icons[i % icons.length]
          const colorClass = colors[i % colors.length]

          return (
            <CourseCard
              key={enr.id}
              id={enr.courseId}
              icon={Icon}
              code={enr.course.code || "N/A"}
              title={enr.course.title}
              currentTopic="Continue learning"
              progress={enr.progress}
              iconColorClass={colorClass}
            />
          )
        })}

        {/* <!-- Add New Course --> */}
        <Link href="/dashboard/courses" className="block h-full">
          <Card className="flex h-full min-h-[200px] cursor-pointer flex-col items-center justify-center border-dashed border-slate-300 bg-slate-50 text-center transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800">
            <CardContent className="flex flex-col items-center justify-center p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                <Plus className="h-5 w-5" />
              </div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Enroll in Course
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Browse the catalog
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
