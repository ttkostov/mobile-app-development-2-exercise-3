import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PrimaryButton from "./PrimaryButton";
import {useState} from "react";
import CityInput from "./CityInput";
import {useTheme} from "react-native-paper";

export default function CityPanel({onRefresh}) {
    const [city, setCity] = useState('');
    const clearInput = () => {
        setCity('');
    };

    const theme = useTheme();

    const styles = StyleSheet.create({
        panelContainer: {
            flex: 1,
            borderRadius: 20,
            backgroundColor: theme.colors.surface,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexGrow: 0,
            paddingVertical: 30,
            gap: 30
        },

    });

    return (
        <View style={styles.panelContainer}>
            <CityInput value={city} onChangeText={setCity} onClear={clearInput}/>
            <PrimaryButton
                text='Update Forecast'
                icon='refresh'
                onPress={onRefresh}/>
        </View>
    );
}


