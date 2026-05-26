import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "../../context/UserContext";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const NavBar = () => {
    const { user, logoutUser } = useContext(UsersContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogoutClick = async () => {
        setLoading(true);
        logoutUser();
        setLoading(false);
        navigate("/");
        setMenuOpen(false);
    };

    const handleLoginClick = () => {
        navigate("/login");
        setMenuOpen(false);
    };

    const linkClass = ({ isActive }) =>
        `hover:text-[#d89d81] ${isActive ? "text-[#d89d81]" : ""}`;

    return (
        <nav className="w-full bg-[#dbf3f060] relative z-50">
            <div className="flex justify-between items-center p-4">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    <img src="/logo-nobg.png" alt="Logo" className="w-15 h-auto" />
                </NavLink>

                {/* Desktop links */}
                <ul className="font-nunito hidden md:flex space-x-4 font-light text-[#504f4e] text-[20px]">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                    <NavLink to="/services" className={linkClass}>Services</NavLink>
                    {user && (
                        <NavLink to="/myappointments" className={linkClass}>My Appointments</NavLink>
                    )}
                </ul>

                {/* Desktop auth button */}
                <div className="hidden md:block">
                    {user ? (
                        <button
                            onClick={handleLogoutClick}
                            className="flex items-center bg-[#e4a1a0c4] text-neutral-100 px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? (
                                <ClipLoader color="#fff" loading={loading} size={20} />
                            ) : (
                                <><FaUser className="inline mr-2 text-neutral-100" /> Logout</>
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
                </div>

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden text-[#504f4e] text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[#dbf3f0e6] px-6 pb-4 flex flex-col gap-4 font-nunito text-[#504f4e] text-lg font-light">
                    <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>Services</NavLink>
                    {user && (
                        <NavLink to="/myappointments" className={linkClass} onClick={() => setMenuOpen(false)}>
                            My Appointments
                        </NavLink>
                    )}
                    <div className="pt-2 border-t border-[#779e9740]">
                        {user ? (
                            <button
                                onClick={handleLogoutClick}
                                className="flex items-center bg-[#e4a1a0c4] text-neutral-100 px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? (
                                    <ClipLoader color="#fff" loading={loading} size={20} />
                                ) : (
                                    <><FaUser className="inline mr-2" /> Logout</>
                                )}
                            </button>
                        ) : (
                            <button
                                onClick={handleLoginClick}
                                className="flex items-center bg-[#e4a1a0c4] text-neutral-100 px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer"
                            >
                                <FaUser className="inline mr-2" /> Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
