import { SearchIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function CoursesToolbar() {
  return (
    <div className="flex flex-col gap-4 justify-between sm:flex-row sm:items-center">
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
  )
}
