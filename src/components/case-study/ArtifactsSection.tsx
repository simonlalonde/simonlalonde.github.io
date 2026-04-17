import { CaseStudy } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RefObject } from "react";

interface ArtifactsSectionProps {
  project: CaseStudy;
  carouselImages: string[];
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  scroll: (direction: "left" | "right") => void;
  setSelectedImage: (index: number) => void;
}

/**
 * ArtifactsSection Component
 * 
 * CUSTOMIZATION TIPS:
 * - Change Grid: Swap 'md:grid-cols-2' in any section to 'md:grid-cols-3' to allow more text or small images.
 * - Carousel Height: Modify 'aspect-[4/3]' to 'aspect-video' for wider gallery items.
 * - Sizing: Adjust 'max-w-5xl' to 'max-w-2xl' for more focused visual previews.
 */
export function ArtifactsSection({ 
  project, 
  carouselImages, 
  scrollContainerRef, 
  scroll, 
  setSelectedImage 
}: ArtifactsSectionProps) {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold border-b pb-4 tracking-tight">Visual Proof & Artifacts</h2>
        <p className="text-[16px] opacity-70 leading-relaxed">
          Strategic design is made tangible through a series of artifacts that align stakeholders and test hypotheses.
        </p>
      </div>

      {/* Strategic Mapping Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Strategic Mapping</h3>
          <p className="text-[16px] opacity-70 leading-relaxed">
            We identified that the primary drop-off wasn't technical, but structural. This map highlights the critical "moment of truth" where the service architecture meets user intent.
          </p>
        </div>
        <div className="aspect-square bg-muted border overflow-hidden">
          <img 
            src={project.mapImage || `https://picsum.photos/seed/${project.slug}-map/800/800`}
            alt="Journey Map"
            className="w-full h-full object-cover transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Prototyping Carousel */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-xl font-bold">Iterative Prototyping</h3>
          <div className="flex gap-1 border-b">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-none hover:bg-transparent hover:text-accent"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6 stroke-1" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-none hover:bg-transparent hover:text-accent border-l"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6 stroke-1" />
            </Button>
          </div>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
        >
          {carouselImages.map((img, i) => (
            <div 
              key={i} 
              className="min-w-[300px] md:min-w-[450px] aspect-[4/3] bg-muted border snap-center overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(i)}
            >
              <img 
                src={img}
                alt={`Prototype iteration ${i}`}
                className="w-full h-full object-cover saturate-[0.4] group-hover:saturate-100 transition-all duration-500 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Final PoC View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] bg-muted border overflow-hidden order-2 md:order-1">
          <img 
            src={project.detailImage || `https://picsum.photos/seed/${project.slug}-detail/800/1000`}
            alt="Detail view"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h3 className="text-xl font-bold">High-Fidelity PoC</h3>
          <p className="text-[16px] opacity-70 leading-relaxed">
            The final proof-of-concept was built to demonstrate the feasibility of the new service model to the executive board, resulting in immediate funding for the next phase.
          </p>
        </div>
      </div>
    </section>
  );
}
