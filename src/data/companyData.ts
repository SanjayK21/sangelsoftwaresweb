import { ServiceItem, IndustryItem, CaseStudy, InsightArticle, JobOpening, EngagementOption, ProductItem, ServiceCategory, PortfolioProject } from '../types';

export const COMPANY_INFO = {
  name: "Sangel Softwares Pvt. Ltd.",
  shortName: "Sangel Softwares",
  email: "contact@sangelsoftwares.com",
  inquiryEmail: "contact@sangelsoftwares.com",
  tagline: "Technology. Creativity. Intelligence. Growth.",
  secondaryTagline: "Building Smarter Digital Businesses with AI, Software & Cloud",
  positioning: "Sangel Softwares helps businesses build, modernize and grow through AI, custom software, cloud infrastructure, digital marketing and industry-specific software products.",
  differentiator: "A complete technology and growth partner that combines enterprise engineering expertise with AI automation, creative branding, digital infrastructure and proprietary software products for startups, SMEs, institutions and global enterprises.",
  vision: "To become a trusted technology and growth partner for businesses globally by delivering innovative, scalable, AI-enabled digital solutions, creative branding, and industry-specific products that drive real commercial efficiency and lasting growth.",
  missionPillars: [
    { title: "Digitize Manual Processes", desc: "Automate legacy operational bottlenecks with resilient modern workflows and mobile applications." },
    { title: "Modernize Legacy Applications", desc: "De-risk monolithic systems via cloud-native microservices, modern databases, and modular APIs." },
    { title: "Adopt AI & Intelligent Automation", desc: "Embed pragmatic GenAI, cognitive agents, and predictive models into core business workflows." },
    { title: "Build Scalable Software Products", desc: "Engineer proprietary and client-tailored SaaS products designed for vertical industry scale." },
    { title: "Empower Brand & Digital Presence", desc: "Craft distinctive corporate branding, UI/UX design, and ethical SEO/SMO that drives qualified inbound leads." },
    { title: "Provide Rock-Solid Infrastructure", desc: "Supply reliable domain registration, high-speed cloud hosting, business email, and 24/7 server management." },
    { title: "Ensure Delivery Rigor & Quality", desc: "Elevate release velocity, automated QA, and security posture with zero-defect engineering governance." },
    { title: "Enable Flexible Talent Scaling", desc: "Provide vetted senior developer pods and dedicated teams ready to deploy in under 5 business days." }
  ],
  growthNarrative: [
    { phase: "Phase 1", title: "Enterprise Services & Digital Infrastructure", focus: "Full-stack development, cloud modernization, domain/hosting infrastructure, and specialized BFSI solutions." },
    { phase: "Phase 2", title: "Creative Branding & Growth Marketing", focus: "Corporate identity, UI/UX, ethical SEO, organic SMO, and conversion-optimized web properties." },
    { phase: "Phase 3", title: "Proprietary Software Products", focus: "Vertical SaaS platforms: Sangel SolarCare, Sangel InstituteOne, Sangel FieldOps, and Sangel BusinessOne." },
    { phase: "Phase 4", title: "Enterprise AI Platforms & Global Reach", focus: "Autonomous agentic business logic, DocAI extraction engines, and international delivery centers." }
  ],
  locations: {
    indiaHubs: [
      { city: "Bengaluru", role: "Engineering & AI R&D Center", state: "Karnataka" },
      { city: "Mumbai", role: "BFSI & FinTech Client Executive Office", state: "Maharashtra" },
      { city: "Pune", role: "Enterprise Cloud & DevOps Center", state: "Maharashtra" },
      { city: "Delhi NCR", role: "Corporate Strategy & Digital Growth", state: "National Capital Region" },
      { city: "Hyderabad", role: "Data Platforms & Quality Engineering", state: "Telangana" },
      { city: "Ahmedabad", role: "SME & Manufacturing Tech Hub", state: "Gujarat" },
      { city: "Jaipur", role: "Delivery & Education Solutions Hub", state: "Rajasthan" }
    ],
    globalExpansion: [
      { country: "United States", regions: "New York & San Francisco (Inquiry Reps)" },
      { country: "United Kingdom", regions: "London Financial District" },
      { country: "Middle East", regions: "Dubai & Riyadh Tech Hubs" },
      { country: "Singapore", regions: "Southeast Asia Regional Delivery" },
      { country: "Australia", regions: "Sydney & Melbourne" }
    ]
  },
  stats: [
    { value: "99.98%", label: "System Availability SLA", sub: "For managed cloud environments" },
    { value: "40%", label: "Faster Time-to-Market", sub: "Driven by AI-augmented engineering pods" },
    { value: "14", label: "Core Service Practices", sub: "From domain & hosting to AI and branding" },
    { value: "7", label: "Proprietary Software Products", sub: "Covering solar, institutes, field ops & ERP" }
  ]
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { 
    id: "cat-project-mgmt", 
    code: "01", 
    name: "Project Management & Delivery", 
    shortDesc: "Agile PMO, Scrum delivery, sprint velocity forecasting, technical program management (TPM) & rapid project recovery.", 
    servicesCount: 4 
  },
  { 
    id: "cat-design-dev", 
    code: "02", 
    name: "Design & Development", 
    shortDesc: "Corporate websites, bespoke enterprise applications, mobile apps, artificial intelligence, ERP workflows & automated QA testing.", 
    servicesCount: 6 
  },
  { 
    id: "cat-branding-marketing", 
    code: "03", 
    name: "Branding & Digital Marketing", 
    shortDesc: "Corporate brand strategy, UI/UX systems, technical SEO, organic SMO, performance ads, Email Marketing & WhatsApp / promotional messaging.", 
    servicesCount: 6 
  },
  { 
    id: "cat-domain-infra", 
    code: "04", 
    name: "Domain, Hosting & Infra..", 
    shortDesc: "Domain registration & DNS, high-speed cloud VPS, corporate business email (Google/M365), SSL certificates & cloud DevOps.", 
    servicesCount: 4 
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Project Management & Delivery
  {
    id: "project-management-pmo",
    verticalId: "cat-project-mgmt",
    verticalName: "Project Management & Delivery",
    title: "Enterprise Project Management & Agile PMO",
    tagline: "Disciplined Scrum/Kanban execution, sprint velocity forecasting, and PMO delivery governance.",
    description: "Transform uncertain software roadmaps into high-predictability release engines. Sangel Softwares provides end-to-end Enterprise Project Management, PMO setup, Agile delivery frameworks, sprint governance, and transparent stakeholder reporting. We eliminate delivery ambiguity and align engineering velocity directly with C-suite business milestones.",
    keyDeliverables: [
      "Agile PMO setup, Scrum/Kanban governance frameworks, and sprint cadence establishment",
      "Sprint velocity forecasting, milestone tracking, and burn-up / burn-down telemetry",
      "Jira, Linear, ClickUp, and Azure DevOps enterprise board configuration and workflow automation",
      "Risk, Assumptions, Issues, Dependencies (RAID) register management with real-time mitigation",
      "Executive steering committee dashboards and transparent C-level progress reporting"
    ],
    technologies: ["Jira Align", "Linear", "Azure DevOps", "Confluence", "Miro", "Scrum Framework", "Kanban", "SAFe", "Asana"],
    businessOutcomes: ["≥ 94% sprint milestone commitment achievement rate", "40% reduction in scope creep and delivery delays", "100% transparency between engineering hours and executive deliverables"],
    targetSectors: ["Enterprises", "Scaleups", "SaaS Founders", "Public Sector", "Commercial Leaders"]
  },
  {
    id: "technical-program-mgmt",
    verticalId: "cat-project-mgmt",
    verticalName: "Project Management & Delivery",
    title: "Technical Program Management (TPM) & Multi-Stream Delivery",
    tagline: "Orchestrate complex distributed releases, cross-vendor engineering pods, and architecture dependencies.",
    description: "Navigating multi-system digital transformations requires senior technical program leadership. Our Technical Program Managers (TPMs) bridge deep architectural engineering with cross-functional program governance. We manage critical path dependencies, cross-vendor deliverables, release train cutovers, and regulatory milestones across distributed teams.",
    keyDeliverables: [
      "Cross-functional release train management and multi-stream technical program alignment",
      "API, database, and system dependency mapping preventing integration bottlenecks",
      "Vendor and third-party delivery partner governance with contractual SLA enforcement",
      "Zero-downtime cutover planning, rollback playbooks, and disaster recovery rehearsal",
      "Compliance & security milestone tracking for ISO 27001, SOC 2, and data protection audits"
    ],
    technologies: ["Release Train Engineering", "Dependency Mapping", "GitLab CI/CD", "AWS/GCP Cloud", "Slack/Teams", "Enterprise Architecture Governance"],
    businessOutcomes: ["Zero critical cutover delays during core production releases", "35% faster multi-team dependency resolution", "Complete cross-vendor accountability and auditability"],
    targetSectors: ["Healthcare", "Telecom & Cloud", "Large Enterprises", "Multi-National Teams"]
  },
  {
    id: "project-turnaround-recovery",
    verticalId: "cat-project-mgmt",
    verticalName: "Project Management & Delivery",
    title: "Project Recovery, Scope Audit & Delivery Turnaround",
    tagline: "Rapid diagnostic triage and turnaround for stalled, over-budget, or troubled software initiatives.",
    description: "When critical software projects miss deadlines, experience runaway scope, or suffer from architectural stagnation, Sangel Softwares steps in with rapid-response turnaround leadership. We conduct an intensive 10-day diagnostic of codebase health, team velocity, and scope viability to restore momentum and achieve predictable delivery.",
    keyDeliverables: [
      "10-day rapid diagnostic audit covering architecture, code debt, and backlog health",
      "Scope re-baselining and MoSCoW prioritization to save critical launch dates",
      "Sprint burn-down stabilization and velocity rescue action plan",
      "Technical debt remediation roadmap without stopping customer-facing feature work",
      "Stakeholder trust restoration and transparent recovery milestones"
    ],
    technologies: ["Project Diagnostic Audits", "Code Quality Profiling", "MoSCoW Prioritization", "Agile Retrospectives", "Git Analytics"],
    businessOutcomes: ["Stalled projects unblocked and shipping within first 21 days", "Average 30% reduction in accumulated tech debt tickets", "Realigned budgets preventing cost overruns"],
    targetSectors: ["Mid-Market Enterprises", "Funded Startups", "Government & Education", "Manufacturing"]
  },
  {
    id: "resource-augmentation",
    verticalId: "cat-project-mgmt",
    verticalName: "Project Management & Delivery",
    title: "Dedicated Delivery Pods & Resource Augmentation",
    tagline: "Vetted senior project managers, tech leads, and specialized engineering pods ready in 5 business days.",
    description: "Bridge critical delivery and technical capability gaps. We deploy seasoned Delivery Directors, Scrum Masters, Tech Leads, and full-stack engineering pods who integrate directly into your sprint cycles, providing immediate execution velocity and architectural rigor.",
    keyDeliverables: [
      "Dedicated Scrum Masters, Technical Program Managers, and Delivery Leads",
      "Pre-vetted senior software engineers (Top 3% technical assessment tier)",
      "Flexible engagement models: Monthly Pod Retainer, Dedicated Team, or Milestone-Based Delivery",
      "Direct integration into your Slack/Teams and Jira workflows",
      "Overlap with US, UK, Middle East, and Indian business hours"
    ],
    technologies: ["React/Node", "Python/AI", "Go", "AWS/GCP DevOps", "Flutter", "Agile Pod Governance"],
    businessOutcomes: ["Onboarding time reduced from 90 days to under 5 days", "Up to 50% cost savings compared to in-house hiring", "Instant elasticity to scale delivery capacity up or down"],
    targetSectors: ["Scaleups", "Global Enterprises", "SaaS Founders", "Digital Product Companies"]
  },

  // 2. Design & Development
  {
    id: "website-design-dev",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "Corporate Website Design, Portals & E-Commerce",
    tagline: "High-converting, mobile-first websites and customer portals engineered for speed, SEO, and engagement.",
    description: "Your digital storefront is your primary growth driver. We design and build responsive corporate websites, high-conversion e-commerce stores, custom WordPress platforms, customer portals, and appointment systems that load in milliseconds and convert visitors into qualified business leads.",
    keyDeliverables: [
      "Bespoke corporate website development and startup launch platforms",
      "E-commerce website development with Razorpay, Stripe, and UPI payment gateways",
      "Custom WordPress and headless CMS implementation with intuitive admin controls",
      "Customer and partner self-service portals, booking and appointment scheduling systems",
      "Core Web Vitals optimization, mobile accessibility compliance, and ongoing maintenance"
    ],
    technologies: ["React", "Next.js", "WordPress", "Tailwind CSS", "WooCommerce", "Shopify", "Node.js", "TypeScript"],
    businessOutcomes: ["3.5x increase in visitor-to-inquiry conversion rate", "100/100 Google Lighthouse mobile performance score", "Seamless multi-device responsiveness"],
    targetSectors: ["Corporate Enterprises", "Startups", "D2C Brands", "Healthcare", "Consultancies"]
  },
  {
    id: "custom-software",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "Custom Software & Enterprise Web Applications",
    tagline: "Bespoke business platforms engineered for operational efficiency, automation, and infinite scale.",
    description: "We architect and develop robust, tailored business applications that replace fragmented spreadsheets and legacy tools with unified digital workflows. From custom CRMs, billing and invoicing systems, to multi-tier web applications and SaaS platforms.",
    keyDeliverables: [
      "Custom business workflow, approval, and document routing systems",
      "Web application development using modern microservices and API-first design",
      "Custom CRM, billing, invoicing, and inventory management applications",
      "Multi-tenant SaaS application development with role-based access control (RBAC)",
      "Legacy application modernization, database migration, and system maintenance"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker"],
    businessOutcomes: ["80% reduction in manual data re-entry", "Enterprise scalability supporting 10x transaction growth", "100% intellectual property ownership transferred to client"],
    targetSectors: ["Enterprises", "Manufacturing", "Healthcare", "SMEs", "Supply Chain"]
  },
  {
    id: "mobile-development",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "Mobile Application Development (iOS & Android)",
    tagline: "High-performance mobile applications engineered for field operations, customer self-service, and scale.",
    description: "We build intuitive, fluid mobile applications that delight consumer users and power critical field workforce operations. From customer self-service and coaching institute apps to field service operations and solar cleaning management companion apps.",
    keyDeliverables: [
      "Native Android (Kotlin) and iOS (Swift) mobile applications",
      "Cross-platform applications using Flutter and React Native for shared codebases",
      "Field workforce, technician scheduling, and offline-first mobile apps",
      "Institute student portals and solar operations field tracking applications",
      "Secure REST/GraphQL mobile backends, push notifications, and App Store / Play Store deployment"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "Fastlane"],
    businessOutcomes: ["50% faster dual-platform delivery using shared codebase", "4.8+ star app store user satisfaction rating", "Reliable offline data synchronization in zero-network zones"],
    targetSectors: ["Solar Operations", "Educational Institutes", "Field Teams", "Retail & D2C"]
  },
  {
    id: "ai-genai",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "Artificial Intelligence, GenAI & Process Automation",
    tagline: "Operationalize Generative AI, enterprise RAG, and autonomous workflow agents with strict enterprise privacy.",
    description: "Moving beyond toy chatbots, Sangel Softwares implements pragmatic AI solutions that deliver measurable ROI. We build private RAG systems connected to internal knowledge bases, intelligent document processing pipelines, autonomous business agents, and predictive analytics engines—always with strict data security and human-in-the-loop safeguards.",
    keyDeliverables: [
      "Enterprise Private RAG systems connecting internal company documents and databases",
      "AI chatbots, virtual assistants, and customer support automation agents",
      "Intelligent Document Processing (IDP) for invoices, KYC, contracts, and receipts",
      "Autonomous workflow agents for data extraction, verification, and report generation",
      "Predictive analytics, anomaly detection, and AI implementation advisory"
    ],
    technologies: ["PyTorch", "LangChain", "Vector DBs (Pinecone/Milvus)", "FastAPI", "Gemini API", "HuggingFace", "Python"],
    businessOutcomes: ["65% faster document turnaround times", "Zero sensitive data leakage to public models", "Instant natural-language queries across terabytes of enterprise data"],
    targetSectors: ["Legal & Compliance", "Healthcare", "Manufacturing", "Solar & Institutes", "Logistics"]
  },
  {
    id: "erp-solutions",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "ERP Systems & Business Process Automation",
    tagline: "End-to-end ERP customization, inventory automation, and manufacturing operations intelligence.",
    description: "Whether customizing open platforms or engineering bespoke ERP modules, we unify inventory, financials, human capital, procurement, and field supply chains into a single source of truth with real-time statutory compliance.",
    keyDeliverables: [
      "Custom ERP module development (Finance, Supply Chain, HR, Production, Field Operations)",
      "Legacy data migration, schema normalization, and ERP system reconciliation",
      "Real-time bidirectional sync with eCommerce storefronts, CRMs, and warehouse systems",
      "Automated GST, TDS, e-Invoicing, and Indian statutory tax compliance modules",
      "Management Information Systems (MIS) and executive business intelligence dashboards"
    ],
    technologies: ["PostgreSQL", "Python", "Odoo Framework", "REST APIs", "Kafka", "Next.js", "PowerBI"],
    businessOutcomes: ["Unified real-time visibility across physical warehouses and field locations", "Zero-error tax compliance reporting", "99.9% inventory tracking precision"],
    targetSectors: ["Manufacturing", "Distribution & Logistics", "Solar Operations", "Wholesale & Retail"]
  },
  {
    id: "qa-test-automation",
    verticalId: "cat-design-dev",
    verticalName: "Design & Development",
    title: "Quality Assurance & Automated Test Engineering",
    tagline: "Bulletproof software quality through continuous automated regression, load, and security testing.",
    description: "Eliminate production regressions and release with confidence. We implement end-to-end automated testing pipelines covering UI, API, performance, and security testing before code reaches users.",
    keyDeliverables: [
      "Automated test suites utilizing Playwright, Cypress, and Selenium",
      "API contract testing and mocking frameworks with Postman/Newman",
      "High-load stress and endurance testing simulating 100k+ concurrent users",
      "AI-assisted test-case generation and automated quality gates blocking defective PRs",
      "User Acceptance Testing (UAT) facilitation and defect lifecycle tracking"
    ],
    technologies: ["Playwright", "Cypress", "JMeter", "k6", "Postman", "GitHub Actions"],
    businessOutcomes: ["90% reduction in pre-release manual QA hours", "Zero critical defects escaping into production", "Release cycle frequency accelerated from monthly to daily"],
    targetSectors: ["SaaS Startups", "Enterprise Web Apps", "Mobile Apps", "Corporate Platforms"]
  },

  // 3. Branding & Digital Marketing
  {
    id: "branding-creative",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "Brand Strategy, Corporate Identity & UI/UX Design",
    tagline: "Strategic brand positioning, distinctive visual identities, and conversion-focused UI/UX design.",
    description: "Stand out in crowded markets. Sangel Softwares creates comprehensive brand systems—from brand strategy, positioning, and logo design to complete corporate visual identities, company profiles, brochures, packaging, UI/UX design for web/mobile apps, and investor pitch decks.",
    keyDeliverables: [
      "Brand strategy, market positioning, and brand guidelines documentation",
      "Corporate logo design, typography, color systems, and stationery (cards, letterheads)",
      "Company profiles, sales brochures, catalogues, and corporate presentation decks",
      "Website and mobile application UI/UX design (Figma wireframes & interactive prototypes)",
      "Marketing banners, social media creatives, packaging design, and brand refresh packages"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Illustrator", "Photoshop", "Design Systems", "Prototyping"],
    businessOutcomes: ["Unified corporate credibility across all customer touchpoints", "Higher conversion rates on sales collateral and pitch presentations", "Ready-to-use brand asset repository for internal teams"],
    targetSectors: ["Startups", "SMEs", "Established Enterprises", "Institutes", "Product Companies"]
  },
  {
    id: "seo-services",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "Search Engine Optimization (SEO) & Technical Visibility",
    tagline: "Ethical, data-backed SEO that builds sustainable organic search rankings and qualified inbound leads.",
    description: "Be discovered by buyers actively searching for your services. We execute comprehensive technical, on-page, and local SEO. From site architecture audits and Core Web Vitals optimization to schema markup, keyword mapping, Google Business Profile optimization, and content strategy. We focus on measurable business KPIs and qualified organic traffic.",
    keyDeliverables: [
      "Comprehensive SEO audit, technical health analysis, and crawlability remediation",
      "Keyword research, search-intent mapping, and on-page metadata optimization",
      "Technical SEO: XML sitemaps, robots.txt, canonical tags, and Core Web Vitals speed tuning",
      "Schema.org structured data (Organization, Service, Article, Product, Breadcrumbs)",
      "Local SEO and Google Business Profile optimization for regional search dominance",
      "Content SEO, e-commerce SEO, international SEO, and monthly transparent ranking reports"
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "Schema.org JSON-LD", "Ahrefs/Semrush", "PageSpeed Insights", "Screaming Frog"],
    businessOutcomes: ["Sustainable 150%+ growth in qualified organic search impressions", "Zero black-hat risk with 100% white-hat ethical optimization", "Dominance in high-intent commercial keyword rankings"],
    targetSectors: ["B2B Services", "SMEs", "E-Commerce", "Educational Institutes", "Local Service Providers"]
  },
  {
    id: "smo-digital-marketing",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "Social Media Optimization (SMO) & Organic B2B Growth",
    tagline: "Build an active B2B presence, nurture brand awareness, and drive measurable community engagement.",
    description: "Turn social platforms into inbound customer engines. Sangel Softwares manages organic social media optimization (LinkedIn, Instagram, Facebook), content calendar development, creative banners, brand awareness campaigns, and thought leadership positioning with complete transparency.",
    keyDeliverables: [
      "Social media profile setup, audit, and branding optimization (LinkedIn Company Page, Instagram, Meta)",
      "Monthly content calendar, editorial copywriting, and custom branded creative graphics",
      "Organic community engagement, industry thought leadership, and brand authority building",
      "Company page executive profiling and employee advocacy frameworks",
      "Clear monthly analytics reporting with reach, engagement, and profile conversion metrics"
    ],
    technologies: ["LinkedIn Company Manager", "Meta Business Suite", "Canva/Figma", "Google Analytics 4", "Brand Asset Management"],
    businessOutcomes: ["Consistent high-authority brand footprint across professional networks", "Growing organic follower base of decision-makers and business buyers", "Measurable inbound referral traffic to corporate website"],
    targetSectors: ["B2B IT Companies", "SMEs", "Educational Institutes", "Solar Providers", "Professional Practices"]
  },
  {
    id: "performance-marketing",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "Paid Campaigns, Performance Ads & Conversion Funnels",
    tagline: "High-intent Google Ads, B2B LinkedIn campaigns, and landing page conversion rate optimization.",
    description: "Accelerate qualified lead acquisition with targeted paid advertising. We manage campaigns across Google Search, Display, LinkedIn, and Meta with strict budget transparency, ensuring advertising spend is always reported distinctly from management fees.",
    keyDeliverables: [
      "High-intent Google Search advertising targeting high-commercial keyword queries",
      "LinkedIn B2B sponsored content and lead generation forms targeting verified titles",
      "High-converting landing page design and A/B split testing (CRO)",
      "Retargeting funnels across display networks and social channels",
      "Conversion tracking, UTM tagging, and end-to-end ROI attribution analytics"
    ],
    technologies: ["Google Ads", "LinkedIn Campaign Manager", "Meta Ads", "Google Tag Manager", "Unbounce/Webflow", "GA4"],
    businessOutcomes: ["Lower cost-per-qualified-lead (CPL)", "Zero blended agency markups on media spend", "Predictable weekly inbound sales opportunity pipeline"],
    targetSectors: ["B2B SaaS", "Corporate IT Services", "High-Ticket Consultancies", "Training Academies"]
  },
  {
    id: "email-marketing",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "Email Marketing & Automated Drip Campaigns",
    tagline: "Automated drip sequences, responsive newsletter design, CRM segmentation & 99%+ deliverability.",
    description: "Engage, nurture, and convert prospects into high-value enterprise accounts with data-driven Email Marketing. Sangel Softwares creates custom responsive email templates, establishes automated drip campaigns, segments subscriber lists, configures strict SPF, DKIM, and DMARC DNS authentication, and provides deep conversion analytics to maximize marketing ROI.",
    keyDeliverables: [
      "Custom responsive HTML email template design and mobile-optimized corporate newsletters",
      "Automated lead nurturing workflows, multi-stage drip sequences & lifecycle onboarding triggers",
      "CRM list segmentation, subscriber tagging, lead scoring & bounce/spam list sanitation",
      "Dedicated sending infrastructure, IP warmup & strict SPF, DKIM, DMARC security authentication",
      "A/B testing for subject lines, copy, send-time optimization & conversion funnel tracking",
      "Transparent monthly analytics reporting with open rates, click-through rates (CTR), and revenue attribution"
    ],
    technologies: ["Mailchimp", "SendGrid", "Brevo (Sendinblue)", "ActiveCampaign", "HubSpot", "Klaviyo", "HTML5 Email Architecture"],
    businessOutcomes: ["Up to 38% increase in email open rates with verified deliverability", "4x higher lead conversion through automated drip sequences", "Zero domain blacklisting with authenticated SPF/DKIM/DMARC records"],
    targetSectors: ["B2B Enterprises", "E-Commerce", "SaaS Companies", "Educational Institutes", "Real Estate & Agencies"]
  },
  {
    id: "whatsapp-promotional-marketing",
    verticalId: "cat-branding-marketing",
    verticalName: "Branding & Digital Marketing",
    title: "WhatsApp & Promotional Message Marketing",
    tagline: "Official Meta WhatsApp Business API broadcasts, RCS/SMS campaigns, and automated conversational bots.",
    description: "Reach your customers instantly on the messaging channels they check every minute. Sangel Softwares deploys official Meta WhatsApp Business API solutions, green tick verification assistance, promotional broadcast marketing, interactive CTA buttons, 24/7 automated chatbot funnels, and bulk promotional SMS/RCS to drive immediate conversions.",
    keyDeliverables: [
      "Official WhatsApp Business API setup, Meta Business verification & Green Tick guidance",
      "High-converting promotional broadcast campaigns with interactive CTA buttons & media cards",
      "Automated 24/7 conversational chatbots for lead capture, FAQs, and appointment booking",
      "Bulk promotional SMS and RCS (Rich Communication Services) message broadcasts",
      "CRM & ERP webhook integrations for automated order updates, billing alerts & event reminders",
      "Strict opt-in compliance, template approval handling & real-time delivery telemetry"
    ],
    technologies: ["WhatsApp Business API", "Meta Graph API", "Twilio", "Wati", "Gupshup", "RCS Messaging", "Webhooks"],
    businessOutcomes: ["Up to 98% message open rate and 45% click-through rate on WhatsApp campaigns", "Sub-5-second automated response to incoming customer inquiries", "3x higher lead conversion compared to standard cold outbound channels"],
    targetSectors: ["Retail & E-Commerce", "Coaching Institutes & EdTech", "Healthcare & Clinics", "Real Estate", "B2B Sales"]
  },

  // 4. Domain, Hosting & Infra..
  {
    id: "domain-hosting-infra",
    verticalId: "cat-domain-infra",
    verticalName: "Domain, Hosting & Infra..",
    title: "Domain Registration, DNS Management & SSL Security",
    tagline: "Global domain registration, verified DNS records, SSL certificates, and zero-downtime transfers.",
    description: "Secure your brand's digital foundation. Sangel Softwares provides end-to-end domain services—from registration across .com, .in, .org, and custom extensions to DNS configuration, DNSSEC, SSL/TLS certificates, and seamless domain transfers with genuine registrar integrations.",
    keyDeliverables: [
      "Domain registration, renewal, transfer (.com, .in, .co, .org, and global TLD extensions)",
      "DNS record management (A, CNAME, MX, TXT, SRV, CAA, SPF, DKIM, DMARC)",
      "SSL certificate procurement, automatic renewal, and HTTPS encryption hardening",
      "Cloudflare CDN integration, edge caching, and DDoS attack mitigation",
      "Domain expiration monitoring and proactive portfolio renewals"
    ],
    technologies: ["Domain Registrar APIs", "Cloudflare DNS", "Let's Encrypt", "DigiCert", "DNSSEC", "SSL/TLS"],
    businessOutcomes: ["100% domain asset security and DNS resolution reliability", "A+ SSL Labs security grading", "Zero domain expiration lapses"],
    targetSectors: ["Startups", "SMEs", "Enterprises", "Institutes", "E-Commerce Brands"]
  },
  {
    id: "cloud-vps-hosting",
    verticalId: "cat-domain-infra",
    verticalName: "Domain, Hosting & Infra..",
    title: "High-Speed Cloud VPS & Managed Web Hosting",
    tagline: "High-performance NVMe cloud VPS, WordPress hosting, and isolated server environments.",
    description: "Experience blazing fast load times and guaranteed compute resources. We provision and optimize high-speed cloud VPS, dedicated WordPress hosting, and cloud servers with automated daily backups, server monitoring, and speed tuning.",
    keyDeliverables: [
      "High-performance NVMe Linux VPS hosting with dedicated CPU & RAM resources",
      "Optimized WordPress hosting with Redis object caching and PHP-FPM acceleration",
      "Automated off-site daily backups and one-click snapshot restoration",
      "Server resource telemetry, load monitoring, and proactive alert thresholds",
      "Website migration from existing hosts with zero email or portal downtime"
    ],
    technologies: ["Linux VPS", "Nginx", "Apache", "PHP-FPM", "Redis Cache", "cPanel/Plesk", "NVMe SSD"],
    businessOutcomes: ["99.98% server availability guarantee", "Sub-second server response times (TTFB < 200ms)", "Instant disaster recovery via automated snapshots"],
    targetSectors: ["E-Commerce", "High-Traffic Portals", "Corporate Websites", "SaaS Providers"]
  },
  {
    id: "business-email-suite",
    verticalId: "cat-domain-infra",
    verticalName: "Domain, Hosting & Infra..",
    title: "Corporate Business Email (Google Workspace & M365)",
    tagline: "Professional corporate email addresses on your custom domain with complete security hardening.",
    description: "Eliminate unprofessional free email addresses. Sangel Softwares sets up, migrates, and secures enterprise business email suites on Google Workspace and Microsoft 365. We configure SPF, DKIM, and DMARC to guarantee 100% inbox delivery and protect against phishing.",
    keyDeliverables: [
      "Google Workspace and Microsoft 365 corporate account provisioning and license management",
      "Custom domain email addresses (e.g., name@yourcompany.com) with alias routing",
      "Zero-data-loss email migration from cPanel, Webmail, or legacy mail servers",
      "Strict SPF, DKIM, and DMARC security DNS records preventing spoofing and spam flags",
      "Multi-factor authentication (MFA) enforcement and mobile device sync assistance"
    ],
    technologies: ["Google Workspace", "Microsoft 365", "Exchange Online", "SPF/DKIM/DMARC", "Cloudflare DNS", "Outlook/Gmail"],
    businessOutcomes: ["100% inbox delivery rate with authenticated email records", "Zero message loss during mailbox migrations", "Professional enterprise credibility for customer communications"],
    targetSectors: ["Corporate Offices", "Startups", "SMEs", "Educational Institutes", "Professional Services"]
  },
  {
    id: "cloud-devops-infra",
    verticalId: "cat-domain-infra",
    verticalName: "Domain, Hosting & Infra..",
    title: "Cloud Infrastructure, DevOps & CI/CD Automation",
    tagline: "Cloud migration, containerization, and automated deployment pipelines across AWS and Google Cloud.",
    description: "Modernize your application infrastructure. We design resilient cloud architectures on AWS and Google Cloud, containerize services using Docker, configure Kubernetes orchestration, build automated CI/CD pipelines, and implement Infrastructure as Code (Terraform).",
    keyDeliverables: [
      "Cloud migration, VPC networking, and Infrastructure as Code with Terraform",
      "Automated CI/CD pipelines via GitHub Actions, GitLab, and ArgoCD",
      "Docker containerization, microservices deployment, and Kubernetes management",
      "Automated server backups, database replication, and disaster recovery runbooks",
      "Cloud cost optimization (FinOps) reducing monthly cloud bills"
    ],
    technologies: ["AWS", "Google Cloud", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Nginx"],
    businessOutcomes: ["Up to 45% reduction in monthly cloud infrastructure spend", "Zero-downtime rolling deployments", "Automated disaster recovery with minimal RTO/RPO"],
    targetSectors: ["High-Growth Startups", "Mid-Market Enterprises", "SaaS Providers", "Scaleups"]
  }
];

// Proposed Products (Section 4)
export const PROPOSED_PRODUCTS: ProductItem[] = [
  {
    id: "product-solarcare",
    name: "Sangel SolarCare™",
    tagline: "Solar Cleaning & Operations Management Platform",
    stage: "Beta",
    category: "CleanTech & Renewable Operations",
    description: "A comprehensive SaaS platform engineered specifically for solar panel cleaning contractors, EPCs, and O&M teams. Manage solar plant sites, automated cleaning cycles, field technician rosters, work orders, proof-of-service reports, client AMC contracts, and recurring billing.",
    keyFeatures: [
      "Plant Site & Inverter Array mapping with GPS geofencing",
      "Automated cleaning schedule calendar based on soiling ratios",
      "Field technician mobile companion app with offline photo ePOD",
      "Digital work orders, automated job dispatch, and customer sign-off",
      "AMC contract management, payment tracking, and automated invoicing"
    ],
    targetAudience: ["Solar EPC Companies", "Solar Cleaning Contractors", "Rooftop Solar AMC Providers", "Renewable Asset Managers"],
    modules: ["Site Registry", "Cleaning Schedules", "Field Technician App", "Customer Portal", "AMC & Billing Engine"]
  },
  {
    id: "product-instituteone",
    name: "Sangel InstituteOne™",
    tagline: "Institute & Coaching Operations Management System",
    stage: "Available",
    category: "EdTech & Institutional Operations",
    description: "An all-in-one institutional ERP and student management software for coaching centers, colleges, and training institutes. Unifies admissions, student rosters, batch timetables, biometric attendance, fee collection with online gateways, exam grading, and parent communication.",
    keyFeatures: [
      "Student admission lifecycle, KYC document storage, and ID card generation",
      "Batch management, faculty scheduling, and room allocation",
      "Biometric and mobile attendance tracking with instant parent SMS/WhatsApp alerts",
      "Fee payment gateway integration (Razorpay/UPI) with automated receipt generation",
      "Examination marksheet builder, performance analytics, and student report cards"
    ],
    targetAudience: ["Coaching Classes & Test Prep Centers", "Private Colleges & Universities", "Vocational Training Institutes", "Skill Centers"],
    modules: ["Admissions & Students", "Batch Timetables", "Attendance System", "Fees & Invoicing", "Exams & Results", "Parent App"]
  },
  {
    id: "product-fieldops",
    name: "Sangel FieldOps™",
    tagline: "Field Service & Maintenance Management Software",
    stage: "Beta",
    category: "Field Workforce & Asset Maintenance",
    description: "Enterprise software for managing field service engineers, service tickets, on-site repairs, spare parts inventory, customer SLAs, and preventive maintenance agreements.",
    keyFeatures: [
      "Centralized service desk with multi-channel ticket creation",
      "Intelligent technician dispatch based on GPS location and skill set",
      "Digital work orders with parts consumption tracking and customer signature",
      "SLA compliance tracking with automated escalation rules",
      "Preventive maintenance scheduling and AMC renewal reminders"
    ],
    targetAudience: ["HVAC & Equipment Servicing Companies", "Appliance Maintenance Providers", "Industrial Machinery AMC Teams"],
    modules: ["Service Desk", "Technician Dispatch", "Inventory & Spares", "SLA Engine", "AMC Contracts"]
  },
  {
    id: "product-businessone",
    name: "Sangel BusinessOne™",
    tagline: "SME Business Management & Invoicing Software",
    stage: "Available",
    category: "SME Enterprise Management",
    description: "A lightweight, powerful business management application designed for Indian and emerging market SMEs. Handles sales quotes, purchase orders, multi-warehouse inventory, GST-compliant invoicing, expense recording, and real-time profitability dashboards.",
    keyFeatures: [
      "Professional GST e-Invoicing and e-Way bill generation in 1 click",
      "Quotation-to-invoice workflow with payment status tracking",
      "Real-time inventory tracking with low-stock alerts and purchase requisitions",
      "Customer and vendor ledger reconciliation with balance reminders",
      "Executive financial dashboards: P&L, Cash Flow, and Tax liability"
    ],
    targetAudience: ["Trading Companies", "Small Manufacturers", "Wholesalers & Distributors", "Professional Service Agencies"],
    modules: ["Sales & Invoicing", "Procurement", "Inventory Control", "Customer Ledger", "GST Tax Reports"]
  },
  {
    id: "product-onepmo",
    name: "SangelOne PMO™",
    tagline: "Project Portfolio Management & Delivery Governance",
    stage: "Coming Soon",
    category: "Enterprise PMO & Governance",
    description: "A centralized project portfolio management platform featuring milestone tracking, RAID registers (Risks, Assumptions, Issues, Dependencies), resource utilization forecasting, change request workflows, and AI-generated executive status summaries.",
    keyFeatures: [
      "Multi-project portfolio dashboards with milestone health indicators",
      "Integrated RAID log with risk scoring and mitigation workflows",
      "Resource allocation, capacity planning, and billable utilization tracking",
      "Change request approvals with budget and scope impact analysis",
      "AI-assisted executive weekly status reports generated in seconds"
    ],
    targetAudience: ["Enterprise PMOs", "IT Delivery Organizations", "Consulting Firms", "Engineering Departments"],
    modules: ["Portfolio View", "RAID Register", "Capacity Planner", "Change Controls", "AI Status Generator"]
  },
  {
    id: "product-oneai",
    name: "SangelOne AI™",
    tagline: "Enterprise Knowledge & Workflow AI Assistant",
    stage: "Pilot",
    category: "Enterprise Generative AI",
    description: "A private, secure enterprise AI assistant that connects directly to your company's SOPs, databases, and customer records. Enables instant natural-language search, policy queries, automated report drafting, and intelligent workflow triggers with strict permission governance.",
    keyFeatures: [
      "Air-gapped private vector index with zero data retention by external LLMs",
      "Natural-language question answering grounded strictly in company documentation",
      "Role-based knowledge access (employees only see documents they have permissions for)",
      "Automated summary generation for customer calls, tickets, and financial sheets",
      "Human-in-the-loop validation for all external emails and database updates"
    ],
    targetAudience: ["Mid-Market & Large Enterprises", "Legal & Compliance Teams", "Healthcare Providers", "Financial Firms"],
    modules: ["Knowledge Connectors", "Chat Assistant", "Document Synthesizer", "Security Guardrails"]
  },
  {
    id: "product-docai",
    name: "Sangel DocAI™",
    tagline: "Intelligent Document Extraction & Classification",
    stage: "Pilot",
    category: "Intelligent Document Processing (IDP)",
    description: "An AI-powered document extraction engine that turns unstructured PDFs, scans, invoices, KYC forms, and contracts into structured JSON data ready for direct insertion into your ERP or database.",
    keyFeatures: [
      "High-accuracy optical recognition for multi-lingual and handwritten documents",
      "Pre-trained extractors for Tax Invoices, PAN/Aadhaar/Passports, Bank Statements, and POs",
      "Automated cross-check validation against vendor master data and tax registers",
      "Confidence scoring with automated routing to human review for low-confidence fields",
      "Direct webhook and API export to SAP, Tally, Zoho, and custom SQL databases"
    ],
    targetAudience: ["Accounting & Audit Firms", "FinTech Lending Companies", "Logistics 3PLs", "Procurement Departments"],
    modules: ["Document Intake", "AI Parser", "Human Verification UI", "API Connectors"]
  }
];

// Target Industries
export const TARGET_INDUSTRIES: IndustryItem[] = [
  {
    id: "solar-energy",
    name: "Solar Service & CleanTech Operations",
    headline: "Automated solar plant operations, cleaning schedules, and field asset telematics.",
    description: "We build specialized software for solar EPCs, cleaning contractors, and O&M providers. From Sangel SolarCare to custom IoT telemetry, we eliminate spreadsheet scheduling and provide real-time proof-of-work for solar assets.",
    keySolutions: [
      "Solar plant array mapping and automated cleaning cycle scheduling",
      "Field technician mobile companion app with offline photo proof-of-delivery",
      "Automated AMC contract management, recurring billing, and GST invoicing",
      "Inverter IoT telemetry and soiling ratio analytics"
    ],
    regulatoryCompliance: ["MNRE Solar Guidelines", "CEA Grid Standards", "GST e-Invoicing"],
    caseSnippet: {
      clientType: "Solar O&M Contractor (180+ MW Assets across 4 States)",
      challenge: "Managing cleaning cycles across scattered rooftop and ground-mount plants resulted in 22% missed AMC visits and delayed client billing.",
      solution: "Implemented Sangel SolarCare with technician GPS verification and automated customer work completion reports.",
      impact: "Zero missed cleaning cycles; billing cycle compressed from 25 days to 24 hours; customer renewals up 94%."
    }
  },
  {
    id: "education-institutes",
    name: "Educational Institutes & Coaching",
    headline: "Unified student lifecycle ERP, fee automation, and parent communication portals.",
    description: "Transforming educational administration for coaching centers, colleges, and training institutes. Sangel InstituteOne eliminates paper registers and manual fee collection with unified cloud portals and parent mobile apps.",
    keySolutions: [
      "Digital student admissions, document verification, and ID generation",
      "Biometric & mobile attendance tracking with instant parent WhatsApp notifications",
      "Automated fee collection via UPI/Gateways with instant SMS receipts",
      "Examination marksheet generation, ranking, and student performance analytics"
    ],
    regulatoryCompliance: ["UGC Digital Guidelines", "Data Protection DPDP 2023", "PCI-DSS for Fees"],
    caseSnippet: {
      clientType: "Premier Multi-Branch Coaching Institute (4 Campuses, 3,200 Students)",
      challenge: "Manual fee collection led to cash reconciliation discrepancies and 18% delayed fee realization.",
      solution: "Deployed Sangel InstituteOne with automated payment links and parent mobile app.",
      impact: "Fee collection on-time rate reached 98%; administrative overhead reduced by 65 hours per week."
    }
  },
  {
    id: "bfsi",
    name: "BFSI & FinTech",
    headline: "High-security banking rails, algorithmic compliance, and instant digital lending.",
    description: "We engineer core transaction engines, loan origination systems (LOS), and automated KYC pipelines built to satisfy financial regulations with sub-second execution.",
    keySolutions: [
      "Digital Loan Origination & Automated Underwriting Engines",
      "Real-time fraud anomaly detection using streaming Kafka pipelines",
      "NPCI, UPI 2.0, IMPS, and ISO 20022 payment message integration",
      "RBI data localization, audit trails, and automated reconciliation"
    ],
    regulatoryCompliance: ["RBI Master Directions", "ISO 27001", "PCI-DSS Level 1", "SOC 2 Type II"],
    caseSnippet: {
      clientType: "Tier-1 NBFC & Digital Lending Platform",
      challenge: "Manual underwriting created 4-day loan approval delays and elevated fraud vulnerability.",
      solution: "Engineered an AI-augmented decision engine with automated bank statement analysis and credit scoring.",
      impact: "Turnaround compressed to under 4 minutes; loan book expanded 3.2x with zero increase in NPA."
    }
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    headline: "Smart factory floor digitization, automated shop-floor ERP, and supply resilience.",
    description: "Bridging physical machinery and digital intelligence. We modernize legacy ERPs, connect IoT sensor streams, and automate inventory reconciliation across regional plants.",
    keySolutions: [
      "Custom Shop Floor Execution Systems (MES) and Machine Uptime Telemetry",
      "Predictive Equipment Maintenance algorithms reducing unplanned downtime",
      "Multi-facility inventory optimization and automated vendor procurement",
      "GST e-Invoicing and e-Way bill automated dispatch integration"
    ],
    regulatoryCompliance: ["ISO 9001", "OSHA Safety Standards", "GST e-Invoicing Regulations"],
    caseSnippet: {
      clientType: "Industrial Auto Component Manufacturer (12 Facilities)",
      challenge: "Disparate spreadsheet tracking caused 14% inventory write-offs and production stoppages.",
      solution: "Designed a real-time cloud ERP with automated barcode scanning and predictive reorder triggers.",
      impact: "Stock-out incidents decreased by 87%; annual working capital freed up by $1.8M."
    }
  },
  {
    id: "startups-smes",
    name: "Startups & High-Growth SMEs",
    headline: "Rapid MVP delivery, full-stack digital foundations, and predictable engineering scale.",
    description: "Empowering founders and growing businesses with complete technology execution—from brand identity and web development to custom software, mobile apps, and dedicated developer pods.",
    keySolutions: [
      "Fast 6-to-10 week production MVP launch",
      "Scalable multi-tenant cloud architectures on AWS / Google Cloud",
      "Complete branding, website development, and ethical SEO setup",
      "Elastic developer pods that scale with your funding milestones"
    ],
    regulatoryCompliance: ["Startup India", "GDPR / DPDP", "SOC 2 Ready"],
    caseSnippet: {
      clientType: "B2B SaaS Scaleup in Logistics",
      challenge: "Needed to launch their MVP in 8 weeks to secure institutional seed funding.",
      solution: "Sangel deployed a dedicated 4-engineer pod, building the web platform, mobile app, and branding concurrently.",
      impact: "MVP shipped in 7 weeks; successfully closed $1.5M funding round with production customers live."
    }
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "HIPAA-compliant patient portals, clinical workflows, and diagnostic AI pipelines.",
    description: "We build secure telemedicine systems, laboratory information management platforms (LIMS), and AI-driven clinical document processing platforms that protect sensitive patient data.",
    keySolutions: [
      "Electronic Health Record (EHR) integrations via HL7 and FHIR standards",
      "Telehealth video consultation platforms with end-to-end encryption",
      "AI-driven diagnostic report parsing and clinical summary generation",
      "Hospital resource allocation and bed occupancy forecasting engines"
    ],
    regulatoryCompliance: ["HIPAA Compliance", "HL7/FHIR Standards", "NABH Digital Health Guidelines"],
    caseSnippet: {
      clientType: "Multi-Specialty Hospital Network",
      challenge: "Physicians spent 40% of clinic hours transcribing records and deciphering lab printouts.",
      solution: "Implemented an intelligent clinical summary assistant and FHIR-compliant mobile patient portal.",
      impact: "Patient intake speed improved by 60%; physician administrative burnout dropped significantly."
    }
  },
  {
    id: "retail-ecommerce",
    name: "Retail & Omnichannel E-Commerce",
    headline: "Omnichannel inventory sync, high-concurrency checkout engines, and digital marketing.",
    description: "Empowering modern retailers to compete globally. We engineer unified commerce backbones that synchronize physical POS terminals with digital storefronts, backed by high-ROI SEO and social media marketing.",
    keySolutions: [
      "Unified commerce engines connecting WooCommerce/Shopify with offline ERPs",
      "High-throughput flash-sale checkout architectures with zero downtime",
      "Brand identity refresh, packaging design, and social media creative management",
      "Search Engine Optimization for high-intent commercial product terms"
    ],
    regulatoryCompliance: ["PCI-DSS", "Consumer Protection Rules", "GDPR / DPDP India 2023"],
    caseSnippet: {
      clientType: "National Lifestyle Retailer (80+ Stores)",
      challenge: "Offline stores and web portals operated in silos, causing frequent out-of-stock cancellations.",
      solution: "Engineered an event-driven inventory bridge providing real-time store pickup and fulfillment.",
      impact: "Online order fulfillment speed improved by 75%; digital sales jumped 42% in Year 1."
    }
  },
  {
    id: "international-clients",
    name: "International & Cross-Border Clients",
    headline: "World-class engineering execution, timezone alignment, and significant TCO efficiency.",
    description: "Serving enterprise clients and digital agencies in the USA, UK, Middle East, Singapore, and Australia with dedicated senior development squads, strict IP sovereignty, and seamless communication.",
    keySolutions: [
      "Dedicated offshore development centers (ODC) aligned to your work hours",
      "Full IP transfer and strict Western NDA / contractual legal safeguards",
      "English-fluent senior architects and scrum delivery leads",
      "Blended cost savings of 45%–55% compared to local metro hiring"
    ],
    regulatoryCompliance: ["GDPR", "SOC 2 Type II", "California CCPA", "UK Data Protection Act"],
    caseSnippet: {
      clientType: "London-based FinTech Advisory Firm",
      challenge: "Local developer recruitment costs were unsustainable for building their next-gen analytics suite.",
      solution: "Sangel deployed a dedicated 5-person engineering pod with daily London timezone standups.",
      impact: "Delivered product 3 months ahead of schedule; saved £140,000 in annual engineering overhead."
    }
  }
];

// Verified Portfolio & Case Studies
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "portfolio-solar-clean",
    title: "Sangel SolarCare™ — Digitizing Solar Asset Cleaning Across 180 MW Plants",
    category: "Software Products & CleanTech",
    clientIndustry: "Solar Energy & Operations",
    duration: "14 Weeks Deployment",
    summary: "Built and deployed Sangel SolarCare to automate cleaning cycles, field team tracking, AMC renewals, and customer proof-of-service across 180 MW of utility and commercial solar installations.",
    challenge: "Contractors previously tracked cleaning schedules across 45 scattered sites using paper logs and WhatsApp messages, resulting in missed cycles, disputes with plant owners, and uncollected AMC revenues.",
    solution: "Implemented Sangel SolarCare SaaS web portal paired with an offline-capable mobile app for field cleaning squads, featuring geofenced photo proof-of-work, automated customer sign-off, and instant GST invoice generation.",
    deliverables: [
      "Solar Plant Array Mapping & Automated Cleaning Calendar",
      "Technician Mobile Companion App with Offline Photo Uploads",
      "Client Self-Service AMC Portal & Work Order History",
      "Automated WhatsApp & Email Service Reports"
    ],
    impactMetrics: [
      { label: "Cleaning Adherence", value: "99.8% on-schedule" },
      { label: "Billing Cycle", value: "From 25 days to 24 hrs" },
      { label: "AMC Retention", value: "+94% contract renewals" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Flutter", "AWS Lightsail", "Razorpay"]
  },
  {
    id: "portfolio-institute-erp",
    title: "Sangel InstituteOne™ — Campus Operations & Fee Automation",
    category: "Software Products & EdTech",
    clientIndustry: "Higher Education & Coaching",
    duration: "10 Weeks Deployment",
    summary: "Transformed student admissions, biometric attendance, batch scheduling, and automated fee collections for a premier 4-campus coaching institute with 3,200 active students.",
    challenge: "Long queues for manual fee payment, lost paper receipts, high cash-handling overhead, and hours spent daily reconciling attendance registers across multiple physical centers.",
    solution: "Rolled out Sangel InstituteOne with automated payment links, parent mobile app, biometric integration, and automated SMS/WhatsApp attendance alerts.",
    deliverables: [
      "Student Admission & Digital Document Management",
      "Online Fee Payment Integration with Automated Digital Receipts",
      "Biometric Attendance Sync with Instant Parent Alerts",
      "Marksheet & Examination Ranking Generator"
    ],
    impactMetrics: [
      { label: "Fee Realization", value: "98% on-time payments" },
      { label: "Admin Hours Saved", value: "65 hours / week" },
      { label: "Parent Engagement", value: "91% active app adoption" }
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Flutter", "Twilio / Gupshup"]
  },
  {
    id: "portfolio-fintech-core",
    title: "Sub-Second Digital Underwriting & Core Modernization for NBFC",
    category: "Custom Software & FinTech",
    clientIndustry: "BFSI & FinTech",
    duration: "20 Weeks Deployment",
    summary: "Modernized legacy on-premise loan processing systems into an event-driven cloud microservices architecture with automated credit bureau checks and instant underwriting.",
    challenge: "Loan applications suffered from a 3–4 day manual review lag with disparate credit bureau lookups and high consumer dropout rates.",
    solution: "Architected a cloud-native microservices platform with an automated decision engine, connecting directly to credit bureaus, GSTN, and banking aggregators via event-driven Kafka pipelines.",
    deliverables: [
      "Digital Loan Origination System (LOS) Microservices",
      "Real-Time Fraud Anomaly Detection Engine",
      "Event-Driven Kafka Architecture & RBI-Compliant Storage",
      "Executive Risk & Disbursal Telemetry Dashboard"
    ],
    impactMetrics: [
      { label: "Approval Time", value: "3.5 Min (from 4 days)" },
      { label: "Loan Book Growth", value: "+320% in 12 Months" },
      { label: "Regulatory Compliance", value: "100% RBI Ready" }
    ],
    technologies: ["Java Spring Boot", "Kafka", "PostgreSQL", "AWS ECS", "React", "Docker"]
  },
  {
    id: "portfolio-brand-seo",
    title: "Corporate Rebranding, UX Redesign & 240% Organic SEO Surge",
    category: "Branding, SEO & Web Design",
    clientIndustry: "B2B Industrial Equipment",
    duration: "12 Weeks Execution",
    summary: "Executed a comprehensive brand repositioning, logo identity refresh, ultra-fast corporate website rebuild, and ethical technical SEO campaign for an engineering manufacturer.",
    challenge: "Outdated brand visuals, confusing website navigation, slow load speeds (over 6.2s), and non-existent visibility on Google for high-value commercial keywords.",
    solution: "Created an authoritative corporate brand system, built a responsive Next.js corporate site with 99/100 Core Web Vitals, and executed an ethical on-page and technical SEO campaign.",
    deliverables: [
      "Brand Guidelines, Logo Refresh & Corporate Identity System",
      "High-Performance Corporate Website with Mobile First UX",
      "Technical SEO, Schema.org Markup & Keyword Mapping",
      "Sales Brochure & Company Profile Presentation Design"
    ],
    impactMetrics: [
      { label: "Organic Search Traffic", value: "+240% in 6 Months" },
      { label: "Page Load Speed", value: "0.8s (from 6.2s)" },
      { label: "Inbound B2B Inquiries", value: "+185% qualified leads" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Google Search Console", "Schema JSON-LD"]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "solar-cleaning-technology-2026",
    title: "Why Solar Cleaning Contractors Are Ditching Spreadsheets for Dedicated SaaS",
    category: "Solar Operations Technology",
    readTime: "5 min read",
    publishDate: "October 2026",
    summary: "How solar O&M providers manage plant cleaning schedules, proof-of-work compliance, and AMC billing using platforms like Sangel SolarCare.",
    author: { name: "Sanjay Kumar", role: "Principal Technology Architect" },
    keyTakeaways: [
      "Uncleaned solar panels lose 15%–30% generation efficiency due to soiling.",
      "Plant owners demand timestamped, geofenced proof-of-work before approving AMC payouts.",
      "Mobile companion apps enable field teams to submit photo reports even in remote zero-network zones.",
      "Automated AMC billing eliminates payment realization delays."
    ],
    content: [
      "Across India and global sunbelt regions, utility-scale and commercial rooftop solar installations have grown exponentially. Yet, the critical maintenance operation—panel cleaning and soiling prevention—is frequently managed via fragmented WhatsApp groups and paper logbooks.",
      "This operational disconnect leads to disputes between asset owners and contractors over whether cleaning cycles actually took place. With Sangel SolarCare, contractors gain an automated scheduling calendar where field workers use a geofenced mobile app to capture before-and-after photos.",
      "The result is verifiable proof-of-work, automated client billing, and a dramatic decrease in revenue leakage."
    ]
  },
  {
    id: "institute-management-automation",
    title: "The Modern Coaching Institute Tech Stack: Automating Fees, Batches & Student Success",
    category: "Institute Management Technology",
    readTime: "6 min read",
    publishDate: "September 2026",
    summary: "A practical guide for coaching institutes and academies to eliminate administrative chaos through integrated student lifecycle ERPs.",
    author: { name: "Pooja Verma", role: "Head of Product Engineering" },
    keyTakeaways: [
      "Automated UPI and payment links recover up to 25% of overdue coaching fees.",
      "Biometric attendance with instant parent WhatsApp notifications builds unmatched trust.",
      "Unified marksheet generators save educators hundreds of grading hours per term.",
      "Data privacy compliance under the DPDP Act 2023 requires secure student record storage."
    ],
    content: [
      "Running a multi-branch coaching center or private institute requires juggling hundreds of inquiries, batch schedules, faculty timetables, and fee installments.",
      "Sangel InstituteOne addresses this by unifying the entire student journey into a single cloud dashboard. When a student enrolls, their fee schedule is automatically generated with automated payment reminders sent to parents.",
      "Automating operational chores allows education leaders to focus on what matters most: academic excellence and student outcomes."
    ]
  },
  {
    id: "agentic-enterprise-workflows",
    title: "Agentic Workflows in Enterprise Software: Beyond Basic LLM Wrappers",
    category: "AI & Generative AI",
    readTime: "8 min read",
    publishDate: "August 2026",
    summary: "Why shallow chatbot widgets fail in B2B environments and how multi-agent state machines are transforming ERP, compliance, and supply chain operations.",
    author: { name: "Pooja Verma", role: "Head of AI Engineering" },
    keyTakeaways: [
      "Enterprises do not need another chat window; they need autonomous task completion.",
      "Multi-agent frameworks decompose complex workflows into specialized verification, extraction, and execution roles.",
      "Human-in-the-loop approvals are essential for regulatory compliance and high-value transactions.",
      "Private vector databases and local fine-tuning preserve IP and eliminate vendor lock-in."
    ],
    content: [
      "The initial hype cycle of Generative AI led many technology consultancies to ship superficial wrappers around commercial LLM APIs. In enterprise settings, these tools consistently fail due to hallucinations, lack of business context, and zero auditability.",
      "Real business value emerges from Agentic Workflows. In an enterprise ERP setting, an agent does not merely answer queries. Instead, a coordinated swarm of agents identifies purchase orders with price variances, cross-checks supplier contracts, flags billing anomalies, and logs the reconciliation in the ledger.",
      "By anchoring autonomous agents to deterministic state machines and strict validation guardrails, Sangel Softwares helps enterprises compress multi-day manual audit cycles down to seconds."
    ]
  },
  {
    id: "ethical-b2b-seo-guide",
    title: "The Realistic B2B SEO Playbook: Rankings, Core Web Vitals & Real Leads",
    category: "SEO & Digital Marketing",
    readTime: "7 min read",
    publishDate: "July 2026",
    summary: "Why guaranteeing '#1 rankings' is a scam, and how data-backed technical SEO, schema markup, and search intent actually drive enterprise buyers.",
    author: { name: "Rajesh Nambiar", role: "Head of Digital Growth" },
    keyTakeaways: [
      "Ethical SEO targets high-intent commercial keywords, not vanity traffic.",
      "Technical Core Web Vitals (LCP < 2.5s) directly impact conversion rates and Google ranking.",
      "Schema.org structured data (Organization, Service, Article) enables rich Google snippets.",
      "Separating organic social and technical SEO from paid ad spend ensures clear ROI."
    ],
    content: [
      "In B2B technology services, search engine optimization is often misunderstood. Low-quality agencies promise 'Guaranteed #1 Google Rankings in 30 Days'—a dangerous claim that frequently relies on toxic link schemes that trigger search engine penalties.",
      "At Sangel Softwares, our SEO practice is grounded in engineering rigor. We optimize site architecture, implement comprehensive Schema.org JSON-LD, tune Core Web Vitals for instant loading, and craft authoritative content that directly answers what CIOs, CTOs, and business owners search for.",
      "Sustainable organic search visibility is an asset that appreciates over time, generating high-intent inbound leads without recurring ad costs."
    ]
  },
  {
    id: "legacy-core-banking-2026",
    title: "Modernizing Legacy Core Banking: The 2026 Architectural Blueprint",
    category: "BFSI Technology",
    readTime: "6 min read",
    publishDate: "June 2026",
    summary: "How forward-thinking financial institutions are strangling monolithic core systems with event-driven microservices without taking down live consumer rails.",
    author: { name: "Sanjay Kumar", role: "Principal Technology Architect" },
    keyTakeaways: [
      "The Strangler Fig pattern provides a proven path to replace legacy COBOL/monolith systems incrementally.",
      "Event streaming using Kafka enables bidirectional sync between legacy ledger systems and modern microservices.",
      "Regulatory data localization (e.g. RBI standards) must be baked into the storage layer from Day 0.",
      "AI-driven automated regression testing prevents catastrophic cutover outages."
    ],
    content: [
      "For decades, Tier-1 banks and NBFCs have operated on monolithic core banking engines. While these systems proved reliable in the 1990s, they have become liabilities in the era of UPI, open banking, and instant underwriting.",
      "Traditional 'rip-and-replace' overhauls suffer from notorious failure rates. At Sangel Softwares, we advocate for the Strangler Fig architecture—placing an intelligent API gateway and event-driven Kafka streams around the perimeter of the legacy core to safely modernize discrete services.",
      "Over 9 to 18 months, transactional load is redirected gradually into modular cloud microservices with zero consumer downtime."
    ]
  }
];

export const OPEN_ROLES: JobOpening[] = [
  {
    id: "role-ai-lead",
    title: "Lead AI & Machine Learning Engineer",
    department: "AI & Innovation Labs",
    location: "Bengaluru (Hybrid / Full-Time)",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Lead the design and deployment of enterprise generative AI pipelines, private RAG architectures, and autonomous business logic for global clients.",
    responsibilities: [
      "Architect robust RAG systems integrating Vector DBs with enterprise relational data",
      "Fine-tune and evaluate open-source and proprietary LLM models",
      "Deploy scalable inference services using FastAPI, PyTorch, and Docker on Kubernetes",
      "Collaborate with client CXOs and solution architects on AI feasibility and security"
    ],
    requirements: [
      "Strong proficiency in Python, PyTorch, LangChain/LlamaIndex, and Vector DBs",
      "Experience deploying enterprise LLM applications into production environments",
      "Deep understanding of embeddings, semantic search, and prompt engineering guardrails"
    ]
  },
  {
    id: "role-bfsi-architect",
    title: "Principal BFSI Solutions Architect",
    department: "BFSI & FinTech Engineering",
    location: "Mumbai (On-Site / Client Hub)",
    type: "Full-Time",
    experience: "8+ Years",
    description: "Spearhead architectural design and client delivery for Tier-1 banks, NBFCs, and fintech payment processors.",
    responsibilities: [
      "Design high-throughput, low-latency transaction processing engines (Java / Go)",
      "Ensure end-to-end compliance with RBI master directions, PCI-DSS, and ISO 27001",
      "Lead technical governance and code reviews for fintech engineering pods",
      "Act as the primary technical advisor to banking CIOs and CTOs",
      "Core banking API orchestration and payment gateway integration"
    ],
    requirements: [
      "Proven track record building mission-critical financial applications in India or global markets",
      "Expertise in Java Spring Boot, Apache Kafka, Distributed Databases, and HSM encryption",
      "Clear communication and executive stakeholder presentation skills"
    ]
  },
  {
    id: "role-fullstack-sr",
    title: "Senior Full-Stack Engineer (React & Node / Python)",
    department: "Core Software Engineering",
    location: "Pune / Bengaluru / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Build beautiful, highly performant web applications, custom ERP modules, and scalable backend microservices.",
    responsibilities: [
      "Develop modular, clean React / TypeScript frontend architectures",
      "Build high-throughput RESTful and GraphQL backend services in Node.js or Python",
      "Write automated unit and integration tests using Jest and Playwright",
      "Participate actively in agile sprint planning, technical estimations, and peer reviews"
    ],
    requirements: [
      "Strong mastery of TypeScript, React, state management, and modern CSS",
      "Solid backend experience with PostgreSQL, Redis, and containerized microservices",
      "Passion for clean code, performance profiling, and zero-defect delivery"
    ]
  },
  {
    id: "role-seo-growth",
    title: "Senior Technical SEO & Digital Marketing Lead",
    department: "Branding & Growth Practice",
    location: "Delhi NCR / Jaipur / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Lead technical SEO audits, search intent mapping, schema markup, Core Web Vitals optimization, and B2B growth campaigns.",
    responsibilities: [
      "Execute deep-dive technical SEO audits and Core Web Vitals performance tuning",
      "Implement advanced Schema.org JSON-LD and on-page keyword mappings",
      "Manage B2B lead generation campaigns on LinkedIn and Google Ads with strict ROI tracking",
      "Author transparent monthly SEO/SMO client ranking and organic traffic reports"
    ],
    requirements: [
      "Demonstrated track record of scaling organic B2B search traffic ethically",
      "Expert knowledge of Google Search Console, GA4, Ahrefs, and Schema markup",
      "Strong analytical and technical communication skills"
    ]
  }
];

export const ENGAGEMENT_MODELS: EngagementOption[] = [
  {
    id: "dedicated-pod",
    name: "Dedicated Engineering Pod",
    bestFor: "Long-term product engineering, multi-year legacy modernization, and continuous innovation.",
    billingModel: "Monthly Retainer per Engineering Seat",
    slaCommitment: "Dedicated Senior Architect, Lead Engineer, QA, and Delivery Manager",
    features: [
      "Dedicated full-time squad aligned 100% to your roadmap",
      "Direct integration into your internal Slack, Jira, and GitHub",
      "Bi-weekly sprint demos and sprint velocity forecasting",
      "Complete IP transfer and codebase sovereignty",
      "Seamless scaling of pod size up or down with 30-day notice"
    ]
  },
  {
    id: "fixed-scope",
    name: "Fixed-Scope Milestone Project",
    bestFor: "Corporate websites, MVPs, specific feature modules, or time-bound digital transformation audits.",
    billingModel: "Milestone-Based Payments (linked to deliverables)",
    slaCommitment: "Guaranteed Delivery Date & Fixed Budget Agreement",
    features: [
      "Detailed architectural scope and wireframes signed off upfront",
      "Zero budget creep or surprise hourly billing charges",
      "Rigorous milestone acceptance criteria and user acceptance testing (UAT)",
      "90-day post-launch warranty and bug-fix guarantee included",
      "Ideal for enterprise budgeting and board approvals"
    ]
  },
  {
    id: "infra-sla-support",
    name: "Infrastructure & SLA Retainer Support",
    bestFor: "Cloud VPS hosting, domain networks, business email systems, and critical web applications requiring guaranteed uptime.",
    billingModel: "Tiered Monthly Infrastructure & SLA Subscription",
    slaCommitment: "15-Min Critical Incident Response & Guaranteed Infrastructure Availability",
    features: [
      "Continuous server monitoring, automated alert routing, and health checks",
      "Regular OS, security vulnerability patching, and SSL certificate maintenance",
      "Dedicated senior cloud infrastructure engineering roster",
      "Cloud resource optimization and automated off-site backups",
      "Monthly health reports and infrastructure performance reviews"
    ]
  },
  {
    id: "resource-augmentation",
    name: "IT Resource Augmentation",
    bestFor: "Bridging specialized skill gaps (AI, Kafka, Cloud Architect, Senior React/Go) quickly.",
    billingModel: "Flexible Hourly or Monthly Senior Rate Card",
    slaCommitment: "Deployment within 5 Business Days with 2-Week Trial Period",
    features: [
      "Pre-vetted senior developers and technical architects (Top 3% tier)",
      "Direct day-to-day management by your internal team leaders",
      "Full overlap with US, UK, Middle East, or India business hours",
      "Zero recruitment, benefits, payroll, or severance overhead",
      "Replacement guarantee if technical fit is ever unsatisfactory"
    ]
  }
];

export const TRANSFORMATION_LIFECYCLE = [
  {
    step: "01",
    name: "Assess",
    tagline: "Architecture & Growth Audit",
    desc: "We analyze legacy architecture, codebase health, brand positioning, SEO crawlability, and cloud infrastructure to create a de-risked growth roadmap.",
    deliverables: ["Tech Debt & Architecture Audit", "SEO & Digital Footprint Scorecard", "TCO & Cloud Cost Projection", "Phased Migration Blueprint"]
  },
  {
    step: "02",
    name: "Design",
    tagline: "Brand Identity & Systems Architecture",
    desc: "Engineering decoupled microservices, resilient data pipelines, cohesive brand guidelines, and intuitive Figma UI/UX design systems.",
    deliverables: ["Target-State Architecture Blueprint", "Brand Style Guide & UI Design System", "Data Schema & API Specifications", "Security & Disaster Recovery Plan"]
  },
  {
    step: "03",
    name: "Build",
    tagline: "AI-Augmented Agile Engineering",
    desc: "Full-stack development using modern stacks with automated test-driven development, continuous CI/CD, and bi-weekly sprint demos.",
    deliverables: ["Production-Grade Codebase", "Automated Unit & Integration Suites", "CI/CD Infrastructure as Code", "Sprint Demos & Bi-Weekly Builds"]
  },
  {
    step: "04",
    name: "Integrate",
    tagline: "Enterprise Systems & Core Modernization",
    desc: "Seamlessly bridging legacy backends, third-party payment gateways, core banking rails, ERP backbones, and external partner APIs.",
    deliverables: ["Event-Driven API Connectors", "Payment Gateway & Banking Integrations", "Data Migration & Reconciliation Scripts", "Zero-Downtime Cutover Scripts"]
  },
  {
    step: "05",
    name: "Automate",
    tagline: "Cognitive AI & Process Robotics",
    desc: "Embedding pragmatic generative AI workflows, intelligent document processing, and autonomous test suites to eliminate operational latency.",
    deliverables: ["Document Extraction Pipelines", "AI Agentic Business Logic", "Automated QA Regression Suites", "Automated Incident Escalation"]
  },
  {
    step: "06",
    name: "Amplify",
    tagline: "SEO, SMO & Digital Growth",
    desc: "Deploying technical schema markup, on-page SEO, organic social campaigns, and conversion optimization to drive qualified inbound B2B inquiries.",
    deliverables: ["Schema.org Structured Data", "High-Intent Keyword Rankings", "B2B Social & LinkedIn Campaigns", "Conversion Analytics & Lead Tracking"]
  },
  {
    step: "07",
    name: "Optimize",
    tagline: "Continuous FinOps, SLA & Performance Tuning",
    desc: "Long-term cost optimization, 24/7 SLA managed support, cloud autoscaling tuning, and software maintenance matching your business growth.",
    deliverables: ["Quarterly Cloud Cost Optimization", "24/7 Uptime & Maintenance SLAs", "Feature Backlog Prioritization", "Executive Business Value Reviews"]
  }
];
