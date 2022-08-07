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
        review.key = Math.random().toString(); 
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false);  
    }
    const deleteReview = (id) => {
        setReviews(() => {
            return reviews.filter((item) => item.key !== id);
        })
    }

    useEffect(() => {
        if (route.params?.reviewToDelete) {
            const { key: id, title } = route.params.reviewToDelete;
            deleteReview(id)
            Alert.alert('Information', `Review deleted succesfully:\n${title}`, [{ title: 'ok' }])
        }
   
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
        flex: 1, 
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




