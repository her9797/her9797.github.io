import React from 'react';

const Skills = () => {
    const services = [
        {
            iconSrc: '/imgs/java.svg',
            title: 'Java',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/springboot.png',
            title: 'Spring boot',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/spring.svg',
            title: 'Spring',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/mysql.svg',
            title: 'MySql',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/react.svg',
            title: 'React',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/redux.svg',
            title: 'Redux',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/js.svg',
            title: 'Java Script',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/aws.svg',
            title: 'AWS',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/ApacheTomcat.svg',
            title: 'Apache Tomcat',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/docker.svg',
            title: 'Docker',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/linux.svg',
            title: 'Linux',
            subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
        },
        {
            iconSrc: '/imgs/html.svg',
            title: 'HTML5',
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
                        <div key={index} className="col-md-6 col-lg-3" style={{marginBottom: '1%'}}>
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
