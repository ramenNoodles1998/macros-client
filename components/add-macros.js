import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import MacroModal from './macro-components/macro-modal'
import MacroText from './macro-components/macro-text';
import {incrementProteinByAmount,  selectProtein} from '../feature/macro-slice'
import { output } from '../src/output';

const AddMacros = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="p-3 mx-3 shadow-2xl rounded-b rounded-tr bg-teal-800">
      <MacroModal setModalVisible={setModalVisible} modalVisible={modalVisible}></MacroModal>
      <Pressable onPress={() => setModalVisible(true)}>
        <MacroText>Add Protein</MacroText>
      </Pressable>
    </View>
  );
}
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
