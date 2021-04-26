import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

const SettignsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settigns Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SettignsScreen;