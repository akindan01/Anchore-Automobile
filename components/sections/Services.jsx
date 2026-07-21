import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-obsidian py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Everything your next vehicle needs, under one roof"
          description="From first inspection to the day you drive away — and every service call after."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
