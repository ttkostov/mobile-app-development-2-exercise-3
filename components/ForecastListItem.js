import {useTheme} from "react-native-paper";
import {StyleSheet, Text, View} from 'react-native';
import {getWeatherEmoji} from "../utils/weatherCodeMap";


export default function ForecastListItem({forecastDataItem}) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            marginVertical: 10,
            backgroundColor: theme.colors.inverseOnSurface,
            borderRadius: 20,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            width: "100%"
        },
        forecastContainer: {
            flexDirection: 'row',
            gap: 30,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',

        },
        weatherCondition: {
            fontSize: 45,
        },
        weatherDetailsContainer: {
            gap: 10,
        },
        temperatureContainer: {
            gap: 20,
            flexDirection: 'row',
        },
        day: {
            fontWeight: "bold"
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.day}>{forecastDataItem.day}</Text>
            <View style={styles.forecastContainer}>
                <Text style={styles.weatherCondition}>{getWeatherEmoji(forecastDataItem.code)}</Text>
                <View style={styles.weatherDetailsContainer}>
                    <View style={styles.temperatureContainer}>
                        <Text>↓{forecastDataItem.temperatureMinC} °C</Text>
                        <Text>↑{forecastDataItem.temperatureMaxC} °C</Text>
                    </View>
                    <Text>💨 {forecastDataItem.windKmh} km/h</Text>
                    <Text>☂️ {forecastDataItem.precipitationProbability}%</Text>
                </View>
            </View>
        </View>

    )

}


