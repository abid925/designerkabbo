import jerseyBasketballImg from '../assets/images/jersey_basketball_kit_1794749409800.jpg';
import jerseyClubMaroonImg from '../assets/images/jersey_club_maroon_1794750751937.jpg';
import jerseyCricketImg from '../assets/images/jersey_cricket_kit_1794749409511.jpg';
import jerseyCrimsonImg from '../assets/images/jersey_crimson_kit_1794749433337.jpg';
import jerseyCyclingAeroImg from '../assets/images/jersey_cycling_aero_1794750750609.jpg';
import jerseyEsportsImg from '../assets/images/jersey_esports_kit_1794749408996.jpg';
import jerseyEsportsWhiteImg from '../assets/images/jersey_esports_white_1794750752436.jpg';
import jerseyFootballImg from '../assets/images/jersey_football_kit_1794749407498.jpg';
import jerseyFutsalAquaImg from '../assets/images/jersey_futsal_aqua_1794750750394.jpg';
import jerseyRetroImg from '../assets/images/jersey_retro_kit_1794749410686.jpg';
import kabboPortraitImg from '../assets/images/kabbo_blazer_transparent.png';
import type {
  ExperienceRecord,
  JerseyProject,
  ProcessStep,
  SocialLinksConfig,
  Testimonial,
} from '../types/portfolio';

export const KABBO_PORTRAIT_SRC = kabboPortraitImg;

export const DEFAULT_SOCIAL_LINKS: SocialLinksConfig = {
  whatsappNumber: '8801937108308',
  behanceUrl: 'https://www.behance.net/mdkabbo308',
  linkedinUrl: 'https://www.linkedin.com/in/md-kabbo-52260a397/',
  email: 'designerkabbo121@gmail.com',
};

export const EXPERIENCE_METRICS = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Client Satisfaction', value: '40+ Happy Clients' },
  { label: 'Current Role', value: 'Senior Graphics Designer' },
  { label: 'Workplace', value: 'ForNA Printing' },
];

export const WORK_EXPERIENCE: ExperienceRecord = {
  company: 'ForNA Printing',
  role: 'Senior Graphics Designer',
  period: '2+ Years · Currently Working',
  status: 'Active Full-Time',
  summary:
    'Leading custom sportswear, sublimation jersey artwork, brand packaging, and print-ready production prep for sports clubs, corporate leagues, and apparel clients.',
  highlights: [
    'End-to-end sublimation jersey layout & color calibration in Adobe Illustrator & Photoshop',
    'Custom club crest vectorization, player name/number grading, and cut-and-sew tech packs',
    'Delivered production-ready artwork for 40+ satisfied teams, brands, and recurring clients',
  ],
};

export const CREATIVE_STACK = [
  { name: 'Adobe Photoshop', detail: '3D Kit Mockups & Compositing' },
  { name: 'Adobe Illustrator', detail: 'Vector Patterns & Crests' },
  { name: 'ForNA Printing', detail: 'Senior Graphics Designer' },
  { name: 'Sublimation Print', detail: '300 DPI CMYK Production' },
  { name: '40+ Happy Clients', detail: '2+ Years Design Craft' },
];

export const JERSEY_PROJECTS: JerseyProject[] = [
  // 4 Signature Featured Jerseys (shown exclusively in the Lime Featured Showcase)
  {
    id: 'quantum-fc-home',
    title: 'Quantum FC — Electric Match Kit',
    client: 'Quantum Athletic Club',
    category: 'Football',
    collection: 'featured',
    year: '2026',
    image: jerseyFootballImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Match Shirt Vector', '3D Ghost Mockup', 'Custom Crest', 'Sublimation Files'],
    summary:
      'High-energy lightning fracture geometry paired with a sculpted V-neck collar and breathable mesh texture.',
    designNotes:
      'Built from scratch in Adobe Illustrator using custom angular vector shards calibrated across front, back, and raglan sleeve seams. Final fabric grain, collar ribbing, and studio lighting rendered in Adobe Photoshop.',
    printSpecs: {
      fabric: '145 GSM Micro-Mesh Dry-Fit',
      resolution: '300 DPI Full Bleed',
      colorProfile: 'CMYK + Spot Volt',
      collarCut: 'Ribbed Athletic V-Neck',
    },
    swatches: [
      { name: 'Carbon Matte', hex: '#181A18' },
      { name: 'Volt Lime', hex: '#9EE610' },
      { name: 'Silver Crest', hex: '#D4D8D2' },
    ],
  },
  {
    id: 'volt-esports-pro',
    title: 'Volt Esports — Pro Stage Jersey',
    client: 'Volt Gaming Collective',
    category: 'Esports',
    collection: 'featured',
    year: '2026',
    image: jerseyEsportsImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Front & Back Kit', 'Sponsor Lockups', 'Player Number Font', 'Hanger Mockup'],
    summary:
      'Stage-ready competitive gaming jersey with razor-sharp diagonal kinetic graphics and crisp sponsor hierarchy.',
    designNotes:
      'Engineered to stay legible under arena broadcast cameras and stage lighting. All sponsor badges, lightning emblem, and rear player typography were vectorized in Illustrator and composited onto multi-angle Photoshop templates.',
    printSpecs: {
      fabric: '150 GSM Interlock Poly',
      resolution: '300 DPI Vector Master',
      colorProfile: 'CMYK Broadcast Safe',
      collarCut: 'Two-Tone Crossover V',
    },
    swatches: [
      { name: 'Obsidian Slate', hex: '#162028' },
      { name: 'Acid Volt', hex: '#B4F41E' },
      { name: 'Optic White', hex: '#F7F8F6' },
    ],
  },
  {
    id: 'arder-valley-cricket',
    title: 'Arder Valley CC — T20 Limited Edition',
    client: 'Arder Valley Cricket Club',
    category: 'Retro & Club',
    collection: 'featured',
    year: '2026',
    image: jerseyCricketImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Mandarin Collar Kit', 'Topographic Pattern', 'Club Emblem', 'Print Tech Pack'],
    summary:
      'Refined emerald tournament cricket shirt layered with fine topographic contour linework and ivory trim.',
    designNotes:
      'Designed to balance classic club heritage with modern lightweight match wear. The subtle tonal wave pattern was generated via custom Illustrator blend paths and previewed on flat-lay fabric folds in Photoshop.',
    printSpecs: {
      fabric: '140 GSM Pinhole Moisture Wicking',
      resolution: '300 DPI Sublimation',
      colorProfile: 'Pantone 3435C Match',
      collarCut: 'Mandarin Placket Collar',
    },
    swatches: [
      { name: 'Forest Emerald', hex: '#0F4432' },
      { name: 'Ivory Cream', hex: '#F2F0E4' },
      { name: 'Lime Piping', hex: '#B8F22C' },
    ],
  },
  {
    id: 'urban-elite-crimson',
    title: 'Urban Elite FC — Speed Stripe Kit',
    client: 'Urban Elite Football Club',
    category: 'Football',
    collection: 'featured',
    year: '2026',
    image: jerseyCrimsonImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Matchday Kit', 'Woven Crest Vector', 'Custom #10 Type', 'Factory Ready PDF'],
    summary:
      'Aggressive crimson diagonal speed streaks cutting across matte jet black with crisp white sleeve cuffs.',
    designNotes:
      'Crafted for a high-tempo futsal and 11-a-side squad seeking unmistakable pitch presence. Includes custom gold-trimmed crest badge and bold inline numeral set in Adobe Illustrator.',
    printSpecs: {
      fabric: '155 GSM Jacquard Breathable',
      resolution: '300 DPI Full Sublimation',
      colorProfile: 'CMYK Deep Black Rich',
      collarCut: 'Crew Athletic Rib',
    },
    swatches: [
      { name: 'Jet Carbon', hex: '#141414' },
      { name: 'Crimson Red', hex: '#D9262E' },
      { name: 'Crisp White', hex: '#FAFAFA' },
    ],
  },

  // 6 Distinct Archive Jerseys (shown exclusively in Selected Works — ZERO duplicates)
  {
    id: 'apex-futsal-aqua',
    title: 'Apex Futsal 7 — Geometric Wave Kit',
    client: 'Apex Futsal League',
    category: 'Football',
    collection: 'archive',
    year: '2026',
    image: jerseyFutsalAquaImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Sublimation Pattern', 'Custom Jaguar Crest', 'Number Font', '3D Mockup'],
    summary:
      'Fluid midnight-navy and mint-teal wave motion accented with sharp electric lime sleeve stripes.',
    designNotes:
      'Developed for indoor court visibility with high-contrast wave ribbons drawn in Adobe Illustrator and mapped smoothly over collar and sleeve seams in Photoshop.',
    printSpecs: {
      fabric: '140 GSM Cool-Flow Mesh',
      resolution: '300 DPI Sublimation',
      colorProfile: 'CMYK Vivid Teal',
      collarCut: 'Split Mandarin V-Neck',
    },
    swatches: [
      { name: 'Midnight Navy', hex: '#16213E' },
      { name: 'Mint Teal', hex: '#28C7A8' },
      { name: 'Electric Lime', hex: '#A6F024' },
    ],
  },
  {
    id: 'titan-esports-white',
    title: 'Titan Esports — Glacier Circuitry Kit',
    client: 'Titan Pro Gaming',
    category: 'Esports',
    collection: 'archive',
    year: '2026',
    image: jerseyEsportsWhiteImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Championship Jersey', 'Circuit Sleeve Art', 'Sponsor Grid', 'Hanger Lookbook'],
    summary:
      'Clean glacier-white tournament jersey framed by charcoal raglan shoulders and lime topographic circuitry.',
    designNotes:
      'Built for LAN championship stages where bright clean bodies highlight sponsor lockups while intricate shoulder circuitry delivers close-up craft.',
    printSpecs: {
      fabric: '150 GSM Matte Interlock',
      resolution: '300 DPI Vector Ready',
      colorProfile: 'CMYK Clean White',
      collarCut: 'Lime-Piped Crew Collar',
    },
    swatches: [
      { name: 'Glacier White', hex: '#F6F7F5' },
      { name: 'Charcoal Panel', hex: '#282C30' },
      { name: 'Circuit Lime', hex: '#9EE610' },
    ],
  },
  {
    id: 'aero-pro-cycling',
    title: 'Aero Pro — Chartreuse Performance Jersey',
    client: 'Aero Velocity Cycling Club',
    category: 'Cycling & Court',
    collection: 'archive',
    year: '2026',
    image: jerseyCyclingAeroImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Full-Zip Aero Pattern', 'Color-Block Spec', 'Gripper Hem Art', 'Studio Render'],
    summary:
      'High-visibility chartreuse and slate-carbon diagonal color-blocking engineered for road visibility and speed.',
    designNotes:
      'Minimalist European cycling aesthetic focusing on crisp diagonal seam alignment across chest zip and micro-perforated side panels.',
    printSpecs: {
      fabric: '130 GSM Aero Stretch Lycra',
      resolution: '300 DPI Full Sublimation',
      colorProfile: 'Fluorescent Chartreuse Spot',
      collarCut: 'Low-Profile Race Zip',
    },
    swatches: [
      { name: 'Chartreuse Volt', hex: '#C7F82E' },
      { name: 'Slate Carbon', hex: '#374147' },
      { name: 'Pure White Type', hex: '#F8FAF8' },
    ],
  },
  {
    id: 'royal-fc-maroon',
    title: 'Royal FC — Burgundy & Gold Third Kit',
    client: 'Royal Football Club',
    category: 'Retro & Club',
    collection: 'archive',
    year: '2026',
    image: jerseyClubMaroonImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Third Kit Artwork', 'Metallic Gold Crest', 'Flat-Lay Lookbook', 'Print Tech Pack'],
    summary:
      'Tailored deep burgundy third shirt finished with champagne-gold pinstripes and an embroidered lion shield.',
    designNotes:
      'Crafted as a collector-grade third strip combining classic tailored polo proportions with sharp gold vector pinstriping prepared for ForNA Printing production.',
    printSpecs: {
      fabric: '165 GSM Pique Cotton-Poly',
      resolution: '300 DPI + Woven Badge',
      colorProfile: 'Pantone 504C + Champagne',
      collarCut: 'Tailored Knit Collar',
    },
    swatches: [
      { name: 'Deep Burgundy', hex: '#4B1622' },
      { name: 'Champagne Gold', hex: '#D4B982' },
      { name: 'Cream Trim', hex: '#EAE0CC' },
    ],
  },
  {
    id: 'custom-athletics-mesh',
    title: 'Custom Athletics — Pinhole Mesh #10',
    client: 'Dhaka Streetball League',
    category: 'Cycling & Court',
    collection: 'archive',
    year: '2026',
    image: jerseyBasketballImg,
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    deliverables: ['Sleeveless Mesh Kit', 'Mascot Patch Vector', 'Drop-Shadow Numerals', 'Size Grading'],
    summary:
      'Heavy pinhole mesh streetwear and court jersey in warm bone with volt-green striped ribbing and bold block #10.',
    designNotes:
      'Combines varsity athletic numerals with a detailed mascot shield created in Illustrator. Realistic open-pore mesh texture and dual-hanger lookbook lighting built in Adobe Photoshop.',
    printSpecs: {
      fabric: '210 GSM Heavy Pinhole Mesh',
      resolution: '300 DPI + Tackle Twill',
      colorProfile: 'CMYK + Woven Trim',
      collarCut: 'Striped V-Rib Armholes',
    },
    swatches: [
      { name: 'Warm Bone', hex: '#EBE6D8' },
      { name: 'Electric Volt', hex: '#C6F41E' },
      { name: 'Obsidian Trim', hex: '#151515' },
    ],
  },
  {
    id: 'fc-vintage-heritage',
    title: 'FC Vintage — Heritage Jacquard Polo',
    client: 'FC Vintage Apparel Drop',
    category: 'Retro & Club',
    collection: 'archive',
    year: '2025',
    image: jerseyRetroImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    deliverables: ['Retro Polo Kit', 'Herringbone Knit Tex', 'Woven Label Spec', 'Lookbook Visuals'],
    summary:
      'Terrace-inspired collared football polo pairing charcoal herringbone stripes with subtle lime collar tipping.',
    designNotes:
      'Designed as a lifestyle-ready supporter jersey bridging matchday heritage and streetwear. Custom neck tape, button placket alignment, and woven crest textures prepared for apparel manufacturing.',
    printSpecs: {
      fabric: '185 GSM Herringbone Knit',
      resolution: 'Vector Cut & Sew Spec',
      colorProfile: 'Yarn-Dyed Charcoal & Cream',
      collarCut: '3-Button Knit Polo',
    },
    swatches: [
      { name: 'Charcoal Knit', hex: '#383B3A' },
      { name: 'Vintage Cream', hex: '#F1EFE4' },
      { name: 'Lime Tipping', hex: '#9EE610' },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Concept & Kit Brief',
    description:
      'We define your team identity, sport ergonomics, color palette, collar style, and crest direction before touching the canvas.',
    tools: 'Creative Direction · Moodboard',
    tiltClass: 'lg:-rotate-2',
  },
  {
    number: '02',
    title: 'Illustrator & Photoshop Craft',
    description:
      'Seamless vector patterns and crests are built in Adobe Illustrator, then rendered onto lifelike 3D fabric mockups in Photoshop.',
    tools: 'Adobe Illustrator · Adobe Photoshop',
    tiltClass: 'lg:rotate-1 lg:translate-y-4',
  },
  {
    number: '03',
    title: 'Print-Ready Tech Pack',
    description:
      'Informed by hands-on production at ForNA Printing—300 DPI CMYK sublimation templates, player number packs, and factory seam guides.',
    tools: 'CMYK Print Files · Size Grading',
    tiltClass: 'lg:-rotate-1',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Kabbo turned our rough sketch into a sharp matchday kit in 48 hours. When the factory printed 180 jerseys, every stripe and crest aligned cleanly on the first run.',
    author: 'Arjun Rahman',
    role: 'Club Captain',
    organization: 'Quantum Athletic FC',
    outcome: '180 tournament kits printed · Zero print revisions',
  },
  {
    id: 't2',
    quote:
      'His Photoshop mockups look indistinguishable from real studio photography, and the Illustrator vector files made sponsor updates effortless before LAN finals.',
    author: 'Tariq Hasan',
    role: 'Team Manager',
    organization: 'Volt Esports Collective',
    outcome: '48-hour turnaround · Full roster & sleeve pack',
  },
];
