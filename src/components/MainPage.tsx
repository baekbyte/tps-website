import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Microsoft from './img/MicrosoftLogo.png';
import OpenAI from './img/OpenAILogo.png';
import DSAI from './img/DsaiLogo.png';
import Apart from './img/ApartLogo.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// CountUpOnView component
const CountUpOnView: React.FC<{ end: number | string, duration?: number, suffix?: string }> = ({ end, duration = 1200, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    let endNum = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;
    if (isNaN(endNum)) endNum = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * (endNum - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [hasAnimated, end, duration]);

  // Show suffix (like + or %)
  let display = `${count}`;
  if (typeof end === 'string' && /\D+$/.test(end)) {
    display += end.match(/\D+$/)?.[0] || '';
  } else if (suffix) {
    display += suffix;
  }

  return <div ref={ref}>{display}</div>;
};

const MainPage: React.FC = () => {

    const navigate = useNavigate();
    
    const baseLogos = [Microsoft, OpenAI, DSAI, Apart];
    const repeatCount = 8; // 4 * 8 = 32 slides
    const logos = Array.from({ length: baseLogos.length * repeatCount }, (_, i) => baseLogos[i % baseLogos.length]);
    const total = logos.length;

    return (
        <div className="main-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Fostering the intersection of</span>
                            <span className="title-line highlight">technology and policy</span>
                        </h1>
                        <p className="header-subtitle">
                            Bridging the gap between innovation and governance through 
                            <br></br>
                            research, collaboration, and advocacy
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: What is TPS */}
            <section className="main-section what-is-tps-section" id="what-is-tps">
                <div className="what-is-tps-textblock">
                  <p className="tps-mission-statement">
                    The Technology and Policy Society (TPS) is a student-led organization that connects <b>students and young professionals</b> passionate about the intersection of <b>technology</b> and <b>public policy</b>, empowering them to explore, research, and advocate for responsible innovation in society.
                  </p>
                  <p className="tps-sponsor">
                    TPS is sponsored by the <a href="https://iaa.jhu.edu/" target="_blank" rel="noopener noreferrer">Johns Hopkins Institute for Assured Autonomy</a>.
                  </p>
                </div>
            </section>

            {/* Section 3: Our Projects */}
            <section className="main-section our-projects-section" id="our-projects">
                <div className="our-projects-block">
                  <h2 className="our-projects-title">OUR PROJECTS</h2>
                  <div className="our-projects-divider"></div>
                  <p className="our-projects-desc">
                    TPS leads hands-on initiatives at the intersection of technology and policy. Our flagship projects empower students and early-career professionals to tackle real-world challenges in AI security, governance, and responsible innovation.
                  </p>
                  <div className="our-projects-cards">
                    <div className="project-card">
                      <div className="project-card-title">AI Security Hackathon</div>
                      <div className="project-card-desc">
                        A national hackathon bringing together students and professionals to solve pressing challenges in AI security, safety, and policy. Participants collaborate on technical and policy solutions, attend expert workshops, and compete for prizes.
                      </div>
                    </div>
                    <div className="project-card">
                      <div className="project-card-title">AI Security Frontiers Fellowship</div>
                      <div className="project-card-desc">
                        A semester-long fellowship for students to conduct research and develop policy recommendations on emerging issues in AI security. Fellows receive mentorship, attend seminars, and present their work to leaders in technology and policy.
                      </div>
                    </div>
                  </div>
                </div>
            </section>

            {/* Section 4: Our Impact */}
            <section className="main-section our-impact-section" id="our-impact">
                <div className="our-impact-block">
                  <h2 className="our-impact-title">OUR IMPACT</h2>
                  <div className="our-impact-divider"></div>
                  <div className="our-impact-stats">
                    <div className="impact-stat">
                      <div className="impact-stat-number"><CountUpOnView end={200} suffix="+" /></div>
                      <div className="impact-stat-desc"><b>Participants</b> engaged in TPS events and programs</div>
                    </div>
                    <div className="impact-stat">
                      <div className="impact-stat-number"><CountUpOnView end={10} suffix="+" /></div>
                      <div className="impact-stat-desc"><b>Events & Workshops</b> hosted on AI, security, and policy</div>
                    </div>
                    <div className="impact-stat">
                    <div className="impact-stat-number"><CountUpOnView end={15} suffix="+" /></div>
                    <div className="impact-stat-desc"><b>Student leaders</b> serving in TPS leadership roles</div>
                    </div>
                    <div className="impact-stat">
                      <div className="impact-stat-number"><CountUpOnView end={4} suffix="+" /></div>
                      <div className="impact-stat-desc"><b>Partner</b> organizations and sponsors</div>
                    </div>
                  </div>
                </div>
            </section>

            {/* Section 5: Our Partners */}
            <section className="main-section our-partners-section" id="our-partners">
                <div className="our-partners-block">
                    <h2 className='our-partners-title'>OUR PARTNERS</h2>
                    <div className="our-partners-divider"></div>
                    <div className="carousel-container">
                      <Slider
                        dots={false}
                        infinite={true}
                        speed={10000}
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={0}
                        cssEase="linear"
                        arrows={false}
                        pauseOnHover={false}
                      >
                        {logos.map((src, idx) => (
                          <div key={idx} className="partner-logo-slide">
                            <img src={src} alt={`Partner ${idx + 1}`} className="partner-logo" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage; 