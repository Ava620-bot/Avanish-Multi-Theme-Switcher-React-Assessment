"use client"

import { useTheme } from "@/contexts/ThemeContext"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/ProductCard"
import { Layout } from "@/components/Layout"
import { Package, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  const { currentTheme } = useTheme()
  const { products, loading, error } = useProducts()

  const containerStyles = {
    theme1: "container mx-auto px-4 py-8",
    theme2: "px-8 py-12",
    theme3: "container mx-auto px-6 py-12",
  }

  const gridStyles = {
    theme1: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    theme2: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
    theme3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
  }

  const sidebar =
    currentTheme.layout === "sidebar" ? (
      <div className="p-6">
        <h3
          className="text-lg font-bold mb-6"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
          }}
        >
          Dashboard
        </h3>

        <div className="space-y-4">
          {[
            { icon: Package, label: "Products", value: "1,234" },
            { icon: Users, label: "Customers", value: "5,678" },
            { icon: TrendingUp, label: "Revenue", value: "$12,345" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg transition-all duration-300"
              style={{ backgroundColor: currentTheme.colors.background }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                <div>
                  <p className="text-sm" style={{ color: currentTheme.colors.secondary }}>
                    {item.label}
                  </p>
                  <p className="font-bold" style={{ color: currentTheme.colors.text }}>
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : undefined

  return (
    <Layout sidebar={sidebar}>
      <div className={containerStyles[currentTheme.id]}>
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          {/* Particles Effect for Theme 3 */}
          {currentTheme.id === "theme3" && (
            <div className="particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    color: currentTheme.colors.accent,
                  }}
                />
              ))}
            </div>
          )}

          <h1
            className={`${
              currentTheme.id === "theme3" ? "text-5xl" : "text-4xl"
            } font-bold mb-4 transition-all duration-500 ${
              currentTheme.id === "theme1" ? "typewriter" : "animate-bounce-in"
            }`}
            style={{
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.primary,
            }}
          >
            Welcome to ThemeSwitcher
          </h1>

          <p
            className={`${
              currentTheme.id === "theme2" ? "text-xl" : "text-lg"
            } max-w-2xl mx-auto transition-all duration-500 animate-slide-in-left animate-delay-200`}
            style={{
              color: currentTheme.colors.secondary,
              fontFamily: currentTheme.fonts.secondary,
            }}
          >
            Experience the power of dynamic theming with our advanced React application. Switch between themes and watch
            the entire interface transform seamlessly.
          </p>

          <button
            className={`mt-6 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-glow hover-wiggle animate-bounce-in animate-delay-400 ${
              currentTheme.id === "theme3" ? "text-lg" : ""
            }`}
            style={{
              backgroundColor: currentTheme.colors.primary,
              color: currentTheme.colors.background,
            }}
          >
            Get Started
          </button>

          {/* Animated Background for Theme 2 */}
          {currentTheme.id === "theme2" && (
            <div className="absolute inset-0 -z-10 dark-gradient-bg opacity-20 rounded-2xl"></div>
          )}

          {/* Animated Background for Theme 3 */}
          {currentTheme.id === "theme3" && (
            <div className="absolute inset-0 -z-10 gradient-bg opacity-30 rounded-3xl"></div>
          )}
        </div>

        {/* Products Section */}
        <section>
          <h2
            className={`${
              currentTheme.id === "theme3" ? "text-3xl" : "text-2xl"
            } font-bold mb-8 text-center transition-all duration-500 animate-slide-in-right animate-delay-300`}
            style={{
              color: currentTheme.colors.text,
              fontFamily: currentTheme.fonts.primary,
            }}
          >
            Featured Products
          </h2>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="spinner" style={{ color: currentTheme.colors.primary }}></div>
            </div>
          )}

          {error && (
            <div
              className="text-center py-12 px-4 rounded-lg"
              style={{
                backgroundColor: currentTheme.colors.surface,
                color: currentTheme.colors.text,
              }}
            >
              <p>Error loading products: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className={`${gridStyles[currentTheme.id]} animate-slide-in-left animate-delay-500`}>
              {products.map((product, index) => (
                <div key={product.id} className={`animate-bounce-in animate-delay-${Math.min((index + 1) * 100, 500)}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}
