"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type ThemeType = "theme1" | "theme2" | "theme3"

export interface ThemeConfig {
  id: ThemeType
  name: string
  colors: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: string
    accent: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  layout: "default" | "sidebar" | "grid"
  spacing: "compact" | "normal" | "spacious"
}

const themes: Record<ThemeType, ThemeConfig> = {
  theme1: {
    id: "theme1",
    name: "Minimalist",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#1e293b",
      accent: "#3b82f6",
    },
    fonts: {
      primary: "Inter, sans-serif",
      secondary: "Inter, sans-serif",
    },
    layout: "default",
    spacing: "normal",
  },
  theme2: {
    id: "theme2",
    name: "Dark Professional",
    colors: {
      primary: "#f59e0b",
      secondary: "#6b7280",
      background: "#111827",
      surface: "#1f2937",
      text: "#f9fafb",
      accent: "#fbbf24",
    },
    fonts: {
      primary: "Playfair Display, serif",
      secondary: "Playfair Display, serif",
    },
    layout: "sidebar",
    spacing: "spacious",
  },
  theme3: {
    id: "theme3",
    name: "Colorful Creative",
    colors: {
      primary: "#ec4899",
      secondary: "#8b5cf6",
      background: "#fef3c7",
      surface: "#ffffff",
      text: "#374151",
      accent: "#10b981",
    },
    fonts: {
      primary: "Pacifico, cursive",
      secondary: "Inter, sans-serif",
    },
    layout: "grid",
    spacing: "spacious",
  },
}

interface ThemeContextType {
  currentTheme: ThemeConfig
  setTheme: (theme: ThemeType) => void
  themes: Record<ThemeType, ThemeConfig>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(themes.theme1)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("selectedTheme") as ThemeType
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme])
    }
  }, [])

  const setTheme = (themeId: ThemeType) => {
    setCurrentTheme(themes[themeId])
    localStorage.setItem("selectedTheme", themeId)
  }

  // Apply theme styles to document root
  useEffect(() => {
    const root = document.documentElement
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
    root.style.setProperty("--font-primary", currentTheme.fonts.primary)
    root.style.setProperty("--font-secondary", currentTheme.fonts.secondary)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: currentTheme.colors.background,
          color: currentTheme.colors.text,
          fontFamily: currentTheme.fonts.primary,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
