import React from "react"
import { Form, Button } from "react-bootstrap"
import { createComment } from '../actions/recipe.js'
import { connect } from "react-redux"

export class CommentForm extends React.Component {
    state = {
        name: "",
        content: "",
        recipe_id: `${this.props.recipeObj.id}`
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleComment = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            name: "",
            content: "",
            recipe_id: `${this.props.recipeObj.id}`
        }) 
    }

// TODO write an action for posting comment. 
// TODO import to commentForm
// TODO call inside click handler
// TODO inside of .then of promise, call props.addComment()
// TODO make sure comment component is displaying values on browser

    render(){
    return (
        <div id="comment-box">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="comment" controlId="exampleForm.ControlInput1">
                    <Form.Control type="input" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
                </Form.Group>
                <Form.Group className="comment" id="comment-text" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" onChange={this.handleComment} value={this.state.content} placeholder="Share your thoughts!" rows={3} />
                </Form.Group>
                <Button style={{ marginBottom: 15, marginLeft: "4vw", marginTop: 15 }} type="submit">Post Comment!</Button>
            </Form>
        </div>
    )
}
}

export default connect(null, {createComment})(CommentForm)