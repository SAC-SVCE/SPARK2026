// Using existing gallery images as placeholders
const img1 = "/gallery_images/img1.jpg";
const img2 = "/gallery_images/img2.jpg";
const img3 = "/gallery_images/img3.jpg";
const img4 = "/gallery_images/img4.jpg";
const img5 = "/gallery_images/img5.jpg";
const img6 = "/gallery_images/img6.jpg";

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const images = [img1, img2, img3, img4, img5, img6];
const img = (i: number) => images[i % images.length];

export const organizationTeam: TeamMember[] = [
    { name: "Arjun Mehta", role: "President", image: img(0) },
    { name: "Priya Sharma", role: "Vice President", image: img(1) },
    { name: "Rohan Das", role: "Secretary", image: img(2) },
    { name: "Sneha Iyer", role: "Treasurer", image: img(3) },
    { name: "Karan Patel", role: "Coordinator", image: img(4) },
];

export const promotionTeam: TeamMember[] = [
    { name: "Ananya Reddy", role: "PR Lead", image: img(1) },
    { name: "Vikram Singh", role: "Marketing Head", image: img(0) },
    { name: "Meera Joshi", role: "Content Creator", image: img(3) },
    { name: "Aditya Kumar", role: "Social Media Manager", image: img(2) },
    { name: "Kavya Nair", role: "Outreach Coordinator", image: img(5) },
    { name: "Rahul Verma", role: "Brand Strategist", image: img(4) },
];

export const websiteTeam: TeamMember[] = [
    { name: "Dev Rajput", role: "Lead Developer", image: img(2) },
    { name: "Ishita Gupta", role: "UI/UX Designer", image: img(3) },
    { name: "Nikhil Rao", role: "Full Stack Dev", image: img(0) },
];

export const smdcTeam: TeamMember[] = [
    { name: "Tanvi Shah", role: "SMDC Lead", image: img(5) },
    { name: "Aman Thakur", role: "Video Editor", image: img(4) },
    { name: "Riya Kapoor", role: "Graphic Designer", image: img(1) },
    { name: "Siddharth Menon", role: "Photographer", image: img(0) },
    { name: "Neha Kulkarni", role: "Content Writer", image: img(3) },
    { name: "Harsh Agarwal", role: "Reel Creator", image: img(2) },
    { name: "Pooja Desai", role: "Social Media Exec", image: img(5) },
    { name: "Manish Tiwari", role: "Motion Designer", image: img(4) },
];

export const technicalTeam: TeamMember[] = [
    { name: "Akash Banerjee", role: "Tech Lead", image: img(2) },
    { name: "Swati Mishra", role: "Backend Developer", image: img(1) },
    { name: "Pranav Saxena", role: "Frontend Developer", image: img(0) },
    { name: "Divya Chatterjee", role: "UI Designer", image: img(5) },
    { name: "Kunal Jain", role: "DevOps Engineer", image: img(4) },
];
