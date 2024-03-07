import React from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { output } from '../../src/output';
import MacrosText from '../macros-text/macros-text';

const MacroTotals = () => (
  <View className="px-3 pb-3 mx-3 bg-teal-800 rounded">
    <View className="flex flex-row py-1">
      <MacrosText className="p-1 text-lg">Protein</MacrosText>
      <MacrosText className="p-1 text-lg">30g</MacrosText>
    </View>
    <Progress.Bar progress={0.3} width={300} color="rgba(19, 78, 74, 1)" height={15}/>
    <View className="flex flex-row py-1">
      <MacrosText className="p-1 text-lg">Carbs</MacrosText>
      <MacrosText className="p-1 text-lg">30g</MacrosText>
    </View>
    <Progress.Bar progress={0.3} width={300} color="rgba(19, 78, 74, 1)"height={15}/>
    <View className="flex flex-row py-1">
      <MacrosText className="p-1 text-lg">Fat</MacrosText>
      <MacrosText className="p-1 text-lg">30g</MacrosText>
    </View>
    <Progress.Bar progress={0.3} width={300} color="rgba(19, 78, 74, 1)" height={15}/>
  </View>
);

export default MacroTotals;
