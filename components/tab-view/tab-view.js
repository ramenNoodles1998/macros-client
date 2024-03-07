import { View, Text, Pressable } from 'react-native'
import { useState } from 'react';
import MacroLogs from '../macro-logs/macro-logs';
import AddMacros from '../add-macros/add-macros';
import { output } from '../../src/output';
import MacrosText from '../macros-text/macros-text';

const TabView = () => {
    const [showMacroLogs, setMacroLogs] = useState('');

    return (
        <View className="mt-3">
            <View className="flex flex-row justify-right">
                <Pressable 
                    onPress={() => setMacroLogs(!showMacroLogs)}
                    className={'px-3 mx-3 pt-1 rounded-t ' + (showMacroLogs ? 'bg-teal-900 ' : 'bg-teal-800 ')}
                >
                    <MacrosText className="text-lg">
                       Logs 
                    </MacrosText>
                </Pressable>
                <Pressable 
                    onPress={() => setMacroLogs(!showMacroLogs)}
                    className={'px-3 pt-1 rounded-t ' + (!showMacroLogs ? 'bg-teal-900 ' : 'bg-teal-800 ')}
                >
                    <MacrosText className="text-lg">
                        Macros
                    </MacrosText>
                </Pressable>
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

export default TabView;