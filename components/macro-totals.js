import React from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { output } from '../src/output';
import { selectCarbs, selectFat, selectProtein } from '../feature/macro-slice';
import { useSelector } from 'react-redux';
import MacroText from './macro-components/macro-text';

const MacroTotals = () => {
  const protein = useSelector(selectProtein);
  const carbs = useSelector(selectCarbs);
  const fat = useSelector(selectFat);

  return (
    <View className='px-3 pb-3 mx-3 shadow-2xl bg-teal-800 rounded'>
      <View className='flex flex-row py-1'>
        <MacroText className='p-1 text-lg'>Protein</MacroText>
        <MacroText className='p-1 text-lg'>{protein}g</MacroText>
      </View>
      <Progress.Bar
        progress={0.3}
        width={300}
        color='rgba(19, 78, 74, 1)'
        height={15}
      />
      <View className='flex flex-row py-1'>
        <MacroText className='p-1 text-lg'>Carbs</MacroText>
        <MacroText className='p-1 text-lg'>{carbs}g</MacroText>
      </View>
      <Progress.Bar
        progress={0.3}
        width={300}
        color='rgba(19, 78, 74, 1)'
        height={15}
      />
      <View className='flex flex-row py-1'>
        <MacroText className='p-1 text-lg'>Fat</MacroText>
        <MacroText className='p-1 text-lg'>{fat}g</MacroText>
      </View>
      <Progress.Bar
        progress={0.3}
        width={300}
        color='rgba(19, 78, 74, 1)'
        height={15}
      />
    </View>
  );
};

export default MacroTotals;
