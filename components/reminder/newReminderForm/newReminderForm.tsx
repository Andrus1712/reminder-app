import React from 'react';
import {View} from "react-native";
import {styles} from "./newReminderForm.styles";
import {Input} from "@rneui/base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

function NewReminderForm() {
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
