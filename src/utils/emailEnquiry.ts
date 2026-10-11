/**
 * Utility for formatting and dispatching enquiries directly to email
 * Official company contact email: contact@sangelsoftwares.com
 */

export const COMPANY_OFFICIAL_EMAIL = 'contact@sangelsoftwares.com';

export interface EmailEnquiryPayload {
  type: 'general_inquiry' | 'consultation' | 'product_demo' | 'domain_inquiry' | 'service_inquiry';
  subject: string;
  senderName: string;
  senderEmail: string;
  companyName?: string;
  role?: string;
  serviceOrProduct?: string;
  timeline?: string;
  notes?: string;
  extraDetails?: Record<string, string>;
}

export function formatEmailBody(payload: EmailEnquiryPayload): string {
  const lines: string[] = [
    `Dear Sangel Softwares Team,`,
    ``,
    `I am submitting an enterprise inquiry via the official website portal.`,
    ``,
    `--- INQUIRY DETAILS ---`,
    `Inquiry Type: ${payload.type.replace('_', ' ').toUpperCase()}`,
    `Subject: ${payload.subject}`,
    `Sender Name: ${payload.senderName}`,
    `Corporate Email: ${payload.senderEmail}`,
    payload.companyName ? `Company / Organization: ${payload.companyName}` : '',
    payload.role ? `Executive Role: ${payload.role}` : '',
    payload.serviceOrProduct ? `Selected Focus / Product / Service: ${payload.serviceOrProduct}` : '',
    payload.timeline ? `Target Horizon / Timeline: ${payload.timeline}` : '',
    ``,
  ];

  if (payload.extraDetails) {
    lines.push(`--- ADDITIONAL SPECIFICATIONS ---`);
    for (const [key, value] of Object.entries(payload.extraDetails)) {
      lines.push(`${key}: ${value}`);
    }
    lines.push(``);
  }

  if (payload.notes) {
    lines.push(`--- REQUIREMENTS & MESSAGE ---`);
    lines.push(payload.notes);
    lines.push(``);
  }

  lines.push(`---`);
  lines.push(`Please review and connect with me at your earliest convenience.`);
  lines.push(`Regards,`);
  lines.push(payload.senderName);

  return lines.filter(line => line !== undefined).join('\n');
}

export function generateMailtoUrl(payload: EmailEnquiryPayload): string {
  const emailSubject = encodeURIComponent(`[Website Enquiry] ${payload.subject} - ${payload.senderName} (${payload.companyName || 'Enterprise Client'})`);
  const emailBody = encodeURIComponent(formatEmailBody(payload));
  return `mailto:${COMPANY_OFFICIAL_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
}

export function dispatchEmailEnquiry(payload: EmailEnquiryPayload): boolean {
  try {
    const mailtoUrl = generateMailtoUrl(payload);
    
    // Attempt opening via mailto link
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Failed to dispatch mailto:', error);
    return false;
  }
}
