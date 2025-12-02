import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI Smart Trolley Cart",
    description: "Automated billing system using barcode scanning and weight sensors for seamless shopping experience. Reduces checkout time and improves customer satisfaction.",
    tech: ["Python", "Computer Vision", "IoT", "Raspberry Pi"],
    image: "🛒",
  },
  {
    title: "Stock Market Prediction using ML",
    description: "Advanced prediction model combining regression analysis with sentiment analysis from financial news to forecast stock prices with high accuracy.",
    tech: ["Python", "Scikit-learn", "LSTM", "NLP", "Pandas"],
    image: "📈",
  },
  {
    title: "Speech-to-Text Real-Time Transcription",
    description: "Real-time speech recognition system with high accuracy, supporting multiple languages and accents for live transcription services.",
    tech: ["Python", "SpeechRecognition", "PyAudio", "NLP"],
    image: "🎤",
  },
  {
    title: "Agro Drone System",
    description: "Intelligent agricultural drone with object detection capabilities and weather sensing for precision farming and crop monitoring.",
    tech: ["Python", "TensorFlow", "Computer Vision", "IoT"],
    image: "🚁",
  },
  {
    title: "Optimal Ship Routing using AI",
    description: "AI-powered navigation algorithm optimizing ship routes based on weather conditions, fuel efficiency, and real-time maritime data.",
    tech: ["Python", "ML Algorithms", "Optimization", "APIs"],
    image: "⛴️",
  },
  {
    title: "YouTube Comment Sentiment Analysis",
    description: "Interactive dashboard analyzing YouTube comments using ML to visualize sentiment trends and user engagement patterns.",
    tech: ["Python", "Flask", "ML", "Chart.js", "YouTube API"],
    image: "💬",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of innovative AI and ML solutions I've developed
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
