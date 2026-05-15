"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Person = {
  name: string;
  role: string;
  bio: string;
  fullBio: string[];
  avatar: string;
};

const team: Person[] = [
  {
    name: "Harsha Dronawat",
    role: "Chairperson & CEO",
    bio: "With over two decades of hands-on experience in project and product leadership, Harsha brings a powerful blend of strategic vision, executional discipline, and technical acumen.",
    avatar: "/team/harsha.webp",
    fullBio: [
      "Harsha Dronawat is the accomplished owner and driving force behind Samiteon, LLC. With over two decades of hands-on experience in project and product leadership across industries, she brings a powerful blend of strategic vision, executional discipline, and technical acumen to every initiative.",
      "Harsha leads the firm's mission to help organizations architect, build, and optimize resilient systems for today's complex business environments. Her leadership emphasizes purpose-driven development, scalable processes, and team-centric culture.",
      "Harsha holds a Master of Science in Industrial Engineering from University of Louisville and MBA from Bilaspur University. She is credentialed as a Project Management Professional (PMP®), Certified ScrumMaster (CSM), and certified in the SAFe® Agile Framework. She has worked for Fortune 100 companies like Humana and UPS.",
    ],
  },
  {
    name: "Firas Hamza",
    role: "Global CTO | AI Architect | Sovereign Transformation Leader",
    bio: "A technology architect and executive leader specializing in large-scale AI innovation and sovereign digital infrastructure. Commands a global engineering force of 200 specialists.",
    avatar: "/team/firas.webp",
    fullBio: [
      "Firas Hamza is a technology architect and executive leader specializing in the execution of large-scale AI innovation and sovereign digital infrastructure projects. As Global CTO of Samiteon, Firas commands a global engineering force of 200 specialists dedicated to converting complex boardroom visions into scalable, AI-ready realities for the world's most regulated industries.",
      "Global Execution & Scale: With a 25-year career spanning the U.S., Europe, and the Middle East, Firas is a veteran of Microsoft's Office of the CTO, where he served as a strategic advisor to over 450 global C-suite leaders. He orchestrated the modernization of Connells Group's data infrastructure—one of the largest in the world—unifying siloed environments into a streamlined, AI-fueled decision-making engine.",
      "Pioneering Sovereign AI & Governance: Firas addresses the critical need for national and corporate data autonomy. He has deployed over 100 AI projects, underpinned by rigorous governance frameworks developed for governments and multinational corporations. His work ensures AI integration is compliant, secure, and culturally aligned—applied for Tier-1 institutions like UBS, AXA, Proctor & Gamble, and FIFA.",
      "High-Impact Sector Experience: Healthcare — Architected the National Health Insurance scheme for Qatar; led 'Hospital of the Future' initiatives for HCA (190 hospitals); elevated patient experience for Cleveland Clinic and Novartis. Public Sector & Defense — Trusted advisor for UK government; served as IT Director and Pentagon Liaison during Operation Iraqi Freedom, earning the U.S. National Civil Award for Service. Infrastructure, Data and AI — Established AI & Cloud Centers of Excellence for Humana and GSK.",
      "Governance & Strategic Ecosystems: Firas serves on the Board of the Microsoft/Louisville Kentucky Digital Alliance, KentuckianaWorks, the US CIO Practicum Group, and the board of Asia Institute Crane House. Fluent in English, Arabic, and Spanish.",
    ],
  },
  {
    name: "Abhay Joshi",
    role: "VP of Sales & Operations",
    bio: "Results-driven entrepreneur with 12+ years of experience in engineering, ERP systems, software development, finance, and project management.",
    avatar: "/team/abhay.webp",
    fullBio: [
      "Abhay is a results-driven entrepreneur and seasoned professional with over 12 years of experience in engineering, ERP systems, software development, finance, and project management. As a successful car dealership owner, he combines business acumen with a passion for automobiles, leveraging technology and data-driven strategies to drive growth.",
      "With expertise in Six Sigma methodologies, he specializes in process optimization, efficiency improvement, and strategic decision-making. His deep understanding of ERP systems, financial management, and software development enables seamless business integration and operational excellence.",
      "Beyond entrepreneurship, he has led multiple large-scale projects across international markets, successfully managing teams and operations across multiple countries. His ability to navigate complex global business environments ensures smooth cross-border collaborations, compliance, and efficiency. A forward-thinking leader, he excels in bridging the gap between technology and business, ensuring sustainable success in dynamic and competitive markets.",
    ],
  },
  {
    name: "Arushi Jain",
    role: "Director of Sales & Marketing",
    bio: "Enterprise Technical Account Manager and acting Sales Leader leading strategic enterprise relationships across AI-driven, ERP-integrated, and API-based platforms.",
    avatar: "/team/arushi.webp",
    fullBio: [
      "Arushi Jain is an Enterprise Technical Account Manager and acting Sales Leader at Samiteon, where she leads strategic enterprise relationships across AI-driven, ERP-integrated, and API-based platforms. She partners with global organizations, including Flint Labs, Dell, AB InBev, Tech Mahindra, Otis, Newtek, and IPM, working closely with executive and technical stakeholders to drive adoption, expansion, and long-term customer value.",
      "With over a decade of leadership experience and more than five years in PLG-driven SaaS environments, Arushi brings deep expertise in enterprise customer strategy, post-sales execution, and revenue growth. Her work spans technical onboarding, enablement, renewals, and expansion, with a strong focus on translating complex systems into clear business outcomes.",
      "At Samiteon, Arushi serves as a trusted advisor to customers and internal teams alike, collaborating closely with Product, Engineering, and Sales to accelerate time-to-value and influence solution delivery. She also leads and mentors SDR teams supporting outbound and expansion initiatives, contributing directly to pipeline development and go-to-market execution.",
      "Known for her strategic rigor, cross-functional leadership, and consultative approach, Arushi operates at the intersection of technology, revenue, and customer trust — helping enterprises scale with confidence.",
    ],
  },
  {
    name: "Paramita",
    role: "USA Project & Client Manager",
    bio: "Process-oriented professional with 12+ years as a Business Analyst, QA Analyst, UAT Specialist, and Project Manager across multiple domains including Agile environments.",
    avatar: "/team/paramita.webp",
    fullBio: [
      "With over 12 years of hands-on experience, I am a process-oriented and highly organized professional, having worked as a Business Analyst, QA Analyst, UAT Specialist, and Project Manager across multiple domains, including Agile environments. I am an inquisitive communicator, problem solver, critical thinker, and detail-oriented visualizer with a focus on both the big picture and finer details.",
      "I believe in the importance of well-established processes for crafting better requirements throughout the Software Development Life Cycle. My work involves close collaboration with stakeholders and SMEs, covering everything from requirement gathering, creating high-level documents, quality checks, handling change requests, and overseeing UAT to providing support and handing over to clients.",
      "My diverse experience, coupled with Agile methodologies, provides me with in-depth knowledge of business process analysis, structured software development practices, and project management best practices.",
    ],
  },
  {
    name: "Salonee Dronawat",
    role: "Head of HR Operations, Tech Med & Client Relationship",
    bio: "Leads HR strategy while overseeing TechMed initiatives and nurturing key client relationships. With 10+ years in HR management dedicated to driving operational excellence.",
    avatar: "/team/salonee.webp",
    fullBio: [
      "As Head of HR Operations and TechMed division at Samiteon, Salonee leads HR strategy while overseeing our TechMed initiatives and nurturing key client relationships.",
      "With 10+ years of experience in HR management, TechMed, and client services, Salonee is dedicated to driving operational excellence and aligning our solutions with client needs.",
      "Known for a strategic and people-centered approach, they ensure seamless service delivery across all functions.",
    ],
  },
  {
    name: "Swathi",
    role: "Head of Staff Augmentation, Vendor Management & Client Relationship",
    bio: "Leads Samiteon's staffing solutions, vendor partnerships, and client relationships with 10+ years in talent acquisition and vendor management.",
    avatar: "/team/swathi.webp",
    fullBio: [
      "Swathi leads Samiteon's efforts in delivering top-tier staffing solutions, optimizing vendor partnerships, and building lasting client relationships.",
      "With 10+ years of experience in talent acquisition, vendor management, and client engagement, she is dedicated to aligning resources with client needs and driving mutual success.",
      "Known for a strategic and client-focused approach, Swathi ensures seamless service delivery and robust partnerships across all engagements.",
    ],
  },
  {
    name: "Anand Mutalik",
    role: "Customer Engagement Executive",
    bio: "Software industry veteran and serial entrepreneur with experience in building, scaling, and leading successful ventures. An evangelist championing industry disruption through emerging technologies.",
    avatar: "/team/anand.webp",
    fullBio: [
      "Anand is a software industry veteran having played many roles in his stellar career as a serial entrepreneur ranging from building and scaling, to leading, being on the board, advising and mentoring many successful ventures.",
      "An evangelist at heart, Anand is championing industry disruption through adoption of products and solutions based on emerging technologies.",
      "In his free time, Anand enjoys cooking, listening to Hindustani music and reading.",
    ],
  },
  {
    name: "Basavaraj P C",
    role: "Technical Lead Manager",
    bio: "30+ years of experience in the software industry delivering high-impact solutions across RFID systems, banking, financial applications, and agriculture technology platforms.",
    avatar: "/team/basavaraj.webp",
    fullBio: [
      "With over 30 years of experience in the software industry, I serve as a Technical Manager with a strong track record of delivering high-impact solutions across diverse domains, including RFID systems, banking and financial applications, and agriculture technology platforms.",
      "In my role, I have successfully led end-to-end project lifecycles, taking on responsibilities as both a Technical Architect and Technical Project Manager. My expertise spans solution architecture, system integration, and leading cross-functional teams to build scalable, secure, and high-performing software systems.",
      "Key areas of focus include: RFID-based application development and deployment including supply chain tracking and asset management systems; Banking and financial services platforms with experience in secure transaction systems, compliance, and multi-tier architectures; Agriculture industry solutions including field data capture, IoT integration, and farmer engagement platforms.",
      "I am passionate about bridging the gap between technology and business, aligning software solutions with strategic objectives. I bring a hands-on leadership style and a problem-solving mindset, ensuring quality delivery, optimized performance, and long-term maintainability.",
    ],
  },
  {
    name: "Somanath M",
    role: "Project Manager",
    bio: "18+ years of IT experience spanning Pre-sales, Business Development, Client Management, Product Operations, and Quality Assurance. Leads Samiteon's Fintech practice.",
    avatar: "/team/somanath.webp",
    fullBio: [
      "Somanath has 18+ years of experience in the IT Industry. He has experience across Pre-sales, Business Development, Client Management, Product Operations Support, Product Management, Business Analysis and Quality Assurance.",
      "At Samiteon, he leads our Fintech practice. He manages our client projects, drives Product development, and works across Development, Technology, User Experience, Quality and support teams to deliver superior customer experience.",
    ],
  },
  {
    name: "Sharath Chandramouli",
    role: "Project Manager",
    bio: "13+ years in IT specializing in bridging client vision and technical execution. A database expert in designing robust architectures and seamless data management.",
    avatar: "/team/sharath.webp",
    fullBio: [
      "With over 13 years of experience in IT, Sharath specializes in bridging the gap between client vision and technical execution. As a database expert, he excels in designing robust architectures, optimizing performance, and ensuring seamless data management solutions.",
      "He has a proven track record of managing offshore technical teams, fostering collaboration across time zones to deliver projects on time and within scope. His client-centric approach ensures that complex technical requirements are translated into actionable strategies, aligning seamlessly with business objectives.",
      "Combining technical depth with leadership acumen, he drives innovation, mitigates risks, and exceeds stakeholder expectations. His expertise empowers organizations to scale efficiently while maintaining operational excellence.",
    ],
  },
  {
    name: "Bhargavi B S",
    role: "Project Lead",
    bio: "7+ years in IT leading projects from planning to execution. Manages cross-functional teams with Agile methodologies across healthcare, logistics, and election systems.",
    avatar: "/team/bhargavi.webp",
    fullBio: [
      "With over 7 years of experience in the IT industry, Bhargavi B S leads projects from planning to execution, ensuring timely delivery and alignment with client goals. As a Project Lead, she manages cross-functional teams, optimizes workflows, and applies Agile methodologies to drive efficiency and quality across all phases of development.",
      "Her strengths lie in client communication, project documentation, and resource management across sectors such as healthcare, logistics, and election systems. With a strong technical foundation in full-stack development, she effectively bridges business requirements with technical execution, ensuring clarity, accountability, and consistent project success.",
    ],
  },
];

const advisors: Person[] = [
  {
    name: 'Dr. Sundeep "Sunny" Dronawat',
    role: "Advisor",
    bio: "A distinguished entrepreneur, academic, and innovator with a profound impact across various sectors. Founded and scaled POS on Cloud, which merged with Newtek in 2019.",
    avatar: "/team/sunny.webp",
    fullBio: [
      "Dr. Sundeep \"Sunny\" Dronawat is a distinguished entrepreneur, academic, and innovator with a profound impact across various sectors. He has a rich history of founding and scaling companies, notably POS on Cloud, which successfully merged with Newtek in 2019.",
      "Holding a Ph.D. in Chemical Engineering and an MBA from the University of Louisville, his expertise spans chemical to biochemical engineering, underscored by significant academic contributions as an adjunct professor at several universities.",
      "Sunny's leadership extends to chairing the Louisville Water Company and serving on the board of Jefferson Community and Technical College, demonstrating his commitment to community and technical education. His contributions have been recognized through numerous awards, including the MOSIAC AWARD for outstanding immigrant contributions and the title of Kentucky Colonel.",
    ],
  },
  {
    name: "Curtis Warfield",
    role: "Advisor",
    bio: "Accomplished executive with C-suite experience in Fortune 500 organizations. Leads Windham Advisors and serves on boards of Texas Roadhouse and Talkspace.",
    avatar: "/team/curtis.webp",
    fullBio: [
      "Curtis Warfield is an accomplished executive and entrepreneur with extensive C-suite experience in Fortune 500 organizations. He has a proven track record of transformational leadership, consistently driving performance by identifying strategic imperatives that enhance profitability and ensure long-term success.",
      "Curtis leads Windham Advisors, a private equity firm, and brings seasoned board experience from both public and private equity companies. He is recognized for delivering innovative solutions that fuel revenue growth, optimize margins, and mitigate risks.",
      "Currently, Curtis serves on the boards of Texas Roadhouse (Nasdaq: TXRH) and Talkspace (Nasdaq: TALK). His leadership across Fortune 50-250 companies includes key roles as divisional CEO and CFO. At Samiteon, Curtis leverages his deep expertise to drive growth and innovation, positioning the company as a leader in technology solutions.",
    ],
  },
];

const PER_PAGE = 4;

function ProfileModal({ person, onClose }: { person: Person; onClose: () => void }) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl ring-4 ring-blue-100 dark:ring-blue-900">
              <Image src={person.avatar} alt={person.name} fill className="object-cover object-top" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{person.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">{person.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            aria-label="Close"
          >
            <svg className="h-4 w-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div className="space-y-4 p-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {person.fullBio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
        <div className="relative mx-auto h-32 w-24 overflow-hidden rounded-2xl ring-4 ring-blue-100 dark:ring-blue-900">
          <Image src={person.avatar} alt={person.name} fill className="object-cover object-top" />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">{person.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">{person.role}</p>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">{person.bio}</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Read more
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {open && <ProfileModal person={person} onClose={() => setOpen(false)} />}
    </>
  );
}

function AdvisorCard({ person }: { person: Person }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-2xl ring-4 ring-blue-100 dark:ring-blue-900">
          <Image src={person.avatar} alt={person.name} fill className="object-cover object-top" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-slate-900 dark:text-slate-100">{person.name}</h4>
          <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">{person.role}</p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">{person.bio}</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-3 inline-flex items-center gap-1 self-start text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Read more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {open && <ProfileModal person={person} onClose={() => setOpen(false)} />}
    </>
  );
}

function ManagementCarousel() {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(team.length / PER_PAGE);
  const visible = team.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="w-full border-t border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Our People</p>
        <div className="mt-3 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Management</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 dark:text-slate-400">{page + 1} / {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Previous"
            >
              <svg className="h-4 w-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-600 bg-blue-600 shadow-sm transition hover:bg-blue-500 disabled:opacity-30"
              aria-label="Next"
            >
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <p className="mt-2 text-base text-slate-500 dark:text-slate-400">Dedicated professionals helping you succeed.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map(person => <PersonCard key={person.name} person={person} />)}
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-600"}`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* Board of Advisors */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Board of Advisors</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {advisors.map(person => <AdvisorCard key={person.name} person={person} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <div id="about">

      {/* ── Adaptable and Growing ── */}
      <section className="w-full border-b border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">About Samiteon</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl">
              Adaptable and Growing IT Services Provider
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Samiteon has experienced impressive double-digit growth for over 20 years, showcasing its
              adaptability and resilience in the IT industry. With a diverse service portfolio and a
              commitment to client satisfaction, Samiteon continues to thrive in the competitive landscape.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Adaptability</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Impressive double-digit growth underscores Samiteon's adaptability and resilience in the IT industry.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Growth</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Samiteon's dynamic scalability enables it to meet evolving client needs across diverse projects.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Adaptable growing IT team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Salesforce Expertise ── */}
      <section className="w-full bg-slate-50 px-6 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Salesforce expertise"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">CRM Excellence</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl">
              Unlocking Success with Salesforce Expertise
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              At Samiteon, we leverage our Salesforce Certified Consulting Partner status to deliver
              exceptional solutions that drive client success. With our expertise, we help businesses
              harness the full potential of the Salesforce platform.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Trusted Partner</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We provide end-to-end Salesforce solutions that optimize processes and enhance customer experiences.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Client Success</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Our client-centric approach ensures that our Salesforce solutions align with your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Management ── */}
      <ManagementCarousel />

    </div>
  );
}
