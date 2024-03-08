import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import MacroModal from './modals/macro-modal'
import MacroText from './macro-components/macro-text';
import {incrementProteinByAmount,  selectProtein} from '../feature/macro-slice'
import { output } from '../src/output';
import FoodItemModal from './modals/food-item-modal';

const AddMacros = (props) => {
  const [macroModalVisible, setMacroModalVisible] = useState(false);
  const [foodItemModalVisible, setFoodItemModalVisible] = useState(false);
  const [modalType, setModalType] = useState('')
  const openModal = (value) => {
    setModalType(value);
    setMacroModalVisible(true);
  };

  return (
    <View className="p-3 mx-3 shadow-2xl rounded-b rounded-tr bg-teal-800">
      <MacroModal modalType={modalType} setModalVisible={setMacroModalVisible} modalVisible={macroModalVisible}></MacroModal>
      <FoodItemModal modalType={modalType} setModalVisible={setFoodItemModalVisible} modalVisible={foodItemModalVisible}></FoodItemModal>
      <View className="flex flex-row justify-center">
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
      <View className="flex flex-row justify-center m-3">
        <Pressable className="p-2 bg-teal-900 rounded" onPress={() => setFoodItemModalVisible(true)}>
          <MacroText>Add New Food</MacroText>
        </Pressable>
      </View>
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
