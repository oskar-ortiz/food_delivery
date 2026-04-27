type PhoneFrameProps = {
  children: React.ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#f4d2cd_0%,_#f7efed_40%,_#f8f2f0_100%)] px-0 py-0 md:px-6 md:py-8">
      <div className="relative w-full overflow-hidden bg-white md:max-w-[390px] md:rounded-[34px] md:shadow-[0_28px_80px_rgba(81,36,32,0.18)]">
        {children}
      </div>
    </main>
  );
}
