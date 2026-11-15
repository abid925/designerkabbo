import { ArrowRight, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { CREATIVE_STACK, KABBO_PORTRAIT_SRC } from '../data/portfolioData';

interface HeroSectionProps {
  onContactClick: () => void;
  onExploreWorks: () => void;
}

const HERO_SWATCHES = [
  { name: 'Electric Volt', hex: '#A6F024', jerseyBase: '#151714' },
  { name: 'Crimson Speed', hex: '#E11D48', jerseyBase: '#18181B' },
  { name: 'Mint Teal', hex: '#28C7A8', jerseyBase: '#16213E' },
  { name: 'Champagne Gold', hex: '#D4B982', jerseyBase: '#4B1622' },
];

export function HeroSection({ onContactClick, onExploreWorks }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(HERO_SWATCHES[0]);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Depth parallax: headline behind hair drifts slightly slower than foreground portrait
  const textDepthY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const portraitDepthY = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="hero-lime-aura relative overflow-hidden pt-3 sm:pt-5 pb-5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & "Hi I'm Kabbo" sitting cleanly above hair */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 text-center max-w-5xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#2F3528] mb-1">
            Senior Graphics Designer at ForNA Printing · Jersey &amp; Apparel Specialist
          </p>
          <p className="text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-[#111210] leading-none">
            Hi I&apos;m Kabbo
          </p>
        </motion.div>

        {/* Depth Layer 1 (z-10): Giant Single-Line Serif Headline positioned behind Kabbo's hair */}
        <motion.div
          style={{ y: textDepthY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-6xl mx-auto mt-1 sm:mt-1.5 pointer-events-none select-none"
        >
          <h1 className="font-serif italic font-medium text-[#151812] leading-[0.95] tracking-tight text-[clamp(1.7rem,5.2vw,4.55rem)] whitespace-nowrap">
            Jersey &amp; Apparel Designer
          </h1>
        </motion.div>

        {/* Main Hero Grid: Left Flank | Larger Foreground Portrait (z-20) | Right Flank */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-end gap-5 lg:gap-4">
          {/* Left Flank */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 order-2 lg:order-1 pb-1 lg:pb-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-items-center items-center sm:items-stretch lg:items-start gap-3 z-30"
          >
            {/* Floating Adobe Ps & Ai Card */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[300px] sm:max-w-none lg:max-w-[260px] bg-white/92 backdrop-blur-sm border border-[#DDE4CE] rounded-2xl p-3 shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#001E36] text-[#31A8FF] font-bold text-xs flex items-center justify-center shrink-0">
                  Ps
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#330000] text-[#FF9A00] font-bold text-xs flex items-center justify-center shrink-0">
                  Ai
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#111210] truncate">
                    Photoshop &amp; Illustrator
                  </p>
                  <p className="text-[11px] text-[#575B52] truncate">
                    3D Mockups · Vector Kits
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive Jersey Colorway Selector */}
            <div className="w-full max-w-[300px] sm:max-w-none lg:max-w-[260px] bg-white/90 backdrop-blur-sm border border-[#DDE4CE] rounded-2xl p-3 shadow-xs">
              <div className="flex items-center justify-between text-[11px] text-[#575B52] mb-1.5">
                <span className="font-medium text-[#111210]">Kit Accent Preview</span>
                <span className="font-mono">{activeSwatch.hex}</span>
              </div>
              <div className="flex items-center gap-2">
                {HERO_SWATCHES.map((swatch) => {
                  const isSelected = activeSwatch.hex === swatch.hex;
                  return (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => setActiveSwatch(swatch)}
                      aria-label={`Preview ${swatch.name} jersey colorway`}
                      title={swatch.name}
                      className={`w-6 h-6 rounded-lg border transition-transform duration-150 flex items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'border-[#111210] scale-105'
                          : 'border-black/15 hover:scale-105'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && <Check className="w-3 h-3 text-[#111210]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left space-y-0.5 pt-0.5">
              <p className="text-xs font-semibold text-[#111210]">
                Available for custom kit commissions
              </p>
              <p className="text-xs sm:text-sm text-[#3E4239] leading-snug">
                <strong className="font-semibold text-[#111210] tabular-nums">40+</strong> happy
                clients · <strong className="font-semibold text-[#111210]">2+ years</strong>{' '}
                experience
              </p>
            </div>
          </motion.div>

          {/* Depth Layer 2 (z-20): Large Transparent PNG Portrait overlapping headline crown with zero bottom rectangle */}
          <motion.div
            style={{ y: portraitDepthY }}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 flex justify-center -mt-4 sm:-mt-7 lg:-mt-10 z-20 pointer-events-none"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px] h-[360px] sm:h-[430px] lg:h-[490px] flex items-end justify-center">
              {/* Subtle Illustrator dashed guide ring on desktop behind shoulders */}
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 460 460"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                className="hidden lg:block absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] pointer-events-none text-[#4D7C0F]/20"
              >
                <circle
                  cx="230"
                  cy="230"
                  r="186"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                />
              </motion.svg>

              {!imgError ? (
                <img
                  src={KABBO_PORTRAIT_SRC}
                  alt="Kabbo Ahmed, Senior Graphics Designer in tailored blazer"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="relative z-20 w-full h-full object-contain object-bottom portrait-fade-mask select-none"
                />
              ) : (
                <div className="relative z-20 w-full h-full rounded-3xl bg-[#F5F7F1] border border-[#E2E6DA] flex flex-col items-center justify-center p-6 text-center">
                  <span className="font-serif italic text-3xl text-[#111210]">Kabbo</span>
                  <span className="text-xs text-[#575B52] mt-2">
                    Jersey &amp; Apparel Designer
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Flank */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 order-3 pb-1 lg:pb-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-items-center items-center sm:items-stretch lg:items-end lg:text-right gap-3 z-30"
          >
            {/* Floating Live Interactive Vector Jersey Blueprint Card */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[300px] sm:max-w-none lg:max-w-[260px] bg-white/92 backdrop-blur-sm border border-[#DDE4CE] rounded-2xl p-3 shadow-xs flex items-center gap-3 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F6FAEE] border border-[#DFECC7] flex items-center justify-center shrink-0">
                <motion.svg
                  key={activeSwatch.hex}
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 64 64"
                  className="w-10 h-10"
                  aria-label="Live jersey vector wireframe preview"
                >
                  <path
                    d="M20 12 L10 20 L14 31 L20 27 V52 H44 V27 L50 31 L54 20 L44 12 L37 16 C34 18 30 18 27 16 Z"
                    fill={activeSwatch.jerseyBase}
                    stroke="#111210"
                    strokeWidth="1.5"
                  />
                  <path d="M20 28 L44 20 V25 L20 33 Z" fill={activeSwatch.hex} />
                  <path
                    d="M27 16 C30 19 34 19 37 16"
                    fill="none"
                    stroke={activeSwatch.hex}
                    strokeWidth="2"
                  />
                  <circle cx="38" cy="24" r="2.2" fill={activeSwatch.hex} />
                </motion.svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#111210] truncate">
                  {activeSwatch.name} Kit
                </p>
                <p className="text-[11px] font-mono text-[#575B52]">CMYK · 300 DPI</p>
                <p className="text-[11px] text-[#3F6212] font-medium">Print-ready vector</p>
              </div>
            </motion.div>

            {/* Current Role Card */}
            <div className="w-full max-w-[300px] sm:max-w-none lg:max-w-[260px] bg-white/90 backdrop-blur-sm border border-[#DDE4CE] rounded-2xl px-3.5 py-2.5 shadow-xs text-left lg:text-right flex flex-col justify-center">
              <p className="text-xs font-semibold text-[#111210]">Senior Graphics Designer</p>
              <p className="text-[11px] text-[#575B52] mt-0.5">
                ForNA Printing · Currently Working
              </p>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 flex flex-wrap justify-center lg:justify-end items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#111210] rounded-lg hover:bg-[#2A2D27] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111210]"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWorks}
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-[#111210] hover:text-[#3F6212] transition-colors whitespace-nowrap shrink-0 cursor-pointer underline-offset-4 hover:underline"
              >
                Explore kits
              </button>
            </div>
          </motion.div>
        </div>

        {/* Creative Tooling & Capabilities Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 -mt-2 pt-3.5 border-t border-[#DCE3CF] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 bg-white/75 backdrop-blur-xs rounded-t-xl"
        >
          {CREATIVE_STACK.map((item) => (
            <div key={item.name} className="text-left sm:text-center">
              <p className="text-xs sm:text-sm font-semibold text-[#111210] tracking-tight">
                {item.name}
              </p>
              <p className="text-[11px] sm:text-xs text-[#4A5043] mt-0.5">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
