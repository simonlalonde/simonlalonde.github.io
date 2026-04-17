import { CaseStudy } from "@/data/projects";
import { ExternalLink } from "lucide-react";

/**
 * ThesisSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Link Style: Change 'border-foreground' to 'bg-foreground text-background' for a solid button.
 * - Spacing: Adjust 'p-12 md:p-20' to change section padding.
 * - Text: Modify 'text-3xl md:text-5xl' to change the main CTA size.
 */
export function ThesisSection({ project }: { project: CaseStudy }) {
  if (!project.thesisLink) return null;

  return (
    <section className="space-y-10 border border-border p-12 md:p-20 text-center bg-muted/30">
      <div className="space-y-8">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Academic Research</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Access Full Thesis</h3>
        <p className="text-lg opacity-70 leading-relaxed italic max-w-2xl mx-auto">
          "Advocating for a More Democratic Process: A critical analysis of codesign plenary sessions within a public project development"
        </p>
        <div className="pt-6">
          <a 
            href={project.thesisLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            Read on OhioLINK <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
