
import { Link } from 'react-router-dom';

const Service = ({getService}) => {

    const {id, duration, name, detail, price, image} =  getService || {}
    return (
        <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <figure><img className=' h-64' src={image} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">{name }</h2>
        <p className='font-medium'>{detail}</p>
        <div className='flex'>
        <p className='font-medium text-lg'>Price: {price}$</p>
        </div>
        <div className="card-actions">
        <Link 
        to={`/details/${id}`}>
        <button 
        style={{ backgroundColor: '#007BFF' }} 
        className="btn  text-white">
            Click For More...
            </button></Link>
        </div>
    </div>
    </div>
        </div>
    );
};

export default Service;