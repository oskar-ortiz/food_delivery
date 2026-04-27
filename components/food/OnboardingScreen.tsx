import { ReferenceArt } from "@/components/ui/ReferenceArt";

type OnboardingScreenProps = {
  onGetStarted: () => void;
};

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <section className="app-gradient relative flex min-h-screen flex-col overflow-hidden px-6 pb-6 pt-0 md:min-h-[844px]">
      <div className="relative h-[560px]">
        <div className="absolute -left-16 top-14 h-[176px] w-[176px] rounded-full bg-white/50" />
        <div className="absolute left-[102px] top-[167px] h-[214px] w-[214px] rounded-full bg-white/55" />
        <div className="absolute right-[-18px] top-[108px] h-[138px] w-[138px] rounded-full bg-white/65" />
        <div className="absolute -left-8 top-[410px] h-[190px] w-[190px] rounded-full bg-[#f5ecec]/95" />
        <div className="absolute left-[163px] top-[500px] h-[136px] w-[136px] rounded-full bg-[#e9e2e2]/95" />
        <div className="absolute right-[-18px] top-[438px] h-[160px] w-[160px] rounded-full bg-[#f0ecec]/95" />

        <ReferenceArt
          src="/foods/sandwich-1.jpg"
          alt="Top left food"
          className="absolute -left-6 top-10 h-[160px] w-[160px]"
          imageClassName="object-cover object-center scale-[1.18]"
          rounded="rounded-full"
          priority
        />
        <ReferenceArt
          src="/foods/pizza-1.jpg"
          alt="Pizza"
          className="absolute left-[102px] top-[178px] h-[212px] w-[212px]"
          imageClassName="object-contain object-center scale-[1.08]"
          rounded="rounded-full"
          priority
        />
        <ReferenceArt
          src="/foods/biryani-1.jpg"
          alt="Top right food"
          className="absolute right-[-24px] top-[120px] h-[126px] w-[126px]"
          imageClassName="object-cover object-center scale-[1.16]"
          rounded="rounded-full"
          priority
        />
        <ReferenceArt
          src="/foods/burger-2.jpg"
          alt="Burger"
          className="absolute -left-2 top-[448px] h-[166px] w-[166px]"
          imageClassName="object-contain object-center scale-[1.46]"
          rounded="rounded-full"
          priority
        />
        <ReferenceArt
          src="/foods/sandwich-2.jpg"
          alt="Snack"
          className="absolute left-[165px] top-[518px] h-[130px] w-[130px]"
          imageClassName="object-contain object-center scale-[1.1]"
          rounded="rounded-full"
          priority
        />
        <ReferenceArt
          src="/foods/biryani-2.jpg"
          alt="Bottom right food"
          className="absolute right-[-16px] top-[448px] h-[150px] w-[150px]"
          imageClassName="object-cover object-center scale-[1.1]"
          rounded="rounded-full"
          priority
        />
      </div>

      <div className="mt-auto pb-5 text-center">
        <h1 className="text-soft-shadow text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-black">
          Test the Joy of
          <br />
          Delivery
        </h1>
        <p className="mx-auto mt-[18px] max-w-[330px] text-[16px] font-medium leading-[1.18] tracking-[-0.02em] text-[#7b7b7b]">
          Unlock a world of culinary delights,
          <br />
          right at your fingertips
        </p>
        <button
          type="button"
          onClick={onGetStarted}
          className="shadow-button mt-10 w-full rounded-[28px] bg-primary px-6 py-[18px] text-[22px] font-bold tracking-[-0.02em] text-white transition active:scale-[0.99]"
        >
          Get Started
        </button>
      </div>

      <div className="mx-auto mt-auto h-[5px] w-[156px] rounded-full bg-black/45" />
    </section>
  );
}
