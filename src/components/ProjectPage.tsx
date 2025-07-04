import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPage.css';

const carouselImages = [
  require('./img/hackathon1.JPG'),
  require('./img/hackathon2.JPG'),
  require('./img/hackathon3.JPG'),
  require('./img/hackathon4.JPG'),
  require('./img/hackathon5.JPG'),
  require('./img/hackathon6.JPG'),
  require('./img/hackathon7.JPG'),
];

const ProjectPage: React.FC = () => {

    const navigate = useNavigate();
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const totalImages = carouselImages.length;

    // Auto-advance effect
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCarouselIndex((prev) => (prev + 1) % totalImages);
                setFade(false);
            }, 350); // match fade duration
        }, 4000); // change every 4 seconds
        return () => clearInterval(interval);
    }, [totalImages]);

    const changeImage = (newIndex: number) => {
        setFade(true);
        setTimeout(() => {
            setCarouselIndex(newIndex);
            setFade(false);
        }, 350); // Duration should match the CSS transition
    };

    const prevImage = () => changeImage((carouselIndex - 1 + totalImages) % totalImages);
    const nextImage = () => changeImage((carouselIndex + 1) % totalImages);

    return (
        <div className="product-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Projects</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className='main-section project-section' id="project">
                <div className='project-block'>
                    <h2 className='project-title'>AI SECURITY HACKATHON</h2>
                    <div className="project-divider"></div>
                    <div className="project-description">
                        <p>
                        The <b>JHU AI Policy Hackathon</b> is a two-day conference that brings together undergraduate and graduate students from across the United States to tackle critical challenges at the intersection of artificial intelligence and policy. Organized by the Johns Hopkins Technology Policy Society, the event addresses the urgent need for informed discourse on AI security during a time of rapid technological advancement and evolving regulatory frameworks.
                        </p>
                        <p>
                        The hackathon format combines educational workshops with hands-on project development. Students participate in expert-led sessions covering topics such as AI safety, future of work implications, and public health applications, guided by university faculty and industry professionals. Following the workshops, participants form teams to create technical demonstrations and policy briefings that address complex AI policy challenges, ranging from cybersecurity and healthcare to environmental sustainability and algorithmic auditing.
                        </p>
                        <p>
                        With support from major industry sponsors, the event awards prizes to teams that demonstrate innovative thinking and propose comprehensive solutions to multifaceted policy problems. The hackathon serves as both a learning platform and a venue for students to contribute meaningful research to the evolving field of AI policy, while building professional networks and gaining practical experience in tech-policy analysis.
                        </p>
                    </div>
                    {/* Highlights section with carousel */}
                    <div className="project-highlights">
                        <h3 className="project-highlights-title">HACKATHON HIGHLIGHTS</h3>
                        <div className="project-divider"></div>
                        <p className="project-highlights-summary">
                        In our inaugural AI Policy Hackathon, over <b>150 students</b> from across the United States gathered for a two-day event that addressed the rapidly evolving landscape of AI technology and policy. Participants submitted over <b>30 technical demonstrations and policy briefings</b> covering diverse challenges, from nuclear waste reprocessing to auditing agentic systems to improving healthcare encryption through AI. Students engaged in expert-led workshops on AI safety, the future of work, and public health, while also attending panels on AI's role in green energy transformation. Sponsored by OpenAI, Microsoft, and Apart Research, the event awarded <b>$3,000</b> in prizes to teams demonstrating innovative solutions, inclusive approaches, and holistic policy recommendations for complex AI governance challenges.
                        </p>
                        <div className="project-highlights-carousel">
                            <button className="carousel-arrow left" onClick={prevImage} aria-label="Previous image">&#8592;</button>
                            <img
                                src={carouselImages[carouselIndex]}
                                alt={`Hackathon highlight ${carouselIndex + 1}`}
                                className={`carousel-image${fade ? ' fade-out' : ''}`}
                            />
                            <button className="carousel-arrow right" onClick={nextImage} aria-label="Next image">&#8594;</button>
                        </div>
                    </div>
                    {/* Showcase some submissions */}
                    <div className="project-showcase">
                        <h3 className="project-showcase-title">PREVIOUS SUBMISSIONS</h3>
                        <div className="project-divider"></div>
                        <div className="showcase-grid">
                            <div className="showcase-card">
                                <div className="showcase-cohort">OUTSTANDING SOLUTIONS AWARDS</div>
                                <div className="showcase-title">REPROCESSING NUCLEAR WASTE FROM SMALL MODULAR REACTORS (SMRs)</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/reprocessing-nuclear-waste-from-small-modular-reactors-(smrs)">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">OUTSTANDING SOLUTIONS AWARDS</div>
                                <div className="showcase-title">MAPPING INTENT: DOCUMENTING POLICY ADHERENCE WITH ONTOLOGY EXTRACTION</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/mapping-intent-documenting-policy-adherence-with-ontology-extraction">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">ROBUST MACHINE UNLEARNING FOR DANGEROUS CAPABILITIES</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/robust-machine-unlearning-for-dangerous-capabilities">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">SAFEBITES</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/safebites">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">SUE-PER GPT</div>
                                <a className="showcase-link" href="#">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">UNDERSTANDING INCENTIVES TO BUILD UNINTERRUPTIBLE AGENTIC AI SYSTEMS</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/understanding-incentives-to-build-uninterruptible-agentic-ai-systems">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">AI ADVISORY COUNCIL FOR SUSTAINABLE ECONOMIC GROWTH AND ETHICAL INNOVATION IN THE DOMINICAN REPUBLIC (CANIA)</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/ai-advisory-council-for-sustainable-economic-growth-and-ethical-innovation-in-the-dominican-republic-(cania)">SEE MORE &raquo;</a>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-cohort">SPOTLIGHT AWARDS</div>
                                <div className="showcase-title">MODERNIZING DC'S EMERGENCY COMMUNICATIONS: AI-CAD INTEGRATION FRAMEWORK</div>
                                <a className="showcase-link" href="https://apartresearch.com/project/modernizing-dc-s-emergency-communications">SEE MORE &raquo;</a>
                            </div>
                        </div>
                    </div>
                    {/* Application timeline */}
                    <div className="project-timeline">
                        <h2 className="project-timeline-title">IMPORTANT DATES</h2>
                        <div className="project-divider"></div>
                        <p className="project-timeline-summary">
                            We host AI Policy Hackathons annually each Fall. Our hackathon brings together students from across the country to tackle real-world challenges in AI policy, safety, and governance through technical demonstrations and policy briefings.
                        </p>
                        <p className="project-timeline-status">
                            Applications are now <span className="timeline-status-closed">closed for the 2024 Hackathon</span>. Check back in mid/late August to apply to our 2025 AI Security Hackathon.
                        </p>
                    </div>
                    {/* FAQ */}
                    <h2 className="project-title">AI SECURITY FRONTIERS FELLOWSHIP</h2>
                    <div className="project-divider"></div>
                    <div className="project-description">
                        <p>
                        The <b>AI Security Frontiers Fellowship</b> is a pioneering undergraduate research program that connects talented Johns Hopkins students with faculty mentors and industry experts to address critical challenges in AI security and governance. Organized by the Johns Hopkins Technology Policy Society, this fellowship responds to the urgent need for interdisciplinary research and early-career development in AI security during a period of unprecedented technological advancement and emerging regulatory frameworks.
                        </p>
                        <p>
                        The fellowship combines rigorous academic mentorship with practical faculty engagement. Selected fellows receive stipends and work collaboratively with assigned faculty advisors on cutting-edge research spanning risk management, third-party auditing, national security implications, international cooperation, and AI alignment. Through weekly mentorship meetings, monthly cohort sessions, and biannual industry workshops, participants develop both technical expertise and policy acumen while contributing to high-impact research initiatives.
                        </p>
                        <p>
                        The program emphasizes cross-disciplinary collaboration, drawing upon Johns Hopkins' exceptional strengths in computer science, applied mathematics, cybersecurity, and public policy. Fellows engage with professionals from leading organizations and participate in professional development seminars, building networks that extend far beyond individual research projects. By fostering early-career talent and creating bridges between academia, industry, and civil society, the fellowship positions Johns Hopkins at the forefront of AI security research while cultivating the next generation of interdisciplinary leaders equipped to tackle humanity's most complex technological challenges.
                        </p>
                        <div className="fellowship-dev-note">
                            <em><b>This fellowship is still in development. Please check back later for more information.</b></em>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default ProjectPage; 