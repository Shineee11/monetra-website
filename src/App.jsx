export default function App() {
  const painPoints = [
    "Posting → promoting → waiting",
    "No customer pipeline to fall back on",
    "Every month feels like starting from zero",
    "Revenue depends on luck, not structure",
  ];

  const services = [
    {
      title: "Operational Systems",
      description:
        "We build your custom backend—CRM pipelines, POS ledgers, and automated lead capture—so your business tracks every dollar and customer without the chaos.",
      accent: "from-[#ff5a4f] to-[#ff7d73]",
      hover: "hover:border-[#ff5a4f]/35",
    },
    {
      title: "Demand Generation",
      description:
        "We deploy targeted short-form content engines, micro-creator seeding, and hype campaigns to drive consistent eyeballs and foot traffic directly into your systems.",
      accent: "from-[#5b19d6] to-[#7a43e3]",
      hover: "hover:border-[#5b19d6]/35",
    },
    {
      title: "Revenue Structuring",
      description:
        "We connect your external marketing to your internal infrastructure, turning random walk-ins and messy DMs into trackable Lifetime Value (LTV).",
      accent: "from-[#ff5a4f] to-[#5b19d6]",
      hover: "hover:border-white/20",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "We break down where your brand is leaking attention, guests, and money.",
    },
    {
      number: "02",
      title: "Systemize",
      description:
        "We build the backend, messaging, and structure your brand should have had from the start.",
    },
    {
      number: "03",
      title: "Stabilize",
      description:
        "We make growth feel more controlled, more repeatable, and less dependent on luck.",
    },
  ];

  const outcomes = [
    "Stronger launch & promo cycles",
    "Cleaner customer & lead flow",
    "Less backend chaos",
    "More consistent brand execution",
    "Better conversion from attention to revenue",
    "A business that feels systemized, not improvised",
  ];

  const faqs = [
    {
      question: "Who is Monetra for?",
      answer:
        "Monetra is for retail, hospitality, and service-based businesses that already have a great product or aesthetic, but lack the digital structure to scale predictably.",
    },
    {
      question: "What do you actually help with?",
      answer:
        "Custom CRM & POS infrastructure, automated booking funnels, short-form video engines, and targeted launch campaigns.",
    },
    {
      question: "Is this for everyone?",
      answer:
        "No. If you’re okay with random posting, last-minute pushes, and hoping people show up, this is not for you.",
    },
    {
      question: "How do we start?",
      answer:
        "You start with the free growth audit. If there’s a fit, we map out what needs to be fixed and what the next move looks like.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#5b19d6] selection:text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,25,214,0.22),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(255,90,79,0.18),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a4f]/70 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-7 md:px-10 md:py-8">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" className="h-8 w-8 object-contain" alt="Monetra logo" />
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90 sm:text-base">
                Monetra
              </div>
            </div>
          </header>

          <div className="grid min-h-[calc(100svh-96px)] items-center gap-8 py-2 sm:py-4 lg:grid-cols-[1.08fr_0.92fr] lg:py-8">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                Operational Growth Agency
              </div>

              <h1 className="max-w-[12ch] text-[3.2rem] font-semibold leading-[1.1] tracking-[-0.05em] sm:max-w-none sm:text-6xl md:text-7xl">
                Stop hoping
                <span className="block text-white/50">people show up.</span>
                <span className="block bg-gradient-to-r from-[#ff5a4f] via-[#ff5a4f] to-[#5b19d6] bg-clip-text text-transparent">
                  Build a system that makes them.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-white/65 md:text-lg">
                Monetra helps retail, hospitality, and service-based businesses 
                turn scattered promotion, backend chaos, and inconsistent foot traffic 
                into structured, repeatable revenue.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff5a4f] to-[#5b19d6] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_10px_30px_rgba(91,25,214,0.28)] transition hover:scale-[1.03] hover:shadow-[0_14px_36px_rgba(91,25,214,0.35)] sm:min-w-[220px]"
                >
                  Get the Free Audit
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-[#ff5a4f]/35 hover:bg-white/10 sm:min-w-[220px]"
                >
                  See What We Fix
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.25em] text-white/45">
                <span>Reality check</span>
              </div>
              <div className="space-y-4">
                {painPoints.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 px-4 py-4 text-sm text-white/75 transition hover:-translate-y-0.5 hover:border-[#5b19d6]/35 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full ${
                          index % 2 === 0 ? 'bg-[#ff5a4f]' : 'bg-[#5b19d6]'
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-white/50">
                Posting is not a system. Promoting is not a strategy. Hoping is not a growth model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b19d6]/20 bg-[#5b19d6]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#c7b5ff]">
              Why brands stall
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Most brands do not have a content problem.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/65">
            <p>
              They have a structure problem. No pipeline. No operational logic. No reliable backend. No system keeping things moving when pressure hits.
            </p>
            <p>
              So every launch or sales cycle feels like starting over: post, promote, wait, and hope people show up.
            </p>
            <p className="text-white/82">
              Monetra exists to fix what is actually broken behind the brand.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b19d6]/20 bg-[#5b19d6]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#c7b5ff]">
              What we do
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              We don’t add more noise.
              <span className="block text-white/55">We build structure behind it.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 ${service.hover} shadow-[0_0_0_1px_rgba(255,255,255,0.03)]`}
              >
                <div className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${service.accent}`} />
                <div className="text-sm uppercase tracking-[0.24em] text-white/40">
                  {service.title}
                </div>
                <p className="mt-5 text-base leading-7 text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-[#ff5a4f]/20 bg-[#ff5a4f]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ffb1ab]">
              What that changes
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              The goal is simple.
              <span className="block text-white/55">Make growth feel less random.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-white/75 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? 'bg-[#ff5a4f]' : 'bg-[#5b19d6]'}`} />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/55">
              How it works
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              No fluff. Just structure.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className={`text-4xl font-semibold ${index === 0 ? 'text-[#ff5a4f]/70' : index === 1 ? 'text-[#5b19d6]/80' : 'text-white/30'}`}>
                  {step.number}
                </div>
                <div className="mt-4 text-xl font-medium">{step.title}</div>
                <p className="mt-3 leading-7 text-white/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-10">
  <div className="relative overflow-hidden mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10 shadow-[0_0_40px_rgba(66,14,153,0.15)] transition-colors hover:border-[#420e99]/40">
    
    {/* Subtle violet inner glow */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#420e99]/15 via-transparent to-transparent opacity-60"></div>

    <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <div className="mb-4 inline-flex items-center rounded-full border border-[#f54f41]/30 bg-[#f54f41]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#f54f41]">
          Built for physical & service brands
        </div>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Every month should not feel like you are starting from zero.
        </h2>
      </div>
      <div className="space-y-5 text-base leading-7 text-white/68">
        <p>
          If a slow foot-traffic week, a flat product launch, or one bad promo cycle can throw the entire business off, the issue is deeper than marketing.
        </p>
        <p>
          The issue is that there is nothing underneath holding the momentum together.
        </p>
        <p className="font-medium text-white/90">
          That is the gap Monetra is designed to solve.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="audit" className="relative border-b border-white/10 px-6 py-20 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(91,25,214,0.12),transparent_30%),radial-gradient(circle_at_20%_100%,rgba(255,90,79,0.10),transparent_26%)]" />
        <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl sm:px-8 sm:py-12">
          <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#ff5a4f]/20 bg-[#ff5a4f]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ffb1ab]">
            Free growth audit
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Find out what’s actually holding your brand back.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/65">
            This is not for everyone. Only brands serious about growth should apply.
          </p>
          <a
            href="https://forms.gle/2MBP3EVnXzjpnVvi9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff5a4f] to-[#5b19d6] px-8 py-3 text-center font-medium text-white shadow-[0_12px_32px_rgba(91,25,214,0.26)] transition hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(91,25,214,0.34)] sm:min-w-[260px]"
          >
            Apply for the Free Audit
          </a>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#5b19d6]/20 bg-[#5b19d6]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#c7b5ff]">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              What brands usually ask.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-lg font-medium">{faq.question}</div>
                <p className="mt-3 leading-7 text-white/65">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-icon.png" className="h-8 w-8 object-contain" alt="Monetra logo" />
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/80">
                Monetra
              </div>
            </div>
          </div>

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Monetra. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-white/60">
            <a
              href="https://www.instagram.com/monetra_agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#ff5a4f]"
            >
              Instagram
            </a>
            <a
              href="mailto:monetra-agency@monetraofficial.com?subject=Monetra Inquiry&body=Hi, I'm interested in working with Monetra."
              className="transition hover:text-[#5b19d6]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
