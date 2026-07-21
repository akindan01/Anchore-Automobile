import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/sections/ContactForm";

const info = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 810 555 0192",
    href: "tel:+2348105550192",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@anchoreautomobiles.ng",
    href: "mailto:hello@anchoreautomobiles.ng",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Fagba, Lagos State, Nigeria",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9:00 AM – 7:00 PM",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-obsidian py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Visit the showroom or reach us directly"
          description="Our team is on hand in Victoria Island, Lagos — or ready to answer online, whichever you prefer."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((item) => {
                const Content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-surface p-6 transition-colors duration-300 hover:border-anchor/50">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-anchor/15 text-anchor">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel">
                        {item.label}
                      </p>
                      <p className="mt-1 font-body text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {Content}
                  </a>
                ) : (
                  <div key={item.label}>{Content}</div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-surface p-7 md:p-9 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
