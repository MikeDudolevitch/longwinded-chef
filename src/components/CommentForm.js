import React from "react"
import { Form, Button } from "react-bootstrap"

const CommentForm = props => {
    const handleClick = (e) => {
        e.preventDefault()
    }

// TODO write an action for posting comment. 
// TODO import to commentForm
// TODO call inside click handler
// TODO inside of .then of promise, call props.addComment()
// TODO make sure comment component is displaying values on browser

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="input" placeholder="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit">Button</Button>
        </Form>
    )
}

export default CommentForm