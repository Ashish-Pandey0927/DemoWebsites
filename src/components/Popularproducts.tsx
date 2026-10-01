import { useMemo, useState } from "react";
import {
  Boxes,
  Candy,
  Car,
  Cigarette,
  CupSoda,
  Gift,
  Popcorn,
  ShoppingBag,
  ShoppingCart,
  SprayCan,
  Star,
  type LucideIcon,
} from "lucide-react";

const CURRENCY = "₹";

type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  priceTo?: number; // set for items with several options, shows a range
  oldPrice?: number;
  rating: number; // 0 to 5
  reviews: number;
  moq: number; // minimum order quantity
  badge?: { label: string; color: string };
  tag?: { label: string; color: string }; // top-right tag, e.g. New
  outOfStock?: boolean;
  image?: string; // optional product image from /public
};

const GREEN = "#3BB77E";
const BLUE = "#67BCEE";
const RED = "#F74B81";
const AMBER = "#FDC040";
const NAVY = "#2C7BB6";

const categoryIcons: Record<string, LucideIcon> = {
  "E-Cigs": Cigarette,
  "Soda & Beverages": CupSoda,
  Confections: Candy,
  Snacks: Popcorn,
  Novelties: Gift,
  Automotive: Car,
  "Bags & Paper Products": ShoppingBag,
  "Cleaning Supplies": SprayCan,
};

const tabs = ["All", "E-Cigs", "Soda & Beverages", "Confections", "Snacks"];

/* Sample data. Replace with rows from your Supabase `products` table. */
const products: Product[] = [
  { id: 1, name: "Assorted Potato Chips, Case of 24", category: "Snacks", brand: "CrunchCo", price: 1285, oldPrice: 1480, rating: 2, reviews: 1, moq: 12, badge: { label: "13%", color: GREEN } },
  { id: 2, name: "Cola Soda 330ml, Multi-Pack Options", category: "Soda & Beverages", brand: "FizzPop", price: 920, priceTo: 4890, rating: 5, reviews: 3, moq: 6, badge: { label: "66%", color: BLUE } },
  { id: 3, name: "Chocolate Truffle Counter Display Box", category: "Confections", brand: "SweetCraft", price: 1950, oldPrice: 2150, rating: 4, reviews: 1, moq: 10, badge: { label: "8%", color: RED }, tag: { label: "New", color: GREEN } },
  { id: 4, name: "Disposable Vape Pods, Retail Pack", category: "E-Cigs", brand: "VaporLine", price: 715, oldPrice: 760, rating: 0, reviews: 0, moq: 20, badge: { label: "Out of Stock", color: GREEN }, outOfStock: true },
  { id: 5, name: "Windproof Lighter Display Set of 12", category: "Novelties", brand: "FlameKing", price: 945, oldPrice: 1030, rating: 5, reviews: 1, moq: 5, badge: { label: "8%", color: GREEN } },
  { id: 6, name: "Engine Oil 5W-30, 1L Case of 12", category: "Automotive", brand: "AutoPro", price: 3240, oldPrice: 3500, rating: 4, reviews: 2, moq: 2, badge: { label: "2%", color: GREEN } },
  { id: 7, name: "Kraft Paper Bags, Pack of 500", category: "Bags & Paper Products", brand: "PackWell", price: 1180, oldPrice: 1290, rating: 5, reviews: 4, moq: 4, badge: { label: "8%", color: "#C69A1A" } },
  { id: 8, name: "Multi-Surface Cleaner 1L, Case of 12", category: "Cleaning Supplies", brand: "SparkClean", price: 1090, oldPrice: 1150, rating: 3, reviews: 2, moq: 6, badge: { label: "6%", color: GREEN } },
  { id: 9, name: "Energy Drink 250ml, Tray of 24", category: "Soda & Beverages", brand: "VoltUp", price: 1760, oldPrice: 1840, rating: 4, reviews: 5, moq: 3, badge: { label: "4%", color: BLUE } },
  { id: 10, name: "Gummy Candy Bulk Bag, 5kg", category: "Confections", brand: "SweetCraft", price: 1340, oldPrice: 1390, rating: 5, reviews: 6, moq: 4, badge: { label: "3%", color: NAVY } },
];

const fmt = (n: number) => `${CURRENCY}${n.toLocaleString("en-IN")}`;

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          strokeWidth={1.5}
          className={i < value ? "fill-[#FDC040] text-[#FDC040]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  const Icon = categoryIcons[p.category] ?? Boxes;
  const isRange = p.priceTo !== undefined;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ECECEC] bg-white p-4 transition-all duration-200 hover:border-[#BCE3C9] hover:shadow-[0_10px_24px_rgba(37,61,78,0.08)]">
      {p.badge && (
        <span
          style={{ backgroundColor: p.badge.color }}
          className="absolute left-0 top-0 rounded-br-2xl rounded-tl-2xl px-3.5 py-1.5 text-[11px] font-bold text-white"
        >
          {p.badge.label}
        </span>
      )}
      {p.tag && (
        <span
          style={{ backgroundColor: p.tag.color }}
          className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl px-3.5 py-1.5 text-[11px] font-bold text-white"
        >
          {p.tag.label}
        </span>
      )}

      {/* Image */}
      <a href="#" className="flex h-[160px] items-center justify-center">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#F2FCE4] transition-transform duration-300 group-hover:scale-105">
            <Icon size={52} strokeWidth={1.4} className="text-[#3BB77E]" />
          </div>
        )}
      </a>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between text-[12px] text-[#ADADAD]">
        <span>{p.category}</span>
        <span className="font-semibold text-[#7E7E7E]">MOQ {p.moq}</span>
      </div>

      <h3 className="mt-2 line-clamp-2 min-h-[40px] text-[14px] font-bold leading-5 text-[#253D4E] transition-colors group-hover:text-[#3BB77E]">
        {p.name}
      </h3>

      <div className="mt-2 flex items-center gap-2">
        <Stars value={p.rating} />
        <span className="text-[11px] text-[#ADADAD]">{p.reviews}</span>
      </div>

      <p className="mt-2 text-[12px] text-[#7E7E7E]">
        By <a href="#" className="text-[#3BB77E] hover:underline">{p.brand}</a>
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[16px] font-bold text-[#3BB77E]">
            {fmt(p.price)}
            {isRange && ` - ${fmt(p.priceTo!)}`}
          </span>
          {p.oldPrice && !isRange && (
            <span className="text-[12px] font-semibold text-[#ADADAD] line-through">
              {fmt(p.oldPrice)}
            </span>
          )}
        </div>

        <button
          disabled={p.outOfStock}
          aria-label={isRange ? "Select options" : "Add to cart"}
          className="flex shrink-0 items-center gap-1.5 rounded bg-[#DEF9EC] px-3 py-2 text-[13px] font-bold text-[#3BB77E] transition-colors hover:bg-[#3BB77E] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#DEF9EC] disabled:hover:text-[#3BB77E]"
        >
          <ShoppingCart size={14} />
          {!isRange && "Add"}
        </button>
      </div>
    </article>
  );
}

export default function PopularProducts() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-[24px] font-bold text-[#253D4E] lg:text-[28px]">
          Popular Products
        </h2>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {tabs.map((t) => (
            <li key={t}>
              <button
                onClick={() => setActive(t)}
                className={`text-[13px] font-bold transition-colors hover:text-[#3BB77E] ${
                  active === t ? "text-[#3BB77E]" : "text-[#253D4E]"
                }`}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-[#7E7E7E]">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}