import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  AddMacroLog,
  AddFoodItem,
  GetFoodItems,
  DeleteFoodItem,
  GetFoodLogs,
} from './macro-api';

export const incrementProteinByAmountAsync = createAsyncThunk(
  'macros/incrementProtein',
  async (amount, { getState, dispatch }) => {
    dispatch(incrementProteinByAmount(amount));
    const macros = { ...getState().macrosSliceReducer, protein: amount };
    await AddMacroLog(macros);
  }
);

export const incrementCarbsByAmountAsync = createAsyncThunk(
  'macros/incrementCarbs',
  async (amount, { getState, dispatch }) => {
    dispatch(incrementCarbsByAmount(amount));
    const macros = { ...getState().macrosSliceReducer, carbs: amount };
    await AddMacroLog(macros);
  }
);

export const incrementFatByAmountAsync = createAsyncThunk(
  'macros/incrementFat',
  async (amount, { getState, dispatch }) => {
    dispatch(incrementFatByAmount(amount));
    const macros = { ...getState().macrosSliceReducer, fat: amount };
    await AddMacroLog(macros);
  }
);

export const addFoodItemAsync = createAsyncThunk(
  'macros/addFoodItem',
  async (macros, { dispatch }) => {
    let response = await AddFoodItem(macros);
    dispatch(addFoodItem(response.data));
  }
);

export const getFoodItemsAsync = createAsyncThunk(
  'macros/getFoodItems',
  async (id, { dispatch }) => {
    let response = await GetFoodItems();
    dispatch(addFoodItems(response.data));
  }
);

export const deleteFoodItemAsync = createAsyncThunk(
  'macros/deleteFoodItem',
  async (foodItem, { dispatch }) => {
    let response = await DeleteFoodItem(foodItem);
    dispatch(deleteFoodItem(response.data));
  }
);

export const getFoodLogsAsync = createAsyncThunk(
  'macros/getFoodLogs',
  async (id, { dispatch }) => {
    console.log('here');
    let response = await GetFoodLogs();
    console.log(response);
    dispatch(addFoodLogs(response.data));
  }
);

export const macrosSlice = createSlice({
  name: 'macros',
  initialState: {
    protein: 0,
    carbs: 0,
    fat: 0,
    foodItems: [],
    foodLogs: [],
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
      state.foodItems = [action.payload, ...state.foodItems];
    },
    addFoodItems: (state, action) => {
      state.foodItems = action.payload;
    },
    deleteFoodItem: (state, action) => {
      state.foodItems = state.foodItems.filter(
        (fi) => fi.name !== action.payload.name
      );
    },
    addFoodLogs: (state, action) => {
      state.foodLogs = action.payload;
    },
  },
});

export const {
  incrementProteinByAmount,
  incrementCarbsByAmount,
  incrementFatByAmount,
  addFoodItem,
  addFoodItems,
  deleteFoodItem,
  addFoodLogs,
} = macrosSlice.actions;

export const selectProtein = (state) => state.macrosSliceReducer.protein;
export const selectCarbs = (state) => state.macrosSliceReducer.carbs;
export const selectFat = (state) => state.macrosSliceReducer.fat;
export const selectFoodItems = (state) => state.macrosSliceReducer.foodItems;
export const selectFoodLogs = (state) => state.macrosSliceReducer.foodLogs;

export default macrosSlice.reducer;
