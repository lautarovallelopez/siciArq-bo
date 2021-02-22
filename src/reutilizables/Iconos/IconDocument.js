import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Document = ({size}) => (
    <Link to='/documentos'>
        <FontAwesomeIcon icon={faBook} className={size || 'fa-3x icon'}/>
    </Link>
);

export default Document;
