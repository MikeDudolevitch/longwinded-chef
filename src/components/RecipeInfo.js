import { Component } from "react";
import Ingredient from "./Ingredient";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipe";
import Comment from "./Comment";

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
        console.log(commentObj)
        this.setState({
            comments: 
                [...this.state.comments,
                commentObj]
        })
    }

    render() {

        const recipeObj = this.props.recipe.find(r => r.id === parseInt(this.props.match.params.id))
        const ingredient = recipeObj.ingredients && recipeObj.ingredients.map(i => <Ingredient ingredient={i}/>)
        const instArray = recipeObj.instructions && recipeObj.instructions.split("|")
        
        return(
            <div className="background">
                <h3 className="headers">{recipeObj.name}</h3>
                <div className="content-div">
                    <p className="content-p">{recipeObj.blog}</p> 
                </div>
                    <div id="ing-container">
                        <h4 style={{ padding: 10, color: "darkolivegreen"}}> Ingredients: </h4>
                            <ul id="ingredients">
                                {ingredient}
                            </ul>
                    </div>
                <div className="content-div">
                    <p className="content-p">
                        {instArray && instArray.map(i => <p>{i}</p>)} 
                    </p>
                </div>
                <CommentForm recipeObj={recipeObj} addComment={this.addComment}/>
                <div style= {{ marginLeft: "4vw", marginBottom: 15, fontSize: 30, color: "cornsilk", fontStyle: "italic", fontWeight: "bold"}}>
                    Comments:
                </div>
                {recipeObj.comments.map(c => <Comment key={c.id} c={c}/>)} 
                {this.state.comments.map(c => <Comment key={c.id} c={c}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
        }
    }

export default connect(mapStateToProps, {fetchRecipes})(RecipeInfo)