import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import MacroModal from './macro-components/macro-modal'
import MacroText from './macro-components/macro-text';
import {incrementProteinByAmount,  selectProtein} from '../feature/macro-slice'
import { output } from '../src/output';

const AddMacros = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('')
  const openModal = (value) => {
    setModalType(value);
    setModalVisible(true);
  };

  return (
    <View className="flex flex-row justify-center p-3 mx-3 shadow-2xl rounded-b rounded-tr bg-teal-800">
      <MacroModal modalType={modalType} setModalVisible={setModalVisible} modalVisible={modalVisible}></MacroModal>
      <Pressable className="p-2 bg-teal-900 rounded" onPress={() => openModal('protein')}>
        <MacroText>Quick Add Protein</MacroText>
      </Pressable>
      <Pressable className="p-2 mx-1 bg-teal-900 rounded" onPress={() => openModal('carbs')}>
        <MacroText>Quick Add Carbs</MacroText>
      </Pressable>
      <Pressable className="p-2 bg-teal-900 rounded" onPress={() => openModal('fat')}>
        <MacroText>Quick Add Fat</MacroText>
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
