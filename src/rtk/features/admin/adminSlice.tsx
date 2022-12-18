import { createSlice } from '@reduxjs/toolkit'

interface TInitialState {
  toggleShow: boolean
  headerWidth: string
}

const initialState: TInitialState = {
  toggleShow: true,
  headerWidth: 'header__container',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    toggleAdmin: (state) => {
      state.toggleShow = !state.toggleShow
    },
  },
})

export const { toggleAdmin } = adminSlice.actions
export default adminSlice.reducer
