"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("planta-del-dia")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lush-botanical-garden-with-diverse-plants-and-flow.jpg" alt="Jardín botánico" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 text-balance">
          Explora el Mundo de las Plantas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Una experiencia educativa y visual sobre el fascinante reino vegetal. Descubre cuidados, especies y secretos
          de la naturaleza.
        </p>
        <Button size="lg" onClick={scrollToContent} className="group gap-2 text-base px-8 py-6">
          Comenzar a Explorar
          <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
