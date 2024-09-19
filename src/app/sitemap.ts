import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    {
      url: `${url}`,
      lastModified: new Date(),
    },
    {
      url: `${url}/information`,
      lastModified: new Date(),
    },
  ];
}
