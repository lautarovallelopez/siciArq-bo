import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';

import credential from '@root/public/images/credential.jpg';
import {User} from '@model';
import Spinner from '@components/common/Spinner';
import UploadPicture from '../../common/UploadPicture';

import {
    Container,
    CredentialContainer,
    ExtraInformation,
    FullName,
    Label,
    StyledMedia
} from './styled';

const Credential = ({
    getUser, user, loading
}) => {
    const {id} = useParams();

    useEffect(() => {
        getUser(id);
    }, []);

    return (
        <Container>
            <Spinner loading={loading || !user?.role}>
                <StyledMedia src={credential}/>
                <UploadPicture data-testid="user-picture"/>
                <CredentialContainer>
                    <FullName>
                        <Label data-testid="surname">{`${user?.surname},`}</Label>
                        <Label data-testid="name">{user?.name}</Label>
                    </FullName>
                    <ExtraInformation>
                        <Label data-testid="role">{user?.role}</Label>
                        <Label data-testid="documentId">{`DNI: ${user?.documentId}`}</Label>
                    </ExtraInformation>
                </CredentialContainer>
            </Spinner>
        </Container>
    );
};

Credential.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    loading: PropTypes.bool.isRequired
};

export default Credential;
