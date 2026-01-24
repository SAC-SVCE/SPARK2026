import SphereImageGrid, { ImageData } from "@/components/ui/img-sphere";
import React from 'react';

// ==========================================
// EASY CONFIGURATION - Edit these values to customize the component
// ==========================================

// Image data using project assets - duplicated to fill sphere better
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
    {
        src: "/gallery_images/img1.jpg",
        alt: "Gallery Image 1",
        title: "Gallery Highlight 1",
        description: "A highlight moment from the gallery."
    },
    {
        src: "/gallery_images/img2.jpg",
        alt: "Gallery Image 2",
        title: "Gallery Highlight 2",
        description: "A highlight moment from the gallery."
    },
    {
        src: "/gallery_images/img3.jpg",
        alt: "Gallery Image 3",
        title: "Gallery Highlight 3",
        description: "A highlight moment from the gallery."
    },
    {
        src: "/gallery_images/img4.jpg",
        alt: "Gallery Image 4",
        title: "Gallery Highlight 4",
        description: "A highlight moment from the gallery."
    },
    {
        src: "/gallery_images/img5.jpg",
        alt: "Gallery Image 5",
        title: "Gallery Highlight 5",
        description: "A highlight moment from the gallery."
    }
];

// Generate more images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
    const baseIndex = i % BASE_IMAGES.length;
    const baseImage = BASE_IMAGES[baseIndex];
    IMAGES.push({
        id: `img-${i + 1}`,
        ...baseImage,
        alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`
    });
}

// Component configuration - easily adjustable
interface SphereConfig {
    containerSize: number;
    sphereRadius: number;
    dragSensitivity: number;
    momentumDecay: number;
    maxRotationSpeed: number;
    baseImageScale: number;
    hoverScale: number;
    perspective: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
}

const CONFIG: SphereConfig = {
    containerSize: 600,          // Container size in pixels
    sphereRadius: 200,           // Virtual sphere radius (increased for better spacing)
    dragSensitivity: 0.8,        // Mouse drag sensitivity (0.1 - 2.0)
    momentumDecay: 0.96,         // How fast momentum fades (0.8 - 0.99)
    maxRotationSpeed: 6,         // Maximum rotation speed (1 - 10)
    baseImageScale: 0.15,        // Base image size (reduced to minimize overlap)
    hoverScale: 1.3,             // Hover scale multiplier (1.0 - 2.0)
    perspective: 1000,           // CSS perspective value (500 - 2000)
    autoRotate: true,            // Enable/disable auto rotation
    autoRotateSpeed: 0.2         // Auto rotation speed (0.1 - 2.0, higher = faster)
};

export default function DemoOne() {
    return (
        <main className="w-full p-6 flex justify-center items-center min-h-screen">
            <SphereImageGrid
                images={IMAGES}
                {...CONFIG}
            />
        </main>
    );
}