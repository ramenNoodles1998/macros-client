import { View, Text } from 'react-native';
import { output } from './src/output';
import MacrosText from './components/macros-text/macros-text';
import MacroLogs from './components/macro-logs/macro-logs';
import AddMacros from './components/add-macros/add-macros';
import MacroTotals from './components/macro-totals/macro-totals';

//Totals with percentages.
//pagination for logs, and (form and food items.).

export default function App() {
  return (
    <View className="container mx-auto bg-teal-700">
      <MacrosText className="text-3xl px-3 pt-3">Macro</MacrosText>
      <MacroTotals />
      <MacroLogs />
      <AddMacros />
    </View>
  );
}
