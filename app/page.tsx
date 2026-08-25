import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Organizations from "@/components/Organizations";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Projects />
        <Expertise />
        <Organizations />
        <Education />
        <Awards />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
