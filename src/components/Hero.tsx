import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/WhatsApp Image 2025-12-02 at 10.10.18_e2bcba6dh.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement("a");
    link.href = "/Barathkumar_data_scientist.pdf";
    link.download = "Barathkumar_data_scientist.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
            <img 
              src={profileImage} 
              alt="Barathkumar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Barathkumar
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-foreground"
        >
          AI Engineer | Data Scientist | Machine Learning Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          "Turning data into intelligent solutions using AI, ML, and Generative AI."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            <Eye className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownloadResume}
            className="border-2 hover:bg-primary/10"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
