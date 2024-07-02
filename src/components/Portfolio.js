import React from 'react';

const Portfolio = () => {
    const portfolios = [
        {
            imgSrc: '/imgs/folio-1.jpg',
            title: 'Log:in',
            category: 'Category: Web Templates'
        },
        {
            imgSrc: '/imgs/folio-2.jpg',
            title: 'RevelUp',
            category: 'Category: Web Templates'
        },
        {
            imgSrc: '/imgs/folio-3.jpg',
            title: 'Web Designing',
            category: 'Category: Web Templates'
        }
    ];

    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    {portfolios.map((portfolio, index) => (
                        <div key={index} className="col-md-4">
                            <a href="#" className="portfolio-card">
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

export default Portfolio;
