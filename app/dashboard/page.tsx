import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { LayoutDashboard, Database, Brain, Plus, MoreHorizontal } from "lucide-react"

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) redirect("/login")

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="mx-auto w-full max-w-7xl flex-1 p-6 lg:p-10">
              {/* <!-- Welcome Header --> */}
              <div className="mb-10">
                <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl dark:text-white">
                  Good morning, {session.user?.name}
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400">
                  {new Date().toLocaleDateString("de-DE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                {/* <!-- Left Column (Courses & Tasks) --> */}
                <div className="space-y-8 xl:col-span-2">
                  {/* <!-- Up Next Banner --> */}
                  <div className="relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-xl bg-primary p-6 text-white shadow-sm sm:flex-row sm:items-center">
                    <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="relative z-10">
                      <span className="mb-3 inline-block rounded bg-white/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                        Up Next
                      </span>
                      <h2 className="mb-1 text-xl font-semibold">
                        Typography Systems
                      </h2>
                      <p className="text-primary-100 text-sm text-white/80">
                        Advanced UI Design • Module 4
                      </p>
                    </div>
                    <button className="relative z-10 rounded-lg bg-white px-5 py-2.5 font-medium whitespace-nowrap text-primary shadow-sm transition-colors hover:bg-slate-50">
                      Continue Module
                    </button>
                  </div>
                  {/* <!-- Active Courses --> */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold tracking-tight">
                        Active Courses
                      </h3>
                      <a
                        className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        href="#"
                      >
                        View all
                      </a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {/* <!-- Course Card 1 --> */}
                      <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                            <LayoutDashboard className="h-5 w-5" />
                          </div>
                          <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            CS 401
                          </span>
                        </div>
                        <h4 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
                          Advanced UI Design
                        </h4>
                        <p className="mb-6 truncate text-sm text-slate-500 dark:text-slate-400">
                          Current: Typography Systems
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-700 dark:text-slate-300">
                              Progress
                            </span>
                            <span className="text-primary">64%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: "64%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Course Card 2 --> */}
                      <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                            <Database className="h-5 w-5" />
                          </div>
                          <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            CS 305
                          </span>
                        </div>
                        <h4 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
                          Data Structures
                        </h4>
                        <p className="mb-6 truncate text-sm text-slate-500 dark:text-slate-400">
                          Current: Binary Search Trees
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-700 dark:text-slate-300">
                              Progress
                            </span>
                            <span className="text-primary">42%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: "42%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Course Card 3 --> */}
                      <div className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                            <Brain className="h-5 w-5" />
                          </div>
                          <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            PSY 101
                          </span>
                        </div>
                        <h4 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
                          Cognitive Psychology
                        </h4>
                        <p className="mb-6 truncate text-sm text-slate-500 dark:text-slate-400">
                          Current: Memory &amp; Learning
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-700 dark:text-slate-300">
                              Progress
                            </span>
                            <span className="text-primary">88%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Add New Course Placeholder --> */}
                      <div className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                          <Plus className="h-5 w-5" />
                        </div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          Enroll in Course
                        </p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          Browse the catalog
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Right Column (Schedule) --> */}
                <div className="xl:col-span-1">
                  <div className="sticky top-24 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
                      <h3 className="text-lg font-bold tracking-tight">
                        Today&apos;s Schedule
                      </h3>
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
                            <p className="text-xs text-slate-500">
                              Room 402 • Prof. Smith
                            </p>
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
                            <p className="text-xs text-slate-500">
                              Typography Systems Essay
                            </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
