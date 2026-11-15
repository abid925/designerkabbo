import { ArrowUpRight, Shirt } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { JerseyProject } from '../types/portfolio';

interface FeaturedShowcaseProps {
  projects: JerseyProject[];
  onSelectProject: (project: JerseyProject) => void;
}

export function FeaturedShowcase({ projects, onSelectProject }: FeaturedShowcaseProps) {
  const featuredProjects = projects.filter((p) => p.collection === 'featured');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="showcase" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
        >
          <div>
            <p className="text-xs font-medium text-[#575B52]">Featured Kit Drops</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111210] mt-1">
              Signature Jersey Collection
            </h2>
          </div>
          <p className="text-sm text-[#575B52] max-w-md">
            Click any kit below to inspect fabric specs, color swatches, and Illustrator &amp;
            Photoshop production notes.
          </p>
        </motion.div>

        {/* Luminous green-gradient 2x2 showcase container matching the Dribbble reference */}
        <div className="showcase-lime-frame rounded-3xl border border-[#C5EC78] p-4 sm:p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => {
              const isBroken = failedImages[project.id];
              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => onSelectProject(project)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="group text-left bg-white rounded-2xl border border-[#DCE5CA] overflow-hidden hover:border-[#111210] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111210] shadow-xs"
                >
                  <div className="relative aspect-[4/3] bg-[#F4F5F2] overflow-hidden">
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
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F5F7F1] to-[#E6ECD9] text-center">
                        <Shirt className="w-8 h-8 text-[#3F6212] mb-2" />
                        <span className="text-sm font-semibold text-[#111210]">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs text-[#575B52]">
                        {project.category}
                        <span aria-hidden="true"> · </span>
                        {project.tools.join(' & ')}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold text-[#111210] mt-1 truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#575B52] mt-1 line-clamp-1">
                        {project.summary}
                      </p>
                    </div>

                    <span className="shrink-0 w-9 h-9 rounded-lg border border-[#E4E7DF] flex items-center justify-center text-[#111210] group-hover:bg-[#111210] group-hover:text-white group-hover:border-[#111210] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
