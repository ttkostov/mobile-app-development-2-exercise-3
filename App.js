import {StatusBar, StyleSheet, ScrollView} from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import {SafeAreaView} from "react-native-safe-area-context";
import {Provider as PaperProvider} from 'react-native-paper';
import {LightTheme, DarkTheme} from "./theme/AppTheme";
import {useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
                                    <WeatherScreen {...props} toggleTheme={toggleTheme}/>
                                )}
                                options={{headerShown: false}}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                    <StatusBar barStyle='light-content' backgroundColor={theme.colors.background}/>
        </PaperProvider>
    );
}
