import { useEffect, useState } from "react";

type Slide = {
  title: [string, string];
  subtitle: string;
  placeholder: string;
  button: string;
  image?: string; // put your product image in /public and pass e.g. "/hero-1.png"
};

const slides: Slide[] = [
  {
    title: ["Bulk Supplies for", "Growing Retailers"],
    subtitle: "Save up to 30% on your first wholesale order",
    placeholder: "Your business email",
    button: "Get Price List",
    image: undefined,
  },
  {
    title: ["Stock Smarter,", "Buy Wholesale"],
    subtitle: "Direct from source, low MOQs and weekly delivery to your store",
    placeholder: "Your business email",
    button: "Request Quote",
    image: undefined,
  },
];

/* Fallback artwork used until you pass a real product image */
function ProduceArt() {
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="520" height="420" fill="#EADFCF" />
      <path d="M180 0h220v70c0 0-30 40-110 40S180 70 180 0Z" fill="#D9CBB6" opacity=".7" />
      {/* cucumbers */}
      <ellipse cx="190" cy="120" rx="52" ry="17" fill="#2F5D34" transform="rotate(-8 190 120)" />
      <ellipse cx="330" cy="150" rx="52" ry="16" fill="#2F5D34" transform="rotate(14 330 150)" />
      <ellipse cx="400" cy="230" rx="50" ry="16" fill="#35703B" transform="rotate(10 400 230)" />
      <ellipse cx="300" cy="260" rx="50" ry="16" fill="#2F5D34" transform="rotate(14 300 260)" />
      {/* lemons */}
      <ellipse cx="320" cy="75" rx="42" ry="34" fill="#F7D548" />
      <ellipse cx="225" cy="205" rx="36" ry="30" fill="#F4D03F" />
      {/* corn */}
      <ellipse cx="420" cy="110" rx="34" ry="78" fill="#F2C84B" transform="rotate(-28 420 110)" />
      <ellipse cx="170" cy="260" rx="30" ry="95" fill="#F0C040" transform="rotate(-62 170 260)" />
      {/* orange + coconuts */}
      <circle cx="440" cy="230" r="44" fill="#F29A3B" />
      <circle cx="400" cy="340" r="48" fill="#7A4B2E" />
      <circle cx="490" cy="330" r="46" fill="#6B3F26" />
      {/* leaf */}
      <path d="M0 330c90-20 170 10 250 90H0Z" fill="#2E7D32" />
      <path d="M0 345c80 0 150 25 215 75" stroke="#A5D6A7" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send `email` to your backend / Supabase table
    console.log("Lead:", email);
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-4 lg:px-6 font-[Lato,ui-sans-serif,system-ui,sans-serif]">
      <div className="relative flex min-h-[340px] overflow-hidden rounded-[28px] bg-[#DEF9EC] lg:h-[400px]">
        {/* faint background pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8% 85%, transparent 0 60px, #CFEFDD 61px 62px, transparent 63px), radial-gradient(circle at 40% 12%, transparent 0 70px, #CFEFDD 71px 72px, transparent 73px), radial-gradient(circle at 25% 55%, transparent 0 44px, #CFEFDD 45px 46px, transparent 47px)",
          }}
        />

        {/* Text side */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:px-12 lg:w-[58%] lg:pl-20">
          <h1
            key={active}
            className="font-[Quicksand,ui-sans-serif,system-ui,sans-serif] text-[34px] font-bold leading-[1.15] text-[#253D4E] sm:text-[44px] lg:text-[56px]"
          >
            {slide.title[0]}
            <br />
            {slide.title[1]}
          </h1>

          <p className="mt-4 max-w-md text-[17px] text-[#7E7E7E] lg:mt-6 lg:text-[20px]">
            {slide.subtitle}
          </p>

          <form
            onSubmit={onSubmit}
            className="relative mt-7 flex h-[52px] w-full max-w-[460px] items-center rounded-full bg-white lg:mt-9"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={slide.placeholder}
              className="h-full flex-1 rounded-full bg-transparent pl-6 pr-3 text-[14px] text-[#253D4E] placeholder:text-[#7E7E7E] outline-none"
            />
            <button
              type="submit"
              className="h-full rounded-full bg-[#3BB77E] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#29A56C]"
            >
              {slide.button}
            </button>
          </form>
        </div>

        {/* Image side */}
        <div className="absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden rounded-l-[120px] lg:block">
          {slide.image ? (
            <img src={slide.image} alt="" className="h-full w-full object-cover" />
          ) : (
            <ProduceArt />
          )}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:left-[46%]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-3 w-3 rounded-full border transition-colors ${
                i === active
                  ? "border-[#3BB77E] bg-[#3BB77E]"
                  : "border-[#7E7E7E] bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}