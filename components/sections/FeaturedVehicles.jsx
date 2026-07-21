import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CarCard from "@/components/cards/CarCard";
import { vehicles } from "@/data/vehicles";

export default function FeaturedVehicles() {
  return (
    <section id="inventory" className="bg-obsidian py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Inventory"
            title="Featured Vehicles"
            description="A rotating selection of certified vehicles from our Lagos showroom, each backed by a full 128-point inspection."
          />
          <Button href="#contact" variant="secondary" className="hidden shrink-0 md:inline-flex">
            View Full Inventory
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, i) => (
            <CarCard key={vehicle.id} vehicle={vehicle} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button href="#contact" variant="secondary">
            View Full Inventory
          </Button>
        </div>
      </Container>
    </section>
  );
}
