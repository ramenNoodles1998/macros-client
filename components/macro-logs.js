import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MacroText from './macro-components/macro-text';
import {increment, selectCount} from '../feature/macro-slice'



const MacroLogs = () =>  {
    return (
        <View className="p-3 mx-3 shadow-2xl rounded-b bg-teal-800">
            <MacroText> Macro Logs</MacroText>
        </View>
    );
};

export default MacroLogs;