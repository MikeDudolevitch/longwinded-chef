
const initialState = {
    recipe: []
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_RECIPES":
            console.log("fetch payload", action.payload)
            return {
                ...state,
            recipe: action.payload
            }
        case "ADD_COMMENT":
            console.log("addcomment", action.payload)
            const recipeIndex = state.recipe.findIndex(r => r.id === action.payload.recipe_id)
            const arrayToUpdate = state.recipe[recipeIndex].comments
            const updatedComments = [...arrayToUpdate, action.payload]
            const updatedRecipe = {
                ...state.recipe[recipeIndex], updatedComments
            }
            console.log("REDUCER", updatedRecipe, arrayToUpdate, updatedComments, action.payload)
        return {
                ...state,
                recipe: [...state.recipe[recipeIndex].comments, action.payload]
            }
        default: 
            return state
    }
}

export default recipeReducer