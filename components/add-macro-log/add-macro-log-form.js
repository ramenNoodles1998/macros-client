import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { output } from '../../src/output';
import { Button, TextInput, View } from 'react-native';

const submit = async (values) => {};
const AddMacroLogForm = (props) => (
  <Formik
    initialValues={{ protein: '' }}
    onSubmit={async (values) => await submit(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          className="bg-teal-500" 
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
