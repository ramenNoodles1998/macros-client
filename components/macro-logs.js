import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MacroText from './macro-components/macro-text';
import { editFoodLogAsync, getFoodLogsAsync, selectFoodLogs, deleteFoodLogAsync } from '../feature/macro-slice';

const MacroLogs = () => {
  const foodLogs = useSelector(selectFoodLogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodLogsAsync('123'));
  }, []);

  const deleteFoodLog = (log) => {
    dispatch(deleteFoodLogAsync(log));
  }

  const editFoodLog = (log) => {
    dispatch(editFoodLogAsync(log));
  }

  return (
    <View className='p-3 mx-3 shadow-2xl rounded-b bg-teal-800'>
      <MacroText className='text-lg'>Macro Logs</MacroText>
      <FlatList
        data={foodLogs}
        renderItem={({ item }) => (
          <View>
            <MacroText>date</MacroText>
            <MacroText>{item.date}</MacroText>
            <MacroText>protein</MacroText>
            <MacroText>{item.protein}</MacroText>
            <MacroText>carbs</MacroText>
            <MacroText>{item.carbs}</MacroText>
            <MacroText>fat</MacroText>
            <MacroText>{item.fat}</MacroText>
            <Pressable onPress={() => deleteFoodLog(item)}>
              <MacroText>Delete</MacroText>
            </Pressable>
            <Pressable onPress={() => editFoodLog(item)}>
              <MacroText>Edit</MacroText>
            </Pressable>
          </View>
        )}
        keyExtractor={(fl) => fl.id + fl.date}
      ></FlatList>
    </View>
  );
};

export default MacroLogs;
