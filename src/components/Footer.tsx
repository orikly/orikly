import { BookOpen, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Follow Us
              </span>
            </a>
            <p className="text-background/70 leading-relaxed">
              Updates about our initiatives and development will be shared through our communication channels.
              Social media presence: coming soon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-background/70 hover:text-background transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#project" className="text-background/70 hover:text-background transition-colors">
                  Our Project
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-background/70" />
                <a 
                  href="mailto:orikly.io@gmail.com" 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  orikly.io@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-background/70" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Málaga,+Andalucía,+Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Málaga, Andalucía, Spain
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2025 Orikly. All rights reserved.
          </p>
          {/* <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> for young learners
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
