import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jsonData from './Fake.json'; 
import Error from '../ErrorPage/Error';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const item = jsonData.find(item => item.id == id);

        if (item) {
            setData(item); 
        }
    }, [id]);

    return (
        <div className='px-3'>
            {data ? (
                <div>
                    <div className='grid gap-4 md:grid-cols-2 mt-10'>
                    {/* profile */}
                    <div className="card w-full bg-base-100 shadow-xl" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                    <figure><img className='w-full' src={data.instructorProfilePicture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{data.instructorName}</h2>
                        <p className='font-semibold'>{data.category}</p>
                        <p className='text-justify text-black'>{data.instructorExperience}</p>
                    </div>
                    </div>

                    <div>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-72 h-full rounded-lg' src={data.image} alt="{data.category}"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.category}</h2>
                    <p>Cost:{data.price}$</p>
                    <p>Duration: {data.duration}</p>
                    <p>Joined: {data.joined}</p>
                    <p>Language: {data.language}</p>
                    <div className="card-actions ">
                   <Link > <button className="btn btn-primary">Enroll Now</button></Link>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div>
                    <div className='border pt-5 pb-10 px-5 text-black-500 mt-12 rounded-lg'>
                    <h2 className='text-3xl mb-6'>Course Information</h2>
                    <hr />
                    <p className='text-xl text-justify mt-3'>
                        {data.details}
                    </p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-3xl'>What Will You Learn?</h2>
                        <p className='text-2xl'>
                        {data.aboutLearn.topics.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))} 
                        </p>
                    </div>
                </div>
                </div>
            ) : (
                <Error></Error>
            )}
        </div>
    );
};

export default Details;
