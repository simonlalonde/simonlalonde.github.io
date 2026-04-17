import { useParams, Link, Navigate } from "react-router-dom";
import { projects, SectionType } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lock, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, FormEvent, useCallback } from "react";

// Modular Section Components
import { ImpactSection } from "@/components/case-study/ImpactSection";
import { ContextSection } from "@/components/case-study/ContextSection";
import { PivotSection } from "@/components/case-study/PivotSection";
import { MethodologySection } from "@/components/case-study/MethodologySection";
import { ArtifactsSection } from "@/components/case-study/ArtifactsSection";
import { ReflectionSection } from "@/components/case-study/ReflectionSection";
import { ThesisSection } from "@/components/case-study/ThesisSection";

/**
 * DEVELOPER GUIDE: HOW TO CUSTOMIZE CASE STUDIES
 * 
 * 1. REORDERING SECTIONS:
 *    Go to 'src/data/projects.ts' and modify the 'layout' array for any project.
 *    Example: layout: ["impact", "pivot", "context", "reflection"]
 * 
 * 2. STYLING SECTIONS:
 *    Open the specific component in 'src/components/case-study/'.
 *    - To change text size: Update Tailwind classes like 'text-3xl' to 'text-5xl'.
 *    - To change colors: Edit classes like 'bg-muted' or 'text-accent'.
 *    - To change spacing: Adjust 'space-y-10' or 'p-12'.
 * 
 * 3. ADDING A BRAND NEW SECTION TYPE:
 *    A. Create a new file like 'CustomSection.tsx' in 'src/components/case-study/'.
 *    B. Add the type to 'SectionType' in 'src/data/projects.ts'.
 *    C. Add the component to the 'renderSection' function in this file.
 * 
 * 4. PROJECT-SPECIFIC OVERRIDES:
 *    If one project needs a completely unique layout that doesn't fit the template,
 *    see the 'Project-Specific Override' comment in the return statement below.
 */

export function CaseStudyDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const isProtected = project?.isProtected || false;

  const carouselImages = project ? (project.protoImages || [
    `https://picsum.photos/seed/${project.slug}-proto-0/800/600`,
    `https://picsum.photos/seed/${project.slug}-proto-1/800/600`,
    `https://picsum.photos/seed/${project.slug}-proto-2/800/600`,
    `https://picsum.photos/seed/${project.slug}-proto-3/800/600`
  ]) : [];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") {
          setSelectedImage((prev) => (prev !== null && prev < carouselImages.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowLeft") {
          setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Escape") {
          setSelectedImage(null);
        }
      }
    },
    [selectedImage, carouselImages.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isProtected) {
      const unlocked = sessionStorage.getItem("portfolio_unlocked_shared");
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    }
  }, [isProtected]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (password === "Patate") {
      setIsUnlocked(true);
      sessionStorage.setItem("portfolio_unlocked_shared", "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Helper to render modular sections
  const renderSection = (type: SectionType) => {
    switch (type) {
      case "impact":
        return <div key={type}><ImpactSection project={project} /></div>;
      case "context":
        return <div key={type}><ContextSection project={project} /></div>;
      case "pivot":
        return <div key={type}><PivotSection project={project} /></div>;
      case "methodology":
        return <div key={type}><MethodologySection project={project} /></div>;
      case "artifacts":
        return (
          <div key={type}>
            <ArtifactsSection 
              project={project} 
              carouselImages={carouselImages}
              scrollContainerRef={scrollContainerRef}
              scroll={scroll}
              setSelectedImage={setSelectedImage}
            />
          </div>
        );
      case "reflection":
        return <div key={type}><ReflectionSection project={project} /></div>;
      case "thesis":
        return <div key={type}><ThesisSection project={project} /></div>;
      default:
        return null;
    }
  };

  // Password Protection Gate
  if (isProtected && !isUnlocked) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-10 text-center"
        >
          <div className="space-y-4">
            <div className="h-16 w-16 bg-muted flex items-center justify-center mx-auto border">
              <Lock className="h-6 w-6 opacity-50" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Confidential Project</h1>
            <p className="text-muted-foreground">
              This case study contains sensitive strategic information and is password protected.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter Password"
                className={`w-full bg-background border-b h-14 px-0 text-center text-lg focus:outline-none focus:border-accent transition-colors placeholder:opacity-30 ${
                  error ? "border-red-500" : "border-border"
                }`}
                autoFocus
              />
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-2 font-bold uppercase tracking-widest"
                  >
                    Incorrect Password
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <Button type="submit" className="w-full h-14 rounded-none text-sm font-bold uppercase tracking-widest">
              Access Case Study
            </Button>
          </form>

          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity pt-10">
            <ArrowLeft className="h-3 w-3" /> Back to Work
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Image Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 z-50 rounded-none h-12 w-12 hover:bg-muted"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative w-full h-full flex items-center justify-center gap-4" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-full flex flex-col items-center gap-4"
              >
                <img
                  src={carouselImages[selectedImage]}
                  alt={`Full size view ${selectedImage}`}
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                  {selectedImage + 1} / {carouselImages.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-6 py-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] mb-4 opacity-80">
                {project.category} — {project.client}
              </p>
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 max-w-4xl">
                {project.title}
              </h1>
              <p className="text-xl md:text-3xl font-light max-w-4xl italic opacity-90">
                "{project.hook}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Metadata Bar */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${project.thesisLink ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-8 border-b pb-12 mb-20`}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">Client</p>
            <p className="text-lg font-bold">{project.client}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">Year</p>
            <p className="text-lg font-bold">{project.year}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">Sector</p>
            <p className="text-lg font-bold">{project.category}</p>
          </div>
          <div className={`${project.thesisLink ? 'sm:col-span-2' : ''}`}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">Role</p>
            <p className="text-lg font-bold">{project.id === "4" ? "Design Researcher (M.F.A.)" : "Senior Strategy Designer"}</p>
          </div>
        </div>

        {/* 
          MODULAR CONTENT DISPATCHER
          This loop renders sections in the order defined in projects.ts
        */}
        <div className="space-y-32">
          {/* 
            PROJECT-SPECIFIC OVERRIDE EXAMPLE:
            If you want to build a completely custom layout for ONE specific project,
            uncomment the block below and add your custom code.
          */}
          {/* 
          project.id === "99" ? (
            <div className="space-y-20">
               <h1 className="text-6xl font-black">Custom Layout for Project 99</h1>
               <p>Add anything here...</p>
            </div>
          ) : (
          */}
          
          {project.layout?.map((sectionType) => renderSection(sectionType))}

          {/* 
            Fallback to Default Order if no layout is defined.
            This ensures that even if you don't define a 'layout' property,
            the project still displays all internal sections.
          */}
          {(!project.layout || project.layout.length === 0) && (
            <>
              <ImpactSection project={project} />
              <ContextSection project={project} />
              <PivotSection project={project} />
              <MethodologySection project={project} />
              <ArtifactsSection 
                project={project} 
                carouselImages={carouselImages}
                scrollContainerRef={scrollContainerRef}
                scroll={scroll}
                setSelectedImage={setSelectedImage}
              />
              <ReflectionSection project={project} />
              {project.thesisLink && <ThesisSection project={project} />}
            </>
          )}

          {/* ) */}

          <div className="pt-20 flex flex-col items-center justify-center border-t">
            <Link 
              to="/" 
              className={cn(
                buttonVariants({ variant: "ghost" }), 
                "gap-2 rounded-none h-12 mx-auto flex items-center justify-center px-6"
              )}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
