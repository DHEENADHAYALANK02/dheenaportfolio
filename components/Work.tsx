"use client";
import { PROJECTS } from "@/lib/data";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      const rectLeft = container ? container.getBoundingClientRect().left : 0;
      const rect = box[0]?.getBoundingClientRect() || { width: 0 };
      const parentWidth = box[0]?.parentElement?.getBoundingClientRect().width || 0;
      const paddingStr = box[0] ? window.getComputedStyle(box[0]).padding : "0px";
      const padding: number = parseInt(paddingStr) / 2 || 0;
      translateX = (rect.width * (box.length || 0)) - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  });

  return () => mm.revert();
}, []);
  return (
    <div className="work-section" id="projects">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {PROJECTS.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.kind}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.stack}</p>
                <div className="mt-6">
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-red px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-red-deep hover:scale-105 shadow-[0_0_15px_rgba(225,6,0,0.3)]">
                    View Project
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;


