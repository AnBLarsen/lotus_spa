import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
   

    return (
      <>
      
        <section className="relative h-screen w-full flex items-center justify-center">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
    
         
          <div className="relative z-10 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-8xl font-parisienne">Welcome to <span className="font-light font-nunito text-6xl">LOTUS</span></h1>
            <p className="text-lg md:text-xl mt-4">Wellness & spa</p>
            <button className="mt-4 bg-[#e4a1a0] text-white px-6 py-2 rounded-md hover:bg-[#f5aaa8] cursor-pointer"> 
              <Link to="/book-appointment">Book an Appointment</Link>
            </button>
          </div>
        </section>
        <Footer/>
      </>
    );
};

export default Home;
