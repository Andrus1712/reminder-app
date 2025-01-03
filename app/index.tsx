import React from 'react';
import {Text, View} from "react-native";
import {router} from "expo-router";
import {Button} from "@rneui/base";
import {styles} from "../styles";

function Index() {
    
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.buttonGroup}>
                <Button type={"clear"} title="Login" onPress={() => router.push("/login")}></Button>
                <Button type={"clear"} title="Go to app" onPress={() => router.push("/(tabs)")}></Button>
            </View>
        </View>
    );
}

export default Index;
