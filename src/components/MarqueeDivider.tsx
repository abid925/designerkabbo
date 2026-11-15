import { motion } from 'motion/react';

const RIBBON_ITEMS = [
  'Custom Football Kits',
  'Esports Pro Jerseys',
  'Adobe Photoshop 3D Mockups',
  'Adobe Illustrator Vectors',
  'ForNA Printing · Senior Graphics Designer',
  '300 DPI CMYK Sublimation',
  '40+ Happy Clients',
];

export function MarqueeDivider() {
  const repeated = [...RIBBON_ITEMS, ...RIBBON_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#E2E8D6] bg-[#FAFDF4] py-3 select-none"
    >
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 28,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {repeated.map((label, idx) => (
          <div key={`${label}-${idx}`} className="flex items-center gap-8">
            <span className="text-xs font-medium tracking-wide text-[#3D4434]">{label}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
