import { whatsappData } from "@/data/whatsapp";

export const getWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappData.businessNumber}?text=${encodedMessage}`;
};

export const getServiceEnquiryUrl = (serviceName: string) => {
  return getWhatsAppUrl(whatsappData.templates.service(serviceName));
};

export const getProductEnquiryUrl = (productName: string, categoryName?: string, quantity?: string) => {
  return getWhatsAppUrl(whatsappData.templates.product(productName, categoryName, quantity));
};

export const getTourEnquiryUrl = () => {
  return getWhatsAppUrl(whatsappData.templates.tour());
};

export const getRFQUrl = (productName: string, quantity: string, unit: string, requirement?: string, companyName?: string) => {
  return getWhatsAppUrl(whatsappData.templates.rfq(productName, quantity, unit, requirement, companyName));
};

export const getConsultationUrl = () => {
  return getWhatsAppUrl(whatsappData.templates.consultation());
};
