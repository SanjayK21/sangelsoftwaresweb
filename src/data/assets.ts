export const ASSETS = {
  heroTransformation: "/src/assets/images/sangel_hero_transformation_1790421304013.jpg",
  bfsiFintech: "/src/assets/images/sangel_bfsi_fintech_1790421318908.jpg",
  cloudArchitecture: "/src/assets/images/sangel_cloud_architecture_1790421335801.jpg",
  aiEngineering: "/src/assets/images/sangel_ai_engineering_1790421349301.jpg",
  manufacturingSmart: "/src/assets/images/sangel_manufacturing_smart_1790422707105.jpg",
  healthcareDigital: "/src/assets/images/sangel_healthcare_digital_1790422723070.jpg",
  cybersecuritySoc: "/src/assets/images/sangel_cybersecurity_soc_1790422736107.jpg",
  corporateBoardroom: "/src/assets/images/sangel_corporate_boardroom_1790422747627.jpg"
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
    id: "slide-bfsi",
    image: "/src/assets/images/sangel_bfsi_fintech_1790421318908.jpg",
    category: "BFSI & FinTech Engineering",
    headline: "Next-Gen Banking Rails & Digital Underwriting Core",
    subtext: "Sub-4-minute loan origination, event-driven fraud telemetry, and strict RBI data localization compliance.",
    metricLabel: "Transaction Latency",
    metricValue: "Sub-100ms API Execution",
    actionText: "View BFSI Practice",
    actionTarget: "industries"
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
    id: "slide-cloud-modernization",
    image: "/src/assets/images/sangel_cloud_architecture_1790421335801.jpg",
    category: "Cloud Architecture & Modernization",
    headline: "De-Risking Legacy Monoliths with Microservices",
    subtext: "Transitioning monolithic codebases into containerized Kubernetes environments with 99.98% availability SLAs.",
    metricLabel: "Cloud FinOps Savings",
    metricValue: "Up to 45% TCO Savings",
    actionText: "Modernize Monoliths",
    actionTarget: "services"
  }
];
