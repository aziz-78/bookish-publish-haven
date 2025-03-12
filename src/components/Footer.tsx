
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Libra</h3>
            <p className="text-primary-foreground/80">
              A premier publishing house dedicated to bringing exceptional literary works to readers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#books" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Books
                </a>
              </li>
              <li>
                <a href="#authors" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Authors
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Publishing Services
                </a>
              </li>
              <li>
                <a href="#submit" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Submit Manuscript
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={18} />
                <span>contact@librapublishing.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1" />
                <span>123 Publishing Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Stay Updated</h3>
            <p className="text-primary-foreground/80">
              Subscribe to our newsletter for new releases, author updates, and exclusive content.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-primary-foreground/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Libra Publishing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
