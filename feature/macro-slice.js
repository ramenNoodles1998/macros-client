import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AddMacroLog, AddFoodItem } from './macro-api';

export const incrementProteinByAmountAsync = createAsyncThunk('macros/incrementProtein', async (amount, {getState, dispatch}) => {
  dispatch(incrementProteinByAmount(amount))
  const macros = {...getState().macrosSliceReducer, protein: amount};
  await AddMacroLog(macros);
});
export const incrementCarbsByAmountAsync = createAsyncThunk('macros/incrementCarbs', async (amount, {getState, dispatch}) => {
  dispatch(incrementCarbsByAmount(amount))
  const macros = {...getState().macrosSliceReducer, carbs: amount};
  await AddMacroLog(macros);
})
export const incrementFatByAmountAsync = createAsyncThunk('macros/incrementFat', async (amount, {getState, dispatch}) => {
  dispatch(incrementFatByAmount(amount))
  const macros = {...getState().macrosSliceReducer, fat: amount};
  await AddMacroLog(macros);
})
export const addFoodItemAsync = createAsyncThunk('macros/addFoodItem', async (macros, {getState, dispatch}) => {
  await AddFoodItem(macros)
})

export const macrosSlice = createSlice({
  name: 'macros',
  initialState: {
    protein: 0,
    carbs: 0,
    fat: 0,
  },
  reducers: {
    incrementProteinByAmount: (state, action) => {
      state.protein += action.payload;
    },
    incrementCarbsByAmount: (state, action) => {
      state.carbs += action.payload;
    },
    incrementFatByAmount: (state, action) => {
      state.fat += action.payload;
    },
  }
});

export const {incrementProteinByAmount, incrementCarbsByAmount, incrementFatByAmount} = macrosSlice.actions;

export const selectProtein = (state) => state.macrosSliceReducer.protein;
export const selectCarbs = (state) => state.macrosSliceReducer.carbs;
export const selectFat = (state) => state.macrosSliceReducer.fat;

export default macrosSlice.reducer;