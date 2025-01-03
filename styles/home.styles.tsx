import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 10
    },
    cardReminders: {
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        height: "100%"
    },
    cardCustom: {
        borderRadius: 10,
        height: 60
    },
    cardCustom2: {
        height: 200
    },
    statistics: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardInfo: {
        borderRadius: 10,
        height: 100,
        backgroundColor: 'gray',
        flex: 1
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})
