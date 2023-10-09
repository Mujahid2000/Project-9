import React from 'react';

const Student = () => {
    return (
        <div>
            <div className='mt-10'>
                <div>
                <img className='rounded-lg relative h-[750px]' src="https://i.ibb.co/dGpd8dJ/colored-background.jpg" alt="" />
                <img className='mt-[-684px] w-4/12 absolute' src="https://i.ibb.co/D1XDLN6/students.png" alt="" />
                </div>
                <div className='ml-[650px] absolute mt-[-500px] w-[600px] text-white'>
                    <h2 className='text-3xl text-black font-bold  w-1/2'>What Our Students Say About Us</h2>
                    <p className="text-lg font-normal text-justify mt-6 text-white">Outstanding experience at this Training Institute. Comprehensive content, passionate instructors, excellent facilities, and strong support. Highly recommend for education and career advancement.</p>

                </div>
            </div>
            
        </div>
    );
};

export default Student;