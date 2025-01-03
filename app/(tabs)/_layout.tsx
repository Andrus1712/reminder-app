import {Tabs} from "expo-router";
import {Icon} from "@rneui/base";

function HomeLayout() {
    return <Tabs
        screenOptions={{
            headerShown: true
        }}
    >
        <Tabs.Screen name="index" options={{
            title: 'Home',
            tabBarIcon: () => <Icon name="home"/>,
        }}/>
        <Tabs.Screen name="(reminder)" options={{
            title: 'Reminders',
            tabBarIcon: () => <Icon name="calendar-clock" type={"material-community"} />,
            headerShown: false,
        }}/>
    </Tabs>;
}

export default HomeLayout;


