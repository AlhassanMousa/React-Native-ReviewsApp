import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/button'
import * as yup from 'yup'   //help create validationSchema

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
                .test('is num 1-5', 'Rating must be a number between 1 - 5',  //test allow us to create a function , take three parameters : name, string or feedback message, function
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
                // To reset the form you need to pass an argument of actions.
                // (values, actions)
                onSubmit={(values,actions) => {
                    addReview(values)
                    //Then you call actions with the resetForm function.
                    actions.resetForm();
                }}
                validationSchema={reviewSchema}  //when validation failed yup provides formik with some error messages and it attaches those to the props inside render function 
            >
              
   
                {(props) => (           //props provided by formik itself, and we can access to some props provided by formik , props like functions that handling change of form fields, access to current value and submittion handling
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={props.handleChange('title')} //handle the state and update the value text below
                            value={props.values.title}
                            // onBlur gets called when you leave the input, we take advantage of this functionality for displaying the error msg when the user leaves the input & there's an error.
                            onBlur={props.handleBlur('title')}
                        />
                        {/* props.touched.title && displays the error message only when you have touched the component & there is an error, instead of just showing the error right away. (Logical AND operator) */}
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