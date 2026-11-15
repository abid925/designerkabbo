import { ArrowUpRight, Shirt } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import type { JerseyCategory, JerseyProject } from '../types/portfolio';

interface WorksGalleryProps {
  projects: JerseyProject[];
  onSelectProject: (project: JerseyProject) => void;
}

const CATEGORIES: JerseyCategory[] = [
  'All',
  'Football',
  'Esports',
  'Cycling & Court',
  'Retro & Club',
];

export function WorksGallery({ projects, onSelectProject }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<JerseyCategory>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Only show archive jerseys here so there are ZERO duplicates with FeaturedShowcase
  const archiveProjects = projects.filter((project) => project.collection === 'archive');

  const filteredProjects =
    activeCategory === 'All'
      ? archiveProjects
      : archiveProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="works" className="py-16 sm:py-24 bg-white border-t border-[#EAECE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials adjacent to Selected Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-20">
          {TESTIMONIALS.map((item, idx) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAFBF8] border border-[#E6EAE0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5"
            >
              <p className="text-sm sm:text-base text-[#111210] leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-[#EAECE6]">
                <div>
                  <cite className="not-italic text-sm font-semibold text-[#111210]">
                    {item.author}
                  </cite>
                  <p className="text-xs text-[#575B52]">
                    {item.role}, {item.organization}
                  </p>
                </div>
                <span className="text-xs font-medium text-[#3F6212] tabular-nums">
                  {item.outcome}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Selected Works Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#575B52]">More Unique Designs</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111210] mt-1">
              Selected Works
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter jersey projects by sport"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F6F0] border border-[#E4E8DC] rounded-xl self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111210] ${
                    isActive
                      ? 'bg-[#111210] text-white shadow-xs'
                      : 'text-[#575B52] hover:text-[#111210]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Editorial Jersey Grid (6 unique archive projects) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isBroken = failedImages[project.id];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white border border-[#E4E8DC] rounded-2xl overflow-hidden hover:border-[#111210] transition-colors duration-200 flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-left flex-1 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111210]"
                  >
                    <div className="relative w-full aspect-[4/3] bg-[#F4F5F2] overflow-hidden">
                      {!isBroken ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                          }
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#F5F7F1] text-center">
                          <Shirt className="w-8 h-8 text-[#3F6212] mb-2" />
                          <span className="text-sm font-semibold text-[#111210]">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#575B52]">
                          <span>{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.tools.join(' + ')}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{project.year}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-[#111210] mt-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-[#575B52] mt-1.5 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#F0F2EC] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {project.swatches.map((swatch) => (
                            <span
                              key={swatch.hex}
                              title={`${swatch.name} (${swatch.hex})`}
                              className="w-4 h-4 rounded-full border border-black/15"
                              style={{ backgroundColor: swatch.hex }}
                            />
                          ))}
                          <span className="text-xs text-[#575B52] ml-1">{project.client}</span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#111210] group-hover:text-[#3F6212] whitespace-nowrap shrink-0">
                          Inspect Kit
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
