import { motion } from "motion/react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { myPhoto } from "../assets/foto2.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function About() {
  const stats = [
    { icon: Code, label: "Proyek Selesai", value: "50+" },
    { icon: Coffee, label: "Cangkir Kopi", value: "200+" },
    { icon: Lightbulb, label: "Ide Kreatif", value: "100+" },
    { icon: Users, label: "Klien Senang", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Tentang <span className="text-primary">Saya</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat tentang perjalanan dan passion saya dalam dunia
            pengembangan web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Halo, Saya Andi Rahmatullah</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Saya adalah seorang web developer dengan passion yang mendalam
                untuk menciptakan pengalaman digital yang bermakna. Dengan
                pengalaman lebih dari 3 tahun dalam industri teknologi, saya
                telah mengembangkan berbagai macam aplikasi web dan mobile.
              </p>
              <p>
                Keahlian saya mencakup frontend development dengan React,
                TypeScript, dan Tailwind CSS, serta backend development dengan
                Node.js dan Python. Saya selalu antusias untuk mempelajari
                teknologi baru dan mengikuti tren terkini dalam dunia web
                development.
              </p>
              <p>
                Ketika tidak sedang coding, saya menikmati waktu untuk membaca
                buku teknologi, bermain game, dan menjelajahi tempat-tempat baru
                untuk mencari inspirasi dalam berkarya.
              </p>
            </div>
          </motion.div>

          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src={myPhoto}
                alt="Workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
