"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star } from "lucide-react"

const topPlants = [
  {
    rank: 1,
    name: "Monstera Deliciosa",
    category: "Interior",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reason: "La más popular por su belleza y facilidad de cuidado",
  },
  {
    rank: 2,
    name: "Lavanda",
    category: "Exterior",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reason: "Aromática, hermosa y atrae polinizadores",
  },
  {
    rank: 3,
    name: "Suculentas",
    category: "Interior/Exterior",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reason: "Perfectas para principiantes, bajo mantenimiento",
  },
  {
    rank: 4,
    name: "Rosal",
    category: "Exterior",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reason: "Clásico atemporal con flores espectaculares",
  },
  {
    rank: 5,
    name: "Pothos",
    category: "Interior",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reason: "Purifica el aire y crece en cualquier condición",
  },
  {
    rank: 6,
    name: "Jacarandá",
    category: "Árbol",
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reason: "Floración violeta espectacular en primavera",
  },
]

export function TopGardenSection() {
  return (
    <section id="jardin" className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--garden-bg)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-accent-foreground" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance text-accent-foreground">
              Top Jardín
            </h2>
            <Trophy className="w-10 h-10 text-accent-foreground" />
          </div>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Las plantas más populares y recomendadas por nuestra comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPlants.map((plant, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={plant.image || "/placeholder.svg"}
                  alt={plant.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                  #{plant.rank}
                </div>
                <Badge className="absolute top-4 right-4 bg-background text-foreground">{plant.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{plant.name}</h3>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: plant.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plant.reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
