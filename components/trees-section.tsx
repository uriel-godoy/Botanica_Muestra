"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, Ruler, MapPin, Droplets } from "lucide-react"

const trees = [
  {
    name: "Jacarandá",
    scientific: "Jacaranda mimosifolia",
    image: "/beautiful-purple-jacaranda-tree-in-bloom.jpg",
    origin: "América del Sur",
    height: "12-15 metros",
    care: "Requiere pleno sol y riego moderado. Florece en primavera con flores violetas espectaculares.",
    features: ["Flores violetas", "Caducifolio", "Ornamental"],
  },
  {
    name: "Olivo",
    scientific: "Olea europaea",
    image: "/ancient-olive-tree-with-silver-leaves.jpg",
    origin: "Mediterráneo",
    height: "8-12 metros",
    care: "Resistente a la sequía, prefiere suelos bien drenados. Produce aceitunas comestibles.",
    features: ["Perenne", "Frutal", "Longevo"],
  },
  {
    name: "Roble",
    scientific: "Quercus robur",
    image: "/majestic-oak-tree-with-thick-trunk.jpg",
    origin: "Europa",
    height: "20-40 metros",
    care: "Necesita espacio amplio y suelo profundo. Crece lentamente pero vive siglos.",
    features: ["Madera noble", "Caducifolio", "Majestuoso"],
  },
  {
    name: "Cerezo",
    scientific: "Prunus serrulata",
    image: "/cherry-blossom-tree-with-pink-flowers.jpg",
    origin: "Asia Oriental",
    height: "6-12 metros",
    care: "Florece en primavera con flores rosadas. Requiere frío invernal para florecer.",
    features: ["Flores rosadas", "Ornamental", "Caducifolio"],
  },
]

export function TreesSection() {
  const [selectedTree, setSelectedTree] = useState<(typeof trees)[0] | null>(null)

  return (
    <section id="arboles" className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--trees-bg)" }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img src="/watercolor-forest-background-with-trees.jpg" alt="Forest background" className="w-full h-full object-cover blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance text-primary-foreground">
            Árboles
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Gigantes verdes que dan vida y belleza a nuestro planeta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trees.map((tree, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedTree(tree)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tree.image || "/placeholder.svg"}
                  alt={tree.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{tree.name}</h3>
                  <p className="text-sm text-white/80 italic">{tree.scientific}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {tree.features.map((feature, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedTree.image || "/placeholder.svg"}
                alt={selectedTree.name}
                className="w-full h-64 object-cover"
              />
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 right-4"
                onClick={() => setSelectedTree(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <CardContent className="p-6">
              <h3 className="text-3xl font-serif font-bold mb-2">{selectedTree.name}</h3>
              <p className="text-muted-foreground italic mb-6">{selectedTree.scientific}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Origen</p>
                    <p className="text-muted-foreground">{selectedTree.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Altura Promedio</p>
                    <p className="text-muted-foreground">{selectedTree.height}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Cuidados</p>
                    <p className="text-muted-foreground">{selectedTree.care}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedTree.features.map((feature, i) => (
                  <Badge key={i} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>

              <Button className="w-full mt-6">Ver Árboles Similares</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
