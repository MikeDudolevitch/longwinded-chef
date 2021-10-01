import React from "react"
import { Component } from "react";
import { useSelector} from "react-redux"

function Recipes() {
    const { recipes } = useSelector((state) => state.recipe)

    console.log(recipes, 'whats up')

    const recipesOnDom = recipes.map(r => r.map(w =><ul><li>{w.name}</li></ul> ))
    return (
        <div>
            {recipesOnDom}
        </div>
    )
} 

export default Recipes