"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Career = () => {
  useGSAP(() => {
    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 30%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    careerTimeline
      .fromTo(
        ".career-timeline",
        { maxHeight: "10%" },
        { maxHeight: "100%", duration: 0.5 },
        0
      )
      .fromTo(
        ".career-timeline",
        { opacity: 0 },
        { opacity: 1, duration: 0.1 },
        0
      )
      .fromTo(
        ".career-info-box",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.5 },
        0
      )
      .fromTo(
        ".career-dot",
        { animationIterationCount: "infinite" },
        {
          animationIterationCount: "1",
          delay: 0.3,
          duration: 0.1,
        },
        0
      );

    if (window.innerWidth > 1024) {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: "20%", duration: 0.5, delay: 0.2 },
        0
      );
    } else {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: 0, duration: 0.5, delay: 0.2 },
        0
      );
    }
  }, []);

  return (
    <div id="experience" className="bg-white text-black w-full overflow-hidden">
      <div className="career-section section-container">
        <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder / Full-Stack Developer</h4>
                <h5>Rategle Technologies</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Founded and lead a web, mobile, and AI services company delivering production applications to small and mid-size business clients; shipped 4 mobile apps to Google Play. Architect and ship full-stack products with React, Next.js, React Native, Node.js, and AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>Bharathidasan University</h5>
              </div>
              <h3>Expected 2029</h3>
            </div>
            <p>
              Pursuing a degree in BCA, focusing on computer science fundamentals, software engineering, and modern application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Applications</h4>
                <h5>First Class</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed DCA with First Class, building a strong foundation in IT, programming logic, and software applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Typewriting, Junior Grade</h4>
                <h5>First Class</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Successfully passed Typewriting in Junior Grade with First Class, ensuring high typing speed and accuracy for efficient coding and development tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Career;


