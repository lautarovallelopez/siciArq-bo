import roles from '@constants/roles';
import {operations, situations} from '@constants';

const rolesOptions = {
    [operations.FINISH]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
    [operations.APPROVE]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR],
    [operations.REASSIGN]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
    [operations.REOPEN]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
    [operations.RECOVER]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
    [operations.SUPERVISE]: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR]
};

const situationsOptions = {
    [operations.FINISH]: [situations.FINISHED_IN_FIELD],
    [operations.APPROVE]: [situations.FINISHED_IN_OFFICE],
    [operations.REASSIGN]: [
        situations.ON_SURVEYING, situations.ON_RECOVERY, situations.ON_SUPERVISING, situations.CLOSED_IN_FIELD
    ],
    [operations.REOPEN]: [situations.FINISHED_IN_FIELD, situations.FINISHED_IN_OFFICE],
    [operations.RECOVER]: [situations.FINISHED_IN_FIELD],
    [operations.SUPERVISE]: [situations.FINISHED_IN_FIELD, situations.FINISHED_IN_OFFICE]
};

const hasOptions = (role, situation) => Object.values(rolesOptions).flat().includes(role)
    && Object.values(situationsOptions).flat().includes(situation);

const getOptions = label => (Object.values(operations).includes(label) ? {
    roles: rolesOptions[label],
    situations: situationsOptions[label],
    label
} : null);

export {rolesOptions};
export {situationsOptions};
export {hasOptions};
export {getOptions};
