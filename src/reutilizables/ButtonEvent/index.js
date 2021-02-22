import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const ButtonEvent = ({label, to, onClick, icono, title})=>(
    <Button
        className='float-right'
        color="primary"
        onClick={onClick}
        title={title}
    >
        {icono && (
            <FontAwesomeIcon icon={icono}/>
        )}
        {label}
    </Button>
);
export default ButtonEvent;
