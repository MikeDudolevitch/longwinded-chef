// export const addRecipes = (recipes) => {
//     return {
//         type: "GET-RECIPES",
//         payload: recipes
//     }
// }

export const fetchRecipes = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/recipes')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "GET-RECIPES",
                payload: data
            })
        })
    }
}