import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {LightTheme, DarkTheme} from "./theme/AppTheme";
import {useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import ForecastScreen from "./screens/ForecastScreen";
import CurrentWeatherScreen from "./screens/CurrentWeatherScreen";
import { MOCK_WEATHER_WITH_FORECAST} from "./utils/mockWeather";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
    const [isThemeDark, setIsThemeDark] = useState(false);

    const toggleTheme = () => {
        isThemeDark ? setIsThemeDark(false) : setIsThemeDark(true);
    }

    const theme = isThemeDark ? DarkTheme : LightTheme;

    return (
        <PaperProvider theme={theme}>

            <NavigationContainer>
                <Stack.Navigator id='main-navigator'>
                    <Stack.Screen
                        name="Home"
                        children={(props) => (
                            <CurrentWeatherScreen {...props} toggleTheme={toggleTheme}/>
                        )}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Forecast"
                        component={ForecastScreen}
                        initialParams={{weatherForecastData: MOCK_WEATHER_WITH_FORECAST[0]}}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor={theme.colors.background}/>
        </PaperProvider>
    );
}
