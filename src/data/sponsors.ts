export type SponsorCategory =
    | "Title Sponsors"
    | "Platinum Sponsors"
    | "Sponsors"
    | "Silver Sponsors"
    | "Community Partners"
    | "Social Media Partners"
    | "Technology Partners"
    | "Industry partners";

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
    {
        id: "industry-1",
        name: "Young Indians",
        logoUrl: "/sponsors-images/young indians.jpeg",
        category: "Industry partners",
        websiteUrl: "#",
    },
    {
        id: "industry-2",
        name: "Data Quotes",
        logoUrl: "/sponsors-images/dataquates.jpeg",
        category: "Industry partners",
        websiteUrl: "#",
    },
    {
        id: "industry-3",
        name: "Algonex IT Solutions",
        logoUrl: "/sponsors-images/3rd.jpeg",
        category: "Industry partners",
        websiteUrl: "#",
    },
   
   
    
];

export const CATEGORY_ORDER: SponsorCategory[] = [
    
    "Platinum Sponsors",
    "Social Media Partners",
    "Sponsors",
    "Industry partners",
    "Silver Sponsors",
    "Technology Partners",
    "Community Partners"
];
