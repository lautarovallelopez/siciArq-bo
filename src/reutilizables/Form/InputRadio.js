import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import { map } from 'lodash';
const InputRadio = ({title, name, options, onChange}) => (
    <FormGroup tag="fieldset">
        <Label>{title}:</Label>
        {map(options, option => (
          <FormGroup check>
            <Label check>
              <Input
                placeholder="sm"
                bsSize="sm"
                type="radio"
                name={name}
                value = {option.value}
                onChange={onChange}
              />
              {option.label}
            </Label>
          </FormGroup>
        ))}
      </FormGroup>
);

export default InputRadio;
