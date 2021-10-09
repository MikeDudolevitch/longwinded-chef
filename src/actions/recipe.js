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

export const addComment = (commentObj) => {
    return {
        type: "ADD_COMMENT",
        payload: commentObj
    }
}

export const createComment = (comment) => {
    return (dispatch) => {
        fetch(`http://localhost:8080/recipes/${comment.recipe_id}/comments`, {
            method: "Post",
            headers:{
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({comment}), 
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(addComment(data))
        })
    }
}