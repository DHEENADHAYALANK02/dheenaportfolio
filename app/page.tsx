import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {About, Stats, Process, Contact, Footer} from "@/components/Sections";
import Career from "@/components/Career";
import Work from "@/components/Work";
import TechStack from "../components/TechStackNoSSR";

export default function Page(){
  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <About/>
        <Career/>
        <Work/>
        <TechStack/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
