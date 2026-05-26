import { useContext, useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import { UsersContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { FaCalendar, FaPlus } from "react-icons/fa";

const MyAppointments = () => {
    const { userAppointments, getUserAppointments, user } = useContext(UsersContext);
    const hero = heroContent.find(item => item.page === "appointments");

    useEffect(() => {
        getUserAppointments(user.id);
    }, [user.id, getUserAppointments]);

    return (
        <>
            <div className=" flex flex-col flex-1 bg-[#faf5f1] px-4 md:px-10">
                {/* <HeroSection image={hero.image} text={hero.text} /> */}
                <div className="flex-grow">

                    <div className="text-left mt-8">
                        <h1 className="text-4xl font-bold text-gray-700">
                            Hello, {user.name}!
                        </h1>
                    </div>

                    <div className="flex  mt-8 ">
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
                            }) : <h2 className="text-left flex items-center "> <FaCalendar className="inline mr-2 text-[#e4a1a0]"/> No Appointments yet</h2>}
                        </div>
                    </div>

                    <div className="mt-4 mb-4">
                        <button className="bg-[#f6e1e1]  text-gray-700 px-6 py-2 rounded-md hover:bg-[#f8cdcc] flex items-center">
                            <FaPlus className="mr-2"></FaPlus>
                            <Link to="/book-appointment">New appointment</Link>
                        </button>
                    </div>

                </div>
                
            </div>
        </>
    );
};

export default MyAppointments;
