import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Candy,
  Car,
  Cigarette,
  CupSoda,
  Gift,
  Popcorn,
  ShoppingBag,
  SprayCan,
  type LucideIcon,
} from "lucide-react";

type Category = {
  name: string;
  items: number; // replace with real counts from your database
  icon: LucideIcon;
  bg: string; // card background
  color: string; // icon color
  image?: string; // optional: product image from /public, replaces the icon
  href: string;
};

const categories: Category[] = [
  { name: "E-Cigs", items: 11, icon: Cigarette, bg: "#F2FCE4", color: "#5B8C2A", href: "#" },
  { name: "Soda & Beverages", items: 6, icon: CupSoda, bg: "#FFFCEB", color: "#D99A00", href: "#" },
  { name: "Confections", items: 6, icon: Candy, bg: "#ECFFEC", color: "#2E9E5B", href: "#" },
  { name: "Snacks", items: 10, icon: Popcorn, bg: "#FEEFEA", color: "#E2674A", href: "#" },
  { name: "Novelties", items: 11, icon: Gift, bg: "#FFF3EB", color: "#E0833A", href: "#" },
  { name: "Automotive", items: 6, icon: Car, bg: "#FFF3FF", color: "#B64FC0", href: "#" },
  { name: "Bags & Paper Products", items: 10, icon: ShoppingBag, bg: "#F2FCE4", color: "#5B8C2A", href: "#" },
  { name: "Cleaning Supplies", items: 10, icon: SprayCan, bg: "#FEEFEA", color: "#E2674A", href: "#" },
];

const quickLinks = ["E-Cigs", "Soda & Beverages", "Confections", "Snacks"];

export default function FeaturedCategories() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      {/* Heading row */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <h2 className="text-[24px] font-bold text-[#253D4E] lg:text-[28px]">
            Featured Categories
          </h2>
          <ul className="hidden items-center gap-4 md:flex">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-[13px] font-semibold text-[#253D4E] transition-colors hover:text-[#3BB77E]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous categories"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] transition-colors hover:bg-[#3BB77E] hover:text-white"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next categories"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] transition-colors hover:bg-[#3BB77E] hover:text-white"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scroller}
        className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.name}
              href={c.href}
              style={{ backgroundColor: c.bg }}
              className="group flex h-[150px] w-[140px] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-transparent px-2 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#3BB77E] hover:shadow-[0_8px_20px_rgba(37,61,78,0.08)] sm:w-[150px] lg:w-[calc((100%-7*1rem)/8)] lg:min-w-[140px]"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center">
                {c.image ? (
                  <img src={c.image} alt="" className="h-full w-full object-contain" />
                ) : (
                  <Icon size={44} strokeWidth={1.5} style={{ color: c.color }} />
                )}
              </div>
              <h3 className="mt-3 text-[14px] font-bold leading-tight text-[#253D4E]">
                {c.name}
              </h3>
              <p className="mt-1 text-[12px] text-[#7E7E7E]">{c.items} items</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}