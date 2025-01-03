import React, {useEffect, useState} from 'react';
import {ScrollView, View} from "react-native";
import {Card, Icon, Input, Text} from "@rneui/base";
import {styles} from "../../styles";
import {router, useNavigation} from "expo-router";

function CustomHeader() {
    const [showSearch, setShowSearch] = useState(false)
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
                    <Text>Oct 11, 2024</Text>
                </View>
                <View
                    style={{flex: 1, flexDirection: "row", justifyContent: 'flex-end', gap: 10, padding: 10}}>
                    <Icon name={"search"} type={"material"} onPress={() => setShowSearch(prevState => !prevState)}/>
                    <Icon name={"login"} type={"material"} onPress={() => router.push("login")}/>
                </View>
            </View>
            {showSearch && <Input containerStyle={{paddingHorizontal: 30}}/>}
        </>
    );
}


function Index() {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            header: () => <CustomHeader/>,
        })
    }, []);
    
    return (
        <>
            <ScrollView style={{marginBottom: 10}}>
                <Text style={styles.header} h3={true}>Today</Text>
                <View style={styles.statistics}>
                    <View style={styles.row}>
                        <Card containerStyle={styles.cardInfo}>
                            <Card.Title>Pending 10</Card.Title>
                        </Card>
                        <Card containerStyle={styles.cardInfo}>
                            <Card.Title>Completed 10</Card.Title>
                        </Card>
                    </View>
                    <View style={styles.row}>
                        <Card containerStyle={styles.cardInfo}>
                            <Card.Title>On Going 10</Card.Title>
                        </Card>
                        <Card containerStyle={styles.cardInfo}>
                            <Card.Title>Cancel 10</Card.Title>
                        </Card>
                    </View>
                </View>
                <Text style={styles.header} h3={true}>Next payments</Text>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"check"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"checkbox-blank-outline"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"home"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"home"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"home"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"home"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardCustom}>
                    <View style={styles.cardReminders}>
                        <View style={styles.cardReminders}>
                            <Icon name={"home"} type={"material-community"}/>
                            <Text>{"Pago mes de afinia"}</Text>
                        </View>
                        <Text>{"11/11/2024"}</Text>
                    </View>
                </Card>
            </ScrollView>
        </>
    );
}

export default Index;
