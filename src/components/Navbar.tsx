import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { label: 'Showcase', href: '#showcase' },
  { label: 'Process', href: '#process' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#EAECE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-serif italic text-2xl font-semibold tracking-tight text-[#111210] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111210]"
        >
          Kabbo.
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#575B52]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#111210] transition-colors duration-150 whitespace-nowrap shrink-0 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111210]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#111210] rounded-lg hover:bg-[#2A2D27] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111210]"
          >
            Get in touch
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E4E7DF] text-[#111210] hover:bg-[#F5F7F1] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#EAECE6] bg-white px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleMobileNav(item.href)}
              className="block w-full text-left px-3 py-2.5 text-sm font-medium text-[#111210] rounded-lg hover:bg-[#F5F7F1] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
            className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#111210] rounded-lg hover:bg-[#2A2D27] transition-colors"
          >
            Get in touch
          </button>
        </div>
      )}
    </header>
  );
}
