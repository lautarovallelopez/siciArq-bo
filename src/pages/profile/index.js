import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'ui-kit/base';
import { getProfile } from 'store/session/selectors';

import { Container, Title, Description, WrapperDescription } from './styled';

const Profile = () => {
  const profile = useSelector(getProfile);

  return (
    <Container>
      <Title>Profile</Title>
      <Row $bsStyle={{ flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1024px' }}>
        <WrapperDescription>
          <Description bold>Nombre:</Description>
          <Description>{profile.name}</Description>
        </WrapperDescription>
        <WrapperDescription>
          <Description bold>Apellido:</Description>
          <Description>{profile.surname}</Description>
        </WrapperDescription>
        <WrapperDescription>
          <Description bold>CUIT/CUIL:</Description>
          <Description>{profile.documentId}</Description>
        </WrapperDescription>
      </Row>
      <Row $bsStyle={{ flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1024px' }}>
        <WrapperDescription>
          <Description bold>Email:</Description>
          <Description>{profile.email}</Description>
        </WrapperDescription>
      </Row>
    </Container>
  );
};

export default Profile;
