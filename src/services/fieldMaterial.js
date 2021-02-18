import API from '@constants/apiRoutes';
import transformRoute from '@util/transformRoute';

import Http from './http';

class FieldMaterialService {
    static getFieldMaterials() {
        return Http.get(transformRoute(API.fieldMaterials));
    }

    static getByState(state) {
        return Http.get(transformRoute(API.getFieldMaterialsByState, {state}));
    }

    static getByUps(state, ups) {
        return Http.get(transformRoute(API.getFieldMaterialsByUps, {state, ups}));
    }

    static getByArea(state, ups, area) {
        return Http.get(transformRoute(API.getFieldMaterialsByArea, {state, ups, area}));
    }
}

export default FieldMaterialService;
