import React from 'react';

const Schedule = () => {
    return (
        <div className='mt-5 px-5'>
            <h2 className='text-5xl font-bold text-black text-center'>Our Course Schedule</h2>
            {/* CARD 1 */}
            
            <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
            <h4 className='text-xl font-semibold'>Sunday:</h4>
            <ul>
                <li>Web Development: 9:00 a.m. - 1:00 p.m.</li>
                <li>Graphic Design: 1:30 p.m. - 5:30 p.m.</li>
                <li>Mobile App Development: 6:00 p.m. - 10:00 p.m. </li>
            </ul>
            </div>
            </div>
            
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Monday:</h4>
                <ul>
                    <li>Data Science: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Cybersecurity: 1:30 p.m. - 5:30 p.m.</li>
                </ul>
            </div>
            </div>
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Tuesday:</h4>
                <ul>
                    <li>Cloud Computing: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Web Development: 1:30 p.m. - 5:30 p.m.</li>
                    <li>Graphic Design: 6:00 p.m. - 10:00 p.m.</li>
                </ul>
            </div>
            </div>
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Wednesday:</h4>
                <ul>
                    <li>Mobile App Development: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Data Science: 1:30 p.m. - 5:30 p.m.</li>
                </ul>
            </div>
            </div>

            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Thursday:</h4>
                <ul>
                    <li>Cybersecurity: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Cloud Computing: 1:30 p.m. - 5:30 p.m.</li>
                    <li>Web Development: 6:00 p.m. - 10:00 p.m.</li>
                </ul>
            </div>
            </div>
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Friday:</h4>
                <ul>
                    <li>Graphic Design: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Mobile App Development: 1:30 p.m. - 5:30 p.m.</li>
                </ul>
            </div>
            </div>
            <div className="card px-5 py-4 leading-8 bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            <div>
                <h4 className='text-xl font-semibold'>Saturday:</h4>
                <ul>
                    <li>Data Science: 9:00 a.m. - 1:00 p.m.</li>
                    <li>Cybersecurity: 1:30 p.m. - 5:30 p.m.</li>
                    <li>Cloud Computing: 6:00 p.m. - 10:00 p.m.</li>
                </ul>
            </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default Schedule;