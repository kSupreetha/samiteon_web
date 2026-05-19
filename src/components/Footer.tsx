"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const itServiceHrefs = [
  "/services/staff-augmentation",
  "/services/accounting",
  "/services/salesforce",
  "/services/erp",
  "/services/website-development",
  "/services/data-science",
  "/services/data-engineering",
];

const solutionHrefs = [
  "/solutions/mommy-care",
  "/solutions/lynx",
  "/solutions/pms",
  "/solutions/senior-care",
];

const companyHrefs = ["/about", "/contact", "/careers"];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-slate-950 px-6 py-16 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* IT Services */}
        <div>
          <h3 className="font-semibold text-white">{f.itServices}</h3>
          <ul className="mt-4 space-y-2">
            {f.itServiceItems.map((name, i) => (
              <li key={name}>
                <Link href={itServiceHrefs[i]} className="text-sm transition hover:text-white">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-white">{f.solutions}</h3>
          <ul className="mt-4 space-y-2">
            {f.solutionItems.map((name, i) => (
              <li key={name}>
                <Link href={solutionHrefs[i]} className="text-sm transition hover:text-white">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white">{f.company}</h3>
          <ul className="mt-4 space-y-2">
            {f.companyLinks.map((name, i) => (
              <li key={name}>
                <Link href={companyHrefs[i]} className="text-sm transition hover:text-white">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <Image src="/logo.svg" alt="Samiteon" width={130} height={26} className="brightness-0 invert" />
          <h3 className="mt-6 font-semibold text-white">{f.followUs}</h3>
          <div className="mt-4 flex gap-4">
            <a href="https://www.linkedin.com/company/samiteon-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.432-.818 1.489-1.681 3.065-1.681 3.28 0 3.884 2.159 3.884 4.967v6.605zM5.337 7.433a1.803 1.803 0 1 1 0-3.606 1.803 1.803 0 0 1 0 3.606zm1.603 13.019H3.734V9h3.206v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
<a href="https://www.instagram.com/samiteon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-6 text-center text-sm">
        <p>{f.copyright}</p>
      </div>
    </footer>
  );
}
