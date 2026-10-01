import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const company = ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Become a Buyer"];
const account = ["Sign In", "View Cart", "My Wishlist", "Track My Order", "Quick Order", "Help Center"];
const categories = [
  "E-Cigs",
  "Soda & Beverages",
  "Confections",
  "Snacks",
  "Novelties",
  "Automotive",
  "Bags & Paper Products",
  "Cleaning Supplies",
];

const contact = [
  { icon: MapPin, label: "Address", value: "Your street, City, State, India" },
  { icon: Phone, label: "Call Us", value: "+91 00000 00000" },
  { icon: Mail, label: "Email", value: "sales@wholesale.com" },
  { icon: Clock, label: "Hours", value: "Mon to Sat, 9:00 AM to 7:00 PM" },
];

/* Simple stroke icons so there is no dependency on brand icon packs */
const socials = [
  {
    label: "Facebook",
    path: <path d="M14 8h2V4h-2.5A4.5 4.5 0 0 0 9 8.5V11H6.5v4H9v6h4v-6h2.5l.5-4H13V8.7c0-.4.3-.7.7-.7H14Z" />,
  },
  {
    label: "Instagram",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" />
      </>
    ),
  },
  {
    label: "X",
    path: <path d="M4 4l16 16M20 4L4 20" />,
  },
  {
    label: "YouTube",
    path: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" />
      </>
    ),
  },
];

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-5 text-[18px] font-bold text-[#253D4E]">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[15px] text-[#253D4E] transition-colors hover:text-[#3BB77E]"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save `email` to your backend / Supabase table
    console.log("Newsletter:", email);
    setEmail("");
  };

  return (
    <footer className="mt-8 bg-white font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      {/* Newsletter strip */}
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[#DEF9EC] px-6 py-10 lg:px-16 lg:py-12">
          <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#CFEFDD]" />
          <span className="pointer-events-none absolute -bottom-16 right-40 hidden h-44 w-44 rounded-full bg-[#CFEFDD] lg:block" />
          <div className="relative grid items-center gap-6 lg:grid-cols-2">
            <h3 className="text-[26px] font-bold leading-tight text-[#253D4E] lg:text-[34px]">
              Get wholesale deals and new stock alerts in your inbox
            </h3>
            <form
              onSubmit={onSubmit}
              className="flex h-[54px] w-full max-w-[520px] items-center rounded-full bg-white lg:justify-self-end"
            >
              <Send size={18} className="ml-5 shrink-0 text-[#7E7E7E]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                className="h-full min-w-0 flex-1 bg-transparent px-3 text-[14px] text-[#253D4E] placeholder:text-[#7E7E7E] outline-none"
              />
              <button
                type="submit"
                className="h-full rounded-full bg-[#3BB77E] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#29A56C]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:px-6">
        <div>
          <a href="#" className="inline-block leading-none">
            <span className="text-[28px] font-bold tracking-tight text-[#253D4E]">Wholesale</span>
            <span className="mt-1 block text-[8px] font-bold tracking-[0.12em] text-[#7E7E7E]">
              MART &amp; GROCERY
            </span>
          </a>
          <p className="mt-4 max-w-sm font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[15px] leading-6 text-[#7E7E7E]">
            Bulk supplies for retailers. One reliable source for snacks, beverages,
            confections and everyday essentials.
          </p>
          <ul className="mt-6 space-y-3">
            {contact.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3 text-[14px] text-[#253D4E]">
                <Icon size={18} className="mt-0.5 shrink-0 text-[#3BB77E]" />
                <span>
                  <strong className="font-bold">{label}: </strong>
                  <span className="font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[#7E7E7E]">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn title="Company" links={company} />
        <LinkColumn title="My Account" links={account} />
        <LinkColumn title="Categories" links={categories} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 text-[14px] text-[#7E7E7E] md:flex-row lg:px-6">
          <p className="font-[Lato,ui-sans-serif,system-ui,sans-serif]">
            &copy; {new Date().getFullYear()} Wholesale. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#253D4E]">Follow Us</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] transition-colors hover:bg-[#3BB77E] hover:text-white"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}