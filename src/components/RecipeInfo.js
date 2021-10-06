import { Component } from "react";
import Ingredient from "./Ingredient";

class RecipeInfo extends Component {
    render() {
        const recipe = this.props.recipe.find(r => r.id === parseInt(this.props.match.params.id))
        const ingredient = recipe.ingredients.map(i => <Ingredient ingredient={i}/>)
        const instArray = recipe.instructions.split("|")
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
                       {instArray.map(i => <p>{i}</p>)} 
                    </p>
                </div>
            </div>
        
        )
    }
}

export default RecipeInfo