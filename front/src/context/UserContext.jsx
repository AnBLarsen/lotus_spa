import { createContext, useCallback, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const UsersContext = createContext({
    user: null, 
    userAppointments: [],
    registerUser: async () => {},
    loginUser: async () => {},
    logoutUser: () => {},
    bookAppointment: async () => {},
    getUserAppointments: async () => {},
    cancelAppointment: async () => {}
});

export const UsersProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);

    const [userAppointments, setUserAppointments] = useState([]);
    

    const registerUser = async (userData) => {
        await axios.post("http://localhost:3000/users/register", userData);
    };

    const loginUser = async (loginData) => {
        
        const response = await axios.post("http://localhost:3000/users/login", loginData);
        setUser(response.data.user);  
        localStorage.setItem("user", JSON.stringify(response.data.user));
       
    };

    const logoutUser = () => {
        localStorage.removeItem("user");
        setUser(null);
        setUserAppointments([])
    };

    const bookAppointment = async (values) => {
        await axios.post(`http://localhost:3000/appointments/schedule`, values);
        
    };

    const getUserAppointments = useCallback(async (userId) => {
        const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
        setUserAppointments(data.appointments);
        
    }, []); 

    const cancelAppointment = async (appointmentId) => {
        await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`)
        const updatedAppointments = userAppointments.map((appointment) => appointment.id === appointmentId ? {...appointment, status:"cancelled"}: appointment)
        setUserAppointments(updatedAppointments)
    }

    const value = {
        user,
        userAppointments,
        setUser,
        registerUser,
        loginUser,
        logoutUser,
        bookAppointment,
        getUserAppointments,
        cancelAppointment
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};
