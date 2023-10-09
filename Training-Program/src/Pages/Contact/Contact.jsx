import React from 'react';
import Mapset from '../Map/Mapset';

const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-3 mt-10'>
            <div >
            <div className="card bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            
            <div className="card-body">
                <h2 className="card-title">Head Office</h2>
                <p className='text-lg font-medium'>70 Washington Square South, <br /> New York, NY 10012, <br /> United States</p>
                
            </div>
            </div>
            </div>
            <div>
            <div className="card bg-gradient-to-r from-orange-100 to-red-50 w-96 pt-6 bg-base-100 shadow-xl">
            
            <div className="card-body">
                <h2 className="card-title">New York Branch</h2>
                <p className='text-lg font-medium'>70 Washington Square South, <br /> New York, NY 10012, <br /> United States</p>
                
            </div>
            </div>
            </div>
            <div>
            <div className="card bg-gradient-to-t from-red-50 to-orange-50 w-96 pt-6 bg-base-100 shadow-xl">
            
            <div className="card-body">
                <h2 className="card-title">Las Vegas</h2>
                <p className='text-lg font-medium'>737, OAKMONT AVE UNIT, 1201 <br /> LAS VEGAS, NV 89109-0183, <br /> USA</p>
                
            </div>
            </div>
            </div>
        </div>
        <div className='mt-24'>
            <Mapset></Mapset>
        </div>
        </div>
    );
};

export default Contact;