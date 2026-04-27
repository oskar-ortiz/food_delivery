import Image from "next/image";

type OnboardingScreenProps = {
  onGetStarted: () => void;
};

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-gradient-to-b from-[#e7c2b8] via-[#f1d6cf] to-[#fdf5f2] px-6 pb-10 pt-10">
      {/* Hero collage */}
      <div className="relative mx-auto mt-2 h-[460px] w-full max-w-[340px]">
        {/* Soft background halos */}
        <div className="absolute left-0 top-6 z-0 h-44 w-44 rounded-full bg-white/30" aria-hidden />
        <div className="absolute right-0 top-28 z-0 h-40 w-40 rounded-full bg-white/30" aria-hidden />
        <div className="absolute -bottom-2 left-1/2 z-0 h-44 w-44 -translate-x-1/2 rounded-full bg-white/30" aria-hidden />

        {/* MAIN center image */}
        <div className="absolute left-1/2 top-[78px] z-20 h-40 w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-white/60">
          <Image
            src="/foods/pizza-1.jpg"
            alt="Featured pizza"
            fill
            sizes="160px"
            priority
            className="object-cover"
          />
        </div>

        {/* Top-left — biryani-2 */}
        <div className="absolute left-0 top-0 z-10 h-24 w-24 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70">
          <Image
            src="/foods/biryani-2.jpg"
            alt="Bombay biryani"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        {/* Top-right — biryani-1 */}
        <div className="absolute right-0 top-12 z-10 h-24 w-24 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70">
          <Image
            src="/foods/biryani-1.jpg"
            alt="Hyderabadi biryani"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        {/* Mid-left — burger-1 */}
        <div className="absolute left-0 top-[244px] z-10 h-24 w-24 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70">
          <Image
            src="/foods/burger-1.jpg"
            alt="Veg burger"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        {/* Mid-right — pizza-2 */}
        <div className="absolute right-0 top-[268px] z-10 h-24 w-24 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70">
          <Image
            src="/foods/pizza-2.jpg"
            alt="Paneer pizza"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        {/* Bottom-center — sandwich-1 */}
        <div className="absolute bottom-0 left-1/2 z-10 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/70">
          <Image
            src="/foods/sandwich-1.jpg"
            alt="Potato sandwich"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Copy + CTA */}
      <div className="mt-10 flex flex-col items-center text-center">
        <h1 className="max-w-[260px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-black text-balance">
          Test the Joy of Delivery
        </h1>
        <p className="mt-3 max-w-[280px] text-[15px] leading-relaxed text-[#6b6b6b] text-pretty">
          Unlock a world of culinary delights, right at your fingertips
        </p>
        <button
          type="button"
          onClick={onGetStarted}
          className="shadow-button mt-7 w-full max-w-[320px] rounded-full bg-primary px-8 py-[18px] text-[20px] font-bold tracking-[-0.02em] text-white transition active:scale-[0.99]"
        >
          Get Started
        </button>
        <div className="mx-auto mt-6 h-[5px] w-[140px] rounded-full bg-black/40" aria-hidden />
      </div>
    </section>
  );
}
