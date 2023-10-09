import { useLoaderData } from "react-router-dom";
import Exclusive from "../Exclusive/Exclusive";
import Services from "../Services/Services";
import Banner from "../Shared/Banner/Banner";
import Student from "../StudentReview/Student";



const Home = () => {

    const service = useLoaderData()
 

    return (
        <div>
            <Banner ></Banner>
            <Services service={service}></Services>
            <Student></Student>
            <Exclusive></Exclusive>
        </div>
    );
};

export default Home;