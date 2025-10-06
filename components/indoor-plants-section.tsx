"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sun, Droplets } from "lucide-react"

const filters = [
  { id: "all", label: "Todas", icon: "🌿" },
  { id: "low-light", label: "Poca Luz", icon: "🌙" },
  { id: "low-water", label: "Poco Riego", icon: "💧" },
  { id: "purifying", label: "Purificadoras", icon: "✨" },
]

const indoorPlants = [
  {
    name: "Sansevieria",
    badge: "Purificadora",
    image: "/sansevieria-snake-plant-in-modern-pot.jpg",
    light: "Sombra parcial",
    water: "Bajo riego",
    filters: ["low-light", "low-water", "purifying"],
    description: 'Conocida como "lengua de suegra", es prácticamente indestructible y purifica el aire.',
  },
  {
    name: "Pothos",
    badge: "Fácil Cuidado",
    image: "/pothos-golden-plant-with-trailing-vines.jpg",
    light: "Luz indirecta",
    water: "Riego moderado",
    filters: ["low-light", "purifying"],
    description: "Planta trepadora perfecta para principiantes, crece rápido y tolera descuidos.",
  },
  {
    name: "Ficus Lyrata",
    badge: "Decorativa",
    image: "/fiddle-leaf-fig-tree-in-white-pot.jpg",
    light: "Luz brillante",
    water: "Riego regular",
    filters: [],
    description: "El árbol de moda en decoración, con hojas grandes en forma de violín.",
  },
  {
    name: "Suculentas",
    badge: "Bajo Mantenimiento",
    image: "/succulent-variety.jpg",
    light: "Sol directo",
    water: "Muy bajo riego",
    filters: ["low-water"],
    description: "Perfectas para olvidadizos, almacenan agua en sus hojas carnosas.",
  },
  {
    name: "Helecho de Boston",
    badge: "Tropical",
    image: "/lush-boston-fern-with-delicate-fronds.jpg",
    light: "Luz indirecta",
    water: "Riego frecuente",
    filters: ["purifying"],
    description: "Elegante helecho que ama la humedad y purifica el aire eficazmente.",
  },
  {
    name: "Calathea",
    badge: "Exótica",
    image: "/calathea-plant-with-patterned-leaves.jpg",
    light: "Sombra parcial",
    water: "Riego moderado",
    filters: ["low-light"],
    description: "Hojas con patrones únicos que se mueven con la luz del día.",
  },
]

export function IndoorPlantsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPlants =
    activeFilter === "all" ? indoorPlants : indoorPlants.filter((plant) => plant.filters.includes(activeFilter))

  return (
    <section id="interior" className="py-20" style={{ backgroundColor: "var(--indoor-bg)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">Plantas de Interior</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforma tu hogar en un oasis verde con estas bellezas de interior
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="gap-2"
            >
              <span className="text-lg">{filter.icon}</span>
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Plants Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden glass-card transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={plant.image || "/placeholder.svg"}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{plant.badge}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-3">{plant.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{plant.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1">
                    <Sun className="w-3 h-3" />
                    {plant.light}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Droplets className="w-3 h-3" />
                    {plant.water}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
