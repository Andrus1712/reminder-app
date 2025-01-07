import React, {useState} from 'react';
import {Platform, TouchableOpacity, View} from "react-native";
import {styles} from "./newReminderForm.styles";
import {Button, Icon, Input, Text} from "@rneui/base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "./NewReminderFrom.data";
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAppDispatch, useAppSelector} from "../../../features/hooks/store.hook";
import {setReminder} from "../../../features/redux/slices/reminder.slice";
import Toast from "react-native-toast-message";

function NewReminderForm() {
    const dataReminder = useAppSelector(store => store.reminder);
    const dispatch = useAppDispatch();
    
    const [date, setDate] = useState(new Date(dataReminder.payDate));
    const [show, setShow] = useState(false);
    
    
    // useEffect(() => {
    //     Toast.show({
    //         position: "bottom",
    //         text1: 'Hello',
    //         text2: 'This is some something ?',
    //         bottomOffset: 50,
    //         type: 'info',
    //     })
    // }, []);
    
    const formik = useFormik({
        initialValues: initialValues(dataReminder),
        validationSchema,
        validateOnChange: true,
        onSubmit: (values) => {
            try {
                
                const {
                    description,
                    notes,
                    payDate
                } = values;
                
                dispatch(setReminder({
                    description,
                    payDate: payDate.toISOString(),
                    notes,
                }));
                
            } catch (e) {
                console.error(e);
                Toast.show({
                    position: "bottom",
                    text1: 'Error',
                    text2: 'Something went wrong',
                    bottomOffset: 50,
                    type: 'info',
                });
            }
        }
        ,
    });
    
    const onChange = (event: any, selectedDate?: Date) => {
        setShow(Platform.OS === 'ios'); // En iOS, el picker permanece visible
        if (selectedDate) {
            setDate(selectedDate);
            formik.setFieldValue('payDate', selectedDate)
        }
    };
    
    const showDatePicker = () => {
        setShow(true);
    };
    
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Input
                    label={"Description"}
                    onChangeText={(text) => formik.setFieldValue('description', text)}
                    errorMessage={formik.errors.description}
                    value={formik.values.description}
                
                />
                <Input
                    label={"Date"}
                    errorMessage={formik.errors.payDate ? String(formik.errors.payDate) : undefined}
                    value={date.toLocaleDateString()}
                    rightIcon={
                        <TouchableOpacity onPress={showDatePicker}>
                            <Icon name={'calendar-range'} type={'material-community'}/>
                        </TouchableOpacity>
                    }
                />
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                    />
                )}
                <Input
                    label={"Notes"}
                    placeholder="Add a note..."
                    onChangeText={(text) => formik.setFieldValue('notes', text)}
                    errorMessage={formik.errors.notes}
                    multiline={true}
                    numberOfLines={10}
                    inputContainerStyle={styles.containerArea}
                    inputStyle={styles.textArea}
                    value={formik.values.notes}
                />
                
                
                <Button title={"Send"} onPress={() => formik.submitForm()} containerStyle={styles.buttonContainer}
                        buttonStyle={styles.btn}/>
                
                <Text>{JSON.stringify(dataReminder, null, 2)}</Text>
            </View>
        
        </KeyboardAwareScrollView>
    );
}

export default NewReminderForm;
