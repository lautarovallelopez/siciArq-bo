const assignments = 'api/assignments/';

const assignmentsRoutes = {
    assignmentsByArea: `${assignments}assignmentsByArea/`,
    assignmentsByAddress: `${assignments}assignmentsByAddress/`,
    addressesToReassign: `${assignments}addressesToReassign/`,
    assignmentsBySegment: `${assignments}assignmentsBySegment/`,
    assignmentsByUps: `${assignments}assignmentsByUps/`,
    address: `${assignments}address`,
    segment: `${assignments}segment`,
    subCoordinator: `${assignments}subCoordinator`,
    assignments
};

const users = 'api/users/';
const user = `${users}:id`;

const usersRoutes = {
    users,
    user,
    passwordRecovery: `${users}passwordRecovery`,
    session: `${users}session`
};

const staticDataRoutes = {
    getStaticData: 'api/staticData'
};

const fieldMaterials = 'api/fieldMaterials/';
const getFieldMaterialsByState = `${fieldMaterials}state/:state`;
const getFieldMaterialsByUps = `${getFieldMaterialsByState}/ups/:ups`;
const getFieldMaterialsByArea = `${getFieldMaterialsByUps}/area/:area`;

const fieldMaterialsRoutes = {
    fieldMaterials,
    getFieldMaterialsByState,
    getFieldMaterialsByUps,
    getFieldMaterialsByArea
};

const types = 'api/types/';

const typesRoutes = {
    getUps: `${types}state/:state/ups`,
    getAreas: `${types}state/:state/ups/:ups/areas`,
    getSegments: `${types}state/:state/ups/:ups/area/:area/segments`,
    getFiles: `${types}files`,
    getStatuses: `${types}statuses`,
    getSituations: `${types}situations/:status/status`,
    getAssignmentsTypes: `${types}assignmentType`
};

const review = 'api/review/';
const survey = `${review}:id`;
const address = `${review}:id/address`;
const finish = `${review}:id/finish`;
const reassign = `${review}:id/reassign/:user`;
const approve = `${review}:id/approve`;
const reopen = `${review}:id/reopen`;
const supervise = `${review}:id/supervision/:user`;
const recover = `${review}:id/recovery`;
const reviewRoutes = {
    review,
    survey,
    address,
    finish,
    reassign,
    approve,
    reopen,
    supervise,
    recover
};

const logs = 'api/logs/';

const logsRoutes = {
    logs
};
const diccionarioLinguisticoRoute = '/api/diccionarioLinguistico';

const diccionarioLinguistico = {
    DELETE_ONE: `${diccionarioLinguisticoRoute}/:DESCRIPCION_ORIGINAL/:ID_TIPOLOGIA_DE_DICCIONARIO/:ID_VARIABLE`,
    UPDATE_ONE: `${diccionarioLinguisticoRoute}/:DESCRIPCION_ORIGINAL/:ID_TIPOLOGIA_DE_DICCIONARIO/:ID_VARIABLE`
};


const apiRoutes = {
    diccionarioLinguistico,
    ...assignmentsRoutes,
    ...fieldMaterialsRoutes,
    ...staticDataRoutes,
    ...typesRoutes,
    ...usersRoutes,
    ...reviewRoutes,
    ...logsRoutes
};

export default apiRoutes;
