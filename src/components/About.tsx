import { motion } from "framer-motion";
import { GraduationCap, Code } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const skills = [
    "Python","SQL", "TensorFlow", "Scikit-learn",
    "Machine Learning", "LLMs", "AI", "Generative AI",
    "Data Analysis", "Flask",'Data Science','APIs'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Introduction */}
            <Card className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">B.Tech in Artificial Intelligence and Data Science</strong>
                <br />
                Batch 2025
                <br />
                Velammal Institute of Technology
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Passionate AI Engineer specializing in building intelligent systems that solve real-world problems. 
                With expertise in machine learning, deep learning, and generative AI, I transform complex data 
                into actionable insights and innovative solutions.
              </p>
            </Card>

            {/* Skills */}
            <Card className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
