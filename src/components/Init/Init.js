import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap';
import querystring from 'querystring';
import {useLocation} from 'react-router-dom';
import SessionService from '@services/session';
import PackageJson from '@root/package.json';
import isEmpty from 'lodash/isEmpty';

const Init = ({validateSession}) => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = querystring.parse(location.search);
        const token = SessionService.getToken();
        const session = SessionService.getSession();
        if((token && session)){
            window.location='https://www.google.com/'
        }else{
            validateSession(queryParams);
        }
        
    }, [location]);

    return (
        <Container>
            <Row>
                <Col sm={12} className="text-center">
                    <h1 className="oswald title-home mt-5">
                            &nbsp;Bienvenido al Sistema&nbsp;
                        <span className="accent-color" data-testid="package-description">
                            {PackageJson.description}
                        </span>
                    </h1>
                </Col>
            </Row>
            {false && <Row>
                <Col>
                    <Files/>
                </Col>
            </Row>}
        </Container>
    );
};

Init.propTypes = {
    validateSession: PropTypes.func.isRequired
};

export default Init;