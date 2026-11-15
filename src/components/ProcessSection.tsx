import { Briefcase, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_METRICS, PROCESS_STEPS, WORK_EXPERIENCE } from '../data/portfolioData';

export function ProcessSection() {
  return (
    <section id="process" className="process-lime-aura py-16 sm:py-24 border-t border-[#EAECE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Statement flanked by creative craft disciplines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 pb-16 sm:pb-20 border-b border-[#DCE3CF]"
        >
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-5 text-xs font-medium text-[#3D4236]">
            <div>
              <p className="text-[#111210] font-semibold">Adobe Illustrator</p>
              <p className="text-[#575B52] mt-0.5">Seamless vector kits &amp; crests</p>
            </div>
            <div>
              <p className="text-[#111210] font-semibold">Custom Typography</p>
              <p className="text-[#575B52] mt-0.5">Bespoke player numbers &amp; names</p>
            </div>
          </div>

          <div className="lg:col-span-6 text-center">
            <p className="text-xs font-medium text-[#575B52] mb-3">Design Philosophy</p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold tracking-tight text-[#111210] leading-snug">
              My focus is on blending bold team identity,{' '}
              <span className="font-serif italic font-medium">precision vector geometry</span>, and
              print-floor production knowledge to craft jerseys teams wear with pride.
            </h2>
          </div>

          <div className="lg:col-span-3 hidden lg:flex flex-col items-end text-right gap-5 text-xs font-medium text-[#3D4236]">
            <div>
              <p className="text-[#111210] font-semibold">Adobe Photoshop</p>
              <p className="text-[#575B52] mt-0.5">3D fabric lighting &amp; lookbooks</p>
            </div>
            <div>
              <p className="text-[#111210] font-semibold">Factory Tech Packs</p>
              <p className="text-[#575B52] mt-0.5">CMYK 300 DPI sublimation ready</p>
            </div>
          </div>
        </motion.div>

        {/* Work Experience & Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 sm:py-16 border-b border-[#DCE3CF]"
        >
          <div className="bg-white/95 backdrop-blur-sm border border-[#DDE4CE] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3F6212]">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience &amp; Track Record</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111210]">
                  {WORK_EXPERIENCE.role}
                </h3>
                <p className="text-sm font-medium text-[#3D4236]">
                  {WORK_EXPERIENCE.company}
                  <span aria-hidden="true"> · </span>
                  {WORK_EXPERIENCE.period}
                </p>
                <p className="text-sm text-[#575B52] leading-relaxed pt-1">
                  {WORK_EXPERIENCE.summary}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {EXPERIENCE_METRICS.map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      className="rounded-2xl bg-[#F6FAEE] border border-[#DFECC7] p-4"
                    >
                      <p className="text-xs text-[#575B52]">{metric.label}</p>
                      <p className="text-sm sm:text-base font-semibold text-[#111210] mt-1 tabular-nums">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {WORK_EXPERIENCE.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#2F3528] leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-[#4D7C0F] shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* "Here's how it works" 3-Step Tilted Cards */}
        <div className="pt-14 sm:pt-18">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-center max-w-xl mx-auto mb-12 sm:mb-14"
          >
            <p className="text-xs font-medium text-[#575B52] mb-2">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111210]">
              Here&apos;s how it works
            </h2>
          </motion.div>

          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 120"
              fill="none"
              className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-[78%] h-24 pointer-events-none text-[#65A30D]/70"
            >
              <motion.path
                d="M 110 75 Q 290 5 470 70"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              />
              <motion.path
                d="M 530 70 Q 710 5 890 75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
              />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`bg-white/95 backdrop-blur-sm border border-[#DDE4CE] rounded-2xl p-6 sm:p-7 shadow-sm transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 flex flex-col justify-between ${step.tiltClass}`}
                >
                  <div>
                    <span className="font-mono text-2xl sm:text-3xl font-medium text-[#111210] tabular-nums">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-[#111210] mt-5">{step.title}</h3>
                    <p className="text-sm text-[#575B52] leading-relaxed mt-2.5">
                      {step.description}
                    </p>
                  </div>

                  <p className="text-xs font-medium text-[#3F6212] mt-6 pt-4 border-t border-[#F0F2EC]">
                    {step.tools}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
