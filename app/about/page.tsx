"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { Layout } from "@/components/Layout"
import { Code, Palette, Smartphone, Zap } from "lucide-react"

export default function AboutPage() {
  const { currentTheme } = useTheme()

  const features = [
    {
      icon: Palette,
      title: "Dynamic Theming",
      description: "Switch between multiple themes with different layouts, colors, and typography.",
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Built with TypeScript, Context API, and modern React patterns for maintainability.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Optimized for all devices with Tailwind CSS and mobile-first approach.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized rendering with smooth animations and efficient state management.",
    },
  ]

  const containerStyles = {
    theme1: "container mx-auto px-4 py-8",
    theme2: "px-8 py-12",
    theme3: "container mx-auto px-6 py-12",
  }

  return (
    <Layout>
      <div className={containerStyles[currentTheme.id]}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <h1
              className={`${
                currentTheme.id === "theme3" ? "text-5xl" : "text-4xl"
              } font-bold mb-6 transition-all duration-500 animate-bounce-in`}
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.primary,
              }}
            >
              About ThemeSwitcher
            </h1>

            <p
              className={`${
                currentTheme.id === "theme2" ? "text-xl" : "text-lg"
              } leading-relaxed transition-all duration-500 animate-slide-in-left animate-delay-200`}
              style={{
                color: currentTheme.colors.secondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              A showcase of advanced React development techniques, featuring dynamic theming, TypeScript integration,
              and modern UI patterns. This application demonstrates the power of Context API for state management and
              the flexibility of Tailwind CSS for responsive design.
            </p>
          </div>

          {/* Features Grid */}
          <div
            className={`grid ${
              currentTheme.layout === "grid"
                ? "grid-cols-1 md:grid-cols-2"
                : currentTheme.layout === "sidebar"
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            } gap-8 mb-12`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover-glow group animate-slide-in-right animate-delay-${(index + 1) * 100} ${
                  currentTheme.id === "theme3" ? "rounded-2xl" : ""
                }`}
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  border: `1px solid ${currentTheme.colors.primary}20`,
                }}
              >
                <feature.icon
                  className={`w-12 h-12 mb-4 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${currentTheme.id === "theme3" ? "w-16 h-16" : ""}`}
                  style={{ color: currentTheme.colors.primary }}
                />

                <h3
                  className={`${
                    currentTheme.id === "theme3" ? "text-xl" : "text-lg"
                  } font-semibold mb-3 transition-all duration-500 group-hover:opacity-80`}
                  style={{
                    color: currentTheme.colors.text,
                    fontFamily: currentTheme.fonts.primary,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="leading-relaxed transition-colors duration-300"
                  style={{
                    color: currentTheme.colors.secondary,
                    fontFamily: currentTheme.fonts.secondary,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div className="p-8 rounded-lg" style={{ backgroundColor: currentTheme.colors.surface }}>
            <h2
              className={`${
                currentTheme.id === "theme3" ? "text-3xl" : "text-2xl"
              } font-bold mb-6 transition-all duration-500`}
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.primary,
              }}
            >
              Technical Implementation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: currentTheme.colors.primary }}>
                  Frontend Technologies
                </h3>
                <ul className="space-y-2" style={{ color: currentTheme.colors.secondary }}>
                  <li>• React 18 with TypeScript</li>
                  <li>• Next.js 14 App Router</li>
                  <li>• Context API for state management</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Custom hooks for data fetching</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: currentTheme.colors.primary }}>
                  Key Features
                </h3>
                <ul className="space-y-2" style={{ color: currentTheme.colors.secondary }}>
                  <li>• Theme persistence with localStorage</li>
                  <li>• Responsive design patterns</li>
                  <li>• API integration with error handling</li>
                  <li>• Smooth animations and transitions</li>
                  <li>• Accessible UI components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
