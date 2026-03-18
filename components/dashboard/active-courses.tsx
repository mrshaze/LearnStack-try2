import { LayoutDashboard, Database, Brain, Plus } from "lucide-react"
import { CourseCard } from "./course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ActiveCourses() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight">Active Courses</h3>
        <Button variant="link" className="px-0 text-primary hover:text-primary/80" asChild>
          <a href="#">View all</a>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CourseCard
          icon={LayoutDashboard}
          code="CS 401"
          title="Advanced UI Design"
          currentTopic="Typography Systems"
          progress={64}
          iconColorClass="bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
        />
        <CourseCard
          icon={Database}
          code="CS 305"
          title="Data Structures"
          currentTopic="Binary Search Trees"
          progress={42}
          iconColorClass="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
        />
        <CourseCard
          icon={Brain}
          code="PSY 101"
          title="Cognitive Psychology"
          currentTopic="Memory & Learning"
          progress={88}
          iconColorClass="bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
        />
        {/* <!-- Add New Course Placeholder --> */}
        {/* <!-- Add New Course Placeholder --> */}
        <Card className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center border-dashed border-slate-300 bg-slate-50 text-center transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800">
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
      </div>
    </div>
  )
}
