import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 1000, suffix: "+", label: "Vehicles Sold" },
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

export default function Statistics() {
  return (
    <section className="bg-bone py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center md:text-left">
              <div className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tightest text-obsidian">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mx-auto mt-3 h-[3px] w-10 bg-anchor md:mx-0" />
              <div className="mt-3 font-body text-sm font-medium uppercase tracking-wide text-smoke">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
