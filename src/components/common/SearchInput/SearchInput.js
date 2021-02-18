import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Input} from 'reactstrap';
import debounce from 'lodash/debounce';

import {StyledLabel} from './styled';

const SearchInput = ({
    label, id, onSearch
}) => {
    const debounceSearch = debounce(currentValue => onSearch(currentValue), 500);
    const handleChange = e => {
        debounceSearch(e.target.value);
    };

    return (
        <FormGroup>
            {label && <StyledLabel for={id}>{label}</StyledLabel>}
            <Input type="text" name={id} id={id} onChange={handleChange} data-testid="searchInput"/>
        </FormGroup>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string
};

SearchInput.defaultProps = {
    label: undefined
};

export default SearchInput;
