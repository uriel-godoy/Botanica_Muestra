import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SoilCareSection } from "@/components/soil-care-section"
import { TreesSection } from "@/components/trees-section"
import { IndoorPlantsSection } from "@/components/indoor-plants-section"
import { OutdoorPlantsSection } from "@/components/outdoor-plants-section"
import { TopGardenSection } from "@/components/top-garden-section"
import { PlantOfTheDay } from "@/components/plant-of-the-day"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PlantOfTheDay />
        <SoilCareSection />
        <TreesSection />
        <IndoorPlantsSection />
        <OutdoorPlantsSection />
        <TopGardenSection />
      </main>
      <Footer />
    </div>
  )
}
