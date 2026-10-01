import { ArrowRight, CheckCircle2, Truck, Users, Warehouse } from "lucide-react";

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

/* Optional: pass a real photo, e.g. <AboutSection image="/warehouse.jpg" /> */
export default function AboutSection({ image }: { image?: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-6 font-[Quicksand,ui-sans-serif,system-ui,sans-serif]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative h-[340px] overflow-hidden rounded-[28px] bg-[#DEF9EC] sm:h-[420px]">
          {image ? (
            <img src={image} alt="Our warehouse" className="h-full w-full object-cover" />
          ) : (
            <>
              <span className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#CFEFDD]" />
              <span className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-[#CFEFDD]" />
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(59,183,126,0.2)]">
                <Warehouse size={78} strokeWidth={1.3} className="text-[#3BB77E]" />
              </div>
              <div className="absolute left-6 top-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEEFEA] text-[#E2674A]">
                  <Truck size={20} />
                </span>
                <div className="leading-tight">
                  <p className="text-[14px] font-bold text-[#253D4E]">Weekly Delivery</p>
                  <p className="text-[12px] text-[#7E7E7E]">Across your region</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF3FF] text-[#B64FC0]">
                  <Users size={20} />
                </span>
                <div className="leading-tight">
                  <p className="text-[14px] font-bold text-[#253D4E]">Trusted by Retailers</p>
                  <p className="text-[12px] text-[#7E7E7E]">Stores of every size</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Text */}
        <div>
          <span className="inline-block rounded-full bg-[#DEF9EC] px-4 py-1.5 text-[13px] font-bold text-[#3BB77E]">
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
              className="inline-flex h-[48px] items-center gap-2 rounded-md bg-[#3BB77E] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#29A56C]"
            >
              Learn More <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex h-[48px] items-center rounded-md border border-[#BCE3C9] px-6 text-[14px] font-bold text-[#3BB77E] transition-colors hover:bg-[#DEF9EC]"
            >
              Open a Wholesale Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}