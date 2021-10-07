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
        <div id="comment-box">
            <Form>
                <Form.Group className="comment" controlId="exampleForm.ControlInput1">
                    <Form.Control type="input" placeholder="Name" />
                </Form.Group>
                <Form.Group className="comment" id="comment-text" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Share your thoughts!" rows={3} />
                </Form.Group>
                <Button style={{ marginBottom: 15, marginLeft: "4vw", marginTop: 15 }} type="submit">Post Comment</Button>
            </Form>
        </div>
    )
}

export default CommentForm