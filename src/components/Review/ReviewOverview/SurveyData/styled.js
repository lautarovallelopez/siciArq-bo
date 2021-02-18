import styled from '@emotion/styled';
import {CardTitle, UncontrolledCollapse} from 'reactstrap';

export const StyledHouseholdCard = styled.div(() => ({
    '&:nth-of-type(n+3)': {
        marginTop: '15px'
    }
}));

export const StyledEntityCardTitle = styled(CardTitle)((props = {}) => ({
    cursor: 'pointer',
    padding: '10px 20px 10px 20px',
    margin: 0,
    backgroundColor: '#dadde3',
    marginTop: props.marginTop || 0
}));

export const StyledUncontrolledCollapse = styled(UncontrolledCollapse)(() => ({
    cursor: 'pointer',
    paddingLeft: '10px',
    paddingRight: '10px'
}));

export const TitleContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}));
