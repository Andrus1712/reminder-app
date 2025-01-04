import {Stack} from "expo-router";
import Toast from "react-native-toast-message";

function RootLayout() {
    return (
        <>
            <Stack screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="login"/>
                <Stack.Screen name="(tabs)"/>
            </Stack>
            <Toast/>
        </>)
}

export default RootLayout;
