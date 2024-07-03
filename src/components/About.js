import React, { useState } from 'react';

const About = () => {
    const [page, setPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <section className="section pt-0 fixed-section" id="about">
            <div className="container text-center">
                {page === 1 && (
                    <div className="about" style={{ height: '600px', overflowY: 'auto' }}>
                        <div className="about-img-holder">
                            <img src={process.env.PUBLIC_URL + '/imgs/minseop.jpg'} className="about-img" alt="Profile" />
                        </div>
                        <div className="about-caption">
                            <p className="section-subtitle">Who Am I ?</p>
                            <h2 className="section-title mb-3">About Me</h2>
                            <p className='korean-text'>
                                안녕하세요, 신입 개발자 <strong style={{ fontWeight: 'bold', color: '#695aa6' }}>심민섭</strong> 입니다.<br /><br />
                                저는 도전을 두려워하지 않는 성격입니다. 다양한 것들을 시도하며 새로운 경험을 즐기고,
                                <br />그 과정에서 생기는 어려움이나 거부감 역시 두려워하지 않습니다.
                                <br />오히려 그것들을 극복하고 배움의 기회로 삼아 개발자로서 성장 과정을 거듭하고 있습니다.
                                <br /><br />최선을 다해 목표를 이루기 위해 노력하는 저의 모습을 기대해 주세요.
                                <br />앞으로도 이러한 자세를 바탕으로 지속적으로 발전하고 기여하겠습니다.
                            </p>
                        </div>
                    </div>
                )}
                {page === 2 && (
                    <div className="about" style={{ height: '600px', overflowY: 'auto' }}>
                        <div className="about-img-holder">
                            <img src={process.env.PUBLIC_URL + '/imgs/study.jpg'} className="about-img" alt="Profile" />
                        </div>
                        <div className="about-caption">
                            <p className="section-subtitle">More About Me</p>
                            <h2 className="section-title mb-3">My Study</h2>
                            <p className='korean-text'>
                                저는 6개월 동안의 React.js와 SpringBoot를 활용한 풀스택 개발자 교육을 통해 웹 개발 기초를 탄탄히 다졌습니다. 이 과정에서 프로젝트 기획부터 설계, 개발, 배포까지 모든 단계에 참여하며 실제 업무 환경에서의 경험을 쌓을 수 있었습니다.
                            </p>
                            <p className='korean-text'>
                                프로젝트를 진행하던 초기에는 기본적인 CRUD 기능을 구현했지만, 후에 사용자 간 실시간 소통을 위해 웹소켓을 도입하고 싶었습니다. 이는 단순히 기능 추가 이상의 의미를 가지고 있었습니다. 처음에는 "있으면 좋겠다"는 작은 생각에서 출발했지만, 제 자신의 능력을 믿고 도전하며 "할 수 있다"는 확신을 갖게 되었습니다. 클라이언트와 서버 간의 실시간 데이터 흐름을 관리하고 보안 문제를 해결하는 과정에서의 어려움도 있었지만, 지속적인 학습과 실험을 통해 이를 극복했습니다.
                            </p>
                        </div>
                    </div>
                )}
                {page === 3 && (
                    <div className="about" style={{ height: '600px', overflowY: 'auto' }}>
                        <div className="about-img-holder">
                            <img src={process.env.PUBLIC_URL + '/imgs/git.png'} className="about-img" alt="Profile" />
                        </div>
                        <div className="about-caption">
                            <p className="section-subtitle">More About Me</p>
                            <h2 className="section-title mb-3">My Journey</h2>
                            <p className='korean-text'>
                                프로젝트를 하던 과정에선 특히 중요하게 다룬 부분 중 하나는 형상 관리와 협업이었습니다.
                            </p>
                            <p className='korean-text'>
                                이슈 트래킹과 Pull Request를 통한 코드 리뷰를 통해 팀원들과 원활하게 소통하며 프로젝트를 진행했습니다. 이를 통해 효율적인 협업 방법을 배우고 개인과 팀의 성장에 기여할 수 있었습니다.

                                저는 항상 "스스로 경험하기 전에 스스로를 판단하지 말자"는 저의 좌우명을 삶의 실천으로 삼고 있습니다. 이는 개발자로서의 저의 접근 방식을 결정짓는 중요한 원칙입니다. 앞으로도 지속적인 학습과 도전을 통해 기술적 능력을 향상시키고, 팀의 목표 달성을 위해 최선을 다하겠습니다.
                            </p>
                        </div>
                    </div>
                )}
                <div className="pagination-buttons">
                    <button className="btn btn-primary" onClick={() => handlePageChange(1)} disabled={page === 1}>1</button>
                    <button className="btn btn-primary" onClick={() => handlePageChange(2)} disabled={page === 2}>2</button>
                    <button className="btn btn-primary" onClick={() => handlePageChange(3)} disabled={page === 3}>3</button>
                </div>
            </div>
        </section>
    );
}

export default About;
