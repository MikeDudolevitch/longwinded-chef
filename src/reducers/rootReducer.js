import { AccordionButton } from "react-bootstrap"

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
            
            console.log("in reducer top ", recipeIndex, action.payload)
            const updatedRecipe = {
                
                ...state.recipe[recipeIndex],
                comments: [...state.recipe[recipeIndex].comments, action.payload]
            }
        return {
                ...state,
                recipe: [...state.recipe.slice(0, recipeIndex), updatedRecipe, ...state.recipe.slice(recipeIndex + 1)]
            }
        default: 
            return state
    }
}

export default recipeReducer