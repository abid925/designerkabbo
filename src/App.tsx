import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { JerseyDetailModal } from './components/JerseyDetailModal';
import { LinkSetupModal } from './components/LinkSetupModal';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Navbar } from './components/Navbar';
import { ProcessSection } from './components/ProcessSection';
import { WorksGallery } from './components/WorksGallery';
import { DEFAULT_SOCIAL_LINKS, JERSEY_PROJECTS } from './data/portfolioData';
import type { JerseyProject, SocialLinksConfig } from './types/portfolio';

const SOCIAL_STORAGE_KEY = 'kabbo_social_links_v3';

const CATEGORY_TO_FORM_OPTION: Record<JerseyProject['category'], string> = {
  Football: 'Football / Futsal Kit',
  Esports: 'Esports Team Jersey',
  'Cycling & Court': 'Basketball / Streetwear',
  'Retro & Club': 'Cricket Club Kit',
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<JerseyProject | null>(null);
  const [linkSetupOpen, setLinkSetupOpen] = useState(false);
  const [prefilledBrief, setPrefilledBrief] = useState<{
    sportCategory: string;
    notes: string;
  } | null>(null);

  const [socialLinks, setSocialLinks] = useState<SocialLinksConfig>(() => {
    try {
      const saved = localStorage.getItem(SOCIAL_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as SocialLinksConfig) : DEFAULT_SOCIAL_LINKS;
    } catch {
      return DEFAULT_SOCIAL_LINKS;
    }
  });

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestSimilar = (project: JerseyProject) => {
    setPrefilledBrief({
      sportCategory: CATEGORY_TO_FORM_OPTION[project.category] || 'Football / Futsal Kit',
      notes: `Inspired by "${project.title}" (${project.swatches.map((s) => s.name).join(', ')}). Looking for a custom kit with our team crest and player numbers.`,
    });
    setTimeout(() => scrollToSection('#contact'), 80);
  };

  const handleSaveLinks = (next: SocialLinksConfig) => {
    setSocialLinks(next);
    try {
      localStorage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#111210] flex flex-col">
        <Navbar onContactClick={() => scrollToSection('#contact')} />

        <main className="flex-1">
          <HeroSection
            onContactClick={() => scrollToSection('#contact')}
            onExploreWorks={() => scrollToSection('#works')}
          />

          <MarqueeDivider />

          <FeaturedShowcase
            projects={JERSEY_PROJECTS}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <ProcessSection />

          <WorksGallery
            projects={JERSEY_PROJECTS}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <ContactSection
            socialLinks={socialLinks}
            prefilledBrief={prefilledBrief}
            onOpenLinkSetup={() => setLinkSetupOpen(true)}
          />
        </main>

        <Footer
          socialLinks={socialLinks}
          onOpenLinkSetup={() => setLinkSetupOpen(true)}
        />

        <JerseyDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={handleRequestSimilar}
        />

        <LinkSetupModal
          isOpen={linkSetupOpen}
          currentLinks={socialLinks}
          onClose={() => setLinkSetupOpen(false)}
          onSave={handleSaveLinks}
        />
      </div>
    </MotionConfig>
  );
}
