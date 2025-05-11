"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, GraduationCap, Calendar, MessageSquare, Settings, LogOut } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      href: "/dashboard/applications",
      label: "Applications",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      href: "/dashboard/colleges",
      label: "Saved Colleges",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      href: "/dashboard/appointments",
      label: "Appointments",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      href: "/dashboard/messages",
      label: "Messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <Button variant={pathname === route.href ? "default" : "ghost"} className="w-full justify-start">
              {route.icon}
              <span className="ml-2">{route.label}</span>
            </Button>
          </Link>
        ))}
      </div>
      <div className="pt-6 border-t">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-5 w-5" />
          <span className="ml-2">Log out</span>
        </Button>
      </div>
    </div>
  )
}
