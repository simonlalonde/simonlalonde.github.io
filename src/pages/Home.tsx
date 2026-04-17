import { projects } from "@/data/projects";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { motion } from "framer-motion";

/**
 * HOME PAGE
 * 
 * CUSTOMIZATION GUIDE:
 * - Hero Title: Update the text in the <h1> tag (line 16).
 * - Hero Bio: Update the project description in the <p> tag (line 24).
 * - Grid Layout: Change 'md:grid-cols-2' (line 31) if you want more/fewer columns.
 */
export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="hero border-b py-[60px]">
        <div className="container-custom">
          <motion.h1 
            className="typography-hero max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Strategic design for complex ecosystems.
          </motion.h1>
          <motion.p 
            className="text-[18px] leading-[1.6] mt-6 opacity-70 max-w-[650px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Senior Strategy Designer bridging 7+ years of industry expertise with academic research to drive rigorous, human-centered service transformations.
          </motion.p>
        </div>
      </section>

      <section className="flex-grow py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseStudyCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
