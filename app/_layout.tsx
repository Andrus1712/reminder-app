import {Stack} from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";
import {persistor, store} from "../features/redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Text} from "@rneui/base";

function RootLayout() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                <Stack screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="index"/>
                    <Stack.Screen name="login"/>
                    <Stack.Screen name="(tabs)"/>
                </Stack>
                <Toast/>
                </PersistGate>
            </Provider>
        </>)
}

export default RootLayout;
