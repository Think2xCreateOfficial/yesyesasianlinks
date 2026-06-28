import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yesyesasianlink.com";

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og/default.png",
  noIndex = false,
}: MetadataProps): Metadata {
  return {
    title: {
      default: title,
      template: `%s | YES YES ASIAN LINK`,
    },
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "YES YES ASIAN LINK",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
