"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  MessageCircle,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Brain,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent(
      "Hi Vishw! I found your portfolio and would like to connect with you."
    );
    window.open(`https://wa.me/918780267184?text=${message}`, "_blank");
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1WF-H-XWeyRWiY9DIy_GtLNxoLLnEklRI/view",
      "_blank"
    );
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Tanstack Query",
      "Redux",
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Neon",
      "SupaBase",
      "Prisma",
      "Drizzle",
      "Mongoose",
    ],
    analytics: ["Power BI", "Pandas", "NumPy", "Matplotlib", "NLTK"],
  };

  const projects = [
    {
      title: "HealthVitals-AI",
      description:
        "Full-stack healthcare platform with AI-powered health reports and personalized recommendations.",
      tech: [
        "React.js",
        "Python",
        "TypeScript",
        "MySQL",
        "TailwindCSS",
        "ShadCN",
      ],
      features: [
        "100+ users with secure login",
        "Dynamic health questionnaire with 15+ questions",
        "Gemini API integration for personalized reports",
        "90% user satisfaction rate",
      ],
      github: "https://github.com/smitinit/Healthvitals-ai-gdg",
      demo: "https://healthvitals-ai-43006.web.app/",
    },
    {
      title: "PERSONA-AI BOT",
      description:
        "AI-powered chatbot with 6+ switchable personas for dynamic user experiences.",
      tech: ["Next.js", "TypeScript", "ShadCN", "TailwindCSS"],
      features: [
        "6+ switchable personas",
        "Gemini API integration",
        "Dynamic tone adaptation",
        "Enhanced user engagement",
      ],
      github: "https://github.com/Vishw-modi/Persona-AI",
      demo: "https://chat-bot-clone-cyan.vercel.app/",
    },
    {
      title: "STREAMSUGGEST",
      description:
        "Netflix movie recommendation system using machine learning and NLP techniques.",
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "NLTK", "Streamlit"],
      features: [
        "1M+ Netflix movies dataset processing",
        "NLP text normalization and stemming",
        "3D vector mapping for similarity",
        "Interactive Streamlit web app",
      ],
      github: "https://github.com/Vishw-modi/Movie_Recommender",
      demo: null,
    },
    {
      title: "DISCORD WEATHER BOT",
      description:
        "Real-time weather updates bot for Discord with 100% accuracy.",
      tech: ["Node.js", "Express.js", "Discord.js", "Discord Developer API"],
      features: [
        "Real-time weather data",
        "Location-based queries",
        "External weather API integration",
        "100% accuracy rate",
      ],
      github: "https://github.com/Vishw-modi/Discord-Bot",
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-lg"
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Vishw Modi
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400"
                        : "text-white/80"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleResumeDownload}
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleWhatsAppMessage}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-amber-400/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            {/* Simple animated icon instead of 3D cube */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="w-20 h-20 mx-auto mb-8 border-2 border-cyan-400 rounded-lg flex items-center justify-center"
            >
              <Code className="w-10 h-10 text-cyan-400" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent"
          >
            Vishw Modi
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-white/80"
          >
            Computer Engineering Student & Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg mb-12 text-white/60 max-w-2xl mx-auto"
          >
            Passionate about building innovative solutions with modern
            technologies. Currently pursuing B.E. in Computer Engineering with a
            CGPA of 8.74.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center space-x-6 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/Vishw-modi" },
              { icon: Linkedin, href: "https://linkedin.com/in/vishwmodi" },
              { icon: Mail, href: "mailto:vishwmodi@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-white/80 mb-6">
                I'm a passionate Computer Engineering student at Sardar
                Vallabhbhai Patel Institute of Technology, with a strong
                foundation in full-stack development and emerging technologies.
              </p>
              <p className="text-lg text-white/80 mb-6">
                My journey in tech has led me to work on diverse projects
                ranging from AI-powered healthcare platforms to machine learning
                recommendation systems, always focusing on creating meaningful
                user experiences.
              </p>
              <div className="flex items-center space-x-4 text-white/60">
                <MapPin className="w-5 h-5" />
                <span>Gujarat, India</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Education</CardTitle>
                </CardHeader>
                <CardContent className="text-white/80">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-sm">Computer Engineering</p>
                      <p className="text-sm">SVPIT, Vasad</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Sep 2022 - Jun 2026
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        >
                          CGPA: 8.74/10
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Languages",
                icon: Code,
                skills: skills.languages,
                color: "cyan",
              },
              {
                title: "Frameworks",
                icon: Code,
                skills: skills.frameworks,
                color: "cyan",
              },
              {
                title: "Databases/ORMs",
                icon: Database,
                skills: skills.databases,
                color: "cyan",
              },
              {
                title: "Analytics",
                icon: Brain,
                skills: skills.analytics,
                color: "cyan",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <category.icon
                        className={`w-5 h-5 mr-2 text-${category.color}-400`}
                      />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`bg-${category.color}-600/20 text-${category.color}-300 hover:bg-${category.color}-600/30`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="border-cyan-400/50 text-cyan-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <ul className="text-sm text-white/70 space-y-1">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex space-x-4 pt-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        {project.demo && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                              onClick={() =>
                                window.open(project.demo, "_blank")
                              }
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">
                      Front-end Developer
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Skyscanner Forage (Virtual Job Simulation)
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                  >
                    Jan 2025 - Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-white/80">
                <ul className="space-y-3">
                  {[
                    "Built a web application using React as a front-end engineer simulation",
                    "Developed travel date picker using Skyscanner's Backpack React library",
                    "Validated UI changes against company test cases for backward compatibility",
                    "Replaced default fetch with TanStack Query, reducing API response time by ~30%",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-cyan-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-6 flex items-center"
            >
              <Award className="w-6 h-6 mr-2 text-amber-400" />
              Achievements
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Event Organization",
                  description:
                    "Prakash'23 Inter-College Fest - Discipline Committee Team Member",
                },
                {
                  title: "Sports Achievements",
                  description:
                    "District Doubles Runner-Up (Badminton) • Vadodara Champions Trophy Winner",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-12"
          >
            I'm always open to discussing new opportunities and interesting
            projects.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { icon: Phone, title: "Phone", content: "+91 8780267184" },
              { icon: Mail, title: "Email", content: "vishwmodi@gmail.com" },
              { icon: MapPin, title: "Location", content: "Gujarat, India" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-slate-800/50 border-cyan-400/20 backdrop-blur-sm">
                  <CardContent className="pt-6 text-center">
                    <contact.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-white/70">{contact.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleWhatsAppMessage}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open("mailto:vishwmodi@gmail.com", "_blank")
                }
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 px-6 border-t border-cyan-400/20"
      >
        <div className="container mx-auto text-center">
          <p className="text-white/60">
            © 2025 Vishw Modi. Built with Next.js and Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
