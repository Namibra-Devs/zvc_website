// data/companyInfo.js
import {
  BarChart3,
  Handshake,
  Globe2,
  Landmark,
  Recycle,
} from "lucide-react";

export const COMPANY_INFO = {
  name: "ZongoVation Capital Ltd.",
  tagline: "Prosperity with Purpose",
  email: "partnership@zongovationcapital.com",
  phone: "+233 (0) 244 980692",
  address: "Accra, Ghana",
  website: "https://www.zongovationcapital.com",
};

export const SOCIAL_LINKS = {
  linkedin: "#",
  twitter: "#",
  youtube: "#",
};

export const SERVICES = [
  {
    title: "Sukuk Structuring & Advisory",
    description:
      "Design, documentation, and management of Islamic bond issuances (sovereign, corporate, and project-tied).",
    icon: BarChart3, // 📊
  },
  {
    title: "Transaction Advisory (PPP)",
    description:
      "Structuring and financial closure support for public-private infrastructure projects.",
    icon: Handshake, // 🤝
  },
  {
    title: "Investment Mobilization",
    description:
      "Syndication and investor relations across the GCC, Malaysia, and Africa.",
    icon: Globe2, // 🌍
  },
  {
    title: "Islamic Finance Consulting",
    description:
      "Shariah compliance, policy, and capacity-building support for institutions.",
    icon: Landmark, // 🕌
  },
  {
    title: "ESG & Impact Advisory",
    description:
      "Embedding sustainability and Maqasid al-Shariah principles into financing.",
    icon: Recycle, // ♻️
  },
];

export const IMPACT_METRICS = [
  { value: 1000000000, label: "Ethical capital to be mobilized", prefix: "$" },
  { value: 20000, label: "Homes delivered under GAHSP" },
  { value: 10000, label: "Jobs created through projects" },
  { value: 100, label: "Shariah-Compliant", suffix: "%" },
  { value: 4, label: "ESG Certified UN SDGs" },
];

export const PARTNERS = [
  "Government of Ghana",
  "Islamic Development Bank (IsDB)",
  "Arab Bank for Economic Development in Africa (BADEA)",
  "Islamic Corporation for the Insurance of Investment and Export Credit (ICIEC)",
  "Africa Finance Corporation (AFC)",
  "African Development Bank (AfDB)",
  "Ghana Investment Promotion Centre (GIPC)",
];
