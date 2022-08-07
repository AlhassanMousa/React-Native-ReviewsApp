import React from 'react'
import Header from '../shared/header'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'


const Stack = createStackNavigator();
export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerTintColor: '#333',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={({ navigation }) => {
                    return ({
                        header: () =>
                            <Header navigation={navigation} title="About Hotels Reviews" />
                    })
                }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}



