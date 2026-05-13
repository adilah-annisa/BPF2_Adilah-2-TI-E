import React from "react";
import GuestLayout from "../layouts/GuestLayout";
import GuestNavbar from "../components/GuestNavbar";
import GuestHeroSection from "../components/GuestHeroSection";
import GuestAboutSection from "../components/GuestAboutSection";
import GuestFeaturedProductsSection from "../components/GuestFeaturedProductsSection";
import GuestTestimonialsSection from "../components/GuestTestimonialsSection";
import GuestFooter from "../components/GuestFooter";

export default function Guest() {
  return (
    <GuestLayout>
      <GuestNavbar />
      <main className="relative">
        <GuestHeroSection />
        <GuestAboutSection />
        <GuestFeaturedProductsSection />
        <GuestTestimonialsSection />
        <GuestFooter />
      </main>
    </GuestLayout>
  );
}
