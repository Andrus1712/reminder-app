import React, {useState} from 'react';
import {Platform, TouchableOpacity, View} from "react-native";
import {styles} from "./newReminderForm.styles";
import {Button, Icon, Input} from "@rneui/base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "./NewReminderFrom.data";
import DateTimePicker from '@react-native-community/datetimepicker';

function NewReminderForm() {
    const [date, setDate] = useState(new Date());
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
        initialValues: initialValues(),
        validationSchema,
        validateOnChange: true,
        onSubmit: (values) => {
            try {
                const {
                    description,
                    notes,
                    payDate
                } = values;
                
                console.log(description, notes, payDate);
                
            } catch (e) {
                console.error(e);
            }
        },
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
                />
                
                
                <Button title={"Send"} onPress={() => formik.submitForm()} containerStyle={styles.buttonContainer}
                        buttonStyle={styles.btn}/>
            </View>
        
        </KeyboardAwareScrollView>
    );
}

export default NewReminderForm;
