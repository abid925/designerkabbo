import { ArrowUpRight, CheckCircle2, Copy, MessageCircle, Send, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import type { SocialLinksConfig, SubmittedInquiry } from '../types/portfolio';

interface ContactSectionProps {
  socialLinks: SocialLinksConfig;
  prefilledBrief: {
    sportCategory: string;
    notes: string;
  } | null;
  onOpenLinkSetup: () => void;
}

const SPORT_OPTIONS = [
  'Football / Futsal Kit',
  'Esports Team Jersey',
  'Cricket Club Kit',
  'Basketball / Streetwear',
  'Custom Crest & Branding',
];

const QUANTITY_TIERS = [
  'Concept Design Only (1 Kit)',
  'Full Team Pack (15–30 Players)',
  'Club / Brand Production (50+ Units)',
];

const STORAGE_INQUIRIES_KEY = 'kabbo_portfolio_inquiries_v1';

export function ContactSection({
  socialLinks,
  prefilledBrief,
  onOpenLinkSetup,
}: ContactSectionProps) {
  const [teamName, setTeamName] = useState('');
  const [sportCategory, setSportCategory] = useState(SPORT_OPTIONS[0]);
  const [quantityTier, setQuantityTier] = useState(QUANTITY_TIERS[1]);
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [inquiries, setInquiries] = useState<SubmittedInquiry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_INQUIRIES_KEY);
      return raw ? (JSON.parse(raw) as SubmittedInquiry[]) : [];
    } catch {
      return [];
    }
  });
  const [justSubmitted, setJustSubmitted] = useState<SubmittedInquiry | null>(null);

  useEffect(() => {
    if (!prefilledBrief) return;
    setSportCategory(prefilledBrief.sportCategory);
    setNotes(prefilledBrief.notes);
    setJustSubmitted(null);
  }, [prefilledBrief]);

  const sanitizedWhatsapp = socialLinks.whatsappNumber.replace(/[^0-9]/g, '') || '8801937108308';

  const compiledMessage = [
    `Hi Kabbo, I'd like to commission a custom jersey design.`,
    `Team / Brand: ${teamName.trim() || 'Not specified yet'}`,
    `Category: ${sportCategory}`,
    `Scope: ${quantityTier}`,
    `Contact: ${contactInfo.trim() || 'Via WhatsApp'}`,
    notes.trim() ? `Notes: ${notes.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = `https://wa.me/${sanitizedWhatsapp}?text=${encodeURIComponent(
    compiledMessage
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!teamName.trim()) {
      setErrorMsg('Please enter your team, club, or brand name.');
      return;
    }
    if (!contactInfo.trim()) {
      setErrorMsg('Please provide a WhatsApp number or email so Kabbo can reply.');
      return;
    }

    const newInquiry: SubmittedInquiry = {
      id: `inq_${Date.now()}`,
      teamName: teamName.trim(),
      sportCategory,
      quantityTier,
      contactInfo: contactInfo.trim(),
      notes: notes.trim() || 'Standard kit design inquiry.',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    const next = [newInquiry, ...inquiries].slice(0, 5);
    setInquiries(next);
    setJustSubmitted(newInquiry);
    try {
      localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }

    setTeamName('');
    setContactInfo('');
    setNotes('');
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(compiledMessage);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 1800);
    } catch {
      setCopiedBrief(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAFBF8] border-t border-[#EAECE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Prototype Config */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-medium text-[#575B52]">Start a Project</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111210] mt-1">
                Let&apos;s design your next{' '}
                <span className="font-serif italic font-medium">matchday kit</span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#575B52] leading-relaxed mt-3">
                Share your team colors, sport, and crest direction. Every project includes full
                Adobe Illustrator vector artwork, realistic Photoshop mockups, and print-ready
                sublimation files.
              </p>
            </div>

            {/* Social & Portfolio Channels */}
            <div className="bg-white border border-[#E4E8DC] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-[#111210]">Direct Channels</h3>
                <button
                  type="button"
                  onClick={onOpenLinkSetup}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3F6212] hover:text-[#111210] transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Edit prototype links
                </button>
              </div>

              <div className="divide-y divide-[#F0F2EC]">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center justify-between gap-4 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[#111210] group-hover:text-[#3F6212] transition-colors">
                      WhatsApp Direct
                    </p>
                    <p className="text-xs font-mono text-[#575B52] tabular-nums">
                      +{sanitizedWhatsapp}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-[#EEFFD0] text-[#111210] flex items-center justify-center group-hover:bg-[#111210] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href={socialLinks.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center justify-between gap-4 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[#111210] group-hover:text-[#3F6212] transition-colors">
                      Behance Portfolio
                    </p>
                    <p className="text-xs text-[#575B52] truncate max-w-[230px]">
                      {socialLinks.behanceUrl}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-lg border border-[#E4E7DF] text-[#111210] flex items-center justify-center group-hover:bg-[#111210] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href={socialLinks.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center justify-between gap-4 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[#111210] group-hover:text-[#3F6212] transition-colors">
                      LinkedIn Profile
                    </p>
                    <p className="text-xs text-[#575B52] truncate max-w-[230px]">
                      {socialLinks.linkedinUrl}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-lg border border-[#E4E7DF] text-[#111210] flex items-center justify-center group-hover:bg-[#111210] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href={`mailto:${socialLinks.email}`}
                  className="pt-3 flex items-center justify-between gap-4 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[#111210] group-hover:text-[#3F6212] transition-colors">
                      Email Briefs
                    </p>
                    <p className="text-xs text-[#575B52] truncate max-w-[230px]">
                      {socialLinks.email}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-lg border border-[#E4E7DF] text-[#111210] flex items-center justify-center group-hover:bg-[#111210] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Saved Inquiries Log */}
            {inquiries.length > 0 && (
              <div className="bg-white border border-[#E4E8DC] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-[#575B52]">
                    Recent Saved Briefs ({inquiries.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setInquiries([]);
                      localStorage.removeItem(STORAGE_INQUIRIES_KEY);
                    }}
                    className="text-xs text-[#575B52] hover:text-[#111210] cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
                <ul className="space-y-2.5">
                  {inquiries.map((inq) => (
                    <li
                      key={inq.id}
                      className="text-xs border border-[#F0F2EC] rounded-xl p-3 bg-[#FAFBF8]"
                    >
                      <div className="flex items-center justify-between font-medium text-[#111210]">
                        <span>{inq.teamName}</span>
                        <span className="text-[#575B52] tabular-nums">{inq.createdAt}</span>
                      </div>
                      <p className="text-[#575B52] mt-1">
                        {inq.sportCategory} · {inq.quantityTier}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Commission Builder Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-[#E2E6DA] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F0F2EC]">
                <div>
                  <h3 className="text-lg font-semibold text-[#111210]">
                    Custom Jersey Commission Brief
                  </h3>
                  <p className="text-xs text-[#575B52] mt-0.5">
                    Fill out the brief to submit or launch straight into WhatsApp.
                  </p>
                </div>
              </div>

              {justSubmitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F1FFD6] border border-[#C7E98A] text-sm text-[#111210]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#3F6212] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Brief saved for {justSubmitted.teamName}
                    </p>
                    <p className="text-xs text-[#3D4236] mt-0.5">
                      You can also send the compiled message directly via WhatsApp below.
                    </p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                >
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="teamName"
                    className="block text-xs font-semibold text-[#111210] mb-1.5"
                  >
                    Team / Brand Name
                  </label>
                  <input
                    id="teamName"
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g., Dhaka United FC"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactInfo"
                    className="block text-xs font-semibold text-[#111210] mb-1.5"
                  >
                    Your WhatsApp or Email
                  </label>
                  <input
                    id="contactInfo"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="+880 1XXX-XXXXXX or email"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sportCategory"
                    className="block text-xs font-semibold text-[#111210] mb-1.5"
                  >
                    Jersey Category
                  </label>
                  <select
                    id="sportCategory"
                    value={sportCategory}
                    onChange={(e) => setSportCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210] transition-colors"
                  >
                    {SPORT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantityTier"
                    className="block text-xs font-semibold text-[#111210] mb-1.5"
                  >
                    Project Scope
                  </label>
                  <select
                    id="quantityTier"
                    value={quantityTier}
                    onChange={(e) => setQuantityTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210] transition-colors"
                  >
                    {QUANTITY_TIERS.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="designNotes"
                  className="block text-xs font-semibold text-[#111210] mb-1.5"
                >
                  Colors, Collar Style &amp; Design Direction
                </label>
                <textarea
                  id="designNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe primary colors, pattern inspiration, sponsor placement, or deadline..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAFBF8] border border-[#DDE2D5] rounded-xl focus:outline-none focus:border-[#111210] transition-colors resize-none"
                />
              </div>

              {/* Live WhatsApp Message Preview */}
              <div className="rounded-2xl bg-[#F5F7F1] border border-[#E4E8DC] p-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold text-[#111210]">
                    Live WhatsApp Brief Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#3F6212] hover:text-[#111210] cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copiedBrief ? 'Copied' : 'Copy text'}
                  </button>
                </div>
                <pre className="text-xs font-mono text-[#3D4236] whitespace-pre-wrap leading-relaxed">
                  {compiledMessage}
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#111210] bg-[#C7F858] hover:bg-[#B4F438] rounded-xl transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>

                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111210] hover:bg-[#2A2D27] rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  Save &amp; Submit Brief
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
