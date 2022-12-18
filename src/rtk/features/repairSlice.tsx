import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TInitialState {
  step: number;
  steps: { label: string; completed: boolean; step: number }[];
}

const initialState: TInitialState = {
  step: 1,
  steps: [
    { label: 'Select Brand', completed: false, step: 1 },
    { label: 'Select Model', completed: false, step: 2 },
    { label: 'Device Issues', completed: false, step: 3 },
    { label: 'Free Estimate', completed: false, step: 4 },
    { label: 'Service Type', completed: false, step: 5 },
    { label: 'Schedule Your Time', completed: false, step: 6 },
    { label: 'How To Reach You', completed: false, step: 7 },
  ],
};

const repairSlice = createSlice({
  name: 'repair',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.steps[state.step - 1].completed = true;
      state.step = state.step + 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { nextStep, setStep } = repairSlice.actions;
export default repairSlice.reducer;
