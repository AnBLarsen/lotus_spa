import * as Yup from "yup";
import { differenceInHours, startOfDay } from "date-fns";


export const bookValidationSchema = Yup.object({
    time: Yup.string()
        .required("Time is mandatory"),

    date: Yup.date()
        .required("Date is mandatory")
        .test("is-future-date", "Appointments cannot be in the past", (value) => {
            return startOfDay(new Date(value)) >= startOfDay(new Date());
        })
        .test("is-weekday", "Appointments can only be booked on weekdays", (value) => {
            const day = new Date(value).getDay();
            return day >= 1 && day <= 5;
        })
        .test("is-at-least-24-hours", "Appointments must be scheduled at least 24 hours in advance", (value) => {
            return differenceInHours(new Date(value), new Date()) >= 24;
        }),

    description: Yup.string().required("Description is mandatory"),
});


