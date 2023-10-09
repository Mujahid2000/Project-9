import React from 'react';

const Exclusive = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-center text-4xl text-black font-bold'>Exclusive Solutions that Set Us Apart</h2>
            <p className='text-center text-lg mt-5 text-black font-normal'>Our aim is to make your learning experience the best possible by providing you with additional facilities <br /> that will help you to grow without bounds.</p>
            {/* parent div */}
            <div className='grid grid-cols-1 sm:gap-6 lg:grid-cols-3   mt-10 ml-6'>
            <div>
            <div className="card w-96 bg-gradient-to-r from-orange-100 to-red-50 pt-3 border h-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/Z640hFD/option1662372155.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Lifetime Support</h2>
                <p className='text-black'>Eduvalt  IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                
            </div>
            </div>
            </div>

            <div>
            <div className="card bg-gradient-to-r from-orange-100 to-red-50 w-96 pt-3 border h-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/gZs8KLz/option1662372211.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Career Placement Support</h2>
                <p>Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager.  So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.</p>
                
            </div>
            </div>
            </div>

            <div>
            <div className="card w-96 bg-gradient-to-r from-orange-100 to-red-50 pt-3 h-96 border bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/5nZg6Lt/option1662372262.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Videos</h2>
                <p>No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.</p>
                
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Exclusive;