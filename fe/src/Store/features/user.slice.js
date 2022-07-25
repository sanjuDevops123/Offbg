import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actions: [],
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addActions(state, action) {
      state.actions = action.payload?.actions || [];
      state.name = action.payload?.name || ''
    },
    resetState(state, action) {
      state = initialState;

    }
  },
})

export const { addActions, resetState } = userSlice.actions;

export default userSlice.reducer