import React from 'react';
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const CheckBox = ({label}) => (
    <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          {label}
        </Label>
    </FormGroup>
);

export default CheckBox;