import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
    name: Yup.string().required("Name is mandatory"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is mandatory"),
    birthdate: Yup.date()
        .required("Birthdate is mandatory")
        .max(new Date(), "Birthdate can't be in the future"),
    
    nDni: Yup.number()
    .test("len", "DNI must contain exactly 8 digits", value => {
        return value && value.toString().length === 8;
    })
    .required("DNI is mandatory"),
    
    username: Yup.string(). required("Username is mandatory"),
    password: Yup.string()
        .min(8, "Password must contain a minimun of 8 characters")
        .required("Password is mandatory"),
    

});