import { Globe } from "lucide-react"
import { CourseCard } from "./course-card"
import { CoursesToolbar } from "./courses-toolbar"
import { ExploreCard } from "./explore-card"
import { CoursesHeader } from "./courses-header"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function CoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  /* const session = await auth.api.getSession({
    headers: await headers(),
  })
 */
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <CoursesHeader />
      <CoursesToolbar />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card 1 */}
        <CourseCard
          id="1"
          title="Advanced Machine Learning Algorithms"
          code="CS-401"
          instructor="Dr. Alan Turing"
          progress={65}
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD_cPfcMwNgfIk9Dt6HeAz_4zaLMZ3rvCm-ebDcrMDg7C71Z1DC0wpOBGdynpcEeUC6Ifck8Nj-GRemHtboCLRPbQjwA-FbOKhQgw_wiRKGNUVrw4WbWTd0HisuALkTxkMSQvrs4ESawxeliwxh8jN7YyO-UblZI10bXAc0V1wa9JJC5gjpYXr5xtfMwoDdZB__-vmyH3x6R_R7e4fGRTohghleLqy7CWTtu8p2KrFQdkSDnRfchQueKYPAGx4dItTIoGBFp_GKsT1g"
        />

        {/* Card 2 */}
        <CourseCard
          id="2"
          title="Software Architecture Patterns"
          code="ENG-205"
          instructor="Prof. Grace Hopper"
          progress={12}
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2iSHvHVQvK56FXpEkjQ97CcHKdx5DcLOh7PfSqVHVPQbfhv1TTnfMblqsxbxd703bdlqnv9MrP2GB1v4KPlGlpWvDQ0stkDYm9r0Lq6w8k3DT6G-dBRr-fqnoN3IZxJh8eQe-pAjugYzypyPNqtClGhZKZtkYrm0WZMJ2NlkGzF4Rv0owRRE_ePCzSEtB8Q8WXGbWcyIILysrL5KCWu2Fh7OJbA_pssD6YDFLJiJv9nKQZOHAiyUZxjOhvJmFMCjHWY8bRQSd1d1k"
        />

        {/* Card 3 */}
        <CourseCard
          id="3"
          title="Introduction to Linguistics"
          code="LAN-101"
          instructor="Dr. Noam C."
          progress={88}
          icon={<Globe className="h-10 w-10" />}
        />

        {/* Card 4 (New) */}
        <ExploreCard />
      </div>
    </div>
  )
}
