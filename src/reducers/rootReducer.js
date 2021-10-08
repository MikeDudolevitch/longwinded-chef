
const initialState = {
    recipe: []
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_RECIPES":
            return {
                ...state,
            recipe: [...action.payload]
            }
        case "ADD_COMMENT":
            const recipeIndex = state.recipe.findIndex(r => r.id === action.payload.recipe_id)
            const updatedRecipe ={
                ...state.recipe[recipeIndex],
                comments: [...state.recipe[recipeIndex].comments, action.payload]
            }
        return {
                ...state,
                recipe: [...state.recipe.slice(0, recipeIndex), updatedRecipe, state.recipe.slice(recipeIndex+1)] 
            }

        default: 
            return state
    }
}

export default recipeReducer