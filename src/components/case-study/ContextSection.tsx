import { CaseStudy } from "@/data/projects";

/**
 * ContextSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Change Layout: Change 'md:grid-cols-2' to 'md:grid-cols-1' to stack the sections.
 * - Change Spacing: Update 'gap-12' to 'gap-20' for more breathability.
 * - Text Styling: Modify 'opacity-70' to 'opacity-100' for higher readability.
 */
export function ContextSection({ project }: { project: CaseStudy }) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold border-b pb-4 tracking-tight">Problem Space & Strategic Context</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[16px] leading-relaxed opacity-70">
        <div className="space-y-4">
          <p className="font-bold text-foreground opacity-100 uppercase text-[11px] tracking-widest">The Context</p>
          <p>{project.context}</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-foreground opacity-100 uppercase text-[11px] tracking-widest">Business Stakes</p>
          <p>{project.stakes}</p>
        </div>
      </div>
    </section>
  );
}
