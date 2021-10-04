
const initialState = {
    recipe: []
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET-RECIPES":
            return {
                ...state,
            recipe: [...action.payload]
            }

        default: 
            return state
    }
}

export default recipeReducer