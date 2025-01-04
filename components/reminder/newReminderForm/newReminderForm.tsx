import React, {useEffect} from 'react';
import {View} from "react-native";
import {styles} from "./newReminderForm.styles";
import {Input} from "@rneui/base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "./NewReminderFrom.data";
import Toast from "react-native-toast-message";

function NewReminderForm() {
    useEffect(() => {
        Toast.show({
            position: "bottom",
            text1: 'Hello',
            text2: 'This is some something ?',
            bottomOffset: 50,
            type: 'info',
        })
    }, []);
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema,
        onSubmit: (values) => {
            try {
            
            } catch (e) {
                console.error(e);
            }
        }
    })
    
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
                <Input
                    label={"Event description"}
                    onChangeText={() => []}
                    errorMessage={''}
                />
            </View>
        </KeyboardAwareScrollView>
    );
}

export default NewReminderForm;
