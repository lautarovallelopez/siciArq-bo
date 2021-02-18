import styled from '@emotion/styled';
import {CardSubtitle, CardText, CardTitle} from 'reactstrap';

export const Container = styled.div(() => ({
    border: '1px solid #D3D3D3',
    marginBottom: '10px'
}));

export const QuestionLabel = styled.h4(() => ({
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold'
}));

export const StyledChapterTitle = styled(CardTitle)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
}));

export const StyledResponseTitle = styled(CardTitle)(() => ({
    margin: '0'
}));

export const StyledCardSubtitle = styled(CardSubtitle)(() => ({
    color: '#8e8e93',
    margin: '5px 0 5px 0',
    fontSize: '13px'
}));

export const StyledRadioTableResponse = styled(CardText)(() => ({
    backgroundColor: '#D3D3D3'
}));

export const Answer = styled.p(() => ({
    fontSize: '14px',
    '&:first-letter': {
        textTransform: 'uppercase'
    }
}));

export const QuestionContainer = styled.div(() => ({
    marginBottom: '20px'
}));

export const SubQuestionContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row'
}));

export const SubQuestionLabel = styled.p(() => ({
    fontSize: '15px'
}));
