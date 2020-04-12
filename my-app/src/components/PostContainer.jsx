import React from 'react';
import { Container, Row } from 'reactstrap';

import PostBody from './subcomponents/PostBody';
import PostHeader from './subcomponents/PostHeader';

import "../css/PostContainer.css";
import PostFooter from './subcomponents/PostFooter';

export default function PostContainer() {
    return (
        <Container id="post-main-container">
            <Row>
                <PostHeader />
            </Row>
            <Row>
                <PostBody />
            </Row>
            <Row>
                <PostFooter />
            </Row>
        </Container>
    )
}
