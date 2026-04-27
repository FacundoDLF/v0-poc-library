import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b border-border/50 px-4">
          <SidebarTrigger className="-ml-1" />
          <ThemeToggle />
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary">
              BG
            </div>
            <span className="hidden text-sm font-medium sm:inline">
              Bibliotecario
            </span>
          </div>
        </header>
        <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
