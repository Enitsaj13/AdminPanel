import { createSlice } from '@reduxjs/toolkit'

interface ITheme {
    theme: 'light' | 'dark'
}

const initialState: ITheme = {
    theme: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
    },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
