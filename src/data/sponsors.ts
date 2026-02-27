export type SponsorCategory =
    | "Title Sponsors"
    | "Platinum Sponsors"
    | "Sponsors"
    | "Silver Sponsors"
    | "Community Partners"
    | "Social Media Partners"
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
        name: "Student tribe",
        logoUrl:"/sponsors-images/student_tribe.jpeg", // placeholder logo
        category: "Title Sponsors",
        websiteUrl: "#",
    },
    {
        id: "media-1",
        name: "Beautiful Tirupati",
        logoUrl: "/sponsors-images/beautiful_tirupati.jpg",
        category: "Social Media Partners",
        websiteUrl: "#",
    },
      
    
    {
        id: "gold-3",
        name: "Leap Geebee Education",
        logoUrl: "/sponsors-images/geebee.jpg",
        category: "Sponsors",
        websiteUrl: "#",
    },
   
   
    
];

export const CATEGORY_ORDER: SponsorCategory[] = [
    
    "Platinum Sponsors",
    "Social Media Partners",

    "Sponsors",
    "Silver Sponsors",
    "Technology Partners",
    "Community Partners"
];
