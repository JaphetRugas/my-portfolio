import Footer from "@/components/Footer" 
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Introduction from "@/components/Introduction"
import Navigation from "@/components/Navigation"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
         <Navigation />
        </nav>
      </header>
      <main className="flex-1">
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Experience /> 
      </main>
      <Footer />
    </div>
  )
}
 