import React from 'react';

const Skills = () => {
    const services = [
        {
            iconSrc: '/imgs/java.svg',
            title: 'Java',
        },
        {
            iconSrc: '/imgs/springboot.png',
            title: 'Spring boot',
        },
        {
            iconSrc: '/imgs/spring.svg',
            title: 'Spring',
        },
        {
            iconSrc: '/imgs/mysql.svg',
            title: 'MySql',
        },
        {
            iconSrc: '/imgs/react.svg',
            title: 'React',
        },
        {
            iconSrc: '/imgs/redux.svg',
            title: 'Redux',
        },
        {
            iconSrc: '/imgs/js.svg',
            title: 'Java Script',
        },
        {
            iconSrc: '/imgs/aws.svg',
            title: 'AWS',
        },
        {
            iconSrc: '/imgs/ApacheTomcat.svg',
            title: 'Apache Tomcat',
        },
        {
            iconSrc: '/imgs/docker.svg',
            title: 'Docker',
        },
        {
            iconSrc: '/imgs/linux.svg',
            title: 'Linux',
        },
        {
            iconSrc: '/imgs/html.svg',
            title: 'HTML5',
        }
    ];

    return (
        <section className="section " id="skills">
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
