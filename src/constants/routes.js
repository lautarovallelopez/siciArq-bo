const users = '/users/';

const usersRoutes = {
    NEW_USER: `${users}new`,
    EDIT_USER: `${users}:id`,
    USER_CREDENTIAL: `${users}:id/credential`,
    USERS: users
};

const fieldMaterials = '/fieldMaterials/';
const fieldMaterialsByState = `${fieldMaterials}state/:state`;
const fieldMaterialsByUps = `${fieldMaterialsByState}/ups/:ups`;
const fieldMaterialsByArea = `${fieldMaterialsByUps}/area/:area`;

const fieldMaterialsRoutes = {
    FIELD_MATERIALS: fieldMaterials,
    FIELD_MATERIALS_BY_STATE: fieldMaterialsByState,
    FIELD_MATERIALS_BY_UPS: fieldMaterialsByUps,
    FIELD_MATERIALS_BY_AREA: fieldMaterialsByArea
};

const review = '/review/';
const reviewRoutes = {
    REVIEW: review,
    REVIEW_OVERVIEW: `${review}:id`
};

const routes = {
    ...fieldMaterialsRoutes,
    ...reviewRoutes,
    ...usersRoutes,
    PASSWORD_RECOVERY: '/passwordRecovery',
    ACCOUNT: '/account',
    ASSIGNMENTS: '/assignments',
    ACCOUNT_PASSWORD: '/account/password',
    LOGS: '/logs',
    MONITORING: '/monitoring'
};

export default routes;
