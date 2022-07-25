import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user.slice'

export const store = configureStore({
  reducer: { user: userSlice },
})