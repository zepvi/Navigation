import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {
    return (
        <View>
            <View style={styles.drawerHeader}>
                <Image 
                    source={{uri: 'https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg'}}
                    style={styles.profilePic}
                />
                <View>
                <Text style={styles.userName}>Mark Leo</Text>
                <Text style={styles.userDetailes}>markleo@gmail.com</Text>
                <Text style={styles.userDetailes}>+9191919191</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 150
    },
    drawerHeader: {
        flexDirection: 'row',
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 20
    },
    userName: {
        marginLeft: 20,
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1
    },
    userDetailes: {
        color: '#bec3c9',
        fontSize: 13,
        marginLeft: 20,
        marginBottom: 4
    }
});

export default CustomDrawerContent;