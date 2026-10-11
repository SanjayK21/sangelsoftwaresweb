export const ASSETS = {
  heroTransformation: "/src/assets/images/sangel_hero_transformation_1790421304013.jpg",
  bfsiFintech: "/src/assets/images/sangel_bfsi_fintech_1790421318908.jpg",
  cloudArchitecture: "/src/assets/images/sangel_cloud_architecture_1790421335801.jpg",
  aiEngineering: "/src/assets/images/sangel_ai_engineering_1790421349301.jpg",
  manufacturingSmart: "/src/assets/images/sangel_manufacturing_smart_1790422707105.jpg",
  healthcareDigital: "/src/assets/images/sangel_healthcare_digital_1790422723070.jpg",
  cybersecuritySoc: "/src/assets/images/sangel_cybersecurity_soc_1790422736107.jpg",
  corporateBoardroom: "/src/assets/images/sangel_corporate_boardroom_1790422747627.jpg",
  saasProducts: "/src/assets/images/sangel_saas_products_1791717704294.jpg",
  webCreative: "/src/assets/images/sangel_web_creative_1791717720028.jpg",
  cloudDatacenter: "/src/assets/images/sangel_cloud_datacenter_1791717734613.jpg",
  mobileFintech: "/src/assets/images/sangel_mobile_fintech_1791717751209.jpg",
  solarField: "/src/assets/images/sangel_solar_field_1791717795607.jpg",
  instituteEdtech: "/src/assets/images/sangel_institute_edtech_1791717812506.jpg"
};

export interface SlideItem {
  id: string;
  image: string;
  category: string;
  headline: string;
  subtext: string;
  metricLabel?: string;
  metricValue?: string;
  actionText: string;
  actionTarget: string; // tab or modal
}

export const HERO_SLIDES: SlideItem[] = [
  {
    id: "slide-ai-transformation",
    image: "/src/assets/images/sangel_hero_transformation_1790421304013.jpg",
    category: "Enterprise Digital Transformation",
    headline: "AI-Enabled Software Engineering & Autonomous Systems",
    subtext: "Architecting resilient digital foundations for enterprises, banks, and scaleups with production AI and zero legacy drag.",
    metricLabel: "Delivery Velocity",
    metricValue: "+40% Faster Cycles",
    actionText: "Explore AI Solutions",
    actionTarget: "services"
  },
  {
    id: "slide-saas-products",
    image: "/src/assets/images/sangel_saas_products_1791717704294.jpg",
    category: "Proprietary Software Products",
    headline: "Vertical SaaS Engines: Sangel SolarCare™ & InstituteOne™",
    subtext: "Purpose-engineered software products automating solar panel maintenance telemetry and coaching institute operations.",
    metricLabel: "Operational Efficiency",
    metricValue: "65+ Hours Saved / Week",
    actionText: "Explore Products",
    actionTarget: "products"
  },
  {
    id: "slide-web-branding",
    image: "/src/assets/images/sangel_web_creative_1791717720028.jpg",
    category: "Branding & Digital Marketing",
    headline: "Brand Identity, SEO, Email & WhatsApp Marketing",
    subtext: "Corporate branding, UI/UX design, organic SEO, high-conversion Email marketing automation, and WhatsApp promotional campaigns.",
    metricLabel: "Campaign Reach",
    metricValue: "+320% Qualified Leads",
    actionText: "Explore Branding & Marketing",
    actionTarget: "services"
  },
  {
    id: "slide-infrastructure",
    image: "/src/assets/images/sangel_cloud_datacenter_1791717734613.jpg",
    category: "Domain, Hosting & Infra..",
    headline: "Cloud VPS, Domains, Business Email & DevOps",
    subtext: "Domain registration, high-speed cloud hosting, business email servers, SSL certificates, and 24/7 infrastructure monitoring.",
    metricLabel: "Platform Reliability",
    metricValue: "99.99% Uptime Guarantee",
    actionText: "Domain & Cloud Hosting",
    actionTarget: "services"
  },
  {
    id: "slide-mobile-apps",
    image: "/src/assets/images/sangel_mobile_fintech_1791717751209.jpg",
    category: "Mobile Application Engineering",
    headline: "Native iOS & Android Apps with High-Performance UX",
    subtext: "Cross-platform Flutter & React Native applications, enterprise mobile portals, payment gateways, and real-time synchronization.",
    metricLabel: "App Store Quality",
    metricValue: "4.9★ Average Rating",
    actionText: "Mobile Engineering",
    actionTarget: "services"
  },
  {
    id: "slide-project-mgmt",
    image: "/src/assets/images/sangel_corporate_boardroom_1790422747627.jpg",
    category: "Project Management & Delivery",
    headline: "Enterprise Agile PMO, Technical Program Management & Delivery Governance",
    subtext: "Sprint velocity forecasting, cross-functional release governance, and rapid 10-day project turnaround recovery.",
    metricLabel: "Commitment Accuracy",
    metricValue: "≥ 94% Sprint Completion",
    actionText: "Explore Project Management",
    actionTarget: "services"
  },
  {
    id: "slide-solar-cleantech",
    image: "/src/assets/images/sangel_solar_field_1791717795607.jpg",
    category: "CleanTech & Solar Operations",
    headline: "Sangel SolarCare™ — Field Automation for Solar Plants",
    subtext: "Real-time cleaning cycle tracking, technician dispatch, water consumption audit, and solar generation loss analytics.",
    metricLabel: "Yield Recovery",
    metricValue: "+18% Solar Output",
    actionText: "Request SolarCare Demo",
    actionTarget: "products"
  },
  {
    id: "slide-institute-edtech",
    image: "/src/assets/images/sangel_institute_edtech_1791717812506.jpg",
    category: "Education & Coaching Management",
    headline: "Sangel InstituteOne™ — All-In-One Academy Platform",
    subtext: "Unified admissions, fee payment automation, student biometric attendance, automated parent alerts, and mock tests.",
    metricLabel: "Fee Collection",
    metricValue: "98% Timely Fee Inflow",
    actionText: "Request InstituteOne Demo",
    actionTarget: "products"
  },
  {
    id: "slide-cybersecurity",
    image: "/src/assets/images/sangel_cybersecurity_soc_1790422736107.jpg",
    category: "Cybersecurity & Zero-Trust Governance",
    headline: "Mission-Critical Application Hardening & VAPT",
    subtext: "Continuous threat monitoring, zero-trust perimeter IAM, and automated ISO 27001 / SOC 2 compliance readiness.",
    metricLabel: "Security Posture",
    metricValue: "100% Critical Zero-Day Patching",
    actionText: "Audit Your Security Posture",
    actionTarget: "consultation"
  },
  {
    id: "slide-manufacturing",
    image: "/src/assets/images/sangel_manufacturing_smart_1790422707105.jpg",
    category: "Smart Manufacturing & Industry 4.0",
    headline: "Automated Shop Floor ERP & Real-Time Telemetry",
    subtext: "Unifying multi-plant discrete manufacturing, automated barcode tracking, and predictive inventory reconciliation.",
    metricLabel: "Inventory Loss Reduction",
    metricValue: "-87% Write-offs",
    actionText: "Explore Manufacturing ERP",
    actionTarget: "services"
  }
];
