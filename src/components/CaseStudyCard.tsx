import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="relative overflow-hidden aspect-video mb-5 border">
        <motion.img
          src={project.heroImage}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      <div className="flex flex-col">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-3">
          {project.category} • {project.client}
        </p>
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.5] opacity-60 line-clamp-2">
          {project.hook}
        </p>
      </div>
    </Link>
  );
}
