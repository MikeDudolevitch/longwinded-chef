export const fetchRecipe = () => {
    return(dispatch) => {
        fetch('http://localhost:3000/recipes')
        .then(resp => resp.json)
        .then(data => {
            dispatch({
                type: "GET_RECIPES", 
                payload: data
            })
        })
    }
}