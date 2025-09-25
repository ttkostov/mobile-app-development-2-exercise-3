import {Dialog, Portal} from "react-native-paper";
import PrimaryButton from "./PrimaryButton";
import {Text} from "react-native";

export default function AboutDialog({visible, onDismiss}) {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>About the App</Dialog.Title>
                <Dialog.Content>
                    <Text>This is a weather app created for the course Mobile App Development 2 at TAMK</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <PrimaryButton text='Done' onPress={onDismiss}/>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};