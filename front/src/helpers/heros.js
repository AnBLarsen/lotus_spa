import loginHero from "../assets/hero-login.jpg";
import aboutHero from "../assets/hero-about.jpg";
import registerHero from "../assets/hero-register.jpg";
import appointmentHero from "../assets/hero-appointment.jpg";
import servicesHero from "../assets/hero-services.jpg"
import bookAppointmentHero from "../assets/hero-booking.jpg"



export const heroContent = [
    {
        page: "login",
        image: loginHero,
        text: "Welcome Back",
    },
    {
        page: "about",
        image: aboutHero,
        text: "About Us",
    },
    {
        page: "services",
        image: servicesHero,
        text: "Our Services",
    },
    {
        page: "register",
        image: registerHero,
        text: "Create an Account",
    },
    {
        page: "appointments",
        image: appointmentHero,
        text: "My Appointments",
    },
    {
        page: "bookAppointment",
        image: bookAppointmentHero,
        text: "Book Appointment",
    },
];


export default heroContent;