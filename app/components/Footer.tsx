export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030812] text-blue-200/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <span
              aria-hidden
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </span>
            Heritage Housing Solutions
          </div>
          <p className="mt-2">
            <a
              href="https://www.heritagehousingsolutions.com"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              heritagehousingsolutions.com
            </a>
            {' · '}
            <a
              href="https://partners.heritagehousingsolutions.com"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              partners.heritagehousingsolutions.com
            </a>
          </p>
          <p className="mt-1">
            <a
              href="tel:+14045550123"
              className="hover:text-white transition-colors"
            >
              (404) 555-0123
            </a>
          </p>
          <p className="mt-1 text-blue-200/50">
            © {new Date().getFullYear()} Heritage Housing Solutions. All rights
            reserved.
          </p>
        </div>
        <div className="text-xs md:text-right text-blue-200/70">
          <p>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            {' · '}
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </p>
          <p className="mt-2 max-w-md">
            By submitting your info you consent to receive SMS and calls from
            Heritage Housing Solutions. Reply STOP to opt out.
          </p>
        </div>
      </div>
    </footer>
  )
}
