import React from 'react';

const Student = () => {
    return (
        <div>
            <div className='relative mt-10 grid md:grid-cols-2' style={{
                backgroundImage: "url(https://i.ibb.co/1v1MBK9/Banner.jpg)",
            }}>
                <div className='absolute top-0 left-0 bg-slate-100 bg-opacity-30 w-full h-full z-20'></div>
                <div className='z-30'>
                    <img className='' src="https://i.ibb.co/D1XDLN6/students.png" alt="" />
                </div>
                <div className='flex items-center z-30 p-8'>
                    <div className=' text-white'>
                        <h2 className='text-3xl text-black font-bold max-w-[300px]'>What Our Students Say About Us</h2>
                        <p className="text-lg font-normal text-justify mt-6 text-white">Outstanding experience at this Training Institute. Comprehensive content, passionate instructors, excellent facilities, and strong support. Highly recommend for education and career advancement.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Student;