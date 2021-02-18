import styled from '@emotion/styled';

const PictureContainer = styled.aside(() => ({
    marginLeft: '15px',
    width: 25
}));

const DropArea = styled.div(() => ({
    display: 'flex',
    left: 10,
    width: 165,
    height: 165,
    borderRadius: 20,
    flexDirection: 'column',
    fontSize: '15px',
    fontWeight: 'bold',
    position: 'relative',
    top: '40px'
}));

const Picture = styled.img(() => ({
    display: 'flex',
    width: 182,
    height: 190,
    maxHeight: 185,
    borderRadius: 13,
    objectFit: 'cover',
    objectPosition: '50%',
    flexDirection: 'column',
    position: 'relative',
    top: '34px'
}));

const CredentialPanel = styled.div(() => ({
    position: 'absolute',
    zIndex: 1
}));

const Undo = styled.div(() => ({
    position: 'absolute',
    zIndex: 2,
    top: '10px',
    left: '250px'
}));

const Print = styled.div(() => ({
    position: 'absolute',
    zIndex: 2,
    top: '50px',
    left: '250px'
}));

export {
    CredentialPanel,
    DropArea,
    Picture,
    PictureContainer,
    Print,
    Undo
};
