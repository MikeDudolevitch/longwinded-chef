export const fetchRecipes = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/recipes')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "GET_RECIPES",
                payload: data
            })
        })
    }
}

// export const addComment = (commentObj) => {
//     console.log("add comment in action", commentObj)
//     return {
//         type: "ADD_COMMENT",
//         payload: commentObj
//     }
// }

export const createComment = (comment) => {

    console.log("in action", comment)

    return (dispatch) => {
        console.log("fetch")
        fetch(`http://localhost:8080/recipes/${comment.recipe_id}/comments`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({comment}), 
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("in fetch!", data)
            dispatch({
                type: "ADD_COMMENT",
                payload: data})
        })
        .catch(err => console.log(err))
    }
}