import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import foto6 from "../assets/foto6.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Modern",
      description:
        "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin yang powerful.",
      image: foto7,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Aplikasi Task Management",
      description:
        "Aplikasi manajemen tugas dengan fitur kolaborasi tim, tracking progress, dan notifikasi real-time.",
      image: foto6,
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard analytics dengan visualisasi data yang interaktif dan real-time untuk business intelligence.",
      image: foto8,
      technologies: ["React", "D3.js", "Chart.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Proyek <span className="text-primary">Terbaik</span> Saya
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan dengan
            dedikasi tinggi dan teknologi terdepan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <ExternalLink size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Lihat Semua Proyek
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
