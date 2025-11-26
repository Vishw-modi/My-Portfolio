"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
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
  ArrowRight,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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
      "https://drive.google.com/file/d/1DQUI5MFVREE1gjo-bYGcEEGPJ-B8tsaq/view?usp=drive_link",
      "_blank"
    );
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C"],
    frameworks: [
      "React Native",
      "Expo",
      "Next.js",
      "React.js",
      "Node.js",
      "Flask",
      "Python Quarts",
      "Express",
      "TailwindCSS",
      "Tanstack Query",
      "Redux",
    ],
    databasesORMS: [
      "MySQL",
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
        "AI-powered health analytics platform featuring a React Native mobile app and a Next.js web dashboard. Secured a ₹50,000 government innovation grant and deployed for real-world users. Includes CalTrack—an AI-based food analysis system using image processing and Gemini API—and a smart daily habit tracking engine with personalized recommendations.",
      tech: [
        "React Native",
        "Expo",
        "Next.js",
        "Node.js",
        "Fastify.js",
        "Clerk",
        "Supabase",
        "Appwrite",
        "TypeScript",
        "TailwindCSS",
        "ShadCN",
      ],
      features: [
        "100+ active users with secure, role-based authentication",
        "Daily Task Engine: health, productivity, mood, and custom tasks with real-time sync",
        "Dynamic 15+ question daily health questionnaire",
        "AI-generated personalized health reports.",
        "CalTrack: food image upload → nutrition & health analysis",
        "40+ backend APIs fully tested with Postman",
        "90% user satisfaction score",
      ],
      github: "https://github.com/Vishw-modi/SSIP_MOBILE_APP",
      demo: "https://health-vitals-ai.vercel.app/",
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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-foreground text-lg font-medium"
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
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
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                      activeSection === item.toLowerCase()
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.button>
                )
              )}
            </div>
            <div className="flex space-x-3 items-center">
              <ThemeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleResumeDownload}
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary bg-transparent"
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
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
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="w-20 h-20 mx-auto mb-8 border-2 border-primary rounded-2xl flex items-center justify-center bg-card shadow-lg relative z-20"
            >
              <Code className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary bg-card px-3 py-1 rounded-full border border-primary/20">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Vishw Modi</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl mb-6 text-muted-foreground font-medium"
          >
            Full-Stack Developer & Computer Engineering Student
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Passionate about building innovative solutions with modern
            technologies. Currently pursuing B.E. in Computer Engineering with a
            CGPA of 8.74, creating impactful web applications that solve
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary/20 text-foreground hover:bg-primary hover:text-white hover:border-primary bg-transparent"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Vishw-modi",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/vishwmodi",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:vishwmodi@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-card"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Computer Engineering student at Sardar
                  Vallabhbhai Patel Institute of Technology, with a strong
                  foundation in full-stack development and emerging
                  technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in tech has led me to work on diverse projects
                  ranging from AI-powered healthcare platforms to machine
                  learning recommendation systems, always focusing on creating
                  meaningful user experiences that make a difference.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground bg-card p-4 rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Gujarat, India</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Users Served
                  </div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    8.74
                  </div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-card border-border shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-muted-foreground">
                        Computer Engineering
                      </p>
                      <p className="text-muted-foreground">SVPIT, Vasad</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          Sep 2022 - Jun 2026
                        </span>
                        <Badge className="bg-primary text-primary-foreground">
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
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Languages",
                icon: Code,
                skills: skills.languages,
                color: "primary",
              },
              {
                title: "Frameworks",
                icon: Zap,
                skills: skills.frameworks,
                color: "primary",
              },
              {
                title: "Databases/ORMs",
                icon: Database,
                skills: skills.databasesORMS,
                color: "primary",
              },
              {
                title: "Analytics",
                icon: Brain,
                skills: skills.analytics,
                color: "primary",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-card border-border shadow-lg h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <category.icon className="w-5 h-5 text-primary" />
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
                          transition={{ delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
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
      <section id="projects" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Showcasing innovative solutions and technical expertise
            </p>
          </motion.div>

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
                className="group"
              >
                <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: techIndex * 0.03 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary bg-primary/5"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex gap-3 pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/20 text-foreground hover:bg-primary hover:text-white hover:border-primary bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
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
                            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Building expertise through hands-on development and achievements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="mb-12"
          >
            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-foreground text-xl">
                      Front-end Developer
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      Skyscanner Forage (Virtual Job Simulation)
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    Jan 2025 - Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
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
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-primary" />
              Achievements & Recognition
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
                  icon: Target,
                },
                {
                  title: "Sports Achievements",
                  description:
                    "District Doubles Runner-Up (Badminton) • Vadodara Champions Trophy Winner",
                  icon: Award,
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <achievement.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new opportunities and interesting
              projects. Let's build something amazing together.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91 8780267184",
                href: "tel:+918780267184",
              },
              {
                icon: Mail,
                title: "Email",
                content: "vishwmodi@gmail.com",
                href: "mailto:vishwmodi@gmail.com",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Gujarat, India",
                href: null,
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <contact.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.content}</p>
                    )}
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open("mailto:vishwmodi@gmail.com", "_blank")
                }
                variant="outline"
                size="lg"
                className="border-primary/20 text-foreground hover:bg-primary hover:text-white hover:border-primary bg-transparent"
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
        className="py-8 px-6 border-t border-border bg-card/50"
      >
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Vishw Modi</p>
        </div>
      </motion.footer>
    </div>
  );
}
