import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputNumber = ({id,label, value, onChange}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
          placeholder="sm"
          bsSize="sm"
          type="number"
          name={label}
          id={id}
          placeholder={`Ingrese ${label}`}
          value={value}
          onChange={onChange}
        />
    </FormGroup>
);

export default InputNumber;
