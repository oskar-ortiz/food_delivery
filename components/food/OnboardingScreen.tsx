import Image from "next/image";

type OnboardingScreenProps = {
  onGetStarted: () => void;
};

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f5e6e1] px-6 py-8">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[390px] flex-col items-center justify-center overflow-hidden">
        <div className="absolute left-10 top-10 z-0 h-72 w-72 rounded-full bg-white/30" />
        <div className="absolute bottom-10 right-10 z-0 h-56 w-56 rounded-full bg-white/30" />

        <div className="absolute left-6 top-16 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/240x240/?dumplings,food"
            alt="Dumplings"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute right-6 top-20 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/240x240/?biryani,food"
            alt="Biryani"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute left-4 top-1/2 z-10 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/240x240/?burger,food"
            alt="Burger"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute bottom-32 left-6 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/240x240/?sandwich,food"
            alt="Sandwich"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute bottom-32 right-6 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/240x240/?fried-food,snack"
            alt="Fried food"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="relative z-20 h-40 w-40 overflow-hidden rounded-full shadow-lg">
          <Image
            src="https://source.unsplash.com/400x400/?pizza,food"
            alt="Featured pizza"
            fill
            priority
            className="object-cover rounded-full"
          />
        </div>

        <div className="z-30 mt-10 text-center">
          <h1 className="text-2xl font-bold leading-tight text-black">Test the Joy of Delivery</h1>
          <p className="mx-auto mt-2 max-w-xs text-sm text-gray-500">
            Unlock a world of culinary delights, right at your fingertips
          </p>
          <button
            type="button"
            onClick={onGetStarted}
            className="mt-6 rounded-full bg-red-500 px-8 py-3 text-white shadow-md transition hover:bg-red-600"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
