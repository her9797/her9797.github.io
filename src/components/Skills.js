import React from 'react';

const Skills = () => {
    const services = [
        {
            iconSrc: '/imgs/pencil-case.svg',
            title: 'Adipisicing',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/responsive.svg',
            title: 'Sapiente',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/toolbox.svg',
            title: 'Placeat',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/analytics.svg',
            title: 'Iusto',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        }
    ];

    return (
        <section className="section" id="skills">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Skills</h6>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className="service-card">
                                <div className="body">
                                    <img src={service.iconSrc} alt="Icon" className="icon" />
                                    <h6 className="title">{service.title}</h6>
                                    <p className="subtitle">{service.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
