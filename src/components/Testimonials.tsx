import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Lead",
    company: "Tech Innovations Inc.",
    text: "Barathkumar demonstrated exceptional skills in machine learning and AI development. His innovative approach to problem-solving sets him apart.",
  },
  {
    name: "Michael Chen",
    role: "Senior Data Scientist",
    company: "DataFlow Solutions",
    text: "Working with Barathkumar on the stock prediction project was outstanding. His technical expertise and dedication to quality are remarkable.",
  },
  {
    name: "Priya Sharma",
    role: "Project Manager",
    company: "Smart Systems Ltd.",
    text: "Barathkumar's ability to translate complex AI concepts into practical solutions is impressive. A valuable team member on any project.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            What people say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
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
