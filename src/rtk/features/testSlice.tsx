import { createSlice } from '@reduxjs/toolkit'

interface TInitialState {
    test: boolean
}

const initialState: TInitialState = {
    test: false,
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        testHandler: (state, action) => {
            state.test = action.payload
        },
    },
})

export const { testHandler } = testSlice.actions
export default testSlice.reducer
