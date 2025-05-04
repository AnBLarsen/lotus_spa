import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../helpers/loginValidationSchema";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UserContext";
import { ClipLoader } from "react-spinners"; 
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const { loginUser } = useContext(UsersContext);

  const hero = heroContent.find((item) => item.page === "login");
  const navigate = useNavigate();


  const handleLogin = async (values, { setSubmitting, resetForm }) => {
  
      try {
        const loggedInUser = await loginUser(values);

        if (loggedInUser) {
          toast.success("Login successful! Redirecting...");
          resetForm();
          setTimeout(() => navigate("/myappointments", { replace: true }), 3000);
        }
      // eslint-disable-next-line no-unused-vars
      } catch (error) {;
        toast.error("Invalid username or password"); 
      }
      setSubmitting(false);
  };
  

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#dbf3f060]">
        <HeroSection image={hero.image} text={hero.text} />

        <div className="flex-grow">
          <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-[#ffffffc7] shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={loginValidationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Username</label>
                    <Field type="text" name="username" className="w-full p-2 border rounded-md" />
                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block text-gray-700">Password</label>
                    <Field type="password" name="password" className="w-full p-2 border rounded-md" />
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
                        <span className="ml-2">Logging in...</span>
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>

                  <p className="text-center">
                    Do not have an account yet?{" "}
                    <Link to="/register" className="text-[#e4a1a0]">
                      Register
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LoginForm;
