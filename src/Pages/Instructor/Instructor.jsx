import React from 'react';

const Instructor = ({ mentor }) => {
    

    const { id, category, instructorName, instructorExperience, instructorProfilePicture } = mentor || {};
    const textColor = mentor ? mentor.colorCode : ''; 
    const cardTitleStyle = {
        backgroundColor: textColor,
        paddingTop: '15px',
        borderRadius: '5px',
    };

    return (
        <div className='px-5'>
            <div  className="card w-full bg-base-100 pt-3 shadow-xl">
                <figure><img style={cardTitleStyle} className='w-full' src={instructorProfilePicture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-medium">{instructorName}</h2>
                    <p className='font-bold'>{category}</p>
                    <p className='text-justify'>{instructorExperience}</p>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
