import { CaseStudy } from "@/data/projects";
import { motion } from "framer-motion";

/**
 * MethodologySection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Image Aspect Ratio: Change 'aspect-video' to 'aspect-square' or 'aspect-cinema (21/9)'.
 * - Animation: Change 'duration: 0.8' to 'duration: 0.3' for faster image transitions.
 * - Caption Style: Edit the 'text-[11px]' part to change font size or tracking.
 */
export function MethodologySection({ project }: { project: CaseStudy }) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold border-b pb-4 tracking-tight">Methodology & Service Architecture</h2>
      <div className="space-y-12 text-[16px] leading-relaxed opacity-70">
        <div className="space-y-4">
          <p className="font-bold text-foreground opacity-100 uppercase text-[11px] tracking-widest">Strategic Approach</p>
          <p>{project.approach}</p>
        </div>
        
        {/* Centered Image Placeholder */}
        <div className="py-8 space-y-4">
          <div className="aspect-video bg-muted border overflow-hidden group relative">
            <motion.img 
              src={project.processImage || `https://picsum.photos/seed/${project.slug}-process/1200/800`}
              alt="Process mapping"
              className="w-full h-full object-cover transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[11px] uppercase tracking-widest opacity-50 text-center">Fig 01. Initial service ecosystem mapping and stakeholder friction points.</p>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-foreground opacity-100 uppercase text-[11px] tracking-widest">The Solution</p>
          <p>{project.solution}</p>
        </div>
      </div>
    </section>
  );
}
