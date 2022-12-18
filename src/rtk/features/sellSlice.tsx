import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TInitialState {
    step: number
    steps: { label: string; completed: boolean; step: number }[]
}

const initialState: TInitialState = {
    step: 1,
    steps: [
        { label: 'Select Brand', completed: false, step: 1 },
        { label: 'Device Details', completed: false, step: 2 },
        { label: 'Ship Your Device', completed: false, step: 3 },
        { label: 'Get Paid', completed: false, step: 4 },
    ],
}

const sellSlice = createSlice({
    name: 'sell',
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

export const { nextStep, setStep } = sellSlice.actions
export default sellSlice.reducer
