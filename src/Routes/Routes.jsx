import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Mentors from "../Pages/Mentor/Mentors";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import Error from "../Pages/ErrorPage/Error";
import Pay from "../Layout/Pay/Pay";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Schedule from "../Pages/Schedule/Schedule";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('/Fake.json')
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
            },
            {
                path: '/courdedetails',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
            {
                path: '/mentor',
                element: <Mentors></Mentors>,
                loader: () =>fetch('/Fake.json')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/About',
                element: <About></About>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/payment",
                element: <Pay></Pay>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/schedule',
                element: <PrivateRoute><Schedule></Schedule></PrivateRoute>
            }
            
            
        ]
    }
])

export default routes;