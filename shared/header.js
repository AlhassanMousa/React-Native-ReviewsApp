import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title = "Hotels Reviews App" }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.safeArea}>
            <ImageBackground source={require('../assets/wp7837608.jpg')} style={styles.header}>
                <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'transparent',
        width: '100%',
    },
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 24,
         top:42
       
       
    },
    headerTitle: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImage: {
        width: 18,
        height: 18,
        marginHorizontal: 8,
    }
})

