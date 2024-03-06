import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { output } from '../../src/output';
import { Text, View } from 'react-native';

const submit = async (values) => {};
const AddMacros = (props) => (
  <View>
    <Text> Macro Totals</Text>
  </View>
);
export default AddMacros;


  // <Formik
  //   initialValues={{ protein: '' }}
  //   onSubmit={async (values) => await submit(values)}
  // >
  //   {({ handleChange, handleBlur, handleSubmit, values }) => (
  //     <View>
  //       <TextInput
  //         className="bg-teal-500" 
  //         onChangeText={handleChange('protein')}
  //         onBlur={handleBlur('protein')}
  //         value={values.protein}
  //       />
  //       <Button onPress={handleSubmit} title="Submit" />
  //     </View>
  //   )}
  // </Formik>
