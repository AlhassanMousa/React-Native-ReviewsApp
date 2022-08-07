import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import ReviewForm from './reviewForm';

export default function Home({ navigation, route }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Sheraton', rating: 2, body: 'lorem ipsum', key: '1' },
        { title: 'Loreno', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Merta', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'Stella', rating: 4, body: 'lorem ipsum', key: '4' },
        { title: 'Triumph', rating: 4, body: 'lorem ipsum', key: '5' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString(); // not best way but for simplisty
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false);  //hide modal after add review
    }
    const deleteReview = (id) => {
        setReviews(() => {
            return reviews.filter((item) => item.key !== id);
        })
    }

    useEffect(() => {
        // Checks if route.params? has the parameter of reviewToDelete; if that's true, then proceed to get the title & the key of the review to delete it.
        if (route.params?.reviewToDelete) {
            // Get the destructured values from the variables inside reviewToDelete Object.
            const { key: id, title } = route.params.reviewToDelete;
            // Invoke deleteReview function & pass the id as an argument.
            deleteReview(id)
            Alert.alert('Information', `Review deleted succesfully:\n${title}`, [{ title: 'ok' }])
        }
        // Re-runs useEffect if route.params has changed.
    }, [route.params])

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                    <SafeAreaView style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size='28'
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => (setModalOpen(false))}
                        />
                        <ReviewForm addReview={addReview} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name="add"
                size={ICON_SIZE}
                style={styles.modalToggle}
                onPress={() => (setModalOpen(true))}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => ( 
                  
                    <TouchableOpacity onPress={() => (navigation.navigate('ReviewDetails', item))}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text> 
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1, //to take full width
    },
 
    modalToggle: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    modalClose: {
        marginTop: 50,
        marginBottom: 20,
    }
})



//  renderItem={({ item }) => (  //access to item by destructured here
   //send data when we are navigating to another screen we use a second argument "object" this object should have different key value pairs in it 
 //  <TouchableOpacity onPress={() => (navigation.navigate('ReviewDetails', item))}>  {/*so we can press on each item */} {/*navigation take data or object as second parameter so we can access it */}



 // ...styles.modalToggle, ...styles.modalClose   destructuring all styles properties 
