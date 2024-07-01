import React, { useState } from 'react';

const Review = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Sample data for blog posts, you can replace this with your actual data
    const blogPosts = [
        {
            id: 1,
            title: "Consectetur adipisicing elit",
            image: "/imgs/img-1.jpg",
            author: "Admin",
            likes: 234,
            comments: 123,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio. Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae. Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati."
        },
        {
            id: 2,
            title: "Explicabo illo",
            image: "/imgs/img-2.jpg",
            author: "Admin",
            likes: 456,
            comments: 264,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem."
        }
        // Add more blog posts as needed
    ];

    const postsPerPage = 1; // Number of blog posts per page

    // Calculate the index range for current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Filter blog posts based on the current page
    const visiblePosts = blogPosts.slice(startIndex, endIndex);

    // Function to handle clicking on Next button
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Function to handle clicking on Previous button
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <section className="section" id="blog">
            <div className="container text-center">
                <p className="section-subtitle">Recent Posts?</p>
                <h6 className="section-title mb-6">Blog</h6>

                {/* Render visible blog posts */}
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
                            <p className="blog-card-caption">
                                <a href="#">By: {post.author}</a>
                                <a href="#">
                                    <i className="ti-heart text-danger"></i> {post.likes}
                                </a>
                                <a href="#">
                                    <i className="ti-comment"></i> {post.comments}
                                </a>
                            </p>
                            <p>{post.content}</p>
                            <a href="#" className="blog-card-link">
                                Read more <i className="ti-angle-double-right"></i>
                            </a>
                        </div>
                    </div>
                ))}

                {/* Pagination Buttons */}
                <div className="pagination-buttons">
                    <button className="btn btn-primary mr-2" onClick={prevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className="btn btn-primary" onClick={nextPage} disabled={endIndex >= blogPosts.length}>
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Review;
