import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'
import * as yup from 'yup'   

export default function ReviewForm({ addReview }) {

    const reviewSchema = yup.object(
        {
            title: yup
                .string()
                .required()
                .min(5),
            body: yup
                .string()
                .min(5)
                .required(),
            rating: yup
                .string()
                .required()
                .test('is num 1-5', 'Rating must be a number between 1 - 5',  
                    (val) => {
                        return parseInt(val) < 6 && parseInt(val) > 0
                    })
        }
    )
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}

                onSubmit={(values,actions) => {
                    addReview(values)

                    actions.resetForm();
                }}
                validationSchema={reviewSchema}  
            >
              
   
                {(props) => (         
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange('title')} 
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.error}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            minHeight={80}
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.error}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating 1-5"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.error}>{props.touched.rating && props.errors.rating}</Text>
                        {/* <Button title="Submit" onPress={props.handleSubmit} /> */}
                        <FlatButton text="submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
