import * as Yup from "yup";

export function initialValues() {
    return {
        description: "",
        notes: "",
        payDate: new Date(),
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
            .min(
                new Date(new Date().setHours(0, 0, 0, 0)),
                "Pay Date must be today or later"
            ),
        notes: Yup
            .string()
            .nullable()
    }).shape({})
}
