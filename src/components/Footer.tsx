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
];

const solutionHrefs = [
  "/solutions/mommy-care",
  "/solutions/lynx",
  "/solutions/pms",
  "/solutions/senior-care",
  "/services/data-engineering",
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
            <a href="https://www.facebook.com/Samiteon/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
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
