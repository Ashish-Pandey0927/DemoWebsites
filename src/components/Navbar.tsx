import { useState } from "react";
import {
  ChevronDown,
  Flame,
  Heart,
  LayoutGrid,
  Menu,
  Shuffle,
  ShoppingCart,
  User,
  ArrowRight,
  X,
} from "lucide-react";

type NavItem = { label: string; href: string; dropdown?: boolean };

const topLinks = [
  { label: "About Us", href: "#" },
  { label: "My Account", href: "#" },
  { label: "Wishlist", href: "#" },
  { label: "Order Tracking", href: "#" },
];

const mainLinks: NavItem[] = [
  { label: "Home", href: "#", dropdown: true },
  { label: "About", href: "#" },
  { label: "Shop", href: "#", dropdown: true },
  { label: "Vendors", href: "#", dropdown: true },
  { label: "Mega Menu", href: "#", dropdown: true },
  { label: "Blog", href: "#", dropdown: true },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Contact", href: "#" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 shrink-0">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <ellipse cx="22" cy="20" rx="11" ry="14" fill="#FDC040" />
        <ellipse cx="15" cy="22" rx="9" ry="12" fill="#3BB77E" transform="rotate(-18 15 22)" />
        <ellipse cx="29" cy="22" rx="8" ry="11" fill="#7FD1A4" transform="rotate(16 29 22)" />
        <path d="M22 8c-2 4-2 10 0 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="38" r="3" fill="#8B5CF6" />
        <circle cx="16" cy="40" r="3" fill="#3BB77E" />
        <circle cx="13" cy="35" r="2.5" fill="#A78BFA" />
      </svg>
      <div className="leading-none">
        <div className="text-[28px] font-bold text-[#253D4E] tracking-tight">
          Wholesale
        </div>
        <div className="mt-0.5 text-[8px] font-bold tracking-[0.12em] text-[#7E7E7E]">
          MART &amp; GROCERY
        </div>
      </div>
    </a>
  );
}

function HeaderAction({
  icon,
  label,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-1.5 text-[15px] text-[#7E7E7E] hover:text-[#3BB77E] transition-colors"
    >
      <span className="relative">
        {icon}
        {badge !== undefined && (
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#3BB77E] text-[10px] font-semibold text-white">
            {badge}
          </span>
        )}
      </span>
      <span className="hidden xl:inline">{label}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white font-[Quicksand,ui-sans-serif,system-ui,sans-serif] text-[#253D4E]">
      {/* Top bar */}
      <div className="hidden lg:block border-b border-gray-200">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2.5 text-[13px] text-[#7E7E7E]">
          <ul className="flex items-center">
            {topLinks.map((l, i) => (
              <li
                key={l.label}
                className={`px-3 ${i === 0 ? "pl-0" : ""} ${
                  i !== topLinks.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <a href={l.href} className="hover:text-[#3BB77E] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-semibold text-[#3BB77E]">
            Supper Value Deals - Save more with coupons
          </p>

          <div className="flex items-center gap-4">
            <span>
              Need help? Call Us:{" "}
              <strong className="font-semibold text-[#3BB77E]">+1800900122</strong>
            </span>
            <button className="flex items-center gap-1 hover:text-[#3BB77E]">
              English <ChevronDown size={13} />
            </button>
            <button className="flex items-center gap-1 hover:text-[#3BB77E]">
              INR <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Middle row: logo, search, actions */}
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-4 lg:gap-8 lg:px-6">
        <button
          className="lg:hidden text-[#253D4E]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <Logo />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="hidden md:flex h-[52px] flex-1 max-w-[560px] items-center overflow-hidden rounded-md border-2 border-[#BCE3C9] bg-white focus-within:border-[#3BB77E] transition-colors"
        >
          <input
            type="text"
            placeholder="Search for products..."
            className="h-full flex-1 bg-transparent px-4 text-[14px] text-[#253D4E] placeholder:text-[#7E7E7E] outline-none"
          />
          <button
            type="submit"
            className="m-1 h-[40px] rounded bg-[#3BB77E] px-6 text-[14px] font-semibold text-white hover:bg-[#29A56C] transition-colors"
          >
            Search
          </button>
        </form>

        <a
          href="#"
          className="hidden xl:flex h-[48px] items-center gap-2 rounded-md border border-[#BCE3C9] bg-white px-5 text-[14px] font-semibold text-[#3BB77E] shadow-sm hover:bg-[#3BB77E] hover:text-white transition-colors"
        >
          Become Vendor <ArrowRight size={16} />
        </a>

        <div className="ml-auto flex items-center gap-5 lg:gap-6">
          <div className="hidden lg:contents">
            <HeaderAction icon={<Shuffle size={24} strokeWidth={1.6} />} label="Compare" />
            <HeaderAction icon={<Heart size={24} strokeWidth={1.6} />} label="Wishlist" />
          </div>
          <HeaderAction icon={<ShoppingCart size={24} strokeWidth={1.6} />} label="Cart" badge={0} />
          <HeaderAction icon={<User size={24} strokeWidth={1.6} />} label="Account" />
        </div>
      </div>

      {/* Bottom row: categories + nav links */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="mx-auto flex max-w-[1400px] items-center gap-8 px-6 py-3">
          <button className="flex h-[48px] items-center gap-2 rounded-md bg-[#3BB77E] px-5 text-[14px] font-bold text-white hover:bg-[#29A56C] transition-colors">
            <LayoutGrid size={18} />
            Browse All Categories
            <ChevronDown size={15} />
          </button>

          <a
            href="#"
            className="flex items-center gap-1.5 text-[15px] font-bold text-[#253D4E] hover:text-[#3BB77E] transition-colors"
          >
            <Flame size={20} className="text-[#3BB77E]" />
            Hot Deals
          </a>

          <nav aria-label="Main">
            <ul className="flex items-center gap-7">
              {mainLinks.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 text-[15px] font-bold transition-colors hover:text-[#3BB77E] ${
                      i === 0 ? "text-[#3BB77E]" : "text-[#253D4E]"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={13} className="opacity-60" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 px-4 pb-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="my-3 flex h-[46px] items-center overflow-hidden rounded-md border-2 border-[#BCE3C9] md:hidden"
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="h-full flex-1 px-3 text-[14px] outline-none"
            />
            <button className="m-1 h-[34px] rounded bg-[#3BB77E] px-4 text-[13px] font-semibold text-white">
              Search
            </button>
          </form>

          <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-md bg-[#3BB77E] py-3 text-[14px] font-bold text-white">
            <LayoutGrid size={18} /> Browse All Categories
          </button>

          <ul className="divide-y divide-gray-100">
            <li>
              <a href="#" className="flex items-center gap-2 py-3 font-bold">
                <Flame size={18} className="text-[#3BB77E]" /> Hot Deals
              </a>
            </li>
            {mainLinks.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center justify-between py-3 font-bold ${
                    i === 0 ? "text-[#3BB77E]" : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={15} className="opacity-60" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}