const roleEnum = {
    CN: 'cn',
    cn: 'Coordinador Nacional'
};

const roleToFilter = {
    cn: null,
    co: 'coordinator',
    cg: 'managementCoordinator',
    ld: 'managementDepartment',
    lf: 'managementFraction',
    af: 'fractionAssistant',
    su: 'managementRadius',
    po: 'pollster'
};

const situations = {
    UNASSIGNED: 1,
    ASSIGNED: 2,
    SYNCRONIZED: 3,
    ON_SURVEYING: 4,
    ON_RECOVERY: 5,
    ON_SUPERVISING: 6,
    CLOSED_IN_FIELD: 7,
    FINISHED_IN_FIELD: 8,
    FINISHED_IN_OFFICE: 9,
    APPROVED: 10
};

const operations = {
    FINISH: 'Finalizar',
    APPROVE: 'Aprobar',
    REASSIGN: 'Reasignar',
    REOPEN: 'Reabrir',
    RECOVER: 'Recuperar',
    SUPERVISE: 'Supervisar'
};

const sections = {
    ASSIGNMENTS: 'assignments',
    LOGS: 'logs',
    REVIEW: 'review'
};

export const sagasDelay = 2000;

export {operations};
export {roleEnum};
export {roleToFilter};
export {situations};
export {sections};
