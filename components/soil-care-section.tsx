"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Droplets, FlaskConical, Leaf } from "lucide-react"

const soilTopics = [
  {
    icon: Sprout,
    title: "Compost Orgánico",
    description: "Aprende a crear tu propio compost casero para nutrir tus plantas de forma natural y sostenible.",
    tips: ["Mezcla verde y marrón", "Mantén húmedo", "Voltea regularmente"],
  },
  {
    icon: Leaf,
    title: "Tipos de Abono",
    description: "Descubre los diferentes tipos de fertilizantes y cuál es el mejor para cada tipo de planta.",
    tips: ["Orgánico vs químico", "NPK equilibrado", "Frecuencia adecuada"],
  },
  {
    icon: Droplets,
    title: "Humedad Ideal",
    description: "La clave para un suelo saludable está en mantener el nivel de humedad perfecto.",
    tips: ["Test del dedo", "Drenaje correcto", "Riego profundo"],
  },
  {
    icon: FlaskConical,
    title: "pH del Suelo",
    description: "Entiende la acidez de tu tierra y cómo ajustarla para optimizar el crecimiento.",
    tips: ["Medir con kit", "Ajustar gradualmente", "Plantas acidófilas"],
  },
]

export function SoilCareSection() {
  return (
    <section id="tierra" className="py-20 soil-texture" style={{ backgroundColor: "var(--soil-bg)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance text-secondary-foreground">
            Cuidado de Tierra
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            La base de toda planta saludable comienza con un suelo bien cuidado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {soilTopics.map((topic, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl glass-card"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                  <topic.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl font-serif text-secondary-foreground">{topic.title}</CardTitle>
                <CardDescription className="text-secondary-foreground/70">{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {topic.tips.map((tip, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-accent font-medium">Haz clic para aprender más →</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
