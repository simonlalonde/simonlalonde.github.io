import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Photography Page
 * Displays a curated collection of photos in a responsive masonry-style grid.
 * Features a custom lightbox for immersive full-screen viewing.
 */
export function Photography() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  /**
   * Photo Data
   * To add more photos, simply add to this array.
   * Recommend using consistent aspect ratios for better visual harmony.
   */
  const photos = [
    { id: 1, src: "https://picsum.photos/seed/arch1/800/1000", title: "Urban Geometry" },
    { id: 2, src: "https://picsum.photos/seed/arch2/800/600", title: "Light & Shadow" },
    { id: 3, src: "https://picsum.photos/seed/arch3/1000/800", title: "Minimalist Structure" },
    { id: 4, src: "https://picsum.photos/seed/arch4/800/1000", title: "Rhythm of the City" },
    { id: 5, src: "https://picsum.photos/seed/arch5/800/800", title: "Symmetry" },
    { id: 6, src: "https://picsum.photos/seed/arch6/1000/1200", title: "Perspective" },
    { id: 7, src: "https://picsum.photos/seed/arch7/800/1000", title: "Concrete Waves" },
    { id: 8, src: "https://picsum.photos/seed/arch8/1000/800", title: "Glass Reflections" },
    { id: 9, src: "https://picsum.photos/seed/arch9/800/1200", title: "Industrial Decay" },
    { id: 10, src: "https://picsum.photos/seed/arch10/1200/800", title: "Brutalist Form" },
    { id: 11, src: "https://picsum.photos/seed/arch11/800/1000", title: "Shadow Play" },
    { id: 12, src: "https://picsum.photos/seed/arch12/1000/1000", title: "Void" },
  ];

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  }, [selectedPhotoIndex, photos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedPhotoIndex, photos.length]);

  const closeLightbox = () => setSelectedPhotoIndex(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto]);

  return (
    <div className="container-custom py-20">
      <section className="mb-24 max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Observing the <span className="text-accent italic">unseen</span>.
        </motion.h1>
        <p className="text-[18px] opacity-70 leading-relaxed">
          Photography is how I practice the art of observation. It's a way to capture the patterns, textures, and moments that often go unnoticed in our built environment.
        </p>
      </section>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {photos.map((photo, index) => (
          <motion.div 
            key={photo.id}
            className="break-inside-avoid cursor-zoom-in"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedPhotoIndex(index)}
          >
            <div className="group relative overflow-hidden bg-muted">
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-auto saturate-[0.4] group-hover:saturate-100 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium tracking-widest uppercase">
                  {photo.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-10"
            onClick={closeLightbox}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-6 right-6 z-50 rounded-none h-12 w-12"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 md:left-10 z-50 rounded-none h-16 w-16 opacity-50 hover:opacity-100 transition-opacity hidden md:flex"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="h-10 w-10" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 md:right-10 z-50 rounded-none h-16 w-16 opacity-50 hover:opacity-100 transition-opacity hidden md:flex"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="h-10 w-10" />
            </Button>

            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <motion.div 
                key={selectedPhotoIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prevPhoto();
                  else if (info.offset.x < -100) nextPhoto();
                }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={photos[selectedPhotoIndex].src} 
                  alt={photos[selectedPhotoIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain border shadow-2xl pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-8 text-center">
                  <p className="text-sm font-bold tracking-[0.3em] uppercase mb-2">
                    {photos[selectedPhotoIndex].title}
                  </p>
                  <p className="text-xs opacity-50 mb-6">
                    {selectedPhotoIndex + 1} / {photos.length}
                  </p>
                  
                  {/* Mobile Navigation Controls */}
                  <div className="flex gap-8 justify-center items-center md:hidden">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full h-12 w-12 border border-border/50 hover:bg-muted"
                      onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full h-12 w-12 border border-border/50 hover:bg-muted"
                      onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
