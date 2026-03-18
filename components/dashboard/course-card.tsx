import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type CourseCardProps = {
  icon: LucideIcon
  code: string
  title: string
  currentTopic: string
  progress: number
  iconColorClass: string
}

export function CourseCard({
  icon: Icon,
  code,
  title,
  currentTopic,
  progress,
  iconColorClass,
}: CourseCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700">
      <CardContent className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconColorClass}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            {code}
          </span>
        </div>
        <h4 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
          {title}
        </h4>
        <p className="mb-6 truncate text-sm text-slate-500 dark:text-slate-400">
          Current: {currentTopic}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-700 dark:text-slate-300">Progress</span>
            <span className="text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
