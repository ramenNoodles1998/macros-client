import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './components/store';
import { output } from './src/output';
import MacrosText from './components/macro-components/macro-text';
import MacroTotals from './components/macro-totals';
import TabView from './components/tab-view';

const App = () => {
  return (
    <View className='container mx-auto bg-teal-700'>
      <Provider store={store}>
        <MacrosText className='text-3xl p-3'>Macro</MacrosText>
        <MacroTotals />
        <TabView />
      </Provider>
    </View>
  );
};
export default App;
