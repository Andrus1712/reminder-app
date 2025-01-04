import React from 'react';
import {Stack} from "expo-router";

function ReminderLayout() {
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen
                name="new"
                options={{
                    presentation: 'modal',
                    animation: "ios",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#fff',
                    }
                }}
            />
        </Stack>
    );
}

export default ReminderLayout;
