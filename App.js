import { View } from 'react-native';
import { output } from './src/output';

import AddMacroLogForm from './components/add-macro-log/add-macro-log-form';

//Totals with percentages.
//pagination for logs, and (form and food items.).

export default function App() {
  return (
    <View className="container mx-auto bg-teal-700 text-teal-900">
      <AddMacroLogForm />
    </View>
  );
}
