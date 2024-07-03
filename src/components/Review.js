import React, { useState } from 'react';

const Review = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Sample data for blog posts, you can replace this with your actual data
    const blogPosts = [
        {
            id: 1,
            title: "Consectetur adipisicing elit",
            image: "/imgs/img-1.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio. Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae. Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.",
            link: ""
        },
        {
            id: 2,
            title: "Explicabo illo",
            image: "/imgs/img-2.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio. Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae. Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.",
            link: ""
        },
        {
            id: 1,
            title: "Consectetur adipisicing elit",
            image: "/imgs/img-1.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio. Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae. Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.",
            link: ""
        },
        {
            id: 2,
            title: "Explicabo illo",
            image: "/imgs/img-2.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio. Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae. Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.",
            link: ""
        }
    ];

    const postsPerPage = 2;

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
                            <h5 className="blog-card-title">{post.title}</h5>
                            <p>{post.content}</p>
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
