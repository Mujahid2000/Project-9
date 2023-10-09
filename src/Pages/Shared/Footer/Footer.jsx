import { SiYoutube } from "react-icons/si";
import {  FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-neutral text-neutral-content rounded-b-lg">
        <aside>
          <img className='w-48 h-14 mb-7' src="https://i.ibb.co/0yC5W98/logo.png" alt="" />
          <p className='text-lg'>Eduvalt It Ltd.<br/>Providing reliable tech since 1992</p>
        </aside> 
        <nav>
          <header className="footer-title text-lg">Social</header> 
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.youtube.com/channel/UCfkUIW0udIpwca7MoGlLZ-Q"><SiYoutube className="w-8 h-5"></SiYoutube></a> 
            <a href="https://www.facebook.com/mujahidul.islam.1656854"><FaFacebook className= 'w-8 h-5'></FaFacebook></a> 
            <a href="https://www.instagram.com/mujahid1505/"><AiFillInstagram className= 'w-8 h-6'></AiFillInstagram></a>
          </div>
        </nav>
      </footer>
        </div>
    );
};

export default Footer;