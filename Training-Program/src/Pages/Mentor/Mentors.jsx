import { useLoaderData } from "react-router-dom";
import OurInstructor from "./OurInstructor";


const Mentors = () => {
    const mentors = useLoaderData()
 


    return (
        <div>
            <h1 className="text-4xl mb-7 text-center text-sky-700 font-semibold">Our Instructor</h1>
            <hr />
            <OurInstructor mentors={mentors}></OurInstructor>
        </div>
    );
};

export default Mentors;