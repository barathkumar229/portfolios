import { motion } from "framer-motion";
import { Code2, Database, Brain, Layers, Container, Globe } from "lucide-react";

const skillCategories = [
  {
    name: "Python",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "SQL",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    name: "TensorFlow",
    icon: Brain,
    color: "text-orange-600",
    bg: "bg-orange-600/10",
  },
  {
    name: "PyTorch",
    icon: Brain,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    name: "Scikit-learn",
    icon: Layers,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    name: "Docker",
    icon: Container,
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    name: "Flask",
    icon: Code2,
    color: "text-gray-600",
    bg: "bg-gray-600/10",
  },
  {
    name: "Java",
    icon: Code2,
    color: "text-red-600",
    bg: "bg-red-600/10",
  },
  {
    name: "Angular",
    icon: Globe,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillCategories.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer group"
                >
                  <div className={`p-4 rounded-xl ${skill.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <span className="font-semibold text-sm text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
