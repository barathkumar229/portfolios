import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const certifications = [
  {
    title: " Data Scientist Professional Certificate",
    issuer: "Google",
    year: "2024",
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Data Analyst Professional Certificate",
    issuer: "Coursera",
    year: "2025",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:scale-[1.02] transition-transform duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
