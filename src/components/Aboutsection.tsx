import { ArrowRight, CheckCircle2, Truck, Users } from "lucide-react";

const points = [
  "Direct supply from manufacturers and authorized distributors",
  "Case and carton pricing built for retail margins",
  "GST invoices and credit terms for verified businesses",
];

const stats = [
  { value: "500+", label: "Retail partners" },
  { value: "2,000+", label: "Products in stock" },
  { value: "48h", label: "Average delivery" },
];

export default function AboutSection({
  image = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
}: {
  image?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="group relative h-[340px] overflow-hidden rounded-[28px] bg-[#DEF9EC] shadow-[0_18px_45px_rgba(37,61,78,0.12)] sm:h-[420px]">
          <img src={image} alt="Wholesale warehouse stocked for retailer orders" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14281F]/55 via-transparent to-black/10" />
          <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg sm:left-7 sm:top-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEEFEA] text-[#E2674A]">
              <Truck size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-[14px] font-bold text-[#253D4E]">Weekly Delivery</p>
              <p className="text-[12px] text-[#7E7E7E]">Across your region</p>
            </div>
          </div>
          <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg sm:bottom-7 sm:right-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3FF] text-[#B64FC0]">
              <Users size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-[14px] font-bold text-[#253D4E]">Trusted by Retailers</p>
              <p className="text-[12px] text-[#7E7E7E]">Stores of every size</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block rounded-full border border-[#BCE3C9] bg-[#F1FAF4] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#25845A]">
            About Us
          </span>
          <h2 className="mt-4 text-[30px] font-bold leading-tight text-[#253D4E] lg:text-[40px]">
            Your Trusted Wholesale Partner for Retailers
          </h2>
          <p className="mt-4 font-[Lato,ui-sans-serif,system-ui,sans-serif] text-[16px] leading-7 text-[#7E7E7E]">
            We supply convenience stores, supermarkets and corner shops with the
            everyday products their customers ask for. From snacks and beverages to
            cleaning supplies and automotive items, you get one dependable source,
            fair prices and on-time delivery.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] font-semibold text-[#253D4E]">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#3BB77E]" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200 py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[26px] font-bold text-[#3BB77E] lg:text-[32px]">{s.value}</p>
                <p className="text-[13px] text-[#7E7E7E]">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#25845A] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#1F704D]"
            >
              Learn More <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex h-[48px] items-center rounded-full border border-[#BCE3C9] px-6 text-[14px] font-bold text-[#25845A] transition-colors hover:bg-[#F1FAF4]"
            >
              Open a Wholesale Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}