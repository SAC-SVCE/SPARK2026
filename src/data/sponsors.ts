export type SponsorCategory =
    | "Title Sponsors"
    | "Platinum Sponsors"
    | "Sponsors"
    | "medical partners"
    | "Silver Sponsors"
    | "Community Partners"
    | "Banking partners"
    | "Social Media Partners"
    | "Technology Partners"
    | "Industry partners"
      "Manufacturing Partners";

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
        logoUrl: "/sponsors-images/student_tribe.jpeg", // placeholder logo
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
        id: "media-2",
        name: "It's My Tirupathi",
        logoUrl: "/sponsors-images/it's my.jpeg",
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
        id: "gold-3",
        name: "Yodhaa",
        logoUrl: "/sponsors-images/yodha.jpeg",
        category: "Sponsors",
        websiteUrl: "#",
    },
    {
        id: "medical-1",
        name: "Sahasra Hospital",
        logoUrl: "/sponsors-images/sahasra hospital.jpg",
        category: "medical partners",
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
        logoUrl: "/sponsors-images/dataquotas.jpeg",
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
    {
        id: "back-1",
        name: "HDFC Bank",
        logoUrl: "/sponsors-images/hdfc.png",
        category: "Banking partners",
        websiteUrl: "#",
    },
    {
        id: "back-2",
        name: "Karur Vysya Bank",
        logoUrl: "/sponsors-images/kvb.png",
        category: "Banking partners",
        websiteUrl: "#",
    },
    {
        id: "back-3",
        name: "IDFC First Bank",
        logoUrl: "/sponsors-images/idfc_first_bank.jpg",
        category: "Banking partners",
        websiteUrl: "#",
    },
    {
        id: "back-4",
        name: "Sri Balaji Renewable",
        logoUrl: "/sponsors-images/sb.jpeg",
        category: "Manufacturing Partners",
        websiteUrl: "#",
    },



];

export const CATEGORY_ORDER: SponsorCategory[] = [

    "Platinum Sponsors",
    "Social Media Partners",
    "Sponsors",
    "medical partners",
    "Industry partners",
    "Banking partners",
    "Silver Sponsors",
    "Technology Partners",
    "Community Partners",
    "Manufacturing Partners"
];
