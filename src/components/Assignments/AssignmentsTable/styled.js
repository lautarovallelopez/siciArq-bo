import styled from '@emotion/styled';

const Tr = styled.tr(props => ({
    ...(props.toAssign && {
        backgroundColor: '#34e45e !important'
    })
}));

const Address = styled.th(() => ({
    width: '400px'
}));

const StyledTH = styled.th(() => ({
    width: '100px'
}));

const Reassignment = styled.th(() => ({
    width: '350px'
}));

const TotalDwellings = styled.th(() => ({
    width: '200px'
}));

const UserTH = styled.th(() => ({
    width: '200px'
}));

export {
    Address, Tr, Reassignment, StyledTH, TotalDwellings, UserTH
};
