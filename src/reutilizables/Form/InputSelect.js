import React from 'react';
import {map, transform} from 'lodash'
import { FormGroup, Label, Input, Col } from 'reactstrap';

const InputSelect = ({label, values, onChange, selectedOne}) => (
    <FormGroup row>
        <Label for={label}>{label}:</Label>
        <Input
          placeholder="sm"
          bsSize="sm"
          type="select"
          name={label}
          id={label}
          onChange={onChange}
        >
          <option selected value="">{`Elija ${label}`}</option>
          {values && map(values, value =>{
            value = transform(value, (result, value)=>{
              result.push(value)
            }, []);
            return (
              <option
                selected={selectedOne===value[0]}
                value={value[0]}
              >
                {value[1] || value[0]}
              </option>
            )
          })}
        </Input>
    </FormGroup>
);

export default InputSelect;
