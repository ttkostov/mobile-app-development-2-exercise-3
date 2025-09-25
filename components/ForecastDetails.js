import {FlatList, StyleSheet, View, Text} from "react-native";
import ForecastListItem from "./ForecastListItem";

export default function ForecastDetails({forecastData}) {
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>{forecastData.city}</Text>
            <FlatList
                scrollEnabled={false}
                data={forecastData.forecast}
                renderItem={({item}) => <ForecastListItem forecastDataItem={item}/>}
                keyExtractor={item => item.id}
                sepa/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityText: {
        paddingVertical: 15,
        fontSize: 30,
        fontWeight: 'bold'
    }
});