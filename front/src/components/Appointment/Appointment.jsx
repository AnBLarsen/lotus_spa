import { useContext } from 'react';
import { FaCalendarAlt, FaClock, FaClipboard, FaTimesCircle} from 'react-icons/fa';
import { UsersContext } from '../../context/UserContext';
import { toast } from "react-hot-toast";


const Appointment = ({ id, date, time, description, status }) => {
    const { cancelAppointment } = useContext(UsersContext)

    const handleCancel = async () => {
        try {
            await cancelAppointment(id)
            toast.success("Appointment cancelled successfully!");

        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error("Failed to cancel appointment. Please try again.");
        }

    }

    return(


        <div className="bg-[#ffffffb9]  rounded-2xl p-6 h-60 flex-col flex-between">
            <div className="h-40 space-y-1">
                <p><strong>Appointment #:</strong> {id}</p>
                <p><FaClipboard className="inline mr-2 text-[#e4a1a0]" /><strong>Description:</strong>  {description}</p>
                <p><FaCalendarAlt className="inline mr-2 text-[#e4a1a0]" /><strong>Date:</strong>  {date}</p>
                <p><FaClock className="inline mr-2 text-[#e4a1a0]" /><strong>Time:</strong>  {time}</p>
                <p><strong>Status:</strong> {status === "cancelled" ? (
                    <span className="text-red-700 font-bold">Cancelled</span>
                ) : (
                    <span className="text-emerald-700 font-bold">Active</span>
                )}</p>
            </div>

            <div className="mb-6">
                <button 
                    className="flex items-center bg-[#e4a1a0c4] text-white px-4 py-1 rounded hover:bg-[#f5aaa8] cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-700"
                    onClick={handleCancel}
                    disabled={status === "cancelled"} 
                >
                    <FaTimesCircle className="mr-2" />
                    Cancel Appointment
                </button>
            </div>
        </div>
     
    );
};

export default Appointment;


