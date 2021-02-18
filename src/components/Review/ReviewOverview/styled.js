import styled from '@emotion/styled';
import {Col, Row} from 'reactstrap';

import {answers} from '@constants/review';

const StyledCol = styled(Col)(() => ({
    fontSize: 15,
    padding: 0
}));

const StyledDwelling = styled(Col)(() => ({
    paddingRight: 0
}));

const StyledListNumber = styled(StyledCol)(() => ({
    textAlign: 'center'
}));

const StyledBlock = styled(Col)(() => ({
    borderLeft: '2px solid',
    borderColor: '#e8dde8',
    paddingTop: 10
}));

const StyledRow = styled(Row)(props => ({
    boxShadow: '0 0 2px 0px',
    margin: 0,
    padding: 0,
    ...(props.response === answers.YES && {
        backgroundColor: '#bbddbb'
    }),
    ...(props.response === answers.NO && {
        backgroundColor: '#ddbbbb'
    })
}));

const StyledResponse = styled(Col)(props => ({
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 0,
    marginRight: 0,
    ...(props.response === answers.YES && {
        backgroundColor: '#bbddbb'
    }),
    ...(props.response === answers.NO && {
        backgroundColor: '#ddbbbb'
    })
}));

export {StyledBlock};
export {StyledCol};
export {StyledDwelling};
export {StyledListNumber};
export {StyledResponse};
export {StyledRow};
