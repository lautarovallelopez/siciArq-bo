import {Children, cloneElement, Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {includes, some} from 'lodash';

const includeRole = (roles, sessionRoles) => some(roles, role => includes(sessionRoles, role));

const disableChild = child => cloneElement(child, {disabled: true});

const Role = ({
    roles, rolesReadOnly, children, sessionRoles, isManager
}) => {
    if (isManager) {
        return children;
    }

    if (!includeRole(roles, sessionRoles)) {
        return false;
    }
    if (!includeRole(rolesReadOnly, sessionRoles) || !rolesReadOnly) {
        return children;
    }
    return Children.map(children, disableChild);
};

Role.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    sessionRoles: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
        PropTypes.shape(),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.instanceOf(Component),
            PropTypes.func
        ]))
    ]),
    rolesReadOnly: PropTypes.arrayOf(PropTypes.string),
    isManager: PropTypes.bool
};

Role.defaultProps = {
    rolesReadOnly: [],
    sessionRoles: null,
    children: undefined,
    isManager: false
};

export default connect(
    state => ({sessionRoles: state.session.roles})
)(Role);
