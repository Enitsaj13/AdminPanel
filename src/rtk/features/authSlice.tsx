import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TInitialState {
    authFormOpen: 'login' | 'register' | 'forgotPassword' | false
    auth: boolean
}

const initialState: TInitialState = {
    authFormOpen: false,
    auth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleAuthForm: (state, action: PayloadAction<TInitialState['authFormOpen']>) => {
            state.authFormOpen = action.payload
        },
    },
})

export const { toggleAuthForm } = authSlice.actions
export default authSlice.reducer
