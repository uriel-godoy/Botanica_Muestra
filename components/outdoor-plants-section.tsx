"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Scissors, Calendar, Bug } from "lucide-react"

const outdoorPlants = [
  {
    name: "Lavanda",
    image: "/purple-lavender-field-in-bloom.jpg",
    temperature: "15-25°C",
    pruning: "Después de floración",
    blooming: "Primavera-Verano",
    pests: "Resistente",
  },
  {
    name: "Rosal",
    image: "/beautiful-red-roses-in-garden.jpg",
    temperature: "10-25°C",
    pruning: "Invierno",
    blooming: "Primavera-Otoño",
    pests: "Pulgones, hongos",
  },
  {
    name: "Geranio",
    image: "/colorful-geranium-flowers-in-pots.jpg",
    temperature: "15-30°C",
    pruning: "Primavera",
    blooming: "Todo el año",
    pests: "Mosca blanca",
  },
  {
    name: "Hortensia",
    image: "/blue-hydrangea-flowers-blooming.jpg",
    temperature: "10-20°C",
    pruning: "Otoño",
    blooming: "Verano",
    pests: "Caracoles",
  },
]

const months = [
  { name: "Ene", plants: ["Rosal"] },
  { name: "Feb", plants: [] },
  { name: "Mar", plants: ["Geranio"] },
  { name: "Abr", plants: ["Lavanda", "Rosal"] },
  { name: "May", plants: ["Lavanda", "Rosal", "Geranio"] },
  { name: "Jun", plants: ["Lavanda", "Rosal", "Geranio", "Hortensia"] },
  { name: "Jul", plants: ["Lavanda", "Rosal", "Geranio", "Hortensia"] },
  { name: "Ago", plants: ["Rosal", "Geranio", "Hortensia"] },
  { name: "Sep", plants: ["Rosal", "Geranio"] },
  { name: "Oct", plants: ["Rosal", "Geranio"] },
  { name: "Nov", plants: ["Geranio"] },
  { name: "Dic", plants: ["Geranio"] },
]

export function OutdoorPlantsSection() {
  return (
    <section id="exterior" className="py-20" style={{ backgroundColor: "var(--outdoor-bg)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance text-secondary-foreground">
            Plantas de Exterior
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Dale color y vida a tu jardín con estas plantas resistentes
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outdoorPlants.map((plant, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={plant.image || "/placeholder.svg"}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-serif font-bold mb-4 text-secondary-foreground">{plant.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-secondary-foreground/80">
                    <Thermometer className="w-4 h-4 text-accent" />
                    <span>{plant.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/80">
                    <Scissors className="w-4 h-4 text-accent" />
                    <span>{plant.pruning}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/80">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{plant.blooming}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-foreground/80">
                    <Bug className="w-4 h-4 text-accent" />
                    <span>{plant.pests}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Flowering Calendar */}
        <Card className="glass-card p-8">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">Calendario de Floración</h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {months.map((month, index) => (
              <div key={index} className="text-center">
                <div className="text-xs font-semibold mb-2 text-muted-foreground">{month.name}</div>
                <div
                  className={`h-16 rounded-lg transition-all ${
                    month.plants.length > 0 ? "bg-gradient-to-br from-accent/80 to-accent" : "bg-muted"
                  }`}
                  title={month.plants.join(", ")}
                >
                  {month.plants.length > 0 && (
                    <div className="flex items-center justify-center h-full text-white font-bold">
                      {month.plants.length}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Número indica cantidad de plantas en floración ese mes
          </p>
        </Card>
      </div>
    </section>
  )
}
