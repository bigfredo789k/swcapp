import heroImage from '../../assets/hero-hands-nobg.png';
import { FloatingDots } from './FloatingDots';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#6B21A8]" // Using a solid purple base similar to the image
    >
      {/* Gradient Overlay to match the depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7E22CE] via-[#6B21A8] to-[#581C87]"></div>

      {/* Animated Floating Dots */}
      <FloatingDots count={40} color="rgba(255, 255, 255, 0.15)" />

      {/* Background Image with animation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Hands raising hope"
          className="w-full h-full object-contain opacity-100 animate-hero-zoom"
          style={{ animationDelay: '0.2s' }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-violet-950/60 z-[1] animate-fade-in"></div>
    </section>
  );
}