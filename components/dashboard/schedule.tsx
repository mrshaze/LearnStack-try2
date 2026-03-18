import { MoreHorizontal, Plus } from "lucide-react"

export function Schedule() {
  return (
    <div className="xl:col-span-1">
      <div className="sticky top-24 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
          <h3 className="text-lg font-bold tracking-tight">Today&apos;s Schedule</h3>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">
          <div className="relative ml-3 space-y-6 border-l border-slate-200 pb-4 dark:border-slate-800">
            {/* <!-- Timeline Item 1 (Past) --> */}
            <div className="relative pl-6 opacity-60">
              <div className="absolute top-1.5 -left-[6.5px] h-3 w-3 rounded-full bg-slate-300 ring-4 ring-white dark:bg-slate-600 dark:ring-slate-900"></div>
              <div className="-ml-2 flex cursor-pointer flex-col gap-1 rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  09:00 AM - 10:30 AM
                </span>
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Data Structures Lecture
                </h4>
                <p className="text-xs text-slate-500">Room 402 • Prof. Smith</p>
              </div>
            </div>
            {/* <!-- Timeline Item 2 (Active/Next) --> */}
            <div className="relative pl-6">
              <div className="absolute top-1.5 -left-[6.5px] h-3 w-3 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
              <div className="-ml-3 flex cursor-pointer flex-col gap-1 rounded-lg border border-primary/20 bg-primary/5 p-3 dark:border-primary/30 dark:bg-primary/10">
                <span className="text-xs font-semibold text-primary">
                  11:00 AM - 12:00 PM
                </span>
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Design Critique Session
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Zoom Link (Click to join)
                </p>
              </div>
            </div>
            {/* <!-- Timeline Item 3 --> */}
            <div className="relative pl-6">
              <div className="absolute top-1.5 -left-[6.5px] h-3 w-3 rounded-full bg-slate-200 ring-4 ring-white dark:bg-slate-700 dark:ring-slate-900"></div>
              <div className="-ml-2 flex cursor-pointer flex-col gap-1 rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  02:00 PM - 04:00 PM
                </span>
                <h4 className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Study Block
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </h4>
                <p className="text-xs text-slate-500">
                  Library • Focus on Psychology
                </p>
              </div>
            </div>
            {/* <!-- Timeline Item 4 --> */}
            <div className="relative pl-6">
              <div className="absolute top-1.5 -left-[6.5px] h-3 w-3 rounded-full bg-slate-200 ring-4 ring-white dark:bg-slate-700 dark:ring-slate-900"></div>
              <div className="-ml-2 flex cursor-pointer flex-col gap-1 rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  11:59 PM
                </span>
                <h4 className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Assignment Due
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                </h4>
                <p className="text-xs text-slate-500">Typography Systems Essay</p>
              </div>
            </div>
          </div>
          <button className="mt-2 flex w-full items-center justify-center gap-1 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        </div>
      </div>
    </div>
  )
}
