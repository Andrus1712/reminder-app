import * as Yup from "yup";

interface IReminderModel {
    description: string;
    payDate: string;
    notes: string;
}

export function initialValues(dataReminder: IReminderModel) {
    return {
        description: dataReminder.description,
        notes: dataReminder.notes,
        payDate: new Date(dataReminder.payDate),
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
