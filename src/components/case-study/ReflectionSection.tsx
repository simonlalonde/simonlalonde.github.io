import { CaseStudy } from "@/data/projects";

/**
 * ReflectionSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Font Size: Change 'text-2xl' to 'text-4xl' for higher emphasis on the takeaway.
 * - Divider: Modify 'border-t pt-12' to 'border-l pl-8' for a different quote look.
 * - Spacing: Adjust 'space-y-10' to change gap between header and quote.
 */
export function ReflectionSection({ project }: { project: CaseStudy }) {
  return (
    <section className="space-y-10 border-t pt-12">
      <h2 className="text-[11px] font-bold uppercase tracking-widest opacity-40">Critical Reflection</h2>
      <p className="text-2xl md:text-3xl font-bold italic leading-relaxed text-foreground/90">
        "{project.retrospective}"
      </p>
    </section>
  );
}
