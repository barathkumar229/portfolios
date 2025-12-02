import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Sentiment Analysis on YouTube Comments using ML & LLM/AI",
    description: "Developed an interactive dashboard to analyze YouTube comments, classifying them into positive, negative, and neutral sentiments. Leveraged ML models and LLMs to provide insights on audience engagement and trends.",
    tech: ["Python", "ML", "LLM", "Flask","Scikit-learn",'YouTube API',"Logistic Regression"],
   
    github: "https://github.com/barathkumar229/Sentiment-Analysis-on-YouTube-Comments-using-Machine-Learning",
    demo: "https://sentiment-analysis-on-youtube-comments-fcvs.onrender.com",
  },
  {
    title: "AI Google Stock Predictor Using ML",
    description: "Built a predictive model to forecast Google stock prices using historical data and financial news sentiment analysis. Improved accuracy by combining regression models with LSTM and NLP techniques.",
    tech: ["Python", "Scikit-learn", "Gradient boost ", "Pandas",'Flask'],
    
    github: "https://github.com/barathkumar229/AI-Google-Stock-Predictor",
    demo: "https://ai-google-stock-predictor-ve4e.onrender.com/",
  },
  {
    title: "Bengaluru Traffic Analysis",
    description: "Analyzed real-time traffic data in Bengaluru to identify congestion patterns and peak hours. Developed visualizations to assist in urban traffic management and planning.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
   
    github: "https://github.com/barathkumar229/Bengaluru-Traffic-Analysis",
    
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
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
