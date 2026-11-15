import { Check, Copy, Layers, Printer, Shirt, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { JerseyProject } from '../types/portfolio';

interface JerseyDetailModalProps {
  project: JerseyProject | null;
  onClose: () => void;
  onRequestSimilar: (project: JerseyProject) => void;
}

export function JerseyDetailModal({
  project,
  onClose,
  onRequestSimilar,
}: JerseyDetailModalProps) {
  const [viewMode, setViewMode] = useState<'mockup' | 'specs'>('mockup');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setViewMode('mockup');
    setCopiedHex(null);
    setImgFailed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const handleCopyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1600);
    } catch {
      setCopiedHex(hex);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="jersey-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-[#E2E6DA] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-5 sm:px-7 py-4 border-b border-[#EAECE6] flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs text-[#575B52] truncate">
                  {project.category}
                  <span aria-hidden="true"> · </span>
                  {project.client}
                  <span aria-hidden="true"> · </span>
                  <span className="tabular-nums">{project.year}</span>
                </p>
                <h2
                  id="jersey-modal-title"
                  className="text-lg sm:text-xl font-semibold text-[#111210] truncate"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project detail"
                className="shrink-0 w-10 h-10 rounded-lg border border-[#E4E7DF] flex items-center justify-center text-[#111210] hover:bg-[#F5F7F1] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-7">
              {/* Left Visual Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex p-1 bg-[#F4F6F0] border border-[#E4E8DC] rounded-lg">
                    <button
                      type="button"
                      onClick={() => setViewMode('mockup')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        viewMode === 'mockup'
                          ? 'bg-[#111210] text-white'
                          : 'text-[#575B52] hover:text-[#111210]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Studio Mockup
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('specs')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        viewMode === 'specs'
                          ? 'bg-[#111210] text-white'
                          : 'text-[#575B52] hover:text-[#111210]'
                      }`}
                    >
                      <Printer className="w-3.5 h-3.5" />
                      Print Spec View
                    </button>
                  </div>
                  <span className="text-xs font-mono text-[#575B52] tabular-nums">
                    {project.printSpecs.resolution}
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F5F2] border border-[#E4E8DC]">
                  {!imgFailed ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <Shirt className="w-10 h-10 text-[#3F6212] mb-2" />
                      <p className="text-sm font-medium text-[#111210]">{project.title}</p>
                    </div>
                  )}

                  {viewMode === 'specs' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.16 }}
                      className="absolute inset-0 bg-[#111210]/84 text-white p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="text-xs font-mono tracking-tight text-[#C7F858]">
                          SUBLIMATION TECH PACK
                        </span>
                        <span className="text-xs font-mono text-white/80 tabular-nums">
                          {project.printSpecs.colorProfile}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 my-auto py-4">
                        <div className="border border-white/15 rounded-xl p-3.5 bg-white/5">
                          <p className="text-xs text-white/65">Fabric Base</p>
                          <p className="text-sm font-medium mt-1">{project.printSpecs.fabric}</p>
                        </div>
                        <div className="border border-white/15 rounded-xl p-3.5 bg-white/5">
                          <p className="text-xs text-white/65">Collar Construction</p>
                          <p className="text-sm font-medium mt-1">
                            {project.printSpecs.collarCut}
                          </p>
                        </div>
                        <div className="border border-white/15 rounded-xl p-3.5 bg-white/5">
                          <p className="text-xs text-white/65">Master Artwork</p>
                          <p className="text-sm font-medium mt-1">{project.tools.join(' + ')}</p>
                        </div>
                        <div className="border border-white/15 rounded-xl p-3.5 bg-white/5">
                          <p className="text-xs text-white/65">Print Output</p>
                          <p className="text-sm font-medium mt-1">
                            {project.printSpecs.resolution}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-white/75">
                        Includes graded vector patterns (XS–3XL), seam allowance guides, and
                        heat-press color chart.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Detail Column */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold text-[#575B52]">Design Breakdown</h3>
                    <p className="text-sm text-[#2A2D27] leading-relaxed mt-2">
                      {project.designNotes}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#575B52]">
                      Software &amp; Deliverables
                    </h3>
                    <p className="text-sm font-medium text-[#111210] mt-1.5">
                      {project.tools.join(' · ')}
                    </p>
                    <ul className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-[#3D4236]">
                      {project.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#575B52]">
                      Kit Color Swatches (Click to copy hex)
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2.5">
                      {project.swatches.map((swatch) => {
                        const isCopied = copiedHex === swatch.hex;
                        return (
                          <button
                            key={swatch.hex}
                            type="button"
                            onClick={() => handleCopyHex(swatch.hex)}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E4E7DF] hover:border-[#111210] text-xs transition-colors cursor-pointer"
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15"
                              style={{ backgroundColor: swatch.hex }}
                            />
                            <span className="font-medium text-[#111210]">{swatch.name}</span>
                            <span className="font-mono text-[#575B52]">{swatch.hex}</span>
                            {isCopied ? (
                              <Check className="w-3 h-3 text-[#3F6212]" />
                            ) : (
                              <Copy className="w-3 h-3 text-[#8C9284]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EAECE6] flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onRequestSimilar(project);
                      onClose();
                    }}
                    className="flex-1 px-5 py-3 text-sm font-semibold text-white bg-[#111210] rounded-xl hover:bg-[#2A2D27] transition-colors cursor-pointer text-center"
                  >
                    Request Similar Kit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-sm font-medium text-[#111210] bg-[#F5F7F1] rounded-xl hover:bg-[#E9EDE1] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
