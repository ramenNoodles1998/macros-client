import React, { useEffect } from 'react';
import MacroText from './macro-components/macro-text';
import {
  selectFoodItems,
  getFoodItemsAsync,
  deleteFoodItemAsync,
  saveDailyMacroTotalAsync,
  selectDailyMacroTotals,
} from '../feature/macro-slice';
import { View, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
const FoodItemTable = () => {
  const foodItems = useSelector(selectFoodItems);
  const macroTotals = useSelector(selectDailyMacroTotals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodItemsAsync('123'));
  }, []);

  const deleteFoodItem = (item) => {
    dispatch(deleteFoodItemAsync(item));
  };

  const addFoodItem = async (item) => {
    await dispatch(
      saveDailyMacroTotalAsync({
        ...macroTotals,
        protein: macroTotals.protein + item.protein,
        carbs: macroTotals.carbs + item.carbs,
        fat: macroTotals.fat + item.fat,
      })
    );
  };
  return (
    <View>
      <View className='grid grid-flow-row grid-cols-12'>
        <View className='col-span-3'>
          <MacroText>Name</MacroText>
        </View>
        <View className='col-span-2'>
          <MacroText>Protein</MacroText>
        </View>
        <View className='col-span-2'>
          <MacroText>Carbs</MacroText>
        </View>
        <View className='col-span-2'>
          <MacroText>Fat</MacroText>
        </View>
        <View className='col-span-3'>
          <MacroText>Actions</MacroText>
        </View>
      </View>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => (
          <View className='grid grid-flow-row grid-cols-12'>
            <MacroText className='col-span-3'>{item.name}</MacroText>
            <MacroText className='col-span-2'>{item.protein}</MacroText>
            <MacroText className='col-span-2'>{item.carbs}</MacroText>
            <MacroText className='col-span-2'>{item.fat}</MacroText>
            <View className='col-span-3'>
                <Pressable onPress={() => deleteFoodItem(item)}>
                    <MacroText className='p-2 bg-teal-900 rounded'>Delete</MacroText>
                </Pressable>
                <Pressable onPress={() => addFoodItem(item)}>
                    <MacroText className='p-2 bg-teal-900 rounded'>Add</MacroText>
                </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(fi) => fi.name}
      />
    </View>
  );
};

export default FoodItemTable;
