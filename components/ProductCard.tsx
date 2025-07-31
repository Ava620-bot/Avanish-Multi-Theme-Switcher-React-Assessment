"use client"

import type React from "react"
import Image from "next/image"
import { useTheme } from "@/contexts/ThemeContext"
import type { Product } from "@/hooks/useProducts"
import { Star, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme()

  const cardStyles = {
    theme1: "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md",
    theme2: "bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl",
    theme3: "bg-white border-2 border-pink-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1",
  }

  return (
    <div
      className={`${cardStyles[currentTheme.id]} transition-all duration-300 ease-in-out overflow-hidden hover-glow hover:transform hover:scale-105 group`}
      style={{ borderColor: currentTheme.colors.primary + "20" }}
    >
      <div className="aspect-square overflow-hidden relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundColor: currentTheme.colors.primary }}
        />
      </div>

      <div
        className={`p-${currentTheme.spacing === "compact" ? "3" : currentTheme.spacing === "spacious" ? "6" : "4"} relative`}
      >
        {/* Add floating icon for theme 3 */}
        {currentTheme.id === "theme3" && (
          <div className="absolute top-2 right-2 opacity-20">
            <Star className="w-8 h-8 animate-pulse" style={{ color: currentTheme.colors.accent }} />
          </div>
        )}

        <h3
          className={`font-semibold mb-2 line-clamp-2 transition-colors duration-300 group-hover:opacity-80 ${currentTheme.id === "theme3" ? "text-lg" : "text-base"}`}
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          {product.title}
        </h3>

        <p
          className="text-sm mb-3 line-clamp-2 transition-colors duration-300"
          style={{ color: currentTheme.colors.secondary }}
        >
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xl font-bold transition-transform duration-300 group-hover:scale-110"
            style={{ color: currentTheme.colors.primary }}
          >
            ${product.price}
          </span>

          <div className="flex items-center space-x-1">
            <Star
              className="w-4 h-4 fill-current transition-transform duration-300 group-hover:rotate-12"
              style={{ color: currentTheme.colors.accent }}
            />
            <span className="text-sm" style={{ color: currentTheme.colors.secondary }}>
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>

        <button
          className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:opacity-90 hover:transform hover:translateY(-1px) flex items-center justify-center space-x-2 hover-wiggle"
          style={{
            backgroundColor: currentTheme.colors.primary,
            color: currentTheme.colors.background,
          }}
        >
          <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}
