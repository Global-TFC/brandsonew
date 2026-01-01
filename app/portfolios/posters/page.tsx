'use client';
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
    "/images/posters/1.jpeg",
    "/images/posters/2.jpeg",
    "/images/posters/3.jpeg",
    "/images/posters/4.jpeg",
    "/images/posters/5.png",
    "/images/posters/6.jpeg",
    "/images/posters/7.jpeg",
    "/images/posters/8.jpeg",
    "/images/posters/9.png",
    "/images/posters/10.jpeg",
    "/images/posters/11.jpeg",
    "/images/posters/12.png",
    "/images/posters/13.png",
    "/images/posters/14.png",
];

export default function Posters() {
    return (
        <div className="min-h-screen">
            <ParallaxScroll images={images} />
        </div>
    );
}