import React from 'react'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRoute={HomeStack}>
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutStack}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

//container surround draw navigator