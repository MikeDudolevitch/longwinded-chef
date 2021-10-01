import { configureStore } from '@reduxjs/toolkit'
import recipeStore from '../redux/recipeReducer'

export default configureStore({
  reducer: {
      recipe: recipeStore
  },
})
