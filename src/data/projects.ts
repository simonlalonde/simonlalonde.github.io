/**
 * CONTENT CUSTOMIZATION GUIDE
 * 
 * 1. ADDING A PROJECT:
 *    - Create a new object in the 'projects' array below.
 *    - Ensure you give it a unique 'id' and 'slug'.
 *    - Images: You can use online URLs (like the placeholders) OR local images.
 *    - Local Images: Place them in `/public/images/` and reference them as `/images/your-file.jpg`.
 *    - Recommended size for hero: 1920x1080px.
 * 
 * 2. REORDERING SECTIONS:
 *    - Use the 'layout' array for each project to control which components appear and in what order.
 *    - Example: layout: ["impact", "context", "pivot"] will only show those 3 sections.
 * 
 * 3. PASSWORDS:
 *    - Set 'isProtected: true' to require a password. 
 *    - The default password is 'DESIGN2025' (configurable in CaseStudyDetail.tsx).
 */

/**
 * CaseStudy Interface
 * This defines the schema for your portfolio projects.
 */
export interface CaseStudy {
  id: string;             // Unique ID (e.g., "1", "2")
  title: string;          // Main title shown in hero and cards
  slug: string;           // URL-friendly name (e.g., "my-project-name")
  category: string;       // Industry or project type (e.g., "Strategy", "AI")
  client: string;         // Name of the organization
  year: string;           // Year of project completion
  heroImage: string;      // Hero section image link
  hook: string;           // Impactful 1-sentence summary
  context: string;        // Project background/problem space
  stakes: string;         // Business or human-centered motivation
  insight: string;        // The core discovery or turning point
  reframing: string;      // How the problem was redefined
  approach: string;       // Methodology or process description
  solution: string;       // The final output or outcome
  impact: string;         // Qualitative results or feedback
  retrospective: string;  // Post-mortem reflections
  
  /* Visual Artifacts (Optional) */
  processImage?: string;  // Image for the 'Methodology' section
  mapImage?: string;      // Image for 'Artifacts' (Mapping)
  protoImages?: string[]; // Array of images for the Prototyping carousel
  detailImage?: string;   // Image for the 'Final Detail' artifact
  
  /* Special Fields */
  thesisLink?: string;    // If set, shows the Academic Research section
  metrics?: { label: string; value: string }[]; // Array of stats for Impact section
  isProtected?: boolean;  // Enables password protection
  layout?: SectionType[]; // Modular layout control
}

export type SectionType = 
  | "impact"        /* Quantitative and qualitative outcomes */
  | "context"       /* Background and business stakes */
  | "pivot"         /* Strategic reframing and insights */
  | "methodology"   /* Process mapping and approaches */
  | "artifacts"     /* Visual outputs and prototyping carousel */
  | "reflection"    /* Lessons learned and future outlook */
  | "thesis";       /* Academic research link (MFA projects only) */

/**
 * Projects Data
 * This is the source of truth for your portfolio.
 * Images use 'picsum.photos' as placeholders; replace them with your actual work.
 */
export const projects: CaseStudy[] = [
  {
    id: "1",
    title: "Agentic AI for Mortgage Document Analysis",
    slug: "ai-mortgage-document-analysis",
    category: "Design Strategy & Agentic AI",
    client: "Large Canadian Financial Institution",
    year: "202",
    heroImage: "/images/UC_AIMortgage/AI_Mortgage_Hero.png",
    hook: "Anchoring a multi-year enterprise agreement through a high-impact, 3-week AI pilot and vendor selection strategy.",
    context: "An enterprise client needed to select an AI vendor to revitalize their IT support, requiring a rapid demonstration of value within a highly competitive procurement window.",
    stakes: "The outcome would define the organization's remote support strategy for the next five years, with millions in operational efficiency at stake.",
    insight: "Success wasn't just about the AI's accuracy, but about how effectively it could be integrated into the existing stakeholder requirements and delivery timelines.",
    reframing: "From a standard software comparison to a strategic value-delivery sprint that proved implementation feasibility in real-time.",
    approach: "I architecturalized a 3-week delivery framework that prioritized the most critical stakeholder requirements, aligning cross-functional teams to ensure immediate technical and business buy-in.",
    solution: "A proof-of-concept AI Helpdesk Agent that demonstrated seamless ticket resolution and knowledge integration, outperforming competitors on both speed and strategic alignment.",
    impact: "Turned a 3-week competitive brief into a preferred vendor selection — anchoring a multi-year enterprise agreement signed in 2025.",
    metrics: [
      { label: "Delivery window", value: "3 wks" },
      { label: "Requirements scoped", value: "10" },
      { label: "Stakeholders aligned", value: "18" }
    ],
    isProtected: true,
    layout: ["impact", "context", "pivot", "methodology", "artifacts", "reflection"],
    retrospective: "Speed is a competitive advantage in strategy, but alignment is what ensures the contract is signed."
  },
  {
    id: "2",
    title: "GenAI SQL Tool for Fraud Investigators",
    slug: "genai-sql-fraud-tool",
    category: "Strategy & Generative AI",
    client: "Confidential Financial Institution",
    year: "2024",
    heroImage: "https://picsum.photos/seed/sql-fraud-hero/1200/800",
    hook: "Empowering non-technical fraud investigators with a natural language interface for complex database queries.",
    context: "Fraud investigators were heavily dependent on technical data teams to run SQL queries, causing delays of up to 48 hours for critical case evidence.",
    stakes: "The manual bottleneck was slowing down active investigations and limiting the investigators' ability to follow intuitive hunches due to technical friction.",
    insight: "The barrier wasn't the data itself, but the 'lost in translation' moment between investigative curiosity and SQL syntax.",
    reframing: "From a filtered data request service to a conversational data exploration platform for investigators.",
    approach: "Collaborated with over 20 fraud specialists to map their investigative workflows and translate complex logic into a high-fidelity GenAI proof of concept.",
    solution: "A generative AI SQL interface that transforms natural language questions into secure, optimized queries, allowing for real-time evidence gathering.",
    impact: "Investigative lead times reduced from days to minutes, significantly increasing the volume and depth of fraud pattern discoveries.",
    metrics: [
      { label: "Lead Time Reduc.", value: "95%" },
      { label: "Fraud Detection", value: "+22%" },
      { label: "Queries / Day", value: "200+" }
    ],
    isProtected: true,
    layout: ["impact", "context", "pivot", "methodology", "artifacts", "reflection"],
    retrospective: "Ensuring data governance and query precision was as critical as the UX; human-in-the-loop verification remains essential for legal evidence.",
    processImage: "https://picsum.photos/seed/sql-process/1200/800",
    mapImage: "https://picsum.photos/seed/sql-map/1200/800",
    protoImages: [
      "https://picsum.photos/seed/sql-proto1/1200/800",
      "https://picsum.photos/seed/sql-proto2/1200/800",
      "https://picsum.photos/seed/sql-proto3/1200/800"
    ],
    detailImage: "https://picsum.photos/seed/sql-detail/1200/800"
  },
  {
    id: "3",
    title: "AskIT: AI-Driven Helpdesk Transformation",
    slug: "askit-ai-strategy",
    category: "Strategy & AI",
    client: "Confidential Tech Client",
    year: "2023",
    heroImage: "https://picsum.photos/seed/askit-hero/1200/800",
    hook: "Scaling IT support efficiency by 40% through strategic AI implementation and service reframing.",
    context: "The client's IT helpdesk was overwhelmed by high-volume, low-complexity requests, leading to significant operational bottlenecks and employee frustration.",
    stakes: "Operational costs were scaling linearly with headcount, and slow response times were impacting organization-wide productivity.",
    insight: "The helpdesk wasn't just a technical service; it was a knowledge bottleneck that could be decentralized through conversational AI.",
    reframing: "From a reactive ticket-resolution center to a proactive, self-service knowledge ecosystem.",
    approach: "I led the strategic scoping of the AI solution, aligning cross-functional stakeholders on a phased implementation roadmap and defining the core service architecture.",
    solution: "A generative AI agent (AskIT) integrated with internal knowledge bases, featuring a seamless escalation path to human experts for complex edge cases.",
    impact: "Projected 40% reduction in ticket volume, 60% faster resolution for common queries, and successful executive buy-in for full-scale development.",
    metrics: [
      { label: "Ticket Volume", value: "-40%" },
      { label: "Resolution Speed", value: "+60%" },
      { label: "Projected ROI", value: "$2.4M" }
    ],
    isProtected: true,
    layout: ["impact", "context", "pivot", "methodology", "artifacts", "reflection"],
    retrospective: "In the future, I would push for deeper integration with predictive analytics to resolve issues before the user even realizes they have one.",
    processImage: "https://picsum.photos/seed/askit-process/1200/800",
    mapImage: "https://picsum.photos/seed/askit-map/1200/800",
    protoImages: [
      "https://picsum.photos/seed/askit-proto1/1200/800",
      "https://picsum.photos/seed/askit-proto2/1200/800",
      "https://picsum.photos/seed/askit-proto3/1200/800"
    ],
    detailImage: "https://picsum.photos/seed/askit-detail/1200/800"
  },
  {
    id: "4",
    title: "Advocating for a More Democratic Process",
    slug: "democratic-codesign-thesis",
    category: "Design Research (M.F.A.)",
    client: "The Ohio State University",
    year: "2020",
    heroImage: "https://picsum.photos/seed/thesis/1200/800",
    hook: "A critical analysis of codesign activities in the public sector, advocating for vulnerable populations.",
    context: "This research M.F.A. thesis at The Ohio State University investigates the power dynamics within participatory design sessions in government-led projects.",
    stakes: "The risk of 'participation washing'—where collaborative sessions reinforce existing power imbalances rather than challenging them.",
    insight: "Authentic inclusion requires more than attendance; it demands a structural redistribution of decision-making agency.",
    reframing: "From 'gathering stakeholder input' to 'architecting democratic design agency' across multi-stakeholder ecosystems.",
    approach: "Qualitative research and critical analysis of plenary sessions, mapping the 'silent barriers' that prevent vulnerable populations from influencing policy outcomes.",
    solution: "An evaluative framework and toolkit for public sector designers to audit and re-structure co-design activities for genuine empowerment.",
    impact: "Provided a theoretical and practical foundation for more equitable design practices in the public sector, emphasizing the role of the designer as an advocate.",
    metrics: [
      { label: "Design Sessions", value: "32" },
      { label: "Expert Interviews", value: "24" },
      { label: "Research Docs", value: "100+" }
    ],
    layout: ["impact", "context", "pivot", "methodology", "reflection", "thesis"],
    retrospective: "Design is never neutral. Every facilitator choice either challenges or upholds the status quo.",
    thesisLink: "https://etd.ohiolink.edu/acprod/odb_etd/etd/r/1501/10?clear=10&p10_accession_num=osu1598036287893528"
  }
];
