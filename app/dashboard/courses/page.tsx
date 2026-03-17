import { Search, User, Globe, Plus, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export default function CoursesPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">
          Manage your enrolled subjects, track progress, and discover new
          materials.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <InputGroup className="max-w-sm">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>

        <Tabs defaultValue="active" className="w-full sm:w-auto">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="active">Active (4)</TabsTrigger>
            <TabsTrigger value="completed">Completed (12)</TabsTrigger>
            <TabsTrigger value="saved">Saved (2)</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card 1 */}
        <Card className="group flex cursor-pointer flex-col overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-40 overflow-hidden bg-muted">
            <img
              alt="Advanced Machine Learning Algorithms"
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_cPfcMwNgfIk9Dt6HeAz_4zaLMZ3rvCm-ebDcrMDg7C71Z1DC0wpOBGdynpcEeUC6Ifck8Nj-GRemHtboCLRPbQjwA-FbOKhQgw_wiRKGNUVrw4WbWTd0HisuALkTxkMSQvrs4ESawxeliwxh8jN7YyO-UblZI10bXAc0V1wa9JJC5gjpYXr5xtfMwoDdZB__-vmyH3x6R_R7e4fGRTohghleLqy7CWTtu8p2KrFQdkSDnRfchQueKYPAGx4dItTIoGBFp_GKsT1g"
            />
            <Badge variant="secondary" className="absolute top-2 right-2">
              CS-401
            </Badge>
          </div>
          <CardHeader className="flex-1 p-4 pb-2">
            <CardTitle className="line-clamp-2 text-base transition-colors group-hover:text-primary">
              Advanced Machine Learning Algorithms
            </CardTitle>
            <CardDescription className="mt-2 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              Dr. Alan Turing
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-3">
              <Progress value={65} className="h-2" />
              <span className="w-8 text-right text-xs font-medium text-muted-foreground">
                65%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="group flex cursor-pointer flex-col overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-40 overflow-hidden bg-muted">
            <img
              alt="Software Architecture Patterns"
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2iSHvHVQvK56FXpEkjQ97CcHKdx5DcLOh7PfSqVHVPQbfhv1TTnfMblqsxbxd703bdlqnv9MrP2GB1v4KPlGlpWvDQ0stkDYm9r0Lq6w8k3DT6G-dBRr-fqnoN3IZxJh8eQe-pAjugYzypyPNqtClGhZKZtkYrm0WZMJ2NlkGzF4Rv0owRRE_ePCzSEtB8Q8WXGbWcyIILysrL5KCWu2Fh7OJbA_pssD6YDFLJiJv9nKQZOHAiyUZxjOhvJmFMCjHWY8bRQSd1d1k"
            />
            <Badge variant="secondary" className="absolute top-2 right-2">
              ENG-205
            </Badge>
          </div>
          <CardHeader className="flex-1 p-4 pb-2">
            <CardTitle className="line-clamp-2 text-base transition-colors group-hover:text-primary">
              Software Architecture Patterns
            </CardTitle>
            <CardDescription className="mt-2 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              Prof. Grace Hopper
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-3">
              <Progress value={12} className="h-2" />
              <span className="w-8 text-right text-xs font-medium text-muted-foreground">
                12%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="group flex cursor-pointer flex-col overflow-hidden transition-all hover:shadow-md">
          <div className="relative flex h-40 items-center justify-center overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50"></div>
            <Globe className="z-10 h-10 w-10 text-muted-foreground/50 transition-colors group-hover:text-primary" />
            <Badge variant="secondary" className="absolute top-2 right-2 z-10">
              LAN-101
            </Badge>
          </div>
          <CardHeader className="flex-1 p-4 pb-2">
            <CardTitle className="line-clamp-2 text-base transition-colors group-hover:text-primary">
              Introduction to Linguistics
            </CardTitle>
            <CardDescription className="mt-2 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              Dr. Noam C.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-3">
              <Progress value={88} className="h-2" />
              <span className="w-8 text-right text-xs font-medium text-muted-foreground">
                88%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Card 4 (New) */}
        <Card className="group flex cursor-pointer flex-col overflow-hidden border-2 border-dashed bg-muted/30 transition-all hover:border-primary/50 hover:bg-muted/50 hover:shadow-md">
          <CardContent className="flex min-h-[280px] flex-1 flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors group-hover:text-primary">
              <Plus className="h-6 w-6" />
            </div>
            <h3 className="mb-1 text-lg font-semibold">Explore Catalog</h3>
            <p className="text-sm text-muted-foreground">
              Find new courses to enroll in
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
