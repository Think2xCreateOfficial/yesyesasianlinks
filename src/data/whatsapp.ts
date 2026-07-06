import { companyInfo } from "./company";

export const whatsappData = {
  businessNumber: companyInfo.contact.whatsapp.replace(/[^0-9]/g, ""),
  templates: {
    service: (serviceName: string) => `Hello YES YES ASIAN LINK,\n\nI would like to know more about:\n\nService:\n${serviceName}\n\nPlease share details regarding process, pricing, and support.\n\nThank you.`,
    
    product: (productName: string, categoryName: string = "Not Specified", quantity: string = "To be discussed") => `Hello YES YES ASIAN LINK,\n\nI am interested in sourcing the following product:\n\nProduct:\n${productName}\n\nCategory:\n${categoryName}\n\nPlease share supplier, pricing, MOQ, and import details.\n\nThank you.`,
    
    tour: () => `Hello YES YES ASIAN LINK,\n\nI would like to know more about the China Business Tour.\n\nPlease share:\n\nTour Dates\nTour Cost\nCities Covered\nMarket Visits\nFactory Visits\nVisa Process\n\nThank you.`,
    
    rfq: (productName: string, quantity: string, unit: string, requirement: string = "Standard", companyName: string = "Not Provided") => `Hello YES YES ASIAN LINK,\n\nI would like to request a quotation.\n\nProduct:\n${productName}\n\nQuantity:\n${quantity}\n\nUnit:\n${unit}\n\nRequirement:\n${requirement}\n\nCompany:\n${companyName}\n\nPlease contact me regarding pricing and sourcing options.\n\nThank you.`,
    
    consultation: () => `Hello YES YES ASIAN LINK,\n\nI would like to book a consultation regarding importing products from China.\n\nPlease contact me.\n\nThank you.`,

    contactForm: (fields: {
      fullName: string;
      companyName?: string;
      mobile: string;
      email: string;
      businessType: string;
      productCategory: string;
      servicesRequired: string[];
      importQuantity?: string;
      budgetRange?: string;
      preferredContact?: string;
      message?: string;
    }) => {
      const lines = [
        `Hello YES YES ASIAN LINK,`,
        ``,
        `I have a business enquiry. Here are my details:`,
        ``,
        `*Full Name:* ${fields.fullName}`,
        fields.companyName ? `*Company:* ${fields.companyName}` : null,
        `*Mobile:* ${fields.mobile}`,
        `*Email:* ${fields.email}`,
        ``,
        `*Business Type:* ${fields.businessType}`,
        `*Product Category:* ${fields.productCategory}`,
        `*Services Required:* ${fields.servicesRequired.join(", ")}`,
        fields.importQuantity ? `*Import Quantity:* ${fields.importQuantity}` : null,
        fields.budgetRange ? `*Budget Range:* ${fields.budgetRange}` : null,
        fields.preferredContact ? `*Preferred Contact:* ${fields.preferredContact}` : null,
        ``,
        fields.message ? `*Additional Details:*\n${fields.message}` : null,
        ``,
        `Please contact me at your convenience.`,
        ``,
        `Thank you.`,
      ];
      return lines.filter(Boolean).join(`\n`);
    },
  }
};
