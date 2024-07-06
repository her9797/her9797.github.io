import React, { useState } from 'react';

const Review = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Sample data for blog posts, you can replace this with your actual data
    const blogPosts = [
        {
            id: 1,
            title: "Chatting (WebSocket)",
            image: "/imgs/projects/chat.gif",
            content: `- React를 사용하여 웹소켓 클라이언트 구현 및 사용자 인터페이스 개발\n
                      - Spring Boot와 STOMP를 사용하여 웹소켓 서버 구축 및 메시지 브로커 설정\n
                      - 실시간 메시지 송수신 기능 개발로 직원 간 원활한 소통 지원`,
            link: ""
        },
        {
            id: 2,
            title: "Insite (Chart)",
            image: "/imgs/projects/insite.gif",
            content: `- React와 Chart.js를 사용하여 데이터 시각화 화면 구현\n
                      - Native 쿼리와 기존 로직을 재사용하여 데이터베이스에서 실시간 데이터를 가져와 분석 및 시각화`,
            link: ""
        },
        {
            id: 3,
            title: "Annouce (Quill Editor)",
            image: "/imgs/projects/announce.gif",
            content: `- Quill 에디터를 사용하여 공지사항 본문을 꾸밀 수 있도록 구현\n
                      - 파일 업로드 기능을 추가하여 여러 파일을 배열 형태로 동시에 업로드 및 저장\n
                      - 파일 다운로드 기능을 추가하여 개별 파일을 다운로드할 수 있도록 구현`,
            link: ""
        },
        {
            id: 4,
            title: "Note",
            image: "/imgs/projects/note.gif",
            content: `- 쪽지 목록에서 사용자 프로필 사진 표시 구현\n
                      - 받은 쪽지: 답장 기능 추가하여 송신자에게 답장이 가능하도록 구현\n
                      - 보낸 쪽지: 답장 기능 제외하여 단방향 통신만 가능하도록 구현`,
            link: ""
        },
        {
            id: 5,
            title: "Login (Spring Security)",
            image: "/imgs/projects/log.gif",
            content: `- 스프링시큐리티를 이용한 로그인 및 Java Mail Sender를 이용한 사용자 인증 구현\n
                      - 사용자 인터페이스 개선을 위한 Thymleaf와 HTML을 활용한 프론트엔드 개발`,
            link: ""
        },
        {
            id: 6,
            title: "Pay (KakaoPay)",
            image: "/imgs/projects/pay.gif",
            content: `- 카카오페이 테스트 API를 사용하여 결제 기능 구현\n
                      - 테스트 결제 요청, 결제 승인, 결제 취소 등의 기능을 포함한 결제 프로세스 개발\n
                      - API 응답 데이터를 처리하고, 사용자에게 결제 정보를 제공하는 프론트엔드 인터페이스 개발`,
            link: ""
        },
        {
            id: 7,
            title: "Audit",
            image: "/imgs/projects/audit.gif",
            content: `- 펀딩 등록 시 심사 정보를 동시에 등록하는 로직 개발\n
                      - 펀딩 등록과 심사 정보 등록 사이의 트랜잭션 처리로 데이터 일관성 유지`,
            link: ""
        },
        {
            id: 8,
            title: "Notice",
            image: "/imgs/projects/note.gif",
            content: `- Spring 프레임워크를 활용하여 공지사항 관리 기능 구현\n
                      - Thymeleaf와 HTML을 사용하여 공지사항 등록, 수정, 삭제 기능 개발\n
                      - MyBatis를 이용하여 데이터베이스와 연동하여 공지사항 CRUD 작업 구현`,
            link: ""
        }
    ];

    const postsPerPage = 4;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const visiblePosts = blogPosts.slice(startIndex, endIndex);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <section className="section fixed-section" id="review">
            <div className="container text-center">
                <p className="section-subtitle">My Code</p>
                <h6 className="section-title mb-6">Review</h6>

                {visiblePosts.map(post => (
                    <div key={post.id} className="blog-card">
                        <div className="blog-card-header">
                            <img
                                src={post.image}
                                className="blog-card-img"
                                alt="Blog Post Image"
                            />
                        </div>
                        <div className="blog-card-body">
                            <h5 className="blog-card-title" style={{marginBottom: '10px'}}>{post.title}</h5>
                            <p className="korean-text" style={{ whiteSpace: 'pre-line', fontSize: '15px', marginBottom: '20px' }}>{post.content}</p>
                            <a href="https://github.com/her9797" className="blog-card-link">
                                github
                            </a>
                        </div>
                    </div>
                ))}


                <div className="pagination-buttons">
                    <button className="btn btn-primary mr-2" onClick={prevPage} disabled={currentPage === 1}>
                        Login
                    </button>
                    <button className="btn btn-primary" onClick={nextPage} disabled={endIndex >= blogPosts.length}>
                        RevelUP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Review;
