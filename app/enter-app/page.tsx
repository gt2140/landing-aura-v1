import Link from "next/link";
import { redirect } from "next/navigation";
import { getDashboardLoginHref, hasDashboardUrl } from "@/lib/dashboard-url";

const providers = [
  { label: "Mail", mark: "@" },
  { label: "GitHub", mark: "G" },
  { label: "WalletConnect", mark: "W" },
];

export default function EnterAppPage() {
  if (hasDashboardUrl()) {
    redirect(getDashboardLoginHref());
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f7f5] text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),transparent_34%),linear-gradient(180deg,#fafaf8_0%,#f3f3ef_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[-8%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),transparent_72%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[24%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(240,240,236,0.95),transparent_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="absolute left-4 top-4 rounded-full border border-black/8 bg-white/88 px-4 py-2 text-[11px] tracking-[0.22em] text-black/55 backdrop-blur-sm transition-all hover:border-black/16 hover:text-black sm:left-6 sm:top-6"
        >
          BACK
        </Link>

        <section className="w-full max-w-[22.25rem] rounded-[28px] border border-black/[0.05] bg-[#ffffff] px-7 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-8 sm:py-9">
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full border border-black/8 bg-[#fafaf8] px-4 py-1.5 text-[11px] tracking-[0.24em] text-black/38">
              ENTER APP
            </div>
            <h1 className="mt-6 text-[2rem] font-semibold leading-none tracking-[-0.055em] text-[#141311]">
              Agent Login
            </h1>
            <p className="mx-auto mt-3 max-w-[15rem] text-[0.96rem] leading-6 text-black/54">
              Enter your details to sign in to your Aura account.
            </p>
          </div>

          <form className="mt-8 space-y-3.5">
            <label className="block">
              <span className="sr-only">Email</span>
              <div className="flex h-12.5 items-center rounded-[12px] border border-black/8 bg-[#fcfcfa] px-4 transition-all focus-within:border-black/16">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-black/38"
                />
                <span className="ml-3 h-4 w-4 rounded-full border border-black/20" />
              </div>
            </label>

            <label className="block">
              <span className="sr-only">Passcode</span>
              <div className="flex h-12.5 items-center rounded-[12px] border border-black/8 bg-[#fcfcfa] px-4 transition-all focus-within:border-black/16">
                <input
                  type="password"
                  placeholder="Passcode"
                  className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-black/38"
                />
                <button type="button" className="ml-3 text-sm text-black/54 transition-colors hover:text-black">
                  Hide
                </button>
              </div>
            </label>

            <div className="pt-1 text-[13px] font-medium text-black/56">Having trouble signing in?</div>

            <button className="mt-2 flex h-12.5 w-full items-center justify-center rounded-[12px] bg-[#141311] text-[0.98rem] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black">
              Sign in
            </button>
          </form>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-black/8" />
            <span className="text-sm text-black/42">Or Sign in with</span>
            <div className="h-px flex-1 bg-black/8" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {providers.map((provider) => (
              <button
                key={provider.label}
                className="flex h-11 flex-col items-center justify-center rounded-[12px] border border-black/8 bg-[#fcfcfa] px-2 text-[#171513] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/16 hover:bg-white"
              >
                <span className="text-[0.95rem] font-semibold leading-none tracking-[-0.04em]">{provider.mark}</span>
                <span className="mt-1 text-[11px] leading-none text-black/72">{provider.label}</span>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-black/52">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-black underline underline-offset-4 transition-colors hover:text-black/72">
              Request Now
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
