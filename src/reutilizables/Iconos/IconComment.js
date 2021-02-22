import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Comment = ({size}) => (
    <Link to='/chat'>
        <FontAwesomeIcon icon={faComment} className={size || 'fa-3x icon'}/>
    </Link>
);

export default Comment;
