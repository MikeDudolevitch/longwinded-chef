import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        const { name, content } = this.props.c
        console.log("trying some stuff", this.props)
        return (
            <div>
                {name} {content}
            </div>
        )
    }
}

export default Comment
