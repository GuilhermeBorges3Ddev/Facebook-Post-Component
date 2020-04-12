import React from 'react';
import { Row, Col } from "reactstrap";
import { FiMoreHorizontal } from "react-icons/fi";

import "../../css/PostHeader.css";

export default function PostHeader() {
    return (
        <Row className="header-section">
            <Col sm="2" md="2">
                <span className="photo m-3" />
            </Col>
            <Col sm="10" md="10" className="d-flex justify-content-between">
                <div>
                   <span className="blueText mt-3"> Page Name </span>
                   <br />
                   <sub className="sponsored-area text-muted"> Sponsored </sub>
                </div>
                <div>
                    <FiMoreHorizontal className="text-dark" />
                </div>
            </Col>
            <Col sm="12" md="10" className="d-flex justify-content-between">
                <div>
                    <span className="text-dark">Insert text here.</span>
                </div>
                <div>
                    <span className="blueText">#tagOne #tagTwo #tagThree</span>
                </div>
                <div>
                    <span>https://enter.url</span>
                </div>
            </Col>
        </Row>
    )
}
