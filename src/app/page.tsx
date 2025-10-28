import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/layouts/Navbar';
import Projects from '@/components/sections/Projects';


export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Projects />

      {/* Other sections will go here later */}
    </main>
  );
}