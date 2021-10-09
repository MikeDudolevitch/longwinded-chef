import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipe'
import Comment from './Comment'

export class Comments extends Component {
    render() {
        const comments = this.props.recipeObj.comments.map(c => <Comment key={c.id} c={c}/>)
        return (
            <div>
                {comments}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        recipe: state.recipe
        }
    }


export default connect(mapStateToProps, {fetchRecipes})(Comments)
