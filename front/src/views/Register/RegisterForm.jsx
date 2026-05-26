import { useContext, useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerValidationSchema } from "../../helpers/registerValidationSchema";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UserContext";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";


const RegisterForm = () => {

    const {registerUser} = useContext(UsersContext)
    const [showPassword, setShowPassword] = useState(false);

    const hero = heroContent.find(item => item.page === "register");
    const navigate = useNavigate();

    const handleRegister = async (values, { setSubmitting, resetForm }) => {
        try {
            await registerUser(values);
          
            toast.success("User registered successfully! Redirecting...");
            resetForm();
            setTimeout(() => navigate("/login", { replace: true }), 3000);
            
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Could not register, please try again";
            toast.error(errorMessage);
        }
        setSubmitting(false);
    };

    return (

        <>
            <div className="flex flex-col flex-1 bg-[#dbf3f060]">
                <HeroSection image={hero.image} text={hero.text} />

                <div className="flex flex-1 justify-center items-center px-4 py-6">
                    <div className="flex flex-col w-full max-w-md p-6 bg-[#ffffffc7] shadow-lg rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

                        <Formik
                            initialValues={{
                            name: "",
                            email: "",
                            username: "",
                            password: "",
                            }}
                            validationSchema={registerValidationSchema}
                            onSubmit={handleRegister}
                        >
                            {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                <label className="block text-gray-700">Name</label>
                                <Field type="text" name="name" className="w-full p-2 border border-gray-500  rounded-md" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                <label className="block text-gray-700">Email</label>
                                <Field type="email" name="email" className="w-full p-2 border border-gray-500 rounded-md" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                <label className="block text-gray-700">Username</label>
                                <Field type="text" name="username" className="w-full p-2 border border-gray-500  rounded-md" />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div>
                                <label className="block text-gray-700">Password</label>
                                <div className="relative">
                                  <Field type={showPassword ? "text" : "password"} name="password" className="w-full p-2 pr-10 border border-gray-500 rounded-md" />
                                  <button type="button" onClick={() => setShowPassword(p => !p)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                  </button>
                                </div>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                </div>

                                <button
                                type="submit"
                                className="w-full bg-[#e4a1a0] text-white px-6 py-2 rounded-md hover:bg-[#f5aaa8] transition cursor-pointer"
                                disabled={isSubmitting}
                                >
                                {isSubmitting ? (
                                    <>
                                        <ClipLoader color="#fff" loading={isSubmitting} size={20} />
                                        <span className="ml-2">Registering...</span>
                                    </>

                                ): "Create Account"}
                                </button>
                                <p className="text-center text-gray-700">
                                Already have an account? <Link to="/login" className="text-[#e4a1a0]">Login</Link>
                                </p>
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>

                

            </div>
 
        </>
    );
};

export default RegisterForm;