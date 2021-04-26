import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

 const ProfileScreen = (props) => {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Home')}
                >
                        <Text style={{color: 'white'}}>Home</Text>
                 </TouchableOpacity>
            </View>
        );
 };

 const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    button: {
        backgroundColor: '#0a00b2c2',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        marginTop: 20
    }
});

 export default ProfileScreen;
