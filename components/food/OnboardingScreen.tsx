import Image from "next/image";

type OnboardingScreenProps = {
  onGetStarted: () => void;
};

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f5e6e1] px-6 py-8">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[390px] flex-col items-center justify-center overflow-hidden">
        <div className="absolute left-10 top-10 z-0 h-40 w-40 rounded-full bg-white/40 blur-sm" />
        <div className="absolute bottom-10 right-10 z-0 h-52 w-52 rounded-full bg-white/30 blur-sm" />

        <div className="absolute left-6 top-16 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/featured/?dumplings,food"
            alt="Dumplings"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute right-6 top-20 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/featured/?biryani,food"
            alt="Biryani"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute bottom-24 left-8 z-10 h-28 w-28 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/featured/?burger,food"
            alt="Burger"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute bottom-28 right-8 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/featured/?fried-food,snack"
            alt="Snack"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="absolute left-2 top-1/3 z-10 h-24 w-24 overflow-hidden rounded-full shadow-md">
          <Image
            src="https://source.unsplash.com/featured/?soup,food"
            alt="Soup"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="relative z-20 h-40 w-40 overflow-hidden rounded-full shadow-lg">
          <Image
            src="https://source.unsplash.com/featured/?pizza,food"
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
