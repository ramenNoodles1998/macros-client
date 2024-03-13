import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MacroText from './macro-components/macro-text';
import { getFoodLogsAsync, selectFoodLogs } from '../feature/macro-slice';

const MacroLogs = () => {
  const foodLogs = useSelector(selectFoodLogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodLogsAsync('123'));
  }, []);

  return (
    <View className='p-3 mx-3 shadow-2xl rounded-b bg-teal-800'>
      <MacroText className='text-lg'>Macro Logs</MacroText>
      <FlatList
        data={foodLogs}
        renderItem={({ item }) => <MacroText>{item.protein}</MacroText>}
        keyExtractor={(fl) => fl.id + fl.date}
      ></FlatList>
    </View>
  );
};

export default MacroLogs;
