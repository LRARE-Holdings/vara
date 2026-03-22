import type { Metadata } from 'next'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vara — AI-Native Regulatory Compliance',
  description: 'Vara monitors UK regulatory bodies, interprets policy changes, and generates actionable compliance outputs for regulated SMEs. The intelligence layer for FCA, ICO, HMRC, SRA, and CQC compliance.',
  keywords: ['regulatory compliance', 'FCA', 'compliance automation', 'regtech', 'UK regulation', 'financial advisers', 'compliance monitoring'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider>
          <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-navy-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
                    <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M8 1V15" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 4L14 4" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold tracking-tight text-white">Vara</span>
              </a>

              {/* Nav links */}
              <div className="hidden items-center gap-8 md:flex">
                <a href="#how-it-works" className="text-sm font-medium text-navy-300 transition-colors hover:text-white">
                  How it works
                </a>
                <a href="#features" className="text-sm font-medium text-navy-300 transition-colors hover:text-white">
                  Features
                </a>
                <a href="#pricing" className="text-sm font-medium text-navy-300 transition-colors hover:text-white">
                  Pricing
                </a>
              </div>

              {/* Auth */}
              <div className="flex items-center gap-3">
                <Show when="signed-out">
                  <SignInButton>
                    <button className="cursor-pointer text-sm font-medium text-navy-200 transition-colors hover:text-white">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-emerald-400 active:scale-[0.98]">
                      Get started
                    </button>
                  </SignUpButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </nav>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
