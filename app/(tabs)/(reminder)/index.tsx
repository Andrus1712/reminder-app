import React, {useEffect} from 'react';
import {ScrollView, View} from "react-native";
import {Card, Icon, Text} from "@rneui/base";
import {router, useNavigation} from "expo-router";
import {styles} from "../../../styles";

function CustomHeader() {
    return (
        <>
            <View style={{
                height: 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: 20
            }}>
                <View style={{flex: 2, padding: 10}}>
                    <Text>Reminders</Text>
                </View>
                <View
                    style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end', gap: 10, padding: 10}}>
                    <Icon name={"plus"} type={"material-community"} onPress={() => router.push("new")}/>
                </View>
            </View>
        </>
    );
}

function IndexReminder() {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            header: () => <CustomHeader/>,
        })
    }, []);
    
    return (
        <>
            <ScrollView style={{marginBottom: 10}}>
                <Text style={styles.header} h3={true}>List reminders</Text>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"check"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
            </ScrollView>
        
        </>
    );
}

export default IndexReminder;
