import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
const InputText = ({label, value, onChange, id}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
            bsSize="sm"
            type="textarea"
            name={label}
            id={id}
            value={value}
            placeholder={`Ingresá ${label}`}
            onChange={onChange}
        />
    </FormGroup>
);

export default InputText;