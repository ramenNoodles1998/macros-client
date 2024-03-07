import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { output } from '../../src/output';
import { Text, View } from 'react-native';
import MacrosText from '../macros-text/macros-text';

const submit = async (values) => {};
const AddMacros = (props) => (
  <View className="p-3 mx-3 shadow-2xl rounded-b rounded-tr bg-teal-800">
      <MacrosText>Add Macro</MacrosText>
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
