import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const RegularInput = ({id, label, value, onChange}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
          bsSize="sm"
          type="text"
          name={label}
          id={id || label}
          value={value}
          placeholder={`Ingresá ${label}`}
          onChange={onChange}
        />
    </FormGroup>
);

export default RegularInput;
