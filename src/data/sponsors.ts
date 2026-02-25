export type SponsorCategory =
    | "Title Sponsors"
    | "Platinum Sponsors"
    | "Gold Sponsors"
    | "Silver Sponsors"
    | "Community Partners"
    | "Media Partners"
    | "Technology Partners";

export interface Sponsor {
    id: string;
    name: string;
    logoUrl: string;
    category: SponsorCategory;
    websiteUrl: string;
}

export const sponsorsData: Sponsor[] = [
    {
        id: "title-1",
        name: "TechNova Corp",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop", // placeholder logo
        category: "Title Sponsors",
        websiteUrl: "#",
    },
    

    {
        id: "gold-1",
        name: "Synapse Networks",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Gold Sponsors",
        websiteUrl: "#",
    },
    {
        id: "gold-2",
        name: "Nexus Electronics",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Gold Sponsors",
        websiteUrl: "#",
    },
    {
        id: "gold-3",
        name: "Vertex AI",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Gold Sponsors",
        websiteUrl: "#",
    },
    {
        id: "silver-1",
        name: "Apex Gaming",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Silver Sponsors",
        websiteUrl: "#",
    },
    {
        id: "silver-2",
        name: "Lumina Designs",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Silver Sponsors",
        websiteUrl: "#",
    },
    {
        id: "community-1",
        name: "Global Devs",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Community Partners",
        websiteUrl: "#",
    },
    {
        id: "media-1",
        name: "Tech Digest",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Media Partners",
        websiteUrl: "#",
    },
    {
        id: "tech-1",
        name: "CloudFrontier",
        logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=300&fit=crop",
        category: "Technology Partners",
        websiteUrl: "#",
    }
];

export const CATEGORY_ORDER: SponsorCategory[] = [
    "Title Sponsors",
    "Platinum Sponsors",
    "Gold Sponsors",
    "Silver Sponsors",
    "Technology Partners",
    "Media Partners",
    "Community Partners"
];
