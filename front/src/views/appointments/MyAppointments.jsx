import { useContext, useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import { UsersContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FaCalendar } from "react-icons/fa";

const MyAppointments = () => {
    const { userAppointments, getUserAppointments, user } = useContext(UsersContext);
    const hero = heroContent.find(item => item.page === "appointments");

    useEffect(() => {
        getUserAppointments(user.id);
    }, [user.id, getUserAppointments]);

    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#f5eee6]">
                <HeroSection image={hero.image} text={hero.text} />
                <div className="flex-grow">

                    <div className="text-center mt-8">
                        <h1 className="text-4xl font-bold text-[#779e97]">
                            Hello, {user.name}!
                        </h1>
                        <p className="text-xl mt-2 text-gray-600">
                            Welcome back! Here's your list of appointments.
                        </p>
                    </div>

                    <div className="p-6 flex justify-center mt-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {userAppointments.length > 0 ? userAppointments.map((appointment, id) => {
                                return (
                                    <Appointment
                                        key={id}
                                        description={appointment.description}
                                        id={appointment.id}
                                        date={appointment.date}
                                        time={appointment.time}
                                        status={appointment.status}
                                    />
                                );
                            }) : <h2 className="text-center"> <FaCalendar className=" inline mr-2 text-[#e4a1a0]"/> No Appointments yet ...</h2>}
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 mb-4">
                        <button className="bg-[#e4a1a0] text-white px-6 py-2 rounded-md hover:bg-[#f5aaa8]">
                            <Link to="/book-appointment">Book an Appointment</Link>
                        </button>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
};

export default MyAppointments;
