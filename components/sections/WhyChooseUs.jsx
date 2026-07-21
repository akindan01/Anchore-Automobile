import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/cards/FeatureCard";

const features = [
  {
    icon: "BadgeCheck",
    title: "Certified Vehicles",
    description:
      "Every vehicle carries verified history, documentation, and provenance before it ever reaches the showroom floor.",
  },
  {
    icon: "SearchCheck",
    title: "Inspection Guaranteed",
    description:
      "A 128-point inspection by certified technicians, with the full report handed to you at purchase.",
  },
  {
    icon: "Landmark",
    title: "Flexible Financing",
    description:
      "Payment structures built around your income and timeline, in partnership with leading Nigerian lenders.",
  },
  {
    icon: "Truck",
    title: "Nationwide Delivery",
    description:
      "From Lagos to Abuja, Port Harcourt, and beyond — your vehicle delivered safely to your door.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-obsidian py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Why Anchore"
          title="Built on trust, delivered with precision"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
