/* global VERSION */
import React from 'react';
import PropTypes from 'prop-types';
import {Media} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';

import Image from '../../images/logo-footer-new.png';
import {StyledFooter} from './styled';

const Footer = ({user, role}) => (
    <StyledFooter
        className="d-print-none"
    >
        <div>
            <span data-testid="versionLabel">Version</span>
            &nbsp;
            <span data-testid="versionNumber">{VERSION}</span>
            <br/>
            <span data-testid="appName">ENUT</span>
        </div>
        {user?.id && (
            <div className="d-inline">
                <FontAwesomeIcon icon={faIdCard} size="2x"/>
                <span className="d-inline-block ml-3">
                    <span data-testid="surname">{user.surname}</span>
                    ,&nbsp;
                    <span data-testid="name">{user.name}</span>
                    <br/>
                    <span data-testid="role">{role}</span>
                </span>
            </div>
        )}
        <div>
            <span data-testid="helpDesk">Mesa de Servicios</span>
            <br/>
            <span data-testid="attentionSchedule">
                De Lunes a Viernes Hábiles (011) 5031 4630
            </span>
        </div>
        <a href="https://www.indec.gob.ar/" target="_blank" rel="noopener noreferrer">
            <Media src={Image}/>
        </a>
    </StyledFooter>
);

Footer.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        surname: PropTypes.string,
        name: PropTypes.string
    }),
    role: PropTypes.string
};

Footer.defaultProps = {
    user: undefined,
    role: undefined
};

export default Footer;
