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
                    <div className="about">
                        <div className="about-img-holder">
                            <img src={process.env.PUBLIC_URL + '/imgs/minseop.jpg'} className="about-img" alt="Profile" />
                        </div>
                        <div className="about-caption">
                            <p className="section-subtitle">Who Am I ?</p>
                            <h2 className="section-title mb-3">About Me</h2>
                            <p>
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
                    <div className="about">
                        <div className="about-img-holder">
                            <img src={process.env.PUBLIC_URL + '/imgs/git.png'} className="about-img" alt="Profile" />
                        </div>
                        <div className="about-caption">
                            <p className="section-subtitle">More About Me</p>
                            <h2 className="section-title mb-3">Communication</h2>
                            <p>
                                6개월 동안의 풀스택 개발 교육을 통해 다양한 기술을 익히고 실제 프로젝트에 적용하는 경험을 했습니다.
                                그 과정에서 특히 중요하게 다룬 부분 중 하나는 형상 관리와 협업이었습니다.
                            </p>
                            <p>
                                GitHub의 이슈 트래킹(issue tracking) 기능을 활용하여 작업할 이슈를 할당하고,
                                <br />Pull Request를 통해 코드 리뷰를 진행하였습니다. <br />이를 통해 코드의 품질을 높이고, 팀원들 간의 원활한 소통을 도모하였습니다.
                            </p>
                        </div>
                    </div>
                )}
                <div className="pagination-buttons">
                    <button className="btn btn-primary" onClick={() => handlePageChange(1)} disabled={page === 1}>1</button>
                    <button className="btn btn-primary" onClick={() => handlePageChange(2)} disabled={page === 2}>2</button>
                </div>
            </div>
        </section>
    );
}

export default About;
