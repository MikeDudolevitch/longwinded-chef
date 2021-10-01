import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRecipe = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "GET_RECIPES", 
                payload: data
            })
        })
    }
}

export const setRecipes = createAsyncThunk(

'recipe/setRecipes',
async() => {
    const response = await fetch('http://localhost:3000/recipes')
      const data = await response.json()
      return data
      
}
)


const recipeStore = createSlice({
    name: "recipe",
    initialState: {
        recipes: [],
    }, 
    reducers: {
        addRecipes: (state, action) => {
            state.recipes.push(action.payload)
        },
    extraReducer: (builder) => {
        builder.addCase(setRecipes.fulfilled, (state, action) => {
            state.recipes.push(action.payload)
        })
    }
    }
})

export const {addRecipes} = recipeStore.actions

export default recipeStore.reducer
