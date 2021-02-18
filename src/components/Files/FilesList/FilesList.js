import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';

import Spinner from '@components/common/Spinner';

const FilesList = ({
    files, loading
}) => (
    <Spinner loading={loading}>
        {files.map((file, index) => (
            <Row key={file.id} className="form-group">
                <Col className="d-flex justify-content-center">
                    <a
                        data-testid={`file-${index}`}
                        href={file.link}
                        color="primary"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary w-50"
                    >
                        {file.description}
                    </a>
                </Col>
            </Row>
        ))}
    </Spinner>
);

FilesList.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired,
    loading: PropTypes.bool.isRequired
};

export default FilesList;
