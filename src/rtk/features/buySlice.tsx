import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TInitialState {
    step: number
    steps: { label: string; completed: boolean; step: number }[]
}

const initialState: TInitialState = {
    step: 1,
    steps: [
        { label: 'Select Brand', completed: false, step: 1 },
        { label: 'Select Model', completed: false, step: 2 },
        { label: 'Device Details', completed: false, step: 3 },
        { label: 'Get Paid', completed: false, step: 4 },
    ],
}

const buySlice = createSlice({
    name: 'buy',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.steps[state.step - 1].completed = true
            state.step = state.step + 1
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload
        },
    },
})

export const { nextStep, setStep } = buySlice.actions
export default buySlice.reducer
