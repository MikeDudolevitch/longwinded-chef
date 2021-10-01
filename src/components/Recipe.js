import React from "react"
import { Component } from "react";
import { useSelector} from "react-redux"

function Recipes() {
    const { recipes } = useSelector((state) => state.recipe)

    console.log(recipes, 'whats up')

    const recipesOnDom = recipes.map(r => r.map(w =><li key={w.id}>{w.name}</li> ))
    return (
        <div>
            <ul id="homelist">
            {recipesOnDom}
            </ul>
        </div>
    )
} 

export default Recipes