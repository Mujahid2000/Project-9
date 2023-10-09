
import { useContext, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvide';

const Login = () => {
    const { login, googleSignIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn().then(result => {
            navigate(location.state ? location.state : '/')
        })
    }

    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')
        }
    }, [user])
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const password = form.get('password');
        const email = form.get('email')

        login(email, password)
            .then(result => {
                Swal.fire(
                    'Login Successful!',
                    'You have successfully Login.',
                    'success'
                );

                //navigate log in

                navigate(location?.state ? location.state : '/')

            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
    }

    return (
        <div className="min-h-screen mt-10 lg:mt-0 flex items-center justify-center ">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-[500px] h-96">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <button onClick={handleGoogle} className="btn bg-blue-500 text-white">Google<FcGoogle></FcGoogle></button>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input type="email" required placeholder='Type Your Email' id="email" name="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600">Password</label>
                        <input type="password" required placeholder='Password' id="password" name="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center gap-3 justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Login
                        </button>
                        <p href="#" className="text-gray-600 text-blue-500 font-medium underline hover:underline"><Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
