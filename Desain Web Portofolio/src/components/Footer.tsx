import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@alexdev.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-4">Andi Rahmatullah</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Menciptakan pengalaman digital yang menakjubkan
              dengan teknologi modern dan desain yang
              user-friendly.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proyek
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Keahlian
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Ikuti Saya</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Mari terhubung dan berkolaborasi untuk menciptakan
              sesuatu yang luar biasa!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              © {currentYear} Andi Rahmatulah. Dibuat dengan
            </span>
            <Heart
              size={14}
              className="text-red-500 fill-current"
            />
            <span>menggunakan React & Tailwind CSS</span>
          </div>

          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Kembali ke atas ↑
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}