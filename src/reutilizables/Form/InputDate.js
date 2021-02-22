import React from 'react';
import { split } from 'lodash';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputDate = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
          <Input
            placeholder="sm" bsSize="sm"
            type="date"
            name={label}
            id={label}
            placeholder={`Ingrese ${label}`}
            value = {split(value, 'T')[0]}
            onChange={onChange}
          />
      </FormGroup>
);

export default InputDate;
