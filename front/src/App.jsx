import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import { useContext, useEffect } from 'react';
import { UsersContext } from './context/UserContext';

import MyAppointments from './views/appointments/MyAppointments';
import BookAppointmentForm from './views/appointments/BookAppointmentForm';
import Home from './views/home/Home';
import NavBar from './components/NavBar/NavBar';
import RegisterForm from './views/Register/RegisterForm';
import LoginForm from './views/login/LoginForm';
import About from './views/about/About';
import Services from './views/services/Services';
import PageNotFound from './views/pageNotFound/PageNotFound';
import { Toaster } from "react-hot-toast";

function App() {

  const { user } = useContext(UsersContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && (location.pathname === "/myappointments" || location.pathname === "/book-appointment")) {
      navigate("/login", { replace: true });
    }

    if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/myappointments", { replace: true });
    }
  }, [user, navigate, location.pathname]);


  return (
    <>
      <Toaster position="bottom-center" />
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/register" element={<RegisterForm />}/>

        
        {user && (
          <>
            <Route path="/myappointments" element={<MyAppointments />}/>
            <Route path="/book-appointment" element={<BookAppointmentForm />}/>
          </>
        )}

        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
