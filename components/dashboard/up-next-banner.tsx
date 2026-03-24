import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Course, Enrollment } from "@/app/generated/prisma/client"

type EnrollmentWithCourse = Enrollment & { course: Course }

export function UpNextBanner({ enrollment }: { enrollment?: EnrollmentWithCourse | null }) {
  if (!enrollment) {
    return (
      <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl bg-primary p-6 text-white shadow-sm sm:flex-row sm:items-center">
        <div className="relative z-10">
          <h2 className="mb-1 text-xl font-semibold">Welcome to LearnStack</h2>
          <p className="text-primary-100 text-sm text-white/80">
            Enroll in a course to get started.
          </p>
        </div>
        <Button variant="secondary" className="relative z-10 bg-white text-primary hover:bg-slate-50" asChild>
          <Link href="/dashboard/courses">Browse Courses</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl bg-primary p-6 text-white shadow-sm sm:flex-row sm:items-center">
      <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="relative z-10">
        <span className="mb-3 inline-block rounded bg-white/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          Up Next
        </span>
        <h2 className="mb-1 text-xl font-semibold">{enrollment.course.title}</h2>
        <p className="text-primary-100 text-sm text-white/80">
          Module • {enrollment.course.code || "Continue"}
        </p>
      </div>
      <Button variant="secondary" className="relative z-10 bg-white text-primary hover:bg-slate-50" asChild>
        <Link href={`/dashboard/courses/${enrollment.courseId}`}>Continue Module</Link>
      </Button>
    </div>
  )
}
