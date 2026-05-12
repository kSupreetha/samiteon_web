import { Users, MessageCircle, Code2, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = ["Home", "About", "Services", "Projects", "Careers", "Contact"];
const services = [
  "Web Development",
  "App Development",
  "Cloud Solutions",
  "UI/UX Design",
  "Digital Marketing",
  "Software Consulting",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-16 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Image src="/logo.svg" alt="Samiteon" width={140} height={28} className="brightness-0 invert" />
          <p className="mt-3 text-sm leading-6">
            Building smart digital solutions for modern businesses worldwide.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
              <Users size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-white">
              <MessageCircle size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="transition hover:text-white">
              <Code2 size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm transition hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm transition hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>hello@samiteon.com</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm">
        <p>© 2026 Samiteon. All rights reserved.</p>
      </div>
    </footer>
  );
}
