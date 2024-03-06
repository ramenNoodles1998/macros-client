import React from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { output } from '../../src/output';
import MacrosText from '../macros-text/macros-text';

const MacroTotals = () => (
  <View className="p-3">
    <View className="py-1">
      <MacrosText className="py-1">Protein</MacrosText>
      <MacrosText>30g</MacrosText>
      <Progress.Bar progress={0.3} width={200} color="rgba(28, 63, 128, 1)" />
    </View>
    <View className="py-1">
      <MacrosText className="py-1">Carbs</MacrosText>
      <MacrosText>30g</MacrosText>
      <Progress.Bar progress={0.3} width={200} color="rgba(82, 23, 11, 1)" />
    </View>
    <View className="py-1">
      <MacrosText className="py-1">Fat</MacrosText>
      <MacrosText>30g</MacrosText>
      <Progress.Bar progress={0.3} width={200} color="rgba(52, 11, 82, 1)" />
    </View>
  </View>
);

export default MacroTotals;
