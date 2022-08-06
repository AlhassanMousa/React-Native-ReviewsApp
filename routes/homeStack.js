import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const Stack = createStackNavigator();  //function that used to create a new StackNavigator 
export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: '#444',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >


            <Stack.Screen  
                name="Home"
                component={Home}
                options={({ navigation }) => {
                    return ({ header: () => <Header navigation={navigation} /> })
                }}
            >
            </Stack.Screen>

            
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: "Review Details" }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}




//stack.Screen every screen automatically get navigation property on props assigned to it