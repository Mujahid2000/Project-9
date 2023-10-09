import React from 'react';
import Service from '../Service/Service';


const Services = ({service}) => {

    return (
        <div className='  mt-11 px-10 py-4'>
            <h2 className='mt-5 text-center  text-5xl font-bold text-black  py-14'>Our Program</h2>
            <hr className='bg-black'/>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-6' >
                {
                    service?.map(getService => <Service key={getService.id} getService={getService}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;