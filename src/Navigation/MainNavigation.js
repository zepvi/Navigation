import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import CustomDrawerContent from '../Components/CustomDrawerContent';

// Screens Import
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DashboardScreen from '../Screens/Tab/DashboardScreen';
import ListScreen from '../Screens/Tab/ListScreen';
import SettignsScreen from '../Screens/Tab/SettignsScreen';



const styles = {
    headerStyle: {
    backgroundColor: '#0092ede0',
  },
  headerTintColor: '#fff'
}

const Stack = createStackNavigator();

const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                  name='Home' 
                  component={HomeScreen} 
                  options={{
                      headerLeft: () => (
                        <Material 
                            name='menu' 
                            size={22} 
                            color='white'
                            style={{marginLeft: 20}} 
                            onPress={() => props.navigation.openDrawer()}
                        />
                      ),
                      ...styles
                  }}
                />
                <Stack.Screen   
                 name='Profile' 
                 component={ProfileScreen} 
                 options={styles}
                />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Settings') {
                    iconName = 'setting';
                } else {
                    iconName = 'bars';
                }
    
                // You can return any component that you like here!
                return  <AntIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
                <Tab.Screen name='Home' component={StackNavigation}  />
                <Tab.Screen name='List' component={ListScreen} />
                <Tab.Screen name='Settings' component={SettignsScreen} />
        </Tab.Navigator>
    )
}


const Drawer = createDrawerNavigator();

const MainNavigation = () => {
    return (
       <Drawer.Navigator 
        drawerContent={props => CustomDrawerContent(props)} 
        drawerContentOptions={{
            activeTintColor: '#0092ede0', 
            activeBackgroundColor: '#ffff',
            inactiveTintColor: 'gray'
        }}
       >
           <Drawer.Screen name='Home' component={TabNavigation} />
           <Drawer.Screen name='Dashboard' component={DashboardScreen} />
       </Drawer.Navigator>
    )
}


export default MainNavigation;