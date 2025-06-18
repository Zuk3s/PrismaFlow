import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { Container } from '@/components/ui/container'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function PrivateLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <Container className="@container/main flex flex-1 flex-col gap-6 py-8">
          {children}
        </Container>
      </SidebarInset>
    </SidebarProvider>
  )
}
