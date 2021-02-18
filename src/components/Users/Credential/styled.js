import styled from '@emotion/styled';
import {Media} from 'reactstrap';

const StyledMedia = styled(Media)(() => ({
    position: 'absolute',
    height: '550px'
}));

const FullName = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: 'bold',
    position: 'relative',
    top: '80px'
}));

const ExtraInformation = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '15px',
    fontWeight: 'bold',
    position: 'relative',
    top: '110px'
}));

const Label = styled.label(() => ({
    fontWeight: 'bold'
}));

const Container = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center'
}));

const CredentialContainer = styled.div(() => ({
    marginLeft: '170px',
    width: 180
}));

export {
    Container,
    CredentialContainer,
    ExtraInformation,
    FullName,
    Label,
    StyledMedia
};
