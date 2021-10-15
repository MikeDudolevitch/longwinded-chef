import { Component } from "react";
import Ingredient from "./Ingredient";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipe";
import Comment from "./Comment";

class RecipeInfo extends Component {

    render() {
        
        const recipeObj = this.props.recipe.find(r => r.id === parseInt(this.props.match.params.id))
        const ingredient = recipeObj.ingredients && recipeObj.ingredients.map(i => <Ingredient ingredient={i}/>)
        const instArray = recipeObj.instructions && recipeObj.instructions.split("|")
        
        console.log("FETCHING!", this.props)
        return(
            <div className="background">
                <h3 className="headers">{recipeObj.name}</h3>
                <div className="content-div">
                    <div className="content-p">{recipeObj.blog}</div> 
                </div>
                    <div id="ing-container">
                        <h4 style={{ padding: 10, color: "darkolivegreen"}}> Ingredients: </h4>
                            <ul id="ingredients">
                                {ingredient}
                            </ul>
                    </div>
                <div className="content-div">
                    <div className="content-p">
                        {instArray && instArray.map(i => <p>{i}</p>)} 
                    </div>
                </div>
                <CommentForm recipeObj={recipeObj} addComment={this.addComment}/>
                <div style= {{ marginLeft: "4vw", marginBottom: 15, fontSize: 30, color: "cornsilk", fontStyle: "italic", fontWeight: "bold"}}>
                    Comments:
                </div>
                {recipeObj.comments.map(c => <Comment key={c.id} c={c}/>)} 
                {/* {this.state.comments.map(c => <Comment key={c.id} c={c}/>)} */}
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