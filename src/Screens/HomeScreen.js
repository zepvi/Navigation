import React from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const HomeScreen = (props) => {
        return (
            <View style={styles.container}>
                 <Text>Home Screen</Text>
                 {/* <TouchableOpacity
                    style={styles.openToggle} 
                    onPress={() => props.navigation.openDrawer()}>
                     <Text>Open Toggler</Text>
                 </TouchableOpacity> */}
                 <TouchableOpacity 
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Profile')}
                >
                        <Text style={{color: 'white'}}>Go to Profile</Text>
                 </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    button: {
        backgroundColor: '#0092ede0',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        marginTop: 20,
        elevation: 2

    },

    openToggle: {
        marginVertical: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        elevation: 2
    }
});

export default HomeScreen;