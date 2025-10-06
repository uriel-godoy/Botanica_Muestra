"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Inicio", href: "#inicio", icon: "🏡" },
  { name: "Cuidado de Tierra", href: "#tierra", icon: "🌱" },
  { name: "Árboles", href: "#arboles", icon: "🌳" },
  { name: "Plantas de Interior", href: "#interior", icon: "🪴" },
  { name: "Plantas de Exterior", href: "#exterior", icon: "🌻" },
  { name: "Top Jardín", href: "#jardin", icon: "🌺" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">Botánica</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-primary/10"
              >
                <span className="text-xl transition-transform group-hover:scale-125">{item.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-primary/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-base font-medium text-foreground">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
