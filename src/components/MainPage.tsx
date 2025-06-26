import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Microsoft from './img/MicrosoftLogo.png';
import OpenAI from './img/OpenAILogo.png';
import DSAI from './img/DsaiLogo.png';
import Apart from './img/ApartLogo.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                <h1>Fostering the intersection of technology and policy</h1>
            </section>

            {/* Section 2: What is TPS */}
            <section className="main-section what-is-tps-section" id="what-is-tps">
                <h2>What is TPS?</h2>
                <p>TPS (Technology and Policy Society) is an organization dedicated to bridging the gap between technology and policy, fostering interdisciplinary collaboration and innovation.</p>
            </section>

            {/* Section 3: Our Projects */}
            <section className="main-section our-projects-section" id="our-projects">
                <h2>Our Projects</h2>
                <p>Explore our diverse range of projects that address real-world challenges at the intersection of technology and policy.</p>
            </section>

            {/* Section 4: Our Impact */}
            <section className="main-section our-impact-section" id="our-impact">
                <h2>Our Impact</h2>
                <p>Discover the positive impact TPS has made through its initiatives, research, and community engagement.</p>
            </section>

            {/* Section 5: Our Partners */}
            <section className="main-section our-partners-section" id="our-partners">
                <h2>Our Partners</h2>
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
            </section>
        </div>
    );
}

export default MainPage; 