import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputEmail = ({label, value, onChange}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
          <Input
            placeholder="sm"
            bsSize="sm"
            type="email"
            name={label}
            id={label}
            placeholder={`Ingrese ${label}`}
            value={value}
            onChange={onChange}
          />
    </FormGroup>
);

export default InputEmail;
