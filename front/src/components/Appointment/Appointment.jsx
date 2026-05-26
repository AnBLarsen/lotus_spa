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


        <div className="bg-[#f6e1e1] rounded-2xl p-6 flex flex-col justify-between w-full sm:w-72">
            <div className="space-y-2 mb-4 text-gray-700">
                <div>
                    <p className='flex items-center font-bold'><FaClipboard className=" mr-2 text-[#e4a1a0]" />Appoitment</p>
                    <p>{description}</p>
                </div>
                <div>
                    <p className='flex items-center font-bold'><FaCalendarAlt className="mr-2 text-[#e4a1a0]" />Date</p>
                    <p>{date}</p>
                </div>
                <div>
                    <p className='flex items-center font-bold'><FaClock className="inline mr-2 text-[#e4a1a0]" />Time</p>
                    <p>{time}</p>
                </div>
                <p><strong>Status:</strong> {status === "cancelled" ? (
                    <span className="text-red-700 font-bold">Cancelled</span>
                ) : (
                    <span className="text-emerald-700 font-bold">Booked</span>
                )}</p>
            </div>

            <div className="flex justify-baseline">
                <button 
                    className="w-full flex items-center text-gray-700 py-1 border border-red-700 px-4 rounded hover:text-gray-900 cursor-pointer disabled:hidden"
                    onClick={handleCancel}
                    disabled={status === "cancelled"} 
                >
                    <FaTimesCircle className="mr-2 text-red-700 disabled:text-gray-700" />
                    Cancel Appointment
                </button>
            </div>
        </div>
     
    );
};

export default Appointment;


