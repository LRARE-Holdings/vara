export default function Home() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16">
        {/* Background grid */}
        <div className="grid-pattern absolute inset-0" />

        {/* Radial glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[120px]" />

        {/* Decorative orbs */}
        <div className="absolute right-[15%] top-32 h-72 w-72 rounded-full bg-emerald-500/[0.03] blur-[80px] animate-float" />
        <div className="absolute left-[10%] top-64 h-48 w-48 rounded-full bg-emerald-500/[0.02] blur-[60px] animate-float delay-300" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Status badge */}
            <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/80 px-4 py-1.5 backdrop-blur-sm">
              <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs font-medium tracking-wide text-navy-200">
                MONITORING 5 UK REGULATORY BODIES
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Regulatory intelligence</span>
              <br />
              <span className="text-gradient">that moves as fast as policy</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-300 sm:text-xl">
              Vara monitors the FCA, ICO, HMRC, SRA, and CQC — interprets what changed,
              and tells you exactly what to do. The compliance intelligence layer
              for regulated UK firms.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group flex h-12 items-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-semibold text-navy-950 transition-all hover:bg-emerald-400 active:scale-[0.98]"
              >
                Start free trial
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="flex h-12 items-center gap-2 rounded-lg border border-navy-600 px-6 text-sm font-semibold text-navy-200 transition-all hover:border-navy-400 hover:text-white"
              >
                See how it works
              </a>
            </div>

            {/* Trust line */}
            <p className="animate-fade-in delay-500 mt-12 font-mono text-xs tracking-wide text-navy-500">
              TRUSTED BY 200+ INDEPENDENT FINANCIAL ADVISERS
            </p>
          </div>

          {/* ── Product Preview ── */}
          <div className="animate-fade-in-up delay-600 relative mx-auto mt-16 max-w-5xl">
            <div className="glow-emerald rounded-2xl border border-navy-700/50 bg-navy-900/60 p-1.5 backdrop-blur-sm">
              <div className="rounded-xl border border-navy-800 bg-navy-950 p-6 sm:p-8">
                {/* Mock dashboard top bar */}
                <div className="mb-6 flex items-center justify-between border-b border-navy-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                    </div>
                    <span className="font-mono text-xs text-navy-500">vara.app/dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs text-emerald-400">Live</span>
                  </div>
                </div>

                {/* Mock content grid */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {/* Alert card */}
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400">NEW ALERT</span>
                      <span className="font-mono text-[10px] text-navy-400">2m ago</span>
                    </div>
                    <p className="text-sm font-medium text-white">FCA PS24/7 — Consumer Duty Update</p>
                    <p className="mt-1 text-xs text-navy-400">New guidance on fair value assessments for IFAs...</p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-400">FCA</span>
                      <span className="rounded bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-amber-400">HIGH</span>
                    </div>
                  </div>

                  {/* Status card */}
                  <div className="rounded-lg border border-navy-700/50 bg-navy-800/30 p-4">
                    <span className="font-mono text-[10px] font-medium tracking-wider text-navy-400">COMPLIANCE SCORE</span>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">94</span>
                      <span className="mb-1 text-sm text-emerald-400">+3</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-navy-800">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
                    </div>
                    <p className="mt-2 text-xs text-navy-400">2 actions remaining this quarter</p>
                  </div>

                  {/* Timeline card */}
                  <div className="rounded-lg border border-navy-700/50 bg-navy-800/30 p-4">
                    <span className="font-mono text-[10px] font-medium tracking-wider text-navy-400">UPCOMING DEADLINES</span>
                    <div className="mt-3 space-y-3">
                      {[
                        { date: 'Mar 31', label: 'FCA Annual Return', status: 'on-track' },
                        { date: 'Apr 15', label: 'ICO Registration', status: 'on-track' },
                        { date: 'Apr 30', label: 'HMRC AML Report', status: 'review' },
                      ].map((item) => (
                        <div key={item.date} className="flex items-center gap-3">
                          <span className={`h-1.5 w-1.5 rounded-full ${item.status === 'on-track' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-white">{item.label}</p>
                          </div>
                          <span className="font-mono text-[10px] text-navy-400">{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          REGULATORS MONITORED
      ═══════════════════════════════════════════ */}
      <section className="relative border-y border-navy-800/50 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="mb-8 text-center font-mono text-xs font-medium tracking-widest text-navy-500">
            CONTINUOUS MONITORING ACROSS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { name: 'FCA', full: 'Financial Conduct Authority' },
              { name: 'ICO', full: 'Information Commissioner\'s Office' },
              { name: 'HMRC', full: 'HM Revenue & Customs' },
              { name: 'SRA', full: 'Solicitors Regulation Authority' },
              { name: 'CQC', full: 'Care Quality Commission' },
            ].map((reg) => (
              <div key={reg.name} className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-800/50 font-mono text-xs font-bold text-navy-300 transition-all group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                  {reg.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-200 transition-colors group-hover:text-white">{reg.name}</p>
                  <p className="hidden text-xs text-navy-500 sm:block">{reg.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-medium tracking-widest text-emerald-400">HOW IT WORKS</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From regulatory change to<br />
              <span className="text-navy-300">compliant action in minutes</span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-[52px] hidden h-px lg:block">
              <div className="glow-line mx-auto w-2/3 opacity-30" />
            </div>

            {[
              {
                step: '01',
                title: 'Monitor',
                description: 'Vara continuously watches FCA, ICO, HMRC, SRA, and CQC publications, consultations, and policy statements around the clock.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Interpret',
                description: 'AI analyses each change for your specific regulatory context — what it means, who it affects, and what the compliance implications are.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Act',
                description: 'Receive actionable briefs, updated compliance checklists, and deadline alerts — everything you need to respond confidently and on time.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="card-hover group relative rounded-2xl border border-navy-700/50 bg-navy-900/40 p-8">
                {/* Step number */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-700 bg-navy-800/50 text-emerald-400 transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-medium text-navy-500">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════ */}
      <section id="features" className="relative scroll-mt-20 border-t border-navy-800/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-medium tracking-widest text-emerald-400">CAPABILITIES</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to stay<br />
              <span className="text-navy-300">ahead of regulation</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Real-time monitoring',
                description: 'Continuous surveillance of regulatory publications, consultations, and enforcement actions across all five bodies.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'AI interpretation',
                description: 'Plain-English summaries of complex regulatory changes with specific relevance scoring for your firm type and activities.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: 'Actionable briefs',
                description: 'Step-by-step compliance actions generated for each regulatory change — not just alerts, but what to actually do.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                title: 'Compliance calendar',
                description: 'Unified deadline tracking across all regulators with automated reminders and countdown alerts for your team.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
              },
              {
                title: 'Audit trail',
                description: 'Complete evidence log of every regulatory change detected and action taken — ready for regulator inspection at any time.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Multi-regulator coverage',
                description: 'One platform covering FCA, ICO, HMRC, SRA, and CQC — no more checking five different websites and mailing lists.',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="card-hover group rounded-xl border border-navy-800/50 bg-navy-900/20 p-6 transition-all hover:border-navy-700/50 hover:bg-navy-900/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-800/50 text-emerald-400 transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON — WHY VARA
      ═══════════════════════════════════════════ */}
      <section className="relative border-t border-navy-800/50 bg-navy-900/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-medium tracking-widest text-emerald-400">WHY VARA</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Stop reading PDFs.<br />
              <span className="text-navy-300">Start knowing what to do.</span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-2">
            {/* Manual */}
            <div className="rounded-2xl border border-navy-700/30 bg-navy-900/40 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-300">Manual compliance</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Checking 5 regulator websites manually',
                  'Reading 100+ page consultation papers',
                  'Interpreting legal language without context',
                  'Missing deadlines buried in newsletters',
                  'No audit trail of awareness',
                  'Hours of work per week per regulator',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-navy-800 text-navy-500">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    </span>
                    <span className="text-sm text-navy-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vara */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">With Vara</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'All 5 regulators monitored automatically',
                  'AI-generated plain-English summaries',
                  'Context-specific impact analysis for your firm',
                  'Proactive deadline alerts and reminders',
                  'Complete audit trail for inspections',
                  'Minutes per week, not hours',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-navy-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="relative scroll-mt-20 border-t border-navy-800/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-medium tracking-widest text-emerald-400">PRICING</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Straightforward pricing<br />
              <span className="text-navy-300">for regulated firms</span>
            </h2>
            <p className="mt-4 text-base text-navy-400">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
            {[
              {
                name: 'Essentials',
                price: '99',
                description: 'Core monitoring for sole practitioners and small IFA firms.',
                features: [
                  'FCA monitoring',
                  'Weekly regulatory digest',
                  'Compliance calendar',
                  'Email alerts',
                  'Basic audit trail',
                ],
                cta: 'Start free trial',
                featured: false,
              },
              {
                name: 'Professional',
                price: '199',
                description: 'Full intelligence layer for growing advisory firms.',
                features: [
                  'All 5 regulators monitored',
                  'Real-time alerts',
                  'AI-generated action briefs',
                  'Full compliance calendar',
                  'Complete audit trail',
                  'Consultation response drafts',
                  'Priority support',
                ],
                cta: 'Start free trial',
                featured: true,
              },
              {
                name: 'Enterprise',
                price: '299',
                description: 'Advanced tooling for multi-adviser firms and networks.',
                features: [
                  'Everything in Professional',
                  'Multi-user access',
                  'Custom regulatory scope',
                  'API access',
                  'Compliance reporting',
                  'Dedicated account manager',
                  'SSO & advanced security',
                ],
                cta: 'Contact sales',
                featured: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  tier.featured
                    ? 'pricing-featured border-emerald-500/30'
                    : 'border-navy-700/50 bg-navy-900/20 card-hover hover:border-navy-600/50'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-emerald-500 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-navy-950">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-navy-400">{tier.description}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-navy-400">£</span>
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm text-navy-400">/month</span>
                </div>
                <a
                  href="#"
                  className={`mt-8 flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-all active:scale-[0.98] ${
                    tier.featured
                      ? 'bg-emerald-500 text-navy-950 hover:bg-emerald-400'
                      : 'border border-navy-600 text-navy-200 hover:border-navy-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </a>
                <ul className="mt-8 space-y-3 border-t border-navy-800/50 pt-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-navy-300">
                      <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative border-t border-navy-800/50">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your next compliance deadline<br />
              <span className="text-emerald-400">won&apos;t wait</span>
            </h2>
            <p className="mt-4 text-lg text-navy-300">
              Join 200+ UK financial advisers who&apos;ve moved from reactive compliance
              to proactive intelligence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group flex h-12 items-center gap-2 rounded-lg bg-emerald-500 px-8 text-sm font-semibold text-navy-950 transition-all hover:bg-emerald-400 active:scale-[0.98]"
              >
                Start your free trial
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="mailto:hello@vara.app"
                className="flex h-12 items-center gap-2 rounded-lg border border-navy-600 px-8 text-sm font-semibold text-navy-200 transition-all hover:border-navy-400 hover:text-white"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="border-t border-navy-800/50 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
                    <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M8 1V15" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 4L14 4" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold tracking-tight text-white">Vara</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-400">
                AI-native regulatory compliance intelligence for UK regulated firms.
              </p>
              <p className="mt-6 text-xs text-navy-600">
                A <span className="text-navy-400">Pellar</span> product
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-mono text-xs font-medium tracking-widest text-navy-500">PRODUCT</h4>
              <ul className="mt-4 space-y-3">
                {['Features', 'Pricing', 'How it works', 'Changelog', 'Integrations'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-400 transition-colors hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-mono text-xs font-medium tracking-widest text-navy-500">RESOURCES</h4>
              <ul className="mt-4 space-y-3">
                {['Documentation', 'Blog', 'Regulatory updates', 'Compliance guides', 'API reference'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-400 transition-colors hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-mono text-xs font-medium tracking-widest text-navy-500">COMPANY</h4>
              <ul className="mt-4 space-y-3">
                {['About', 'Contact', 'Privacy policy', 'Terms of service', 'Security'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-400 transition-colors hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-navy-800/50 pt-8 sm:flex-row">
            <p className="text-xs text-navy-600">
              &copy; {new Date().getFullYear()} Pellar Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-navy-600">
              <span>Part of the Pellar compliance stack alongside</span>
              <a href="#" className="font-medium text-navy-400 transition-colors hover:text-white">Receipt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
