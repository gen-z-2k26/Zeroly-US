import { CONTENT_PAGES } from "@/lib/site-urls";
import type { FaqGroup } from "@/lib/types";

export type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicyPageDef = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  groupTitles: string[];
  paragraphs?: string[];
  designed?: boolean;
  sections?: PolicySection[];
};

export const POLICY_PAGES: PolicyPageDef[] = [
  {
    slug: "shipping-policy",
    title: "Shipping & Delivery",
    description:
      "Zeroly offers free shipping on all products throughout the United States.",
    intro:
      "Handling time is 1-3 business days and transit time is 5-8 business days, for an estimated total of 6-11 business days.",
    groupTitles: ["Shipping & Delivery"],
  },
  {
    slug: "return-and-refund-policy",
    title: "Returns & Refunds",
    description: "How to return an eligible product and how refunds are issued.",
    intro:
      "We offer a 30-calendar-day return window for eligible products and a $0 restocking fee on approved returns.",
    groupTitles: ["Returns and exchanges", "Refunds"],
  },
  {
    slug: "cancellation-policy",
    title: "Order Cancellations",
    description: "How to request a cancellation before fulfillment begins.",
    intro:
      "You may request cancellation before fulfillment begins. The cancellation fee is $0.00.",
    groupTitles: ["Placing and managing orders"],
  },
  {
    slug: "payment-policy",
    title: "Payment Options",
    description:
      "At Zeroly, we aim to provide a convenient and straightforward checkout experience.",
    intro:
      "Available payment methods are displayed during checkout on https://zeroly.us.",
    groupTitles: ["Payments"],
  },
  {
    slug: "buy-now-pay-later",
    title: "Buy Now, Pay Later",
    description:
      "Installment payment options are available only when a supported provider is enabled and displayed during checkout.",
    intro:
      "Buy Now, Pay Later services may allow eligible customers to divide the cost of a purchase into scheduled payments. Availability is not guaranteed.",
    groupTitles: ["Payments"],
  },
  {
    slug: "warranty",
    title: "Warranty & Support",
    description: "Manufacturer warranty coverage and what to do if a product has an issue.",
    intro:
      "Warranty availability varies by product and manufacturer. We do not promise a blanket one-year warranty on all products.",
    groupTitles: ["Warranty and product support"],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "At Zeroly, we value your privacy and recognize the importance of protecting your personal information.",
    intro:
      "This policy describes how Zeroly handles information when you use https://zeroly.us. Questions can be sent to info@zeroly.us or +1 (951) 928-3234.",
    groupTitles: [],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    description:
      "These Terms of Service govern your use of https://zeroly.us, including browsing products, placing orders, and accessing customer support.",
    intro:
      "Zeroly is a US-based multi-category online retail store operated by Modern Closet Spaces LLC. By using the website, you agree to comply with these terms to the extent permitted by applicable law.",
    groupTitles: [],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description:
      "This Cookie Policy explains how Zeroly may use cookies and similar technologies when you visit https://zeroly.us.",
    intro:
      "Essential cookies may support shopping carts, checkout, security, and other website functions. Additional cookies depend on the services enabled.",
    groupTitles: ["Accounts, privacy, and security"],
  },
  {
    slug: "legal-notice",
    title: "Legal Notice",
    description:
      "This Legal Notice provides information about the operation, ownership, and use of the Zeroly website.",
    intro:
      "Zeroly is operated by Modern Closet Spaces LLC. The business address is 27708 Monroe, Sun City, CA 92585, United States.",
    groupTitles: ["General Questions"],
    paragraphs: [
      "Website: https://zeroly.us. Email: info@zeroly.us. Phone: +1 (951) 928-3234.",
      "This address is provided for business correspondence. Please obtain return instructions before sending merchandise.",
    ],
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    description:
      "At Zeroly, we believe online shopping should be accessible to people with different abilities and needs.",
    intro:
      "If a page is difficult to use, email info@zeroly.us or call +1 (951) 928-3234 and tell us the page and what you were trying to do.",
    groupTitles: [],
  },
  {
    slug: "your-privacy-choices",
    title: "Your Privacy Choices",
    description:
      "Your information, your preferences, and your rights when you shop at Zeroly.",
    intro:
      "You may contact info@zeroly.us or call +1 (951) 928-3234 with a privacy-related request. Applicable rights depend on relevant privacy laws.",
    groupTitles: ["Accounts, privacy, and security"],
  },
];

export function policyBySlug(slug: string) {
  return POLICY_PAGES.find((page) => page.slug === slug) ?? null;
}

export function groupsForPolicy(policy: PolicyPageDef, groups: FaqGroup[]) {
  if (!policy.groupTitles.length) return [];
  return groups.filter((group) => policy.groupTitles.includes(group.title));
}

export function contentPageTitle(slug: string) {
  return CONTENT_PAGES.find((page) => page.slug === slug)?.title ?? slug;
}
