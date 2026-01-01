'use client'
// import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Shadcn Button
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import RecentPosters from '@/components/home/RecentPosters';
import Footer from '@/components/home/Footer';

// SEO Metadata
// export const metadata: Metadata = {
//   title: 'Brandso - Digital Solutions Agency | Web, App, Graphics, Video',
//   description: 'Brandso provides top-tier digital solutions including web and app development, graphics and poster design, video generation and editing. Explore our packages and portfolio.',
//   keywords: 'digital agency, web development, app development, graphic design, video editing, UI/UX',
//   openGraph: {
//     title: 'Brandso Agency',
//     description: 'Innovative digital solutions for your business.',
//     images: '/og-image.png', // Add your OG image
//   },
// };

// Placeholder data

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', bio: 'Visionary leader with 10+ years in digital solutions.', image: '/team/john.jpg' },
  { name: 'Jane Smith', role: 'Lead Designer', bio: 'Expert in graphics and UI/UX.', image: '/team/jane.jpg' },
  { name: 'Alex Johnson', role: 'Video Specialist', bio: 'Master of video generation and editing.', image: '/team/alex.jpg' },
  { name: 'Emily Davis', role: 'Developer', bio: 'Full-stack dev for web and apps.', image: '/team/emily.jpg' },
  { name: 'Michael Brown', role: 'Marketing Guru', bio: 'Drives digital marketing strategies.', image: '/team/michael.jpg' },
];

export default function Home() {

  return (
    <div className="">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>

      {/* Services Section */}
      <Services />

      {/* Recent Posters Section */}
      <RecentPosters />

      {/* Team Section */}
      {/* <Team /> */}

      <Footer />
    </div>
  );
}