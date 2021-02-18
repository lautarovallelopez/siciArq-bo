import React from 'react';
import PropTypes from 'prop-types';

import {StyledError} from './styled';

const Error = ({error}) => (
    <>
        {error && !Array.isArray(error) && <StyledError>{error}</StyledError>}
        {error && Array.isArray(error) && error.map((e, index) => (
            <StyledError key={e} data-testid={`error-${index}`}>{e}</StyledError>
        ))}
    </>
);

Error.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

Error.defaultProps = {
    error: undefined
};

export default Error;
