import {View, StyleSheet, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import Header from '../components/Header.js';
import CustomFAB from '../components/CustomFAB';
import {Platform} from "react-native";
import AboutDialog from "../components/AboutDialog";
import {useState} from "react";
import CustomSnackbar from "../components/CustomSnackbar";
import CityPanel from "../components/CityPanel";
import WeatherDetails from "../components/WeatherDetails";
import {useTheme} from "react-native-paper";

export default function WeatherScreen({toggleTheme}) {
    const theme = useTheme();

    const [aboutDialogVisible, setAboutDialogVisible] = useState(false);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');

    const showDialog = () => setAboutDialogVisible(true);
    const hideDialog = () => setAboutDialogVisible(false);

    const onToggleSnackbar = () => setSnackBarVisible(true);
    const onDismissSnackbar = () => setSnackBarVisible(false);

    const handleLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    const clearCityInput = () => {
        setCity('');
    };
    return (
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header toggleTheme={toggleTheme} showAboutDialog={showDialog}/>
            <View style={styles.weatherContainer}>
                <CityPanel cityValue={city}
                           onRefresh={handleLoading}
                           onClearCityInput={clearCityInput}
                           onChangeCity={setCity}
                           onToggleSnackbar={hideDialog}/>
                <View style={styles.weatherDetailsContainer}>
                    {
                        loading
                            ? <ActivityIndicator size="large" color={theme.colors.primary}/>
                            : <WeatherDetails/>
                    }

                </View>

            </View>
            <AboutDialog onDismiss={hideDialog} visible={aboutDialogVisible}/>
            <CustomFAB onPress={onToggleSnackbar}/>
            <CustomSnackbar visible={snackBarVisible} onDismiss={onDismissSnackbar}/>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        gap: 20
    },
    weatherContainer: {
        gap: 20,
        flex: 3,
    },
    weatherDetailsContainer: {
        flex: 3
    }
});