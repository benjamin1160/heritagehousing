export function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()}{' '}
          [THIS IS A PLACEHOLDER FOR THE BRAND / COMPANY NAME]. All rights
          reserved.
        </p>
        <p className="text-xs">
          [THIS IS A PLACEHOLDER FOR LEGAL / COMPLIANCE DISCLAIMERS — e.g.
          privacy policy link, terms link, earnings disclaimer.]
        </p>
      </div>
    </footer>
  );
}
