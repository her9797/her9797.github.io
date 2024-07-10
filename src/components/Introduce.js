import React from 'react';

const Introduce = () => {
    return (
        <section className="section" id="testmonial">
            <div className="container text-center">
                <p className="section-subtitle">More About Me</p>
                <h6 className="section-title mb-6">Introduce</h6>

                <div className="row">
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src={process.env.PUBLIC_URL + '/imgs/grow.png'} className="testimonial-card-img" alt="Emily Reb" />
                            </div>
                            <div className="testimonial-card-body">
                                <h6 className="testimonial-card-title korean-text" style={{ fontWeight: 'bold' }}>성장과 열정</h6>
                                <p className="testimonial-card-subtitle">
                                    Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder ">
                                <img src={process.env.PUBLIC_URL + '/imgs/장점.png'} className="testimonial-card-img" alt="Emily Reb" />
                            </div>
                            <div className="testimonial-card-body">
                                <h6 className="testimonial-card-title korean-text" style={{ fontWeight: 'bold' }}>성격 중 장점</h6>
                                <p className="testimonial-card-subtitle">
                                    Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src={process.env.PUBLIC_URL + '/imgs/단점.png'} className="testimonial-card-img" alt="Emily Reb" />
                            </div>
                            <div className="testimonial-card-body">
                                <h6 className="testimonial-card-title korean-text" style={{ fontWeight: 'bold' }}>성격 중 단점</h6>
                                <p className="testimonial-card-subtitle">
                                    Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src={process.env.PUBLIC_URL + '/imgs/promise.png'} className="testimonial-card-img" alt="Emily Reb" />
                            </div>
                            <div className="testimonial-card-body">
                                <h6 className="testimonial-card-title korean-text" style={{ fontWeight: 'bold' }}>입사 후 포부</h6>
                                <p className="testimonial-card-subtitle">
                                    Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion Minseop's Passion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
