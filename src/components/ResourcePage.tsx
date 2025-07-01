import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourcePage.css';

interface Article {
    id: number;
    title: string;
    description: string;
    source: string;
    date: string;
    url: string;
    image: string;
}

const ResourcePage: React.FC = () => {
    const navigate = useNavigate();
    const jhucslogo = require('./img/jhuwhiting.png');
    const apartlogo = require('./img/ApartBanner.jpg');

    const articles: Article[] = [
        {
            id: 1,
            title: "JHU Holds First AI Policy Hackathon",
            description: "Johns Hopkins University hosted its first AI Policy Hackathon, bringing together students, faculty, and industry experts to address challenges in AI governance and policy.",
            source: "JHU Computer Science",
            date: "2024-01-15",
            url: "https://www.cs.jhu.edu/news/jhu-holds-first-ai-policy-hackathon/",
            image: jhucslogo
        },
        {
            id: 2,
            title: "Inside the First AI Policy Hackathon at JHU",
            description: "A detailed look at the inaugural AI Policy Hackathon at Johns Hopkins, highlighting innovative solutions and policy frameworks developed by participants.",
            source: "Apart Research",
            date: "2024-01-20",
            url: "https://apartresearch.com/news/inside-the-first-ai-policy-hackathon-at-johns-hopkins",
            image: apartlogo
        }
    ];

    const openArticle = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="resource-page">
            {/* Section 1: Header */}
            <section className="main-section header-section" id="header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="header-title">
                            <span className="title-line">Resources</span>
                        </h1>
                    </div>
                </div>
            </section>
            {/* Section 2: Article Cards */}
            <section className='main-section resource-section' id="resource">
                <div className='resource-block'>
                    <h2 className="resource-title">FEATURED ARTICLES</h2>
                    <div className="resource-divider"></div>
                </div>
                <div className='article-grid'>
                    {articles.map((article) => (
                        <div 
                            key={article.id} 
                            className="article-card-modern"
                            onClick={() => openArticle(article.url)}
                        >
                            <div 
                                className="article-image-area"
                                style={{ backgroundImage: `url(${article.image})` }}
                            >
                                <div className="article-overlay">
                                    <h2 className="article-title-modern">{article.title}</h2>
                                </div>
                            </div>
                            <div className="article-caption-row">
                                <span className="article-caption">{article.description}</span>
                                <span className="article-arrow">↗</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResourcePage; 