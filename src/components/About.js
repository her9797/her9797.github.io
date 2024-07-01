import React from 'react';

const About = () => {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img src={process.env.PUBLIC_URL + '/imgs/minseop.jpg'} className="about-img" alt="Profile" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>

                            안녕하세요,  신입 개발자 <strong style={{fontWeight: 'bold', color: '#695aa6'}}>심민섭</strong> 입니다.<br /><br />
                            저는 도전을 두려워하지 않는 성격입니다. 다양한 것들을 시도하며 새로운 경험을 즐기고,
                            <br />그 과정에서 생기는 어려움이나 거부감 역시 두려워하지 않습니다.
                            <br />오히려 그것들을 극복하고 배움의 기회로 삼아 개발자로서 성장 과정을 거듭하고 있습니다.
                            <br /><br />최선을 다해 목표를 이루기 위해 노력하는 저의 모습을 기대해 주세요.
                            <br />앞으로도 이러한 자세를 바탕으로 지속적으로 발전하고 기여하겠습니다.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
