"use client"

import type React from "react"
import { useState } from "react"
import { Menu } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  sidebar?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  const { currentTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (currentTheme.layout === "sidebar" && sidebar) {
    return (
      <>
        {/* Floating Background Shapes */}
        <div className="floating-shapes">
          <div
            className="floating-shape w-32 h-32 rounded-full"
            style={{ backgroundColor: currentTheme.colors.primary }}
          ></div>
          <div
            className="floating-shape w-24 h-24 rounded-full"
            style={{ backgroundColor: currentTheme.colors.accent }}
          ></div>
          <div
            className="floating-shape w-40 h-40 rounded-full"
            style={{ backgroundColor: currentTheme.colors.secondary }}
          ></div>
          <div
            className="floating-shape w-20 h-20 rounded-full"
            style={{ backgroundColor: currentTheme.colors.primary }}
          ></div>
        </div>

        <div className="flex min-h-screen relative">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-20 left-4 z-50 p-2 rounded-lg md:hidden transition-all duration-300 hover-glow"
            style={{
              backgroundColor: currentTheme.colors.primary,
              color: currentTheme.colors.background,
            }}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Sidebar */}
          <aside
            className={`
              w-64 fixed left-0 top-16 bottom-0 overflow-y-auto transition-all duration-500 ease-in-out z-40
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 sidebar-scroll
            `}
            style={{ backgroundColor: currentTheme.colors.surface }}
          >
            <div className="animate-slide-in-left">{sidebar}</div>
          </aside>

          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 md:ml-64 transition-all duration-500 ease-in-out relative">
            <div className="animate-slide-in-right">{children}</div>
          </main>
        </div>
      </>
    )
  }

  return (
    <div className="transition-all duration-500 ease-in-out relative">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div
          className="floating-shape w-32 h-32 rounded-full"
          style={{ backgroundColor: currentTheme.colors.primary }}
        ></div>
        <div
          className="floating-shape w-24 h-24 rounded-full"
          style={{ backgroundColor: currentTheme.colors.accent }}
        ></div>
        <div
          className="floating-shape w-40 h-40 rounded-full"
          style={{ backgroundColor: currentTheme.colors.secondary }}
        ></div>
        <div
          className="floating-shape w-20 h-20 rounded-full"
          style={{ backgroundColor: currentTheme.colors.primary }}
        ></div>
      </div>

      <div className="animate-bounce-in">{children}</div>
    </div>
  )
}
