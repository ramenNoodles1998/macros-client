import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { Button, TextInput, View } from 'react-native';

const submit = async (values) => {
  // await axios.post('http://localhost:3030/api/add-macro-log', {
  //   protein: Number(values.protein),
  //   carbs: 0,
  //   fat: 0,
  // });
  var x = await axios.get('http://localhost:3030/api/get-macro-log-by-id?id=2024-02-29 16:36:03.6702179 -0700 MST m=+10.632405301')
  // var x = await axios.get('http://localhost:3030/api/get-macro-log')
  console.log(x)
  // await axios.post('http://localhost:3030/api/delete-macro-log', {
  //   id: '123123',
  //   date: '2024-02-29 16:35:55.5119431 -0700 MST m=+2.474130501',
  //   protein: Number(values.protein),
  //   carbs: 0,
  //   fat: 0,
  // });
};
const AddMacroLogForm = (props) => (
  <Formik
    initialValues={{ protein: '' }}
    onSubmit={async (values) => await submit(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('protein')}
          onBlur={handleBlur('protein')}
          value={values.protein}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);
export default AddMacroLogForm;
