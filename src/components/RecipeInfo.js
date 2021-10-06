import { Component } from "react";

class RecipeInfo extends Component {
    render() {
        const recipe = this.props.recipe.find(r => r.id === parseInt(this.props.match.params.id))
        return(
            <div className="background">
                <h3 className="headers">{recipe.name}</h3>
                <div className="content-div">
                    <p className="content-p">{recipe.blog}</p> 
                </div>
                <div className="content-div">
                    <p className="content-p">{recipe.instructions}</p>
                </div>
            </div>
        
        )
    }
}

export default RecipeInfo