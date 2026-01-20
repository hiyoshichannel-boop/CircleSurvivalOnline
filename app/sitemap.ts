import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://circlesurvivalonline.io.vn",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.circlesurvivalonline.io.vn",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://circlesurvivalonline.io.vn/game",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.circlesurvivalonline.io.vn/game",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    
    // thêm các trang khác nếu có
  ];
}