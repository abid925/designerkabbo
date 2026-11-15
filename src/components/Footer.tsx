import type { SocialLinksConfig } from '../types/portfolio';

interface FooterProps {
  socialLinks: SocialLinksConfig;
  onOpenLinkSetup: () => void;
}

export function Footer({ socialLinks, onOpenLinkSetup }: FooterProps) {
  const sanitizedWhatsapp = socialLinks.whatsappNumber.replace(/[^0-9]/g, '') || '8801937108308';

  return (
    <footer className="bg-white border-t border-[#EAECE6] py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <a href="#top" className="font-serif italic text-xl font-semibold text-[#111210]">
            Kabbo.
          </a>
          <p className="text-xs text-[#575B52] mt-1">
            © {new Date().getFullYear()} Kabbo Ahmed · Custom Jersey &amp; Sportswear Design
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#575B52]">
          <a
            href={`https://wa.me/${sanitizedWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111210] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={socialLinks.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111210] transition-colors"
          >
            Behance
          </a>
          <a
            href={socialLinks.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111210] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="hover:text-[#111210] transition-colors"
          >
            Email
          </a>
          <button
            type="button"
            onClick={onOpenLinkSetup}
            className="text-[#3F6212] hover:text-[#111210] transition-colors cursor-pointer"
          >
            Customize Links
          </button>
        </div>
      </div>
    </footer>
  );
}
