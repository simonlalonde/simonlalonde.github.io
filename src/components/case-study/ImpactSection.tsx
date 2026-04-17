import { CaseStudy } from "@/data/projects";

/**
 * ImpactSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Change Background: Modify 'bg-muted' to 'bg-background' or a custom hex.
 * - Change Text Size: Update 'text-3xl' to 'text-5xl' for more drama.
 * - Change Grid: Modify 'grid-cols-2 md:grid-cols-4' to change how many metrics show per row.
 */
export function ImpactSection({ project }: { project: CaseStudy }) {
  return (
    <section className="space-y-10">
      <div className="bg-muted p-10 space-y-12 border transition-all">
        <div className="space-y-4">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent">Measurable Impact</h3>
          <p className="text-3xl font-bold italic leading-tight">
            {project.impact}
          </p>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-4xl font-bold tracking-tighter">{metric.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
