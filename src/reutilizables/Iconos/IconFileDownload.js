import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFileDownload} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const FileDownload = ({size}) => (
    <Link>
        <FontAwesomeIcon icon={faFileDownload} className={size || 'fa-3x icon'}/>
    </Link> 
);

export default FileDownload;