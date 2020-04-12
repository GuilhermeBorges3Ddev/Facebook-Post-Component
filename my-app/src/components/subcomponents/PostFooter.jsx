import React from 'react';
import { Row, Col } from 'reactstrap';

export default function PostFooter() {
    return (
        <>
        <Row>
            <Col sm="10" md="10" className="grayArea">
                <span className="text=uppercase">
                    <u>websitename.com</u>
                </span>
                <br />
                <b>Headline Copy Here</b>
            </Col>
            <Col sm="2" md="2">
                <button>More here</button>
            </Col>
        </Row>
        <Row>
            <Col sm="10" md="10">Like Heart 541</Col>
            <Col sm="2" md="2">
                26 Comments 84 Shares
            </Col>
        </Row>
        <Row>
            <Col sm="3" md="3">Like</Col>
            <Col sm="3" md="3">Comment</Col>
            <Col sm="3" md="3">Share</Col>
            <Col sm="3" md="3">Profile</Col>
        </Row>
        </>
    )
}
