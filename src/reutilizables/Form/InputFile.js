import React from 'react';
import {FormGroup, Label, Col, Input} from 'reactstrap';

const InputFile = ({name, onChange})=>(
    <FormGroup row>
    <Label for="exampleFile">File</Label>
        <Input
        placeholder="sm"
        bsSize="sm"
        type="file"
        name={name}
        id="exampleFile"
        onChange = {onChange}
    />
    </FormGroup>
)

export default InputFile;