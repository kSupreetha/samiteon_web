-- ============================================================
-- Run this in your Supabase SQL Editor
-- ============================================================

CREATE TABLE team_members (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  full_bio text[] NOT NULL DEFAULT '{}',
  avatar text NOT NULL DEFAULT '/team/default.webp',
  group_name text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read team_members"
  ON team_members FOR SELECT
  USING (true);

-- ============================================================
-- Seed existing team data
-- ============================================================

INSERT INTO team_members (name, role, bio, full_bio, avatar, group_name, sort_order) VALUES

-- Board of Advisors
(
  'Dr. Sundeep "Sunny" Dronawat',
  'Advisor',
  'A distinguished entrepreneur, academic, and innovator with a profound impact across various sectors. Founded and scaled POS on Cloud, which merged with Newtek in 2019.',
  ARRAY[
    $$Dr. Sundeep "Sunny" Dronawat is a distinguished entrepreneur, academic, and innovator with a profound impact across various sectors. He has a rich history of founding and scaling companies, notably POS on Cloud, which successfully merged with Newtek in 2019.$$,
    $$Holding a Ph.D. in Chemical Engineering and an MBA from the University of Louisville, his expertise spans chemical to biochemical engineering, underscored by significant academic contributions as an adjunct professor at several universities.$$,
    $$Sunny's leadership extends to chairing the Louisville Water Company and serving on the board of Jefferson Community and Technical College, demonstrating his commitment to community and technical education. His contributions have been recognized through numerous awards, including the MOSIAC AWARD for outstanding immigrant contributions and the title of Kentucky Colonel.$$
  ],
  '/team/sunny.webp',
  'Board of Advisors',
  0
),
(
  'Curtis Warfield',
  'Advisor',
  'Accomplished executive with C-suite experience in Fortune 500 organizations. Leads Windham Advisors and serves on boards of Texas Roadhouse and Talkspace.',
  ARRAY[
    $$Curtis Warfield is an accomplished executive and entrepreneur with extensive C-suite experience in Fortune 500 organizations. He has a proven track record of transformational leadership, consistently driving performance by identifying strategic imperatives that enhance profitability and ensure long-term success.$$,
    $$Curtis leads Windham Advisors, a private equity firm, and brings seasoned board experience from both public and private equity companies. He is recognized for delivering innovative solutions that fuel revenue growth, optimize margins, and mitigate risks.$$,
    $$Currently, Curtis serves on the boards of Texas Roadhouse (Nasdaq: TXRH) and Talkspace (Nasdaq: TALK). His leadership across Fortune 50-250 companies includes key roles as divisional CEO and CFO. At Samiteon, Curtis leverages his deep expertise to drive growth and innovation, positioning the company as a leader in technology solutions.$$
  ],
  '/team/curtis.webp',
  'Board of Advisors',
  1
),

-- Leadership
(
  'Harsha Dronawat',
  'Chairperson & CEO',
  'With over two decades of hands-on experience in project and product leadership, Harsha brings a powerful blend of strategic vision, executional discipline, and technical acumen.',
  ARRAY[
    $$Harsha Dronawat is the accomplished owner and driving force behind Samiteon, LLC. With over two decades of hands-on experience in project and product leadership across industries, she brings a powerful blend of strategic vision, executional discipline, and technical acumen to every initiative.$$,
    $$Harsha leads the firm's mission to help organizations architect, build, and optimize resilient systems for today's complex business environments. Her leadership emphasizes purpose-driven development, scalable processes, and team-centric culture.$$,
    $$Harsha holds a Master of Science in Industrial Engineering from University of Louisville and MBA from Bilaspur University. She is credentialed as a Project Management Professional (PMP®), Certified ScrumMaster (CSM), and certified in the SAFe® Agile Framework. She has worked for Fortune 100 companies like Humana and UPS.$$
  ],
  '/team/harsha.webp',
  'Leadership',
  0
),
(
  'Firas Hamza',
  'Global CTO | AI Architect | Sovereign Transformation Leader',
  'A technology architect and executive leader specializing in large-scale AI innovation and sovereign digital infrastructure. Commands a global engineering force of 200 specialists.',
  ARRAY[
    $$Firas Hamza is a technology architect and executive leader specializing in the execution of large-scale AI innovation and sovereign digital infrastructure projects. As Global CTO of Samiteon, Firas commands a global engineering force of 200 specialists dedicated to converting complex boardroom visions into scalable, AI-ready realities for the world's most regulated industries.$$,
    $$Global Execution & Scale: With a 25-year career spanning the U.S., Europe, and the Middle East, Firas is a veteran of Microsoft's Office of the CTO, where he served as a strategic advisor to over 450 global C-suite leaders. He orchestrated the modernization of Connells Group's data infrastructure—one of the largest in the world—unifying siloed environments into a streamlined, AI-fueled decision-making engine.$$,
    $$Pioneering Sovereign AI & Governance: Firas addresses the critical need for national and corporate data autonomy. He has deployed over 100 AI projects, underpinned by rigorous governance frameworks developed for governments and multinational corporations. His work ensures AI integration is compliant, secure, and culturally aligned—applied for Tier-1 institutions like UBS, AXA, Proctor & Gamble, and FIFA.$$,
    $$High-Impact Sector Experience: Healthcare — Architected the National Health Insurance scheme for Qatar; led 'Hospital of the Future' initiatives for HCA (190 hospitals); elevated patient experience for Cleveland Clinic and Novartis. Public Sector & Defense — Trusted advisor for UK government; served as IT Director and Pentagon Liaison during Operation Iraqi Freedom, earning the U.S. National Civil Award for Service. Infrastructure, Data and AI — Established AI & Cloud Centers of Excellence for Humana and GSK.$$,
    $$Governance & Strategic Ecosystems: Firas serves on the Board of the Microsoft/Louisville Kentucky Digital Alliance, KentuckianaWorks, the US CIO Practicum Group, and the board of Asia Institute Crane House. Fluent in English, Arabic, and Spanish.$$
  ],
  '/team/firas.webp',
  'Leadership',
  1
),

-- HR & Operations
(
  'Abhay Joshi',
  'VP of Sales & Operations',
  'Results-driven entrepreneur with 12+ years of experience in engineering, ERP systems, software development, finance, and project management.',
  ARRAY[
    $$Abhay is a results-driven entrepreneur and seasoned professional with over 12 years of experience in engineering, ERP systems, software development, finance, and project management. As a successful car dealership owner, he combines business acumen with a passion for automobiles, leveraging technology and data-driven strategies to drive growth.$$,
    $$With expertise in Six Sigma methodologies, he specializes in process optimization, efficiency improvement, and strategic decision-making. His deep understanding of ERP systems, financial management, and software development enables seamless business integration and operational excellence.$$,
    $$Beyond entrepreneurship, he has led multiple large-scale projects across international markets, successfully managing teams and operations across multiple countries. His ability to navigate complex global business environments ensures smooth cross-border collaborations, compliance, and efficiency. A forward-thinking leader, he excels in bridging the gap between technology and business, ensuring sustainable success in dynamic and competitive markets.$$
  ],
  '/team/abhay.webp',
  'HR & Operations',
  0
),
(
  'Salonee Dronawat',
  'Head of HR Operations, Tech Med & Client Relationship',
  'Leads HR strategy while overseeing TechMed initiatives and nurturing key client relationships. With 10+ years in HR management dedicated to driving operational excellence.',
  ARRAY[
    $$As Head of HR Operations and TechMed division at Samiteon, Salonee leads HR strategy while overseeing our TechMed initiatives and nurturing key client relationships.$$,
    $$With 10+ years of experience in HR management, TechMed, and client services, Salonee is dedicated to driving operational excellence and aligning our solutions with client needs.$$,
    $$Known for a strategic and people-centered approach, they ensure seamless service delivery across all functions.$$
  ],
  '/team/salonee.webp',
  'HR & Operations',
  1
),
(
  'Swathi',
  'Head of Staff Augmentation, Vendor Management & Client Relationship',
  'Leads Samiteon''s staffing solutions, vendor partnerships, and client relationships with 10+ years in talent acquisition and vendor management.',
  ARRAY[
    $$Swathi leads Samiteon's efforts in delivering top-tier staffing solutions, optimizing vendor partnerships, and building lasting client relationships.$$,
    $$With 10+ years of experience in talent acquisition, vendor management, and client engagement, she is dedicated to aligning resources with client needs and driving mutual success.$$,
    $$Known for a strategic and client-focused approach, Swathi ensures seamless service delivery and robust partnerships across all engagements.$$
  ],
  '/team/swathi.webp',
  'HR & Operations',
  2
),

-- Sales & Marketing
(
  'Anand Mutalik',
  'Customer Engagement Executive',
  'Software industry veteran and serial entrepreneur with experience in building, scaling, and leading successful ventures. An evangelist championing industry disruption through emerging technologies.',
  ARRAY[
    $$Anand is a software industry veteran having played many roles in his stellar career as a serial entrepreneur ranging from building and scaling, to leading, being on the board, advising and mentoring many successful ventures.$$,
    $$An evangelist at heart, Anand is championing industry disruption through adoption of products and solutions based on emerging technologies.$$,
    $$In his free time, Anand enjoys cooking, listening to Hindustani music and reading.$$
  ],
  '/team/anand.webp',
  'Sales & Marketing',
  0
),
(
  'Arushi Jain',
  'Director of Sales & Marketing',
  'Enterprise Technical Account Manager and acting Sales Leader leading strategic enterprise relationships across AI-driven, ERP-integrated, and API-based platforms.',
  ARRAY[
    $$Arushi Jain is an Enterprise Technical Account Manager and acting Sales Leader at Samiteon, where she leads strategic enterprise relationships across AI-driven, ERP-integrated, and API-based platforms. She partners with global organizations, including Flint Labs, Dell, AB InBev, Tech Mahindra, Otis, Newtek, and IPM, working closely with executive and technical stakeholders to drive adoption, expansion, and long-term customer value.$$,
    $$With over a decade of leadership experience and more than five years in PLG-driven SaaS environments, Arushi brings deep expertise in enterprise customer strategy, post-sales execution, and revenue growth. Her work spans technical onboarding, enablement, renewals, and expansion, with a strong focus on translating complex systems into clear business outcomes.$$,
    $$At Samiteon, Arushi serves as a trusted advisor to customers and internal teams alike, collaborating closely with Product, Engineering, and Sales to accelerate time-to-value and influence solution delivery. She also leads and mentors SDR teams supporting outbound and expansion initiatives, contributing directly to pipeline development and go-to-market execution.$$,
    $$Known for her strategic rigor, cross-functional leadership, and consultative approach, Arushi operates at the intersection of technology, revenue, and customer trust — helping enterprises scale with confidence.$$
  ],
  '/team/arushi.webp',
  'Sales & Marketing',
  1
),

-- Technology
(
  'Paramita',
  'USA Project & Client Manager',
  'Process-oriented professional with 12+ years as a Business Analyst, QA Analyst, UAT Specialist, and Project Manager across multiple domains including Agile environments.',
  ARRAY[
    $$With over 12 years of hands-on experience, I am a process-oriented and highly organized professional, having worked as a Business Analyst, QA Analyst, UAT Specialist, and Project Manager across multiple domains, including Agile environments. I am an inquisitive communicator, problem solver, critical thinker, and detail-oriented visualizer with a focus on both the big picture and finer details.$$,
    $$I believe in the importance of well-established processes for crafting better requirements throughout the Software Development Life Cycle. My work involves close collaboration with stakeholders and SMEs, covering everything from requirement gathering, creating high-level documents, quality checks, handling change requests, and overseeing UAT to providing support and handing over to clients.$$,
    $$My diverse experience, coupled with Agile methodologies, provides me with in-depth knowledge of business process analysis, structured software development practices, and project management best practices.$$
  ],
  '/team/paramita.webp',
  'Technology',
  0
),
(
  'Basavaraj P C',
  'Technical Lead Manager',
  '30+ years of experience in the software industry delivering high-impact solutions across RFID systems, banking, financial applications, and agriculture technology platforms.',
  ARRAY[
    $$With over 30 years of experience in the software industry, I serve as a Technical Manager with a strong track record of delivering high-impact solutions across diverse domains, including RFID systems, banking and financial applications, and agriculture technology platforms.$$,
    $$In my role, I have successfully led end-to-end project lifecycles, taking on responsibilities as both a Technical Architect and Technical Project Manager. My expertise spans solution architecture, system integration, and leading cross-functional teams to build scalable, secure, and high-performing software systems.$$,
    $$Key areas of focus include: RFID-based application development and deployment including supply chain tracking and asset management systems; Banking and financial services platforms with experience in secure transaction systems, compliance, and multi-tier architectures; Agriculture industry solutions including field data capture, IoT integration, and farmer engagement platforms.$$,
    $$I am passionate about bridging the gap between technology and business, aligning software solutions with strategic objectives. I bring a hands-on leadership style and a problem-solving mindset, ensuring quality delivery, optimized performance, and long-term maintainability.$$
  ],
  '/team/basavaraj.webp',
  'Technology',
  1
),
(
  'Somanath M',
  'Project Manager',
  '18+ years of IT experience spanning Pre-sales, Business Development, Client Management, Product Operations, and Quality Assurance. Leads Samiteon''s Fintech practice.',
  ARRAY[
    $$Somanath has 18+ years of experience in the IT Industry. He has experience across Pre-sales, Business Development, Client Management, Product Operations Support, Product Management, Business Analysis and Quality Assurance.$$,
    $$At Samiteon, he leads our Fintech practice. He manages our client projects, drives Product development, and works across Development, Technology, User Experience, Quality and support teams to deliver superior customer experience.$$
  ],
  '/team/somanath.webp',
  'Technology',
  2
),
(
  'Sharath Chandramouli',
  'Project Manager',
  '13+ years in IT specializing in bridging client vision and technical execution. A database expert in designing robust architectures and seamless data management.',
  ARRAY[
    $$With over 13 years of experience in IT, Sharath specializes in bridging the gap between client vision and technical execution. As a database expert, he excels in designing robust architectures, optimizing performance, and ensuring seamless data management solutions.$$,
    $$He has a proven track record of managing offshore technical teams, fostering collaboration across time zones to deliver projects on time and within scope. His client-centric approach ensures that complex technical requirements are translated into actionable strategies, aligning seamlessly with business objectives.$$,
    $$Combining technical depth with leadership acumen, he drives innovation, mitigates risks, and exceeds stakeholder expectations. His expertise empowers organizations to scale efficiently while maintaining operational excellence.$$
  ],
  '/team/sharath.webp',
  'Technology',
  3
),
(
  'Bhargavi B S',
  'Project Lead',
  '7+ years in IT leading projects from planning to execution. Manages cross-functional teams with Agile methodologies across healthcare, logistics, and election systems.',
  ARRAY[
    $$With over 7 years of experience in the IT industry, Bhargavi B S leads projects from planning to execution, ensuring timely delivery and alignment with client goals. As a Project Lead, she manages cross-functional teams, optimizes workflows, and applies Agile methodologies to drive efficiency and quality across all phases of development.$$,
    $$Her strengths lie in client communication, project documentation, and resource management across sectors such as healthcare, logistics, and election systems. With a strong technical foundation in full-stack development, she effectively bridges business requirements with technical execution, ensuring clarity, accountability, and consistent project success.$$
  ],
  '/team/bhargavi.webp',
  'Technology',
  4
);
