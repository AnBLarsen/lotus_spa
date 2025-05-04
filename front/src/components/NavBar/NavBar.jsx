import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "../../context/UserContext";
import { FaUser } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; 

const NavBar = () => {
    const { user, logoutUser } = useContext(UsersContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); 

    const handleLogoutClick = async () => {
        setLoading(true); 
        logoutUser();
        setLoading(false); 
        navigate("/");  
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <>
            <nav className="w-full p-4 bg-[#dbf3f060] flex justify-between items-center">  
                <NavLink to="/">
                    <img src="/logo-nobg.png" alt="Logo" className="w-15 h-auto" />
                </NavLink>

                <ul className="font-nunito hidden md:flex space-x-4 font-light text-[#504f4e] text-[20px] ">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `hover:text-[#d89d81] ${isActive ? "text-[#d89d81]" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `hover:text-[#d89d81] ${isActive ? "text-[#d89d81]" : ""}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        className={({ isActive }) => 
                            `hover:text-[#d89d81] ${isActive ? "text-[#d89d81]" : ""}`
                        }
                    >
                        Services
                    </NavLink>

                    {user && (
                        <NavLink 
                            to="/myappointments" 
                            className={({ isActive }) => 
                                `hover:text-[#d89d81] ${isActive ? "text-[#d89d81]" : ""}`
                            }
                        >
                            My Appointments
                        </NavLink>
                    )}
                </ul>

                {user ? (
                    <button
                        onClick={handleLogoutClick}
                        className="flex items-center bg-[#e4a1a0c4] text-neutral-100 px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer"
                        disabled={loading} 
                    >
                        {loading ? (
                            <ClipLoader color="#fff" loading={loading} size={20} /> 
                        ) : (
                            <>
                                <FaUser className="inline mr-2 text-neutral-100" /> Logout
                            </>
                        )}
                    </button>
                ) : (
                    <button
                        onClick={handleLoginClick}
                        className="flex items-center bg-[#e4a1a0c4] text-neutral-100 px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer"
                    >
                        <FaUser className="inline mr-2 text-neutral-100" /> Login
                    </button>
                )}
            </nav>
        </>
    );
};

export default NavBar;
