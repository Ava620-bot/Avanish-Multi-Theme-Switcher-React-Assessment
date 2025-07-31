"use client"

import type React from "react"

import { useTheme } from "@/contexts/ThemeContext"
import { Layout } from "@/components/Layout"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { currentTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const containerStyles = {
    theme1: "container mx-auto px-4 py-8",
    theme2: "px-8 py-12",
    theme3: "container mx-auto px-6 py-12",
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@themeswitcher.com",
      href: "mailto:hello@themeswitcher.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Tech Street, Silicon Valley, CA 94000",
      href: "#",
    },
  ]

  return (
    <Layout>
      <div className={containerStyles[currentTheme.id]}>
        <div className="max-w-6xl mx-auto">
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
              Get In Touch
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
              Have questions about our theme switcher? Want to collaborate on a project? We&apos;d love to hear from
              you!
            </p>
          </div>

          <div
            className={`grid ${
              currentTheme.layout === "sidebar" ? "lg:grid-cols-1 xl:grid-cols-2" : "lg:grid-cols-2"
            } gap-12`}
          >
            {/* Contact Information */}
            <div>
              <h2
                className={`${
                  currentTheme.id === "theme3" ? "text-3xl" : "text-2xl"
                } font-bold mb-8 transition-all duration-500`}
                style={{
                  color: currentTheme.colors.text,
                  fontFamily: currentTheme.fonts.primary,
                }}
              >
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center space-x-4 p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover-glow group animate-slide-in-left animate-delay-${(index + 1) * 100} ${
                      currentTheme.id === "theme3" ? "rounded-2xl" : ""
                    }`}
                    style={{
                      backgroundColor: currentTheme.colors.surface,
                      border: `1px solid ${currentTheme.colors.primary}20`,
                    }}
                  >
                    <info.icon
                      className={`w-8 h-8 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${currentTheme.id === "theme3" ? "w-10 h-10" : ""}`}
                      style={{ color: currentTheme.colors.primary }}
                    />

                    <div>
                      <h3
                        className="font-semibold mb-1 transition-colors duration-300 group-hover:opacity-80"
                        style={{
                          color: currentTheme.colors.text,
                          fontFamily: currentTheme.fonts.primary,
                        }}
                      >
                        {info.title}
                      </h3>
                      <p style={{ color: currentTheme.colors.secondary }}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className={`${
                  currentTheme.id === "theme3" ? "text-3xl" : "text-2xl"
                } font-bold mb-8 transition-all duration-500`}
                style={{
                  color: currentTheme.colors.text,
                  fontFamily: currentTheme.fonts.primary,
                }}
              >
                Send us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className={`p-8 rounded-lg animate-slide-in-right animate-delay-300 ${currentTheme.id === "theme3" ? "rounded-2xl" : ""}`}
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  border: `1px solid ${currentTheme.colors.primary}20`,
                }}
              >
                <div className="space-y-6">
                  {/* Form fields with staggered animations */}
                  <div className="animate-slide-in-right animate-delay-400">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 hover-glow ${
                        currentTheme.id === "theme3" ? "rounded-xl" : ""
                      }`}
                      style={{
                        backgroundColor: currentTheme.colors.background,
                        borderColor: currentTheme.colors.primary + "40",
                        color: currentTheme.colors.text,
                      }}
                    />
                  </div>

                  <div className="animate-slide-in-right animate-delay-500">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 hover-glow ${
                        currentTheme.id === "theme3" ? "rounded-xl" : ""
                      }`}
                      style={{
                        backgroundColor: currentTheme.colors.background,
                        borderColor: currentTheme.colors.primary + "40",
                        color: currentTheme.colors.text,
                      }}
                    />
                  </div>

                  <div className="animate-slide-in-right animate-delay-600">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none hover-glow ${
                        currentTheme.id === "theme3" ? "rounded-xl" : ""
                      }`}
                      style={{
                        backgroundColor: currentTheme.colors.background,
                        borderColor: currentTheme.colors.primary + "40",
                        color: currentTheme.colors.text,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 hover:transform hover:translateY(-2px) flex items-center justify-center space-x-2 hover-wiggle animate-bounce-in animate-delay-700 ${
                      currentTheme.id === "theme3" ? "rounded-xl text-lg" : ""
                    }`}
                    style={{
                      backgroundColor: currentTheme.colors.primary,
                      color: currentTheme.colors.background,
                    }}
                  >
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
