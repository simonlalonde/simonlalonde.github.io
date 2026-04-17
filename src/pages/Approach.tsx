import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, BarChart3, Users, Layers, Target, Compass, Microscope } from "lucide-react";

/**
 * Approach Page
 * Outlines core strategic principles and the methodology used in project work.
 */
export function Approach() {
  /**
   * Primary Pillars
   * These are the high-level values that drive your work.
   */
  const principles = [
    {
      icon: Microscope,
      title: "Radical Empathy",
      description: "Moving beyond surface-level data to understand the deep emotional and structural drivers of human behavior."
    },
    {
      icon: Target,
      title: "Strategic Reframing",
      description: "Questioning the initial brief to ensure we're solving the right problem, not just the most obvious one."
    },
    {
      icon: Compass,
      title: "Systems Thinking",
      description: "Viewing every challenge as part of a larger ecosystem, ensuring solutions are sustainable and scalable."
    },
    {
      icon: Zap,
      title: "Iterative Learning",
      description: "Using rapid prototyping and real-world testing to de-risk ideas and accelerate the path to impact."
    },
    {
      icon: Layers,
      title: "Service Architecture",
      description: "Designing the invisible processes and backstage operations that make front-stage experiences seamless."
    },
    {
      icon: Users,
      title: "Co-Creative Alignment",
      description: "Engaging stakeholders as active participants in the design process to build consensus and ownership."
    }
  ];

  return (
    <div className="container-custom py-20">
      <section className="mb-32 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold tracking-tight mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A design-led approach to <span className="text-accent italic">business strategy</span>.
        </motion.h1>
        <p className="text-[18px] opacity-70 leading-relaxed max-w-2xl">
          I bridge the gap between human needs and business objectives, using design methodology to navigate complexity and drive meaningful change.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
        {principles.map((principle, index) => (
          <motion.div 
            key={principle.title}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center bg-muted rounded-none border border-border">
                <principle.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{principle.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>

      <section className="mt-40 py-24 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight italic">
              The Methodology.
            </h2>
            <p className="text-lg opacity-70 leading-relaxed">
              My process is non-linear and adaptive, moving between divergent exploration and convergent execution to find the most impactful path forward.
            </p>
          </div>
          <div className="space-y-12">
            <div className="border-l-2 border-accent pl-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">01. Discover & Reframe</p>
              <p className="text-xl font-bold">Uncovering latent needs and identifying the true strategic opportunity.</p>
            </div>
            <div className="border-l-2 border-accent pl-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">02. Ideate & Model</p>
              <p className="text-xl font-bold">Developing value propositions and service models that bridge the gap.</p>
            </div>
            <div className="border-l-2 border-accent pl-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">03. Prototype & Test</p>
              <p className="text-xl font-bold">Making strategy tangible through high-fidelity PoCs and user validation.</p>
            </div>
            <div className="border-l-2 border-accent pl-8 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">04. Align & Scale</p>
              <p className="text-xl font-bold">Building the organizational roadmap and consensus needed for implementation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 pt-24 border-t">
        <div className="space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">Collaborations</h2>
            <p className="text-2xl font-bold tracking-tight">
              I've had the privilege of partnering with <span className="text-accent font-bold">30+ organizations</span> to solve complex strategic challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center">
            {[
              { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png" },
              { name: "Government of Canada", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Government_of_Canada_logo.svg/1000px-Government_of_Canada_logo.svg.png" },
              { name: "Hydro-Québec", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hydro-Qu%C3%A9bec_logo.svg/1000px-Hydro-Qu%C3%A9bec_logo.svg.png" },
              { name: "Airbus", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Airbus_logo_2017.svg/1000px-Airbus_logo_2017.svg.png" },
              { name: "Desjardins", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_de_Desjardins.svg/1000px-Logo_de_Desjardins.svg.png" },
              { name: "Air Canada", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Air_Canada_Logo.svg/1000px-Air_Canada_Logo.svg.png" },
              { name: "Rogers", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rogers_Communications_logo.svg/1000px-Rogers_Communications_logo.svg.png" },
              { name: "Honda", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1000px-Honda.svg.png" }
            ].map((client) => (
              <div key={client.name} className="flex items-center justify-center p-4">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`} 
                  className="max-w-[120px] max-h-[50px] w-auto h-auto object-contain brightness-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          
          <p className="text-xs opacity-40 italic">
            * Some engagements are under NDA and cannot be displayed publicly.
          </p>
        </div>
      </section>
    </div>
  );
}
