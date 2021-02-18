import moment from 'moment';
import styled from '@emotion/styled';
import {Card, CardTitle, UncontrolledCollapse} from 'reactstrap';

export const handleFormSubmit = ({
    submit,
    values,
    resolve: resolveArg,
    reject: rejectArg
}) => {
    const resolve = () => {
        if (resolveArg) {
            resolveArg();
        }
    };
    /* eslint-disable require-yield */
    function* reject() {
        if (rejectArg) {
            rejectArg();
        }
    }
    /* eslint-enable require-yield */
    submit(values, resolve, reject);
};

export const getValueOrSD = value => value || 'S/D';

export const getFullName = user => (user ? `${user.surname}, ${user.name}` : 'S/D');

export const getRoleName = (user, roles = []) => {
    const roleName = roles.find(role => role.id === user?.roles[0])?.name;
    return getValueOrSD(roleName);
};

export const getFullNameAndRole = user => {
    const fullName = user?.isSessionUser ? 'Asignarme a mí' : getFullName(user);
    return `${fullName} - ${getValueOrSD(user?.role)}`;
};

export const getUserNameAndSurname = (users = [], userId) => {
    const currentUser = users.find(user => user.id === userId);
    return currentUser ? getFullName(currentUser) : 'S/D';
};

export const getDateOrSD = (date, format = 'DD/MM/YYYY HH:mm:ss') => (
    moment(date, moment.ISO_8601, true).isValid() && moment(date).format(format)
) || 'S/D';

export const parseStateId = id => String(id).padStart(2, '0');

export const StyledUncontrolledCollapse = styled(UncontrolledCollapse)(() => ({
    cursor: 'pointer'
}));

export const StyledCard = styled(Card)(() => ({
    boxShadow: '0 0 5px 0px',
    marginBottom: '25px'
}));

export const CardContainer = styled.div(() => ({
    border: '1px solid #D3D3D3',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px'
}));

export const ChapterLabel = styled.label(() => ({
    margin: '5px 0 5px 0',
    fontSize: '16px',
    textTransform: 'uppercase'
}));

export const StyledChapterTitle = styled(CardTitle)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
}));
