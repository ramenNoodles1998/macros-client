import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { AddMacroLog, AddFoodItem, GetFoodItems, DeleteFoodItem } from './macro-api';

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

export const addFoodItemAsync = createAsyncThunk('macros/addFoodItem', async (macros, {dispatch}) => {
  let response = await AddFoodItem(macros);
  console.log(response)
  dispatch(addFoodItem(response.data));
})

export const getFoodItemsAsync = createAsyncThunk('macros/getFoodItems', async (id, {dispatch}) => {
  let response = await GetFoodItems();
  dispatch(addFoodItems(response.data));
})

export const deleteFoodItemAsync = createAsyncThunk('macros/deleteFoodItem', async (foodItem, {dispatch}) => {
  let response = await DeleteFoodItem(foodItem);
  dispatch(deleteFoodItem(response.data));
})

export const macrosSlice = createSlice({
  name: 'macros',
  initialState: {
    protein: 0,
    carbs: 0,
    fat: 0,
    foodItems: []
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
    addFoodItem: (state, action) => {
      console.log(action.payload);
      state.foodItems = [action.payload, ...state.foodItems];
    },
    addFoodItems: (state, action) => {
      state.foodItems = action.payload;
    },
    deleteFoodItem: (state, action) => {
      console.log(action);
      state.foodItems = state.foodItems.filter(fi => fi.name !== action.payload.name);
    }
  }
});

export const {incrementProteinByAmount, incrementCarbsByAmount, incrementFatByAmount, addFoodItem, addFoodItems, deleteFoodItem} = macrosSlice.actions;

export const selectProtein = (state) => state.macrosSliceReducer.protein;
export const selectCarbs = (state) => state.macrosSliceReducer.carbs;
export const selectFat = (state) => state.macrosSliceReducer.fat;
export const selectFoodItems = (state) => state.macrosSliceReducer.foodItems;

export default macrosSlice.reducer;