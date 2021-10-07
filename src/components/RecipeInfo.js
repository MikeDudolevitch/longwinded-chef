import { Component } from "react";
import Ingredient from "./Ingredient";
import CommentForm from "./CommentForm";

class RecipeInfo extends Component {
    constructor() {
        super()
        this.state = {
            recipe: {},
            comments: []
        }
    }

    componentDidMount() {
        const recipe = this.props.recipe.find(r => r.id === parseInt(this.props.match.params.id))
        this.setState({
            recipe: recipe,
            comments: recipe.comments || []
        })
    }

    addComment = (commentObj) => {
        const copy = [...this.state.comments]
        copy.push(commentObj)
        this.setState({
            comments: copy
        })
    }

    render() {
        const recipe = this.state.recipe
        const ingredient = recipe.ingredients && recipe.ingredients.map(i => <Ingredient ingredient={i}/>)
        const instArray = recipe.instructions && recipe.instructions.split("|")
        return(
            <div className="background">
                <h3 className="headers">{recipe.name}</h3>
                <div className="content-div">
                    <p className="content-p">{recipe.blog}</p> 
                </div>
                    <div id="ing-container">
                        <h4 id="ing-header"> Ingredients: </h4>
                            <ul id="ingredients">
                                {ingredient}
                            </ul>
                    </div>
                <div className="content-div">
                    <p className="content-p">
                        {instArray && instArray.map(i => <p>{i}</p>)} 
                    </p>
                </div>
                <CommentForm recipe={recipe} addComment={this.addComment}/>
            </div>
        )
    }
}

export default RecipeInfo