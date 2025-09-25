import {StatusBar, StyleSheet, ScrollView} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import {SafeAreaView} from "react-native-safe-area-context";
import {Provider as PaperProvider} from 'react-native-paper';
import {LightTheme, DarkTheme} from "./theme/AppTheme";
import {useState} from "react";

export default function App() {
    const [isThemeDark, setIsThemeDark] = useState(false);

    const toggleTheme = () => {
        isThemeDark ? setIsThemeDark(false) : setIsThemeDark(true);
    }

    const theme = isThemeDark ? DarkTheme : LightTheme;

    const styles = StyleSheet.create({
        scrollViewContentContainer: {
            flexGrow: 1,
        },
        scrollViewContainer: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        container: {
            flexDirection: 'column',
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: 20
        },
    });

    return (
        <PaperProvider theme={theme}>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle='light-content' backgroundColor={theme.colors.background}/>
                    <WeatherScreen toggleTheme={toggleTheme}/>
                </SafeAreaView>
            </ScrollView>
        </PaperProvider>
    );
}
