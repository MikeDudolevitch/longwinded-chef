
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
            const recipeIndex = state.recipe.findIndex(r => r.id === action.payload.recipe_id - 1)
            
            const updatedRecipe = {
                
                ...state.recipe[recipeIndex],
                recipe: [...state.recipe[recipeIndex].comments, action.payload]
            }
            console.log("in reducer", updatedRecipe, action.payload)
        return {
                ...state,
                recipe: [...state.recipe.comments, action.payload]
            }
        default: 
            return state
    }
}

export default recipeReducer