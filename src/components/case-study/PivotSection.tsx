import { CaseStudy } from "@/data/projects";

/**
 * PivotSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Change Mood: Swap 'bg-foreground text-background' with 'bg-accent text-white' for a bold look.
 * - Change Typography: Use 'text-5xl' instead of 'text-3xl' to make the insight pop.
 * - Spacing: Adjust 'p-12 md:p-20' to change the section padding.
 */
export function PivotSection({ project }: { project: CaseStudy }) {
  return (
    <section className="space-y-10 bg-foreground text-background p-12 md:p-20 transition-all">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">The Strategic Pivot</h2>
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">Core Insight</p>
          <p className="text-3xl md:text-5xl font-bold leading-tight italic">
            "{project.insight}"
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">Strategic Reframing</p>
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            {project.reframing}
          </p>
        </div>
      </div>
    </section>
  );
}
