import {createSlice} from '@reduxjs/toolkit';

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