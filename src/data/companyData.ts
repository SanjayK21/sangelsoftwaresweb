import { ServiceItem, IndustryItem, CaseStudy, InsightArticle, JobOpening, EngagementOption } from '../types';

export const COMPANY_INFO = {
  name: "Sangel Softwares Pvt. Ltd.",
  shortName: "Sangel Softwares",
  tagline: "Technology. Transformation. Intelligence.",
  secondaryTagline: "Building Smarter Digital Businesses with AI-Enabled Engineering",
  positioning: "Sangel Softwares is a technology and digital transformation company helping businesses build, modernize, and operate software through AI, cloud, data, and enterprise technology solutions.",
  differentiator: "A technology transformation partner that combines enterprise delivery expertise with AI-enabled software engineering — senior delivery leadership, BFSI domain depth, agile governance, cost-effective India delivery, and flexible long-term engagement models.",
  vision: "To become a trusted technology partner for businesses by delivering innovative, scalable and AI-enabled digital solutions that improve operational efficiency, customer experience and business growth.",
  missionPillars: [
    { title: "Digitize Manual Processes", desc: "Automate legacy operational bottlenecks with resilient modern workflows." },
    { title: "Modernize Legacy Applications", desc: "De-risk monolithic systems via cloud-native microservices and modular APIs." },
    { title: "Adopt AI & Intelligent Automation", desc: "Embed pragmatic GenAI, cognitive agents, and predictive models into core workflows." },
    { title: "Improve Technology Delivery", desc: "Elevate release velocity, code quality, and security using CI/CD and automated testing." },
    { title: "Reduce Operational Overhead", desc: "Drive TCO efficiency with optimized cloud infrastructure and managed engineering." },
    { title: "Improve Enterprise Intelligence", desc: "Transform fragmented data stores into unified, real-time analytics and decision engines." },
    { title: "Build Scalable Software Products", desc: "Engineer enterprise-grade SaaS and client platforms designed for global scale." },
    { title: "Manage Tech Operations Efficiently", desc: "Provide 24/7/365 proactive reliability, security patching, and SLA-backed maintenance." }
  ],
  growthNarrative: [
    { phase: "Phase 1", title: "Enterprise Services & Engineering", focus: "Full-stack development, cloud modernization, legacy transformation, and specialized BFSI solutions." },
    { phase: "Phase 2", title: "Recurring Managed Services", focus: "24/7 application maintenance, continuous cloud FinOps, DevOps-as-a-Service, and resource augmentation." },
    { phase: "Phase 3", title: "Proprietary SaaS Solutions", focus: "Vertical-specific SaaS platforms for BFSI loan origination, compliance automation, and ERP orchestration." },
    { phase: "Phase 4", title: "Enterprise AI Platforms", focus: "Autonomous agentic business logic, predictive fraud detection, and domain-trained enterprise models." }
  ],
  locations: {
    indiaHubs: [
      { city: "Bengaluru", role: "Engineering & AI R&D Center", state: "Karnataka" },
      { city: "Mumbai", role: "BFSI & FinTech Client Executive Office", state: "Maharashtra" },
      { city: "Pune", role: "Enterprise Cloud & DevOps Center", state: "Maharashtra" },
      { city: "Delhi NCR", role: "Corporate Strategy & Government Tech", state: "National Capital Region" },
      { city: "Hyderabad", role: "Data Platforms & Quality Engineering", state: "Telangana" },
      { city: "Ahmedabad", role: "SME & Manufacturing Tech Hub", state: "Gujarat" },
      { city: "Jaipur", role: "Delivery & Specialized Talent Hub", state: "Rajasthan" }
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
    { value: "99.98%", label: "System Availability SLA", sub: "For managed production environments" },
    { value: "40%", label: "Faster Time-to-Market", sub: "Driven by AI-augmented engineering pods" },
    { value: "15+", label: "Specialized Service Offerings", sub: "Covering end-to-end digital lifecycle" },
    { value: "7", label: "Strategic Delivery Hubs", sub: "Pan-India talent with global delivery scale" }
  ]
};

export const TRANSFORMATION_LIFECYCLE = [
  {
    step: "01",
    name: "Assess",
    tagline: "Architecture & Capability Audit",
    desc: "We analyze legacy architecture, codebase health, operational bottlenecks, security posture, and cloud readiness to create a de-risked transformation roadmap.",
    deliverables: ["Tech Debt & Architecture Audit", "TCO & Cloud Cost Projection", "Security & Compliance Scorecard", "Phased Migration Blueprint"]
  },
  {
    step: "02",
    name: "Design",
    tagline: "Domain-Driven Systems Architecture",
    desc: "Engineering decoupled microservices, resilient event-driven data pipelines, strict role-based access schemas, and intuitive design systems.",
    deliverables: ["Target-State System Architecture", "Data Schema & API Specifications", "Design System & UX Blueprints", "Security & Disaster Recovery Plan"]
  },
  {
    step: "03",
    name: "Build",
    tagline: "AI-Augmented Agile Engineering",
    desc: "Full-stack development using modern stacks (TypeScript, Python, Go, Java, React) with automated test-driven development and sprint-level demos.",
    deliverables: ["Production-Grade Codebase", "Automated Unit & Integration Suites", "CI/CD Infrastructure as Code", "Sprint Demos & Bi-Weekly Builds"]
  },
  {
    step: "04",
    name: "Integrate",
    tagline: "Enterprise Systems & Core Modernization",
    desc: "Seamlessly bridging legacy core systems, third-party payment gateways, core banking rails, ERP backbones, and external partner APIs.",
    deliverables: ["Event-Driven API Connectors", "Middleware & Message Broker Setup", "Data Migration & Reconciliation Scripts", "Zero-Downtime Cutover Scripts"]
  },
  {
    step: "05",
    name: "Automate",
    tagline: "Cognitive AI & Process Robotics",
    desc: "Embedding pragmatic generative AI workflows, intelligent document processing, and autonomous test suites to eliminate human latency.",
    deliverables: ["Document Extraction Pipelines", "AI Agentic Business Logic", "Automated QA Regression Suites", "Automated Incident Escalation"]
  },
  {
    step: "06",
    name: "Monitor",
    tagline: "Telemetry, Observability & Security",
    desc: "Real-time distributed tracing, synthetic performance checks, continuous vulnerability scanning, and proactive alert routing.",
    deliverables: ["24/7 APM & Distributed Tracing", "Cloud FinOps Monitoring", "Automated Threat Detection", "Custom Executive KPI Dashboards"]
  },
  {
    step: "07",
    name: "Optimize",
    tagline: "Continuous FinOps & Performance Tuning",
    desc: "Long-term cost optimization, database index refinement, cloud autoscaling tuning, and architecture evolution to match business growth.",
    deliverables: ["Quarterly Cloud Cost Optimization", "Capacity & Latency Profiling", "Feature Backlog Prioritization", "Executive Business Value Reviews"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "Custom Software Development",
    tagline: "Bespoke enterprise applications engineered for mission-critical reliability and infinite scale.",
    description: "We architect and develop robust, tailored enterprise web and desktop platforms that replace fragmented spreadsheets and brittle legacy tools with unified digital workflows.",
    keyDeliverables: [
      "Modular multi-tier web applications with microservices architecture",
      "Event-driven backend services built in Go, Node.js, Python, or Java",
      "Responsive, accessible frontends using React, TypeScript, and modern design systems",
      "Strict data protection, audit logging, and role-based access control (RBAC)"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker"],
    businessOutcomes: ["80% reduction in manual data re-entry", "Enterprise scalability supporting 10x transaction growth", "Guaranteed code ownership and IP sovereignty"],
    targetSectors: ["Enterprises", "FinTech", "Manufacturing", "Healthcare"]
  },
  {
    id: "ai-genai",
    verticalId: "v2-ai",
    verticalName: "AI & Cognitive Intelligence",
    title: "AI & Generative AI Solutions",
    tagline: "Operationalize Generative AI, LLMs, and computer vision with strict enterprise security.",
    description: "Moving beyond toy chatbots, we embed domain-specific AI models, retrieval-augmented generation (RAG), and agentic task runners directly into your enterprise ERP, CRM, and operational systems.",
    keyDeliverables: [
      "Enterprise Private RAG systems connected to internal knowledge bases",
      "Autonomous AI agents for multi-step data validation and document auditing",
      "Fine-tuned domain models with strict privacy and zero data leakage",
      "Automated intelligent document processing (IDP) for invoices, KYC, and contracts"
    ],
    technologies: ["PyTorch", "LangChain", "Vector DBs (Pinecone/Milvus)", "FastAPI", "OpenAI/Claude/Gemini APIs", "HuggingFace"],
    businessOutcomes: ["65% faster document turnaround times", "Zero sensitive data leakage to external models", "Instant natural-language queries across terabytes of enterprise data"],
    targetSectors: ["BFSI", "Legal & Compliance", "Healthcare", "E-Commerce"]
  },
  {
    id: "digital-transformation",
    verticalId: "v3-transformation",
    verticalName: "Digital Transformation & Consulting",
    title: "Digital Transformation Services",
    tagline: "End-to-end business process digitization and operating model modernizations.",
    description: "We partner with CIOs and executive boards to translate strategic business objectives into executable technology transformation roadmaps, retiring technical debt while preserving business continuity.",
    keyDeliverables: [
      "Current-state digital maturity assessment and debt quantification",
      "Enterprise target architecture blueprint and phased cutover plan",
      "Change management, staff enablement, and agile governance frameworks",
      "Operational KPI dashboards aligning IT spend with revenue metrics"
    ],
    technologies: ["Enterprise Architecture Frameworks", "BPMN 2.0", "Jira/Confluence", "Tableau", "PowerBI"],
    businessOutcomes: ["35% reduction in overall technology operating expenses", "Streamlined cross-department collaboration", "Measurable digital velocity benchmarks"],
    targetSectors: ["Conglomerates", "BFSI", "Retail", "Manufacturing"]
  },
  {
    id: "erp-solutions",
    verticalId: "v4-enterprise",
    verticalName: "Enterprise ERP & Operations",
    title: "ERP Solutions & Implementation",
    tagline: "Seamless ERP design, custom module development, and migration to modern platforms.",
    description: "Whether customizing SAP/Odoo or engineering bespoke enterprise resource planning systems, we unify inventory, financials, human capital, and supply chains into a single source of truth.",
    keyDeliverables: [
      "Custom ERP module development (Finance, Supply Chain, HR, Production)",
      "Legacy data migration, schema normalization, and reconciliation",
      "Real-time bidirectional sync with eCommerce, CRM, and warehouse systems",
      "Automated GST, TDS, e-Invoicing, and Indian statutory compliance modules"
    ],
    technologies: ["PostgreSQL", "Python", "SAP Integration APIs", "Odoo Framework", "Kafka", "Next.js"],
    businessOutcomes: ["Unified real-time visibility across all physical warehouses", "Zero-error tax compliance reporting", "99.9% inventory tracking precision"],
    targetSectors: ["Manufacturing", "Distribution & Logistics", "Wholesale & Retail"]
  },
  {
    id: "bfsi-fintech",
    verticalId: "v5-bfsi",
    verticalName: "BFSI & FinTech Specialization",
    title: "BFSI & FinTech Technology Services",
    tagline: "Mission-critical financial engineering, algorithmic compliance, and core banking rails.",
    description: "Deep domain engineering for banks, NBFCs, insurtechs, and payment gateways. We build sub-second transaction processors, automated loan origination systems (LOS), and RBI-compliant regulatory engines.",
    keyDeliverables: [
      "Digital Loan Origination (LOS) & Loan Management (LMS) platforms",
      "Real-time fraud anomaly detection and transaction monitoring engines",
      "NPCI, UPI, IMPS, NEFT, and payment aggregator integrations",
      "Comprehensive RBI data localization, ISO 27001, and PCI-DSS compliance frameworks"
    ],
    technologies: ["Java Spring Boot", "Kafka", "PostgreSQL", "Redis", "HSM Encryption", "Docker/K8s"],
    businessOutcomes: ["Sub-100ms payment processing latency", "Underwriting turnaround compressed from 3 days to 4 minutes", "Full regulatory audit readiness"],
    targetSectors: ["Commercial Banks", "NBFCs", "Payment Aggregators", "InsurTechs"]
  },
  {
    id: "cloud-modernization",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "Cloud & Application Modernization",
    tagline: "Migrate legacy on-premise monoliths to resilient, cost-efficient cloud architectures.",
    description: "We refactor brittle legacy monolithic applications into containerized, cloud-native microservices on AWS, Google Cloud, and Azure, optimizing cloud spend through continuous FinOps.",
    keyDeliverables: [
      "Monolith-to-microservices decomposition and domain boundary modeling",
      "Zero-downtime database and asset migration to cloud infrastructure",
      "Infrastructure-as-Code (Terraform, Pulumi) for repeatable environments",
      "Kubernetes cluster orchestration, autoscaling, and disaster recovery setups"
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Kubernetes", "Helm", "Docker"],
    businessOutcomes: ["Up to 45% reduction in monthly cloud infrastructure spend", "Automated failover with RPO < 1 min, RTO < 5 min", "Instant horizontal scaling during demand spikes"],
    targetSectors: ["SMEs", "Fast-growth Startups", "Mid-to-Large Enterprises"]
  },
  {
    id: "data-analytics",
    verticalId: "v6-data",
    verticalName: "Data & Enterprise Analytics",
    title: "Data & Analytics Engineering",
    tagline: "Turn fragmented operational silos into real-time business intelligence engines.",
    description: "We architect modern data platforms, data lakes, and streaming pipelines that ingest millions of events daily, feeding interactive executive dashboards and predictive machine learning models.",
    keyDeliverables: [
      "Automated ETL/ELT pipelines using Apache Airflow and dbt",
      "Enterprise Data Warehouse architecture on Snowflake, BigQuery, or Redshift",
      "Executive KPI dashboards and self-service analytics portals",
      "Predictive customer churn, demand forecasting, and inventory optimization models"
    ],
    technologies: ["Snowflake", "Google BigQuery", "dbt", "Apache Airflow", "Kafka", "PowerBI", "Superset"],
    businessOutcomes: ["Unified single source of truth across sales, operations, and finance", "Reports generated in seconds instead of weekly manual runs", "Data-driven demand forecasting accuracy +28%"],
    targetSectors: ["Retail", "Manufacturing", "FinTech", "Healthcare"]
  },
  {
    id: "qa-test-automation",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "QA & Test Automation",
    tagline: "Bulletproof software quality through continuous automated regression testing.",
    description: "Eliminate production regressions and release with confidence. We implement end-to-end automated testing pipelines covering UI, API, performance, and security testing before code reaches users.",
    keyDeliverables: [
      "Automated test suites utilizing Playwright, Cypress, and Selenium",
      "API contract testing and mocking frameworks with Postman/Newman",
      "High-load stress and endurance testing simulating 100k+ concurrent users",
      "CI/CD automated quality gates blocking defective PRs prior to deployment"
    ],
    technologies: ["Playwright", "Cypress", "JMeter", "K6", "Postman", "GitHub Actions"],
    businessOutcomes: ["90% reduction in pre-release manual QA hours", "Zero critical defects escaping into production", "Release cycle frequency accelerated from monthly to daily"],
    targetSectors: ["SaaS Startups", "FinTech Core", "Enterprise Web Apps"]
  },
  {
    id: "application-maintenance",
    verticalId: "v7-managed",
    verticalName: "Managed Services & Support",
    title: "Application Maintenance & Managed Services",
    tagline: "24/7/365 proactive monitoring, SLA-backed bug resolution, and continuous enhancements.",
    description: "Free your core engineering team from maintenance distractions. Our dedicated managed services pods manage routine bug triage, performance tuning, security patches, and infrastructure uptime.",
    keyDeliverables: [
      "Tier 1, Tier 2, and Tier 3 engineering support with strict 15-minute SLA response",
      "Continuous OS, framework, and third-party dependency vulnerability patching",
      "Database health checks, index optimization, and backup verification",
      "Monthly health reports with incident root-cause analysis (RCA) and trend recommendations"
    ],
    technologies: ["Datadog", "PagerDuty", "Grafana", "Prometheus", "New Relic", "Jira Service Desk"],
    businessOutcomes: ["99.98% guaranteed system availability", "Predictable monthly maintenance cost structure", "Elimination of developer burnout from unmanaged on-call rotations"],
    targetSectors: ["Mid-Market Enterprises", "Financial Institutions", "24/7 Retail Operations"]
  },
  {
    id: "resource-augmentation",
    verticalId: "v7-managed",
    verticalName: "Managed Services & Support",
    title: "IT Resource Augmentation",
    tagline: "Vetted senior engineers and dedicated delivery pods ready to deploy in under 5 business days.",
    description: "Bridge critical technical talent gaps without painful recruitment cycles. We supply pre-screened senior full-stack developers, cloud architects, AI engineers, and QA leads who integrate seamlessly into your sprint cycles.",
    keyDeliverables: [
      "Pre-vetted senior software engineers (Top 3% technical assessment)",
      "Flexible engagement models: Hourly, Monthly Retainer, or Full Dedicated Pod",
      "Direct communication via your Slack/Teams and Jira workflows",
      "Zero recruitment overhead, payroll liabilities, or termination friction"
    ],
    technologies: ["React/Node", "Python/AI", "Java/Spring", "Go", "AWS/GCP DevOps", "Flutter/React Native"],
    businessOutcomes: ["Onboarding time reduced from 90 days to under 5 days", "Up to 50% cost savings compared to local Western or metro hires", "Instant elasticity to scale engineering pods up or down"],
    targetSectors: ["High-growth Scaleups", "Global Enterprises", "SaaS Founders"]
  },
  {
    id: "delivery-consulting",
    verticalId: "v3-transformation",
    verticalName: "Digital Transformation & Consulting",
    title: "Project & Delivery Management Consulting",
    tagline: "Instill disciplined agile execution, governance, and transparent delivery velocity.",
    description: "Rescuing stalled software projects and coaching enterprise IT organizations in modern agile delivery methodologies, sprint forecasting, and stakeholder governance.",
    keyDeliverables: [
      "Turnaround strategies for delayed or over-budget technology projects",
      "Agile delivery framework implementation (Scrum, Kanban, SAFe)",
      "Sprint velocity and burn-up metrics reporting for executive stakeholders",
      "Vendor management and milestone audit consulting"
    ],
    technologies: ["Scrum", "Kanban", "SAFe", "Jira Align", "Linear", "Miro"],
    businessOutcomes: ["Predictable sprint delivery commitments met $\ge$ 92% of cycles", "Early identification and mitigation of technical roadblocks", "Transparent alignment between engineering hours and business milestones"],
    targetSectors: ["Enterprises", "Government/Public Sector", "Fast-scaling Startups"]
  },
  {
    id: "product-engineering",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "Product Engineering",
    tagline: "From MVP conceptualization to global enterprise-scale SaaS architectures.",
    description: "We build complete digital products for founders and enterprise innovation labs. From customer journey mapping and interactive prototyping to battle-tested multi-tenant cloud architectures.",
    keyDeliverables: [
      "Rapid prototype and production MVP delivery within 6 to 10 weeks",
      "Multi-tenant SaaS architecture with tenant isolation and custom branding",
      "Usage-based billing and subscription tiers via Stripe/Razorpay integrations",
      "Feature flags, A/B testing infrastructure, and user analytics tracking"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API", "Mixpanel"],
    businessOutcomes: ["Compressed time-to-first-revenue for digital products", "Clean, maintainable codebase ready for institutional venture diligence", "Effortless tenant onboarding without manual infrastructure provisioning"],
    targetSectors: ["SaaS Founders", "Corporate Incubators", "B2B Marketplaces"]
  },
  {
    id: "mobile-development",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "Mobile App Development",
    tagline: "High-performance iOS and Android applications with offline-first synchronization.",
    description: "We build intuitive, fluid mobile applications that delight consumer users and power critical field workforce operations across iOS and Android from a single performant codebase.",
    keyDeliverables: [
      "Cross-platform applications using Flutter and React Native",
      "Native device integration: Biometrics, Camera, Bluetooth, GPS, and NFC",
      "Offline-first SQLite/WatermelonDB syncing for low-connectivity field operations",
      "App Store and Google Play publishing, review management, and CI/CD distribution"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Fastlane"],
    businessOutcomes: ["50% faster dual-platform delivery using shared codebase", "4.8+ star app store user satisfaction rating", "Seamless field data collection even in zero-network zones"],
    targetSectors: ["Retail & D2C", "Logistics Field Teams", "FinTech Banking Apps", "Healthcare Patients"]
  },
  {
    id: "cybersecurity-services",
    verticalId: "v8-security",
    verticalName: "Security & Governance",
    title: "Cybersecurity Technology Services",
    tagline: "Proactive vulnerability management, penetration testing, and regulatory hardening.",
    description: "Safeguard your enterprise digital assets against breaches. We conduct thorough application penetration testing, cloud security posture management (CSPM), and zero-trust IAM implementations.",
    keyDeliverables: [
      "Web and mobile application penetration testing (VAPT) with remediation guides",
      "Cloud infrastructure security audits (AWS IAM, S3 policies, network ACLs)",
      "Zero-Trust Architecture and Single Sign-On (SSO) integration (Okta, Azure AD)",
      "Compliance readiness audits for ISO 27001, SOC 2 Type II, and GDPR"
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "SonarQube", "Trivy", "Wiz", "Vault"],
    businessOutcomes: ["100% remediation of critical and high security findings prior to launch", "Audit certification speed accelerated by 3x", "Protection against ransomware and unauthorized data exfiltration"],
    targetSectors: ["BFSI", "Healthcare HIPAA", "E-Commerce", "SaaS Enterprises"]
  },
  {
    id: "integration-api",
    verticalId: "v1-engineering",
    verticalName: "Core Software Engineering",
    title: "Integration & API Services",
    tagline: "High-throughput API gateways and resilient distributed event backbones.",
    description: "Eliminate operational silos. We engineer secure, developer-friendly REST and GraphQL APIs, event streaming pipelines via Apache Kafka, and seamless webhooks connecting legacy backends with modern cloud apps.",
    keyDeliverables: [
      "High-throughput API Gateway implementation with rate-limiting and token auth",
      "Event-driven architecture with Apache Kafka, RabbitMQ, or AWS EventBridge",
      "Interactive Swagger/OpenAPI documentation and developer portal setups",
      "Custom connectors for Salesforce, SAP, QuickBooks, and payment gateways"
    ],
    technologies: ["Apache Kafka", "GraphQL", "Kong Gateway", "AWS EventBridge", "RabbitMQ", "OpenAPI"],
    businessOutcomes: ["Real-time data synchronization with sub-second event propagation", "Developer onboarding time for internal APIs reduced by 70%", "Zero data corruption during high-volume spikes"],
    targetSectors: ["Logistics", "FinTech", "Retail Marketplaces", "Healthcare Exchanges"]
  }
];

export const SERVICE_VERTICALS = [
  { id: "all", name: "All 15 Services" },
  { id: "v1-engineering", name: "Software Engineering & Modernization" },
  { id: "v2-ai", name: "AI & Cognitive Intelligence" },
  { id: "v5-bfsi", name: "BFSI & FinTech Engineering" },
  { id: "v4-enterprise", name: "Enterprise ERP & Operations" },
  { id: "v3-transformation", name: "Digital Transformation & Consulting" },
  { id: "v6-data", name: "Data & Enterprise Analytics" },
  { id: "v7-managed", name: "Managed Services & Talent Augmentation" },
  { id: "v8-security", name: "Cybersecurity & Governance" }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "bfsi",
    name: "BFSI & FinTech",
    headline: "High-security banking rails, algorithmic compliance, and instant digital lending.",
    description: "We engineer core transaction engines, loan origination systems (LOS), and automated KYC pipelines built to satisfy the world's most stringent financial regulations.",
    keySolutions: [
      "Digital Loan Origination & Automated Underwriting Engines",
      "Real-time fraud anomaly detection using streaming ML",
      "NPCI, UPI, and ISO 20022 message payment integration",
      "RBI data localization and automated audit trails"
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
    description: "Bridging the gap between physical machinery and digital intelligence. We modernize legacy ERPs, connect IoT sensor streams, and automate inventory reconciliation across regional warehouses.",
    keySolutions: [
      "Custom Shop Floor Execution Systems (MES) and Machine Uptime Telemetry",
      "Predictive Equipment Maintenance algorithms reducing unplanned downtime",
      "Multi-facility inventory optimization and automated vendor procurement",
      "Quality control inspection using edge computer vision"
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
      challenge: "Physicians spent 40% of their clinic hours transcribing records and deciphering lab printouts.",
      solution: "Implemented an intelligent clinical summary assistant and FHIR-compliant mobile patient portal.",
      impact: "Patient intake speed improved by 60%; physician administrative burnout dropped significantly."
    }
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    headline: "Omnichannel inventory sync, high-concurrency checkout engines, and personalized shopping.",
    description: "Empowering modern retailers to compete with global tech giants. We engineer unified commerce backbones that synchronize physical POS terminals with digital storefronts in real time.",
    keySolutions: [
      "Unified commerce engines connecting Shopify/Magento with offline ERPs",
      "Dynamic pricing and competitor catalog scraping systems",
      "AI-powered product recommendation and visual search engines",
      "High-throughput flash-sale checkout architectures with zero downtime"
    ],
    regulatoryCompliance: ["PCI-DSS", "Consumer Protection Rules", "GDPR / DPDP India 2023"],
    caseSnippet: {
      clientType: "National Fashion & Lifestyle Retailer (80+ Stores)",
      challenge: "Offline stores and web portals operated in silos, causing frequent out-of-stock cancellations.",
      solution: "Engineered an event-driven inventory bridge providing real-time store pickup and fulfillment.",
      impact: "Online order fulfillment speed improved by 75%; digital sales jumped 42% in Year 1."
    }
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    headline: "Real-time fleet telematics, dynamic route optimization, and digital proof-of-delivery.",
    description: "Turn transit uncertainty into competitive advantage. We architect end-to-end transportation management systems (TMS), driver companion apps, and automated dock scheduling portals.",
    keySolutions: [
      "GPS telematics and IoT cold-chain temperature telemetry tracking",
      "AI-powered multi-stop dynamic route optimization reducing fuel burn",
      "Driver mobile application with offline digital signature and photo ePOD",
      "Automated freight rate negotiation and spot market booking portals"
    ],
    regulatoryCompliance: ["E-Way Bill Integration", "DOT Transportation Safety", "Cold Chain Compliance"],
    caseSnippet: {
      clientType: "3PL Cold-Chain Logistics Provider",
      challenge: "Manual route planning resulted in 18% empty return trips and temperature excursion losses.",
      solution: "Built a centralized dispatch engine with real-time IoT sensor telemetry and dynamic re-routing.",
      impact: "Fleet fuel consumption reduced by 14%; spoilage claims dropped to near-zero."
    }
  },
  {
    id: "education",
    name: "Higher Education & EdTech",
    headline: "Scalable learning management systems, automated proctoring, and student lifecycle portals.",
    description: "Transforming educational delivery for universities and enterprise training institutions. We build interactive virtual classrooms, automated grading assistants, and comprehensive ERPs.",
    keySolutions: [
      "Cloud-native LMS supporting 50,000+ simultaneous examination sessions",
      "AI-assisted automated code grading and plagiarism detection",
      "Integrated student fee collection, financial aid, and scholarship portals",
      "Alumni engagement and career placement matching platforms"
    ],
    regulatoryCompliance: ["FERPA Compliance", "UGC Digital Guidelines", "Data Privacy Frameworks"],
    caseSnippet: {
      clientType: "Premier Engineering & Technology University",
      challenge: "Paper-based semester examinations and grading created 6-week result publication lags.",
      solution: "Deployed a secure cloud assessment portal with automated grading for objective and code submissions.",
      impact: "Result publication compressed from 45 days to 48 hours; zero examination leaks."
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-fintech-core",
    title: "Next-Gen Digital Underwriting & Core Modernization for Tier-1 NBFC",
    clientIndustry: "BFSI & FinTech",
    challenge: "A leading financial institution relied on legacy on-premise monolithic software that bottlenecked loan origination, taking 3–4 days per application and causing high customer drop-off.",
    solution: "Sangel Softwares architected a cloud-native microservices platform with an automated decision engine, connecting directly to credit bureaus, GSTN, and banking statement aggregators via event-driven Kafka pipelines.",
    metrics: [
      { label: "Turnaround Time", value: "3.5 Min (from 4 days)" },
      { label: "Loan Book Growth", value: "+320% in 12 Months" },
      { label: "Zero Discrepancy", value: "100% RBI Compliance" }
    ],
    techStack: ["Java Spring Boot", "Kafka", "PostgreSQL", "AWS ECS", "React", "Docker"]
  },
  {
    id: "cs-manufacturing-erp",
    title: "Multi-Plant Cloud ERP & Supply Chain Modernization",
    clientIndustry: "Manufacturing & Industrial",
    challenge: "An automotive component manufacturer operating 12 manufacturing plants across India struggled with disparate ERP versions, manual inventory spreadsheets, and frequent assembly stoppages.",
    solution: "We designed and deployed a unified, multi-facility ERP platform that integrated physical shop-floor barcode scanners, automated raw material reorder algorithms, and real-time GST e-Invoicing.",
    metrics: [
      { label: "Inventory Write-Offs", value: "-87% Reduction" },
      { label: "Annual Capital Freed", value: "$1.8 Million" },
      { label: "Plant Uptime", value: "99.95% Availability" }
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Redis", "Google Cloud"]
  },
  {
    id: "cs-healthcare-rag",
    title: "Private Enterprise GenAI Assistant for Clinical Knowledge",
    clientIndustry: "Healthcare & Life Sciences",
    challenge: "A 500-bed hospital network needed a secure way for doctors and medical researchers to query 15 years of anonymized clinical trials, pharmacology documentation, and hospital protocols without risking data leakage.",
    solution: "Sangel Softwares engineered an air-gapped Private RAG system deployed inside the client's dedicated VPC, indexing over 800,000 medical records with strict HIPAA role-based security.",
    metrics: [
      { label: "Query Resolution", value: "< 1.8 Seconds" },
      { label: "Data Leakage", value: "0% (Air-Gapped VPC)" },
      { label: "Staff Time Saved", value: "18+ Hours / Week" }
    ],
    techStack: ["PyTorch", "Milvus Vector DB", "LangChain", "FastAPI", "React", "Private LLM"]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "legacy-core-banking-2026",
    title: "Modernizing Legacy Core Banking: The 2026 Architectural Blueprint",
    category: "BFSI Technology",
    readTime: "6 min read",
    publishDate: "March 2026",
    summary: "How forward-thinking financial institutions are strangling monolithic core systems with event-driven microservices without taking down live consumer rails.",
    author: {
      name: "Sanjay Kumar",
      role: "Principal Technology Architect"
    },
    keyTakeaways: [
      "The Strangler Fig pattern provides a proven path to replace legacy COBOL/monolith systems incrementally.",
      "Event streaming using Kafka enables bidirectional sync between legacy ledger systems and modern microservices.",
      "Regulatory data localization (e.g. RBI standards) must be baked into the storage layer from Day 0.",
      "AI-driven automated regression testing prevents catastrophic cutover outages."
    ],
    content: [
      "For decades, Tier-1 banks and NBFCs have operated on monolithic core banking engines. While these systems proved reliable in high-throughput transactional environments of the 1990s, they have become existential liabilities in the era of UPI, open banking, and instant underwriting.",
      "Traditional 'rip-and-replace' overhauls suffer from notorious failure rates. At Sangel Softwares, we advocate for the Strangler Fig architecture. By placing an intelligent API gateway and an event-driven streaming layer (Apache Kafka) around the perimeter of the legacy core, we intercept discrete functional slices—such as customer KYC, loan eligibility, or statement generation.",
      "Over a period of 9 to 18 months, transactional load is redirected gradually into modular cloud-native microservices running on secure, containerized infrastructure. The legacy system is relegated to a passive system-of-record until it can be retired without a single second of consumer-facing downtime."
    ]
  },
  {
    id: "agentic-enterprise-workflows",
    title: "Agentic Workflows in Enterprise Software: Beyond Basic LLM Wrappers",
    category: "AI & Innovation",
    readTime: "8 min read",
    publishDate: "February 2026",
    summary: "Why shallow chatbot widgets fail in B2B environments and how multi-agent state machines are transforming ERP, compliance, and supply chain operations.",
    author: {
      name: "Pooja Verma",
      role: "Head of AI Engineering"
    },
    keyTakeaways: [
      "Enterprises do not need another chat window; they need autonomous task completion.",
      "Multi-agent frameworks decompose complex workflows into specialized verification, extraction, and execution roles.",
      "Human-in-the-loop approvals are essential for regulatory compliance and high-value transactions.",
      "Private vector databases and local fine-tuning preserve IP and eliminate vendor lock-in."
    ],
    content: [
      "The initial hype cycle of Generative AI led many technology consultancies to ship superficial wrappers around commercial LLM APIs. In enterprise settings, these tools consistently fail due to hallucinations, lack of business context, and zero auditability.",
      "Real business value emerges from Agentic Workflows. In an enterprise ERP setting, an agent does not merely answer 'What was our raw material spend in Q3?' Instead, a coordinated swarm of agents identifies purchase orders with price variances, cross-checks supplier contracts, flags billing anomalies, drafts inquiry emails for human review, and logs the reconciliation in the ledger.",
      "By anchoring autonomous agents to deterministic state machines and strict validation guardrails, Sangel Softwares helps enterprises compress multi-day manual audit cycles down to seconds."
    ]
  },
  {
    id: "cxo-guide-resource-augmentation",
    title: "The CXO's Guide to IT Resource Augmentation vs. Dedicated Pods",
    category: "Strategy & Governance",
    readTime: "5 min read",
    publishDate: "January 2026",
    summary: "A practical framework for CTOs and CIOs to decide between staff augmentation, managed service pods, and fixed-price contracts.",
    author: {
      name: "Rajesh Nambiar",
      role: "VP of Enterprise Delivery"
    },
    keyTakeaways: [
      "Staff augmentation solves immediate skill deficits with direct internal control.",
      "Dedicated Engineering Pods offer end-to-end SLA ownership and reduced management drag.",
      "Blended delivery models from India hubs reduce overall TCO by 40-55% while maintaining overlap with US/UK/ME timezones.",
      "Clear IP assignment and transparent developer evaluation matrices ensure high quality."
    ],
    content: [
      "Engineering leaders in 2026 face an intense dual mandate: accelerate delivery velocity while defending margins and avoiding bloating full-time headcount. The traditional dilemma between hiring locally or gambling on generic freelance marketplaces has given way to structured partnership models.",
      "When a client has mature internal technical leadership, IT Resource Augmentation allows immediate insertion of vetted senior specialists (e.g. a Go performance engineer or a Kafka architect) directly into ongoing sprints.",
      "Conversely, when an enterprise is modernizing a legacy product line, a Managed Delivery Pod—complete with a Delivery Lead, Senior Full-Stack Engineers, and a QA Automation Lead—removes overhead and guarantees milestone deliverables backed by strict enterprise SLAs."
    ]
  },
  {
    id: "high-reliability-cloud-migrations",
    title: "Achieving 99.99% Reliability in Hybrid Cloud Migrations",
    category: "Cloud & DevOps",
    readTime: "7 min read",
    publishDate: "March 2026",
    summary: "De-risking enterprise infrastructure transitions with Infrastructure-as-Code, chaos engineering, and automated rollback strategies.",
    author: {
      name: "Amitabh Sen",
      role: "Chief Cloud Architect"
    },
    keyTakeaways: [
      "Infrastructure-as-Code (Terraform) eliminates environment drift between staging and production.",
      "Canary deployments and automated circuit breakers prevent cascading failures.",
      "Continuous FinOps monitoring prevents unanticipated cloud budget spikes.",
      "Multi-region disaster recovery setups achieve RPO < 1 min and RTO < 5 min."
    ],
    content: [
      "Migrating high-throughput legacy workloads to AWS, Azure, or Google Cloud is not simply a matter of shifting virtual machines. Without modern architectural redesign, 'lift-and-shift' migrations often deliver higher monthly invoices and zero reliability gains.",
      "At Sangel Softwares, we build cloud architectures around immutable infrastructure principles. Every server, network route, and security perimeter is declared in Terraform. Automated Chaos Testing simulates regional network partitions before production traffic is introduced.",
      "The result is an enterprise infrastructure backbone that self-heals, scales horizontally on demand, and delivers verifiable 99.99% availability."
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
    title: "Senior Full-Stack Engineer (React & Go / Node)",
    department: "Core Software Engineering",
    location: "Pune / Bengaluru / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Build beautiful, highly performant web applications and scalable backend microservices for enterprise clients.",
    responsibilities: [
      "Develop modular, clean React / TypeScript frontend architectures",
      "Build high-throughput RESTful and GraphQL backend services in Go or Node.js",
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
    id: "role-cloud-devops",
    title: "Cloud & DevOps Infrastructure Architect",
    department: "Enterprise Cloud Modernization",
    location: "Bengaluru / Delhi NCR / Remote",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Architect and manage automated cloud environments, multi-region Kubernetes clusters, and continuous delivery pipelines across AWS and GCP.",
    responsibilities: [
      "Author declarative Infrastructure as Code using Terraform and Helm",
      "Manage production Kubernetes clusters with automated scaling and self-healing",
      "Implement zero-trust security perimeters, secret managers, and network firewalls",
      "Drive continuous cloud FinOps optimization to reduce client infrastructure costs"
    ],
    requirements: [
      "Hands-on experience with AWS / GCP / Azure enterprise architectures",
      "Expertise with Terraform, Docker, Kubernetes, Prometheus, and CI/CD tools",
      "Certification in AWS Solutions Architect or CKA is highly preferred"
    ]
  },
  {
    id: "role-qa-lead",
    title: "Lead QA Automation Engineer",
    department: "Quality Engineering",
    location: "Hyderabad / Jaipur / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Own the end-to-end automated testing strategy for multi-tier enterprise web, API, and mobile applications.",
    responsibilities: [
      "Design and maintain automated UI and API test frameworks using Playwright and TypeScript",
      "Implement high-volume performance and load testing using k6 and JMeter",
      "Integrate automated quality gates directly into GitHub Actions and GitLab CI",
      "Mentor junior QA engineers in test-driven automation methodologies"
    ],
    requirements: [
      "Extensive experience in Playwright, Cypress, or Selenium with TypeScript/Python",
      "Deep understanding of REST/GraphQL API testing, mock servers, and contract testing",
      "Proactive mindset with obsession for bug-free customer experience"
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
    bestFor: "MVPs, specific feature modules, ERP migrations, or time-bound digital transformation audits.",
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
    id: "managed-services",
    name: "24/7 Managed Services & Maintenance",
    bestFor: "Mission-critical production systems requiring continuous uptime, security patches, and SLA support.",
    billingModel: "Tiered Monthly SLA Subscription",
    slaCommitment: "15-Min Critical Incident Response & 99.98% System Uptime SLA",
    features: [
      "24/7/365 active monitoring, distributed tracing, and automated alerting",
      "Continuous OS, framework, and security vulnerability patching",
      "Dedicated on-call engineering roster with root-cause analysis (RCA)",
      "Ongoing cloud FinOps optimization and infrastructure cost reduction",
      "Monthly executive health dashboard and performance review"
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

export const PRODUCTS_ROADMAP = [
  {
    name: "Sangel CoreFin™",
    stage: "In Pilot with Select NBFC Partners",
    category: "BFSI & FinTech Accelerator",
    description: "An intelligent, cloud-native Digital Loan Origination and Automated Credit Underwriting engine with direct API rails to Indian and international financial data aggregators.",
    highlights: ["Sub-4 minute decisioning", "Pre-built RBI compliance", "Dynamic risk scoring"]
  },
  {
    name: "Sangel OpsFlow™",
    stage: "Alpha Development",
    category: "Enterprise ERP & Supply Chain",
    description: "A modular, lightweight enterprise resource planning and shop-floor orchestration platform designed for high-growth discrete and process manufacturers.",
    highlights: ["Real-time inventory telemetry", "Automated GST e-invoicing", "Multi-warehouse dispatch"]
  },
  {
    name: "Sangel AgenticOps™",
    stage: "Research & Development",
    category: "Autonomous AI IT Operations",
    description: "An autonomous agentic operations suite that monitors enterprise codebases, predicts architectural regressions, and auto-generates test coverage and documentation.",
    highlights: ["Continuous security auditing", "Self-healing incident triage", "Synthetic traffic testing"]
  }
];
