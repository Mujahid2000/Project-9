import React from 'react';
import Instructor from '../Instructor/Instructor';


const OurInstructor = ({mentors}) => {
    
    return (
        <div>
            <div className='grid grid-cols-3 gap-6 mt-10'>
                {
                mentors?.map(mentor => <Instructor key={mentor.id} mentor={mentor}></Instructor>)
                }
            </div>
        </div>
    );
};

export default OurInstructor;