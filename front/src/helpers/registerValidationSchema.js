import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
    name: Yup.string().required("Name is mandatory"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is mandatory"),
    username: Yup.string().required("Username is mandatory"),
    password: Yup.string()
        .min(8, "Password must contain a minimum of 8 characters")
        .required("Password is mandatory"),
});