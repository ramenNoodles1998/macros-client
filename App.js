import { View } from 'react-native';
import { output } from './src/output';

import AddMacroLogForm from './components/add-macro-log/add-macro-log-form';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <AddMacroLogForm />
    </View>
  );
}
