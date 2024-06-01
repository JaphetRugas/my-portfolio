import Navigation from "@/components/Navigation";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience"; 
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() { 

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
          <Navigation />
        </nav>
      </header>
      <main className="flex-1">
        <AnimatedSection>
          <div id="home">
            <Introduction />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="about">
            <About />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="projects">
            <Projects />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="skills">
            <Skills />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div id="experience">
            <Experience />
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}