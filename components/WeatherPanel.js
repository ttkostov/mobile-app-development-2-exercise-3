import {View, StyleSheet} from 'react-native';
import WeatherDetails from "./WeatherDetails";
import {useTheme} from "react-native-paper";

export default function WeatherPanel({forecastData}) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        panelContainer: {
            flex: 1,
            borderRadius: 20,
            backgroundColor: theme.colors.surface,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: 20,
            padding: 10
        },

    });

    return (
        <View style={styles.panelContainer}>
            <WeatherDetails forecastData={forecastData}/>
        </View>
    );
}


