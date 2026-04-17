import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * About Page
 * A professional profile focusing on the intersection of strategy and impact.
 * Designed to be clean, editorial, and balanced with typography and visual space.
 */
export function About() {
  return (
    <div className="container-custom py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Strategy is the bridge between <span className="text-accent italic">insight</span> and <span className="text-accent italic">impact</span>.
          </motion.h1>
          
          <div className="space-y-8 text-[18px] leading-relaxed opacity-70">
            <p>
              I am a Senior Strategy Designer with over 7 years of experience helping organizations solve complex problems. My work lives at the intersection of user research, service design, and business strategy.
            </p>
            <p>
              I believe that the best strategies are not just documents, but living systems that can be tested, iterated, and scaled. I specialize in building high-fidelity proof-of-concepts that de-risk innovation and align stakeholders around a shared vision.
            </p>
            <p>
              Throughout my career, I've worked with 30+ clients across diverse industries including transportation, finance, energy, and the public sector. Whether it's reimagining a transit system or designing the future of retail banking, my approach remains the same: start with human needs, map the system, and design for measurable impact.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-6">
            <Button className="h-14 px-8 text-lg rounded-none">
              Resume <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg rounded-none">
              View LinkedIn <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img 
              src="https://picsum.photos/seed/portrait/800/1066" 
              alt="Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Core Approach</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="font-display font-bold text-foreground">01</span>
                  <span>Radical Empathy: Deep ethnographic research to uncover latent needs.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-display font-bold text-foreground">02</span>
                  <span>Systems Thinking: Mapping the invisible forces that shape behavior.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-display font-bold text-foreground">03</span>
                  <span>Rapid Prototyping: Building to think and testing to learn.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
