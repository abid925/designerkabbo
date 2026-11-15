import { RotateCcw, X } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { DEFAULT_SOCIAL_LINKS } from '../data/portfolioData';
import type { SocialLinksConfig } from '../types/portfolio';

interface LinkSetupModalProps {
  isOpen: boolean;
  currentLinks: SocialLinksConfig;
  onClose: () => void;
  onSave: (next: SocialLinksConfig) => void;
}

export function LinkSetupModal({
  isOpen,
  currentLinks,
  onClose,
  onSave,
}: LinkSetupModalProps) {
  const [form, setForm] = useState<SocialLinksConfig>(currentLinks);

  useEffect(() => {
    setForm(currentLinks);
  }, [currentLinks, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="link-setup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl border border-[#E2E6DA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#EAECE6] flex items-center justify-between">
          <div>
            <h2 id="link-setup-title" className="text-base font-semibold text-[#111210]">
              Prototype Social &amp; Contact Links
            </h2>
            <p className="text-xs text-[#575B52] mt-0.5">
              Update Kabbo&apos;s WhatsApp, Behance, LinkedIn, and Email live in this browser.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="w-9 h-9 rounded-lg border border-[#E4E7DF] flex items-center justify-center text-[#111210] hover:bg-[#F5F7F1] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="cfg-whatsapp"
              className="block text-xs font-semibold text-[#111210] mb-1.5"
            >
              WhatsApp Number (with country code, e.g. 8801XXXXXXXXX)
            </label>
            <input
              id="cfg-whatsapp"
              type="text"
              value={form.whatsappNumber}
              onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm font-mono bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-behance"
              className="block text-xs font-semibold text-[#111210] mb-1.5"
            >
              Behance Profile URL
            </label>
            <input
              id="cfg-behance"
              type="url"
              value={form.behanceUrl}
              onChange={(e) => setForm({ ...form, behanceUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-linkedin"
              className="block text-xs font-semibold text-[#111210] mb-1.5"
            >
              LinkedIn Profile URL
            </label>
            <input
              id="cfg-linkedin"
              type="url"
              value={form.linkedinUrl}
              onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-email"
              className="block text-xs font-semibold text-[#111210] mb-1.5"
            >
              Email Address
            </label>
            <input
              id="cfg-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210]"
            />
          </div>

          <div className="pt-3 border-t border-[#EAECE6] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setForm(DEFAULT_SOCIAL_LINKS)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#575B52] hover:text-[#111210] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#111210] bg-[#F5F7F1] rounded-lg hover:bg-[#E9EDE1] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-[#111210] rounded-lg hover:bg-[#2A2D27] cursor-pointer"
              >
                Save links
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
