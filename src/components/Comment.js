import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        const { name, content } = this.props.c
        return (
            <div>
                <div style={{ marginRight: "4vw", marginLeft: "4vw", marginBottom: 40, backgroundColor: "white" }}>
                    {name}: {content}
                </div>
            </div>
        )
    }
}

export default Comment
