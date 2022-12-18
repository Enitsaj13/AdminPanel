import { createSlice } from '@reduxjs/toolkit'

interface TInitialState {
    navOpen: boolean
}

const initialState: TInitialState = {
    navOpen: false,
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.navOpen = !state.navOpen
        },
    },
})

export const { toggleNav } = navSlice.actions
export default navSlice.reducer
