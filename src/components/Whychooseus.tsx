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
      <div className="overflow-hidden rounded-[32px] bg-[#F3F8F5] px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
        <div className="mb-9 flex flex-col gap-5 lg:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-[#BCE3C9] bg-white px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#25845A]">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-tight text-[#253D4E] lg:text-[40px]">
              A better way to stock your store.
            </h2>
          </div>
          <p className="max-w-lg font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[16px] leading-7 text-[#667781]">
            Less time sourcing, more confidence in every order. We bring the
            products, pricing and service independent retailers need to grow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group rounded-2xl border border-[#E7EEEA] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#BCE3C9] hover:shadow-[0_12px_28px_rgba(37,61,78,0.08)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{ backgroundColor: f.bg, color: f.color }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105"
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </span>
                  <span className="text-[12px] font-bold tracking-[0.08em] text-[#B7C5BD]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-[#253D4E]">{f.title}</h3>
                <p className="mt-2 font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[15px] leading-6 text-[#718078]">
                  {f.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}