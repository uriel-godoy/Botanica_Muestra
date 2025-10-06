"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function PlantOfTheDay() {
  return (
    <section id="planta-del-dia" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-balance">Planta del Día</h2>
          <Sparkles className="w-8 h-8 text-accent" />
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden glass-card">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img src="/beautiful-monstera-deliciosa-plant-with-large-leav.jpg" alt="Monstera Deliciosa" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-accent text-accent-foreground">Planta de Interior</Badge>
              <h3 className="text-3xl font-serif font-bold mb-2">Monstera Deliciosa</h3>
              <p className="text-sm text-muted-foreground italic mb-4">Costilla de Adán</p>
              <p className="text-base leading-relaxed text-foreground mb-6">
                Una planta tropical icónica conocida por sus hojas grandes y perforadas. Perfecta para interiores
                luminosos, purifica el aire y añade un toque selvático a cualquier espacio.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">💧 Riego Moderado</Badge>
                <Badge variant="outline">☀️ Luz Indirecta</Badge>
                <Badge variant="outline">🌿 Purificadora</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
