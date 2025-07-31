"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {
  const { currentTheme, setTheme, themes } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: currentTheme.colors.surface,
        borderBottom: `1px solid ${currentTheme.colors.primary}20`,
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              T
            </div>
            <span
              className="text-xl font-bold transition-all duration-300"
              style={{
                fontFamily: currentTheme.fonts.primary,
                color: currentTheme.colors.text,
              }}
            >
              ThemeSwitcher
            </span>
          </Link>

          {/* Navigation - Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ color: currentTheme.colors.text }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 hover:opacity-80 animate-slide-in-left animate-delay-${(index + 1) * 100} ${
                  pathname === item.href ? "font-semibold" : ""
                }`}
                style={{
                  color: pathname === item.href ? currentTheme.colors.primary : currentTheme.colors.text,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 top-16 z-40 md:hidden transition-all duration-300"
              style={{ backgroundColor: currentTheme.colors.surface + "f0" }}
            >
              <nav className="flex flex-col p-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-80 animate-slide-in-left animate-delay-${(index + 1) * 100} ${
                      pathname === item.href ? "font-semibold" : ""
                    }`}
                    style={{
                      color: pathname === item.href ? currentTheme.colors.primary : currentTheme.colors.text,
                      backgroundColor: pathname === item.href ? currentTheme.colors.primary + "20" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: currentTheme.colors.primary,
                color: currentTheme.colors.background,
              }}
            >
              <span className="font-medium hidden md:block">{currentTheme.name}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  borderColor: currentTheme.colors.primary + "20",
                }}
              >
                {Object.values(themes).map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 hover:opacity-80 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      currentTheme.id === theme.id ? "font-semibold" : ""
                    }`}
                    style={{
                      color: currentTheme.id === theme.id ? currentTheme.colors.primary : currentTheme.colors.text,
                      backgroundColor:
                        currentTheme.id === theme.id ? currentTheme.colors.primary + "10" : "transparent",
                    }}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
