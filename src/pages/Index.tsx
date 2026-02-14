import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import LoveReasonsSection from "@/components/LoveReasonsSection";
import LoveLetterSection from "@/components/LoveLetterSection";

import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <LoveReasonsSection />
      <LoveLetterSection />
      <GallerySection />
      <ClosingSection />
    </main>
  );
};

export default Index;
