import * as Yup from "yup";

export function initialValues() {
    return {
        description: "",
        notes: "",
        payDate: "",
    }
}

export function validationSchema() {
    return Yup.object({
        description: Yup
            .string()
            .required("Description is required"),
        payDate: Yup
            .date()
            .required("Pay Date is required")
            .nullable()
            .min(new Date(1900, 0, 1)),
        notes: Yup
            .string()
            .nullable()
    }).shape({})
}
