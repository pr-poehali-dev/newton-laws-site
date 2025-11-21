import { useState, useEffect, useRef } from 'react';
import SpaceBackground from '@/components/SpaceBackground';
import Navigation from '@/components/Navigation';
import ContentSections from '@/components/ContentSections';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <SpaceBackground scrollProgress={scrollProgress} />
      <Navigation 
        activeSection={activeSection} 
        scrollProgress={scrollProgress} 
        scrollToSection={scrollToSection} 
      />
      <ContentSections 
        visibleSections={visibleSections} 
        scrollProgress={scrollProgress} 
        scrollToSection={scrollToSection} 
      />
    </div>
  );
};

export default Index;
