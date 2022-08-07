import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Card from '../shared/card';
import { globalStyles, ratingImages } from '../styles/global'
import FlatButton from '../shared/button'

export default function ReviewDetails({ navigation, route, }) {
    const { title, body, rating, key } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.paragraph}>{body}</Text>
                <View style={styles.rating}>
                    <Text>Reviews rating:</Text>
                    <Image source={ ratingImages[rating]} />
                </View>
            </Card>
            <FlatButton text="Delete Review" onPress={() => navigation.navigate('Home', { reviewToDelete: { key, title } })} />
        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 16,
        paddingTop: 16,
        justifyContent: 'center',
        flexDirection: 'row-reverse'
    }
})


