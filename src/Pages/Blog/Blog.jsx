import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 grid grid-cols-1 gap-4 px-5'>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Web Development
                </div>
                <div className="collapse-content">
                    <p>In today's digital age, web development is a critical skill. Our blog delves into the world of web development, covering topics such as front-end and back-end development, popular frameworks like React and Angular, and the importance of responsive design. Whether you're a beginner or a seasoned developer, you'll find valuable insights to enhance your web development skills.</p>
                </div>
            </div>

            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Graphic Design:
                </div>
                <div className="collapse-content">
                    <p>Visual communication is a powerful tool, and our blog explores the art and science of graphic design. Discover the principles of effective design, the latest trends, and tips for creating stunning visuals. Whether you're a budding designer or a business owner looking to improve your branding, this blog will help you navigate the exciting world of graphic design.</p>
                </div>
            </div>

            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Mobile App Development:
                </div>
                <div className="collapse-content">
                    <p>The mobile app industry continues to thrive. Our blog covers everything from app ideation to development and marketing strategies. Learn about popular mobile app platforms, coding languages, and design best practices. Stay ahead in this dynamic field by reading our insightful articles.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Data Science:
                </div>
                <div className="collapse-content">
                    <p>Data is the new gold, and data scientists are in high demand. Our blog dives into the world of data science, exploring machine learning, data analysis, and the tools and techniques used in this field. Whether you're a beginner or an expert, our articles will keep you informed about the latest trends and developments.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Cybersecurity:
                </div>
                <div className="collapse-content">
                    <p>Protecting your digital assets is paramount in the digital age. Our blog provides essential information on cybersecurity, including tips for online safety, information on common threats, and insights into the latest security technologies. Stay one step ahead of cybercriminals by staying informed through our blog.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Cloud Computing:
                </div>
                <div className="collapse-content">
                    <p>Cloud computing is revolutionizing how businesses operate. Our blog discusses the benefits of cloud computing, popular cloud platforms, and best practices for cloud migration and management. Whether you're a business owner or an IT professional, our blog will help you harness the power of the cloud.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;