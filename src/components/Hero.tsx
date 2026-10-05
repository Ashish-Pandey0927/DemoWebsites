import { useEffect, useState } from "react";

type Slide = {
  title: [string, string];
  subtitle: string;
  placeholder: string;
  button: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: ["Bulk Supplies for", "Growing Retailers"],
    subtitle: "Save up to 30% on your first wholesale order",
    placeholder: "Your business email",
    button: "Get Price List",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: ["Stock Smarter,", "Buy Wholesale"],
    subtitle: "Direct from source, low MOQs and weekly delivery to your store",
    placeholder: "Your business email",
    button: "Request Quote",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1400&q=85",
  },
];

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
      <div className="relative flex min-h-[380px] overflow-hidden rounded-[28px] bg-[#EAF7EF] shadow-[0_18px_55px_rgba(37,61,78,0.08)] lg:h-[440px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8% 85%, transparent 0 60px, #CFEFDD 61px 62px, transparent 63px), radial-gradient(circle at 40% 12%, transparent 0 70px, #CFEFDD 71px 72px, transparent 73px)",
          }}
        />

        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-8 sm:px-12 lg:w-[58%] lg:pl-20">
          <span className="mb-5 w-fit rounded-full border border-[#BCE3C9] bg-white/70 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#25845A]">
            Wholesale made simple
          </span>
          <h1
            key={active}
            className="font-[Quicksand,ui-sans-serif,system-ui,sans-serif] text-[36px] font-bold leading-[1.12] tracking-tight text-[#253D4E] sm:text-[44px] lg:text-[52px]"
          >
            {slide.title[0]}
            <br />
            {slide.title[1]}
          </h1>

          <p className="mt-4 max-w-md text-[16px] leading-7 text-[#667781] lg:mt-6 lg:text-[18px]">
            {slide.subtitle}
          </p>

          <form
            onSubmit={onSubmit}
            className="relative mt-7 flex h-[56px] w-full max-w-[460px] items-center rounded-full border border-white bg-white p-1 shadow-[0_8px_24px_rgba(37,61,78,0.1)] lg:mt-9"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={slide.placeholder}
              className="h-full min-w-0 flex-1 rounded-full bg-transparent pl-5 pr-3 text-[14px] text-[#253D4E] placeholder:text-[#7E7E7E] outline-none"
            />
            <button
              type="submit"
              className="h-full rounded-full bg-[#25845A] px-5 text-[13px] font-bold text-white transition-colors hover:bg-[#1F704D] sm:px-7 sm:text-[14px]"
            >
              {slide.button}
            </button>
          </form>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden rounded-l-[120px] lg:block">
          <img src={slide.image} alt="Fresh grocery products ready for wholesale" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAF7EF]/30 via-transparent to-black/10" />
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:left-[46%]">
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