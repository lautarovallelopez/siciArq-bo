import React from 'react';
import {Col, Row} from 'reactstrap';

import FilesList from './FilesList';

const Files = () => (
    <div className="border mt-3 pt-1 w-40" data-testid="files">
        <Row className="form-group">
            <Col sm={12}>
                <h2 className="text-center mb-3">
                    Lista de materiales
                </h2>
            </Col>
        </Row>
        <span data-testid="files-list">
            <FilesList/>
        </span>
    </div>
);

export default Files;
