'use client'

import {
  ChartBar,
  Folder,
  HelpCircle,
  LayoutDashboard,
  ListCheck,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import type * as React from 'react'

import { NavMain } from '@/components/sidebar/nav-main'
import { NavSecondary } from '@/components/sidebar/nav-secondary'
import { NavUser } from '@/components/sidebar/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'Felipe Macedo',
    email: 'felipe@email.com',
    avatar: '',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Projetos',
      url: '/projects',
      icon: Folder,
    },
    {
      title: 'Tarefas',
      url: '/tasks',
      icon: ListCheck,
    },
    {
      title: 'Time',
      url: '/team',
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: 'Configurações',
      url: '/settings',
      icon: Settings,
    },
    {
      title: 'Obter Ajuda',
      url: '/help',
      icon: HelpCircle,
    },
    {
      title: 'Pesquisar',
      url: '/search',
      icon: Search,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="py-5 mx-auto">
        <SidebarMenu>
          <SidebarMenuItem className="data-[slot=sidebar-menu-item]:!p-1.5">
            <span className="text-xl font-semibold">PrismaFlow</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
