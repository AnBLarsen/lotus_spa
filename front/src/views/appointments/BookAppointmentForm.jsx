import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UserContext";
import { ClipLoader } from "react-spinners"; 
import { bookValidationSchema } from "../../helpers/bookAppointmentValidation";
import { toast } from "react-hot-toast";

const services = [
  "Massage Therapy",
  "Facial Treatments",
  "Body Treatments",
  "Wellness Packages",
];

const generateTimeSlots = () => {
  let slots = [];
  for (let hour = 9; hour <= 16; hour++) {
    slots.push(`${hour}:00`, `${hour}:30`);
  }
  return slots;
};


const BookAppointmentForm = () => {
  const {bookAppointment, user} = useContext(UsersContext)

  
 
  const hero = heroContent.find(item => item.page === "bookAppointment");
  const navigate = useNavigate();
  
  const handleBookAppointment = async (values, { setSubmitting, resetForm }) => {
    
    const valuesObject = {
      ...values,
      userId: user?.id,
    }
   
    try {
      
      await bookAppointment(valuesObject);
      
      toast.success("Appointment booked successfully!");
      resetForm();
      setTimeout(() => navigate("/myappointments", { replace: true }), 2000);

    } catch (error) {
      const errorMessage = error.response?.data?.message || "Could not book the appointment, please try again";
      toast.error(errorMessage);
    }
      setSubmitting(false);
  };

  return (

    <>

      <div className="flex flex-col min-h-screen bg-[#dbf3f060]">
        <HeroSection image={hero.image} text={hero.text} />
        

        <div className="flex-grow">
          <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-[#ffffffc7] shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-center mb-6">My Next Appointment</h2>

            <Formik
                  initialValues={{
                    date: "",
                    time: "",
                    description: "",
                  }}
                  validationSchema={bookValidationSchema}
                  onSubmit={handleBookAppointment}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-gray-700">Date</label>
                        <Field type="date" name="date" className="w-full p-2 border rounded-md" />
                        <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                      </div>

                      <div>
                        <label className="block text-gray-700">Time</label>
                        <Field as="select" name="time" className="w-full p-2 border rounded-md">
                          <option value="">Select time</option>
                          {generateTimeSlots().map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
                      </div>

                      <div>
                        <label className="block text-gray-700">Service</label>
                        <Field as="select" name="description" className="w-full p-2 border rounded-md">
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#e4a1a0] text-white px-6 py-2 rounded-md hover:bg-[#f5aaa8] transition cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <ClipLoader color="#fff" loading={isSubmitting} size={20} />
                            <span className="ml-2">Booking...</span>
                          </>
                        ) : (
                          "Book Appointment"
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
          </div> 

        </div>

        <Footer/>

      </div>
    </>
  );
};

export default BookAppointmentForm;
