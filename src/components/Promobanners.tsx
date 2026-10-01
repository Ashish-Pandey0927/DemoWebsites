import { ArrowRight, Boxes, CupSoda, Popcorn, type LucideIcon } from "lucide-react";

type Banner = {
  title: string;
  bg: string;
  accent: string;
  icon: LucideIcon;
  image?: string; // optional: image from /public, replaces the icon art
  href: string;
};

const banners: Banner[] = [
  {
    title: "Bulk Snacks at Distributor Prices",
    bg: "#F4EBD9",
    accent: "#E9A23B",
    icon: Popcorn,
    href: "#",
  },
  {
    title: "Stock Your Cooler with Beverages",
    bg: "#F6E8E8",
    accent: "#E2678A",
    icon: CupSoda,
    href: "#",
  },
  {
    title: "Everyday Essentials by the Case",
    bg: "#E7EAF6",
    accent: "#5B6FD6",
    icon: Boxes,
    href: "#",
  },
];

export default function PromoBanners() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-2 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {banners.map((b) => {
          const Icon = b.icon;
          return (
            <a
              key={b.title}
              href={b.href}
              style={{ backgroundColor: b.bg }}
              className="group relative flex h-[170px] items-center overflow-hidden rounded-2xl px-8"
            >
              <div className="relative z-10 max-w-[55%]">
                <h3 className="text-[20px] font-bold leading-snug text-[#253D4E]">
                  {b.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded bg-[#3BB77E] px-3.5 py-2 text-[12px] font-bold text-white transition-colors group-hover:bg-[#29A56C]">
                  Shop Now <ArrowRight size={12} />
                </span>
              </div>

              {/* Art */}
              <div className="absolute inset-y-0 right-0 flex w-[45%] items-center justify-center">
                {b.image ? (
                  <img src={b.image} alt="" className="h-full w-full object-contain object-right" />
                ) : (
                  <div className="relative flex h-[130px] w-[130px] items-center justify-center">
                    <span
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{ backgroundColor: b.accent }}
                    />
                    <span
                      className="absolute inset-4 rounded-full opacity-25"
                      style={{ backgroundColor: b.accent }}
                    />
                    <Icon
                      size={64}
                      strokeWidth={1.4}
                      style={{ color: b.accent }}
                      className="relative transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}