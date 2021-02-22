import React from 'react';
import { Spinner } from 'reactstrap';
const Loading = ()=>(
    <div style={{textAlign:'center'}}>
        <Spinner color="primary" />
        <h2>LOADING ......</h2>
    </div>
)

export default Loading;