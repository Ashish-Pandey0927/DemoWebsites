import {
  BadgePercent,
  Boxes,
  Headset,
  RefreshCw,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  text: string;
  icon: LucideIcon;
  bg: string;
  color: string;
};

const features: Feature[] = [
  {
    title: "Distributor Pricing",
    text: "Buy by the case and unlock tiered prices that protect your margins.",
    icon: BadgePercent,
    bg: "#F2FCE4",
    color: "#5B8C2A",
  },
  {
    title: "Low Minimum Orders",
    text: "Flexible MOQs so small and growing shops can stock without overbuying.",
    icon: Boxes,
    bg: "#FFFCEB",
    color: "#D99A00",
  },
  {
    title: "Fast, Reliable Delivery",
    text: "Orders packed quickly and delivered to your door on a schedule you can plan around.",
    icon: Truck,
    bg: "#FEEFEA",
    color: "#E2674A",
  },
  {
    title: "Genuine Products",
    text: "Sourced from manufacturers and authorized distributors, never grey stock.",
    icon: ShieldCheck,
    bg: "#ECFFEC",
    color: "#2E9E5B",
  },
  {
    title: "Easy Reordering",
    text: "Repeat your last order in one click or upload a list of SKUs in seconds.",
    icon: RefreshCw,
    bg: "#FFF3EB",
    color: "#E0833A",
  },
  {
    title: "Dedicated Support",
    text: "A real account manager who knows your store and picks up the phone.",
    icon: Headset,
    bg: "#FFF3FF",
    color: "#B64FC0",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-block rounded-full bg-[#DEF9EC] px-4 py-1.5 text-[13px] font-bold text-[#3BB77E]">
          Why Choose Us
        </span>
        <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#253D4E] lg:text-[38px]">
          Everything Your Store Needs from One Supplier
        </h2>
        <p className="mt-3 font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[16px] text-[#7E7E7E]">
          We make buying in bulk simple, so you can spend less time sourcing and more
          time selling.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              style={{ backgroundColor: f.bg }}
              className="group rounded-2xl border border-transparent p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#3BB77E] hover:shadow-[0_10px_24px_rgba(37,61,78,0.08)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon size={28} strokeWidth={1.6} style={{ color: f.color }} />
              </span>
              <h3 className="mt-5 text-[19px] font-bold text-[#253D4E]">{f.title}</h3>
              <p className="mt-2 font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[15px] leading-6 text-[#7E7E7E]">
                {f.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}