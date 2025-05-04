import * as Yup from "yup";


export const loginValidationSchema = Yup.object({
    username: Yup.string().required("Username is mandatory"),
    password: Yup.string().required("Password is mandatory")
})
