// "use client";
// import { useScroll, useTransform } from "motion/react";
// import { useRef, useEffect, useState } from "react";
// import { motion } from "motion/react";

// import { cn } from "@/lib/utils";

// export const ParallaxScroll = ({
//   images,
//   className,
// }: {
//   images: string[];
//   className?: string;
// }) => {
//   const gridRef = useRef<any>(null);
//   const [loading, setLoading] = useState(true);

//   // Distribute images into 7 columns using round-robin to ensure balance
//   const parts = [[], [], [], [], [], [], []] as string[][];
//   images.forEach((image, idx) => {
//     parts[idx % 7].push(image);
//   });

//   const firstPart = parts[0];
//   const secondPart = parts[1];
//   const thirdPart = parts[2];
//   const fourthPart = parts[3];
//   const fifthPart = parts[4];
//   const sixthPart = parts[5];
//   const seventhPart = parts[6];

//   // References for the columns to manipulate transform directly
//   const col1Ref = useRef<HTMLDivElement>(null);
//   const col2Ref = useRef<HTMLDivElement>(null);
//   const col3Ref = useRef<HTMLDivElement>(null);
//   const col4Ref = useRef<HTMLDivElement>(null);
//   const col5Ref = useRef<HTMLDivElement>(null);
//   const col6Ref = useRef<HTMLDivElement>(null);
//   const col7Ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // We can just rely on the layout, but let's ensure images are loaded or just run the loop.
//     // For a strictly visual component, running immediately is usually fine.

//     let animationFrameId: number;
//     let offset = 0;
//     const speed = 1; // Pixels per frame

//     const animate = () => {
//       offset += speed;

//       // Handle Column 1 (Scroll UP)
//       if (col1Ref.current) {
//         const height = col1Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col1Ref.current.style.transform = `translateY(-${y}px)`;
//         col1Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 2 (Scroll DOWN)
//       if (col2Ref.current) {
//         const height = col2Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         // To scroll down seamlessly: Start from -height and move towards 0
//         col2Ref.current.style.transform = `translateY(-${height - y}px)`;
//         col2Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 3 (Scroll UP)
//       if (col3Ref.current) {
//         const height = col3Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col3Ref.current.style.transform = `translateY(-${y}px)`;
//         col3Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 4 (Scroll DOWN)
//       if (col4Ref.current) {
//         const height = col4Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col4Ref.current.style.transform = `translateY(-${height - y}px)`;
//         col4Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 5 (Scroll UP)
//       if (col5Ref.current) {
//         const height = col5Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col5Ref.current.style.transform = `translateY(-${y}px)`;
//         col5Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 6 (Scroll DOWN)
//       if (col6Ref.current) {
//         const height = col6Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col6Ref.current.style.transform = `translateY(-${height - y}px)`;
//         col6Ref.current.style.willChange = "transform";
//       }

//       // Handle Column 7 (Scroll UP)
//       if (col7Ref.current) {
//         const height = col7Ref.current.scrollHeight / 2;
//         const y = offset % height;
//         col7Ref.current.style.transform = `translateY(-${y}px)`;
//         col7Ref.current.style.willChange = "transform";
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [images]);

//   return (
//     <div
//       className={cn("h-[40rem] items-start overflow-hidden w-full pointer-events-none", className)}
//       ref={gridRef}
//     >
//       <div
//         className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-[repeat(7,minmax(0,1fr))] items-start max-w-[100rem] mx-auto gap-4 py-40 px-2"
//       >
//         {/* Column 1 - Up */}
//         <div className="grid gap-4" ref={col1Ref}>
//           {[...firstPart, ...firstPart].map((el, idx) => (
//             <div className="relative" key={"grid-1" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 2 - Down */}
//         <div className="grid gap-4" ref={col2Ref}>
//           {[...secondPart, ...secondPart].map((el, idx) => (
//             <div className="relative" key={"grid-2" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 3 - Up */}
//         <div className="grid gap-4" ref={col3Ref}>
//           {[...thirdPart, ...thirdPart].map((el, idx) => (
//             <div className="relative" key={"grid-3" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 4 - Down */}
//         <div className="grid gap-4" ref={col4Ref}>
//           {[...fourthPart, ...fourthPart].map((el, idx) => (
//             <div className="relative" key={"grid-4" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 5 - Up */}
//         <div className="grid gap-4" ref={col5Ref}>
//           {[...fifthPart, ...fifthPart].map((el, idx) => (
//             <div className="relative" key={"grid-5" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 6 - Down */}
//         <div className="grid gap-4" ref={col6Ref}>
//           {[...sixthPart, ...sixthPart].map((el, idx) => (
//             <div className="relative" key={"grid-6" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Column 7 - Up */}
//         <div className="grid gap-4" ref={col7Ref}>
//           {[...seventhPart, ...seventhPart].map((el, idx) => (
//             <div className="relative" key={"grid-7" + idx}>
//               <img
//                 src={el}
//                 className="h-60 w-full object-cover object-left-top rounded-lg gap-4 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };
