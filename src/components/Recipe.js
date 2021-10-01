import React from "react"
import { Component } from "react";
import { shallowEqual, useSelector } from "react-redux"

export default function Recipes() {
    const { store } = useSelector((state) => state.initialState ) 
    console.log(store)
    return (
        <div></div>
    )
} 