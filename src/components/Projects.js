import React from 'react';

const Projects = () => {
    const portfolios = [
        {
            imgSrc: '/imgs/login.png',
            title: 'Log:in',
            category: 'HR WEB',
            link: 'https://github.com/her9797/login'
        },
        {
            imgSrc: '/imgs/revelup.jpg',
            title: 'RevelUp',
            category: 'CrowdFunding WEB',
            link: 'https://github.com/her9797/REVEL-UP'
        }
    ];

    return (
        <section className="section fixed-section" id="projects">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Projects</h6>
                <div className="row">
                    {portfolios.map((portfolio, index) => (
                        <div key={index} className="col-md-6">
                            <a href={portfolio.link} target="_blank" className="portfolio-card" rel="noopener noreferrer">
                                <img src={portfolio.imgSrc} className="portfolio-card-img"
                                    alt="Portfolio Image" />
                                <span className="portfolio-card-overlay">
                                    <span className="portfolio-card-caption">
                                        <h4>{portfolio.title}</h4>
                                        <p className="font-weight-normal">{portfolio.category}</p>
                                    </span>
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
