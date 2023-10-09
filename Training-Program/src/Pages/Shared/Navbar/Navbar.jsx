


import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvide";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-5">
            <img src="https://i.ibb.co/nCS36sP/logo.png" alt="" />
            <nav className="">
                <ul className="flex flex-col lg:flex-row items-center gap-6 justify-between w-full">
                    <div className="flex flex-wrap justify-center gap-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/courdedetails"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Enrollment
                            </NavLink>

                        </li>

                        <li>
                            <NavLink
                                to="/schedule"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Schedule
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/mentor"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Instructor
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Blog
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/Contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                Contact
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/About"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                }
                            >
                                About
                            </NavLink>

                        </li>
                    </div>
                    {
                        user ?
                            <div className="flex gap-3">
                                <div className="relative">
                                    <img src={user?.photoURL} className="rounded-full w-12" alt="" onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        e.target.nextSibling.classList.toggle("hidden")
                                    }} />
                                    <p className="absolute hidden top-12 left:[0%] lg:right-[60px] w-[150px] lg:w-[220px] bg-blue-500 px-2 py-1 rounded text-center">{user?.displayName}</p>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-info text-white">LogOut</button>
                            </div>
                            :

                            <div>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                        }
                                    >
                                        <button className="btn btn-info text-white">Login</button>

                                    </NavLink>

                                </li>
                            </div>
                    }


                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
