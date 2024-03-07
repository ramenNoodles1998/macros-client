import { View, Button } from 'react-native'
import { useState } from 'react';
import MacroLogs from '../macro-logs/macro-logs';
import AddMacros from '../add-macros/add-macros';
import { output } from '../../src/output';

export default function TabView() {
    const [showMacroLogs, setMacroLogs] = useState('');

    return (
        <View>
            <View className="flex flex-row justify-center">
                <Button 
                    onPress={() => setMacroLogs(!showMacroLogs)}
                    title="Logs"
                    className="p-3 hover:bg-cyan-700 hover:text-2xl hover:text-slate-100 text-xl text-slate-500 cursor-pointer"
                >
                </Button>
                <Button 
                    onPress={() => setMacroLogs(!showMacroLogs)}
                    title="Add Macros"
                    className="p-3 hover:bg-cyan-700 hover:text-2xl hover:text-slate-100 text-xl text-slate-500 cursor-pointer"
                >
                    Add Macros
                </Button>
            </View>
            <View>
                {showMacroLogs 
                ? <MacroLogs />
                : <AddMacros />
                }
            </View>
        </View>
    );
};