import rootReducer, {
    getFieldMaterials, getFieldMaterialsByState, getFieldMaterialsByUps, getFieldMaterialsByArea
} from '../reducer';
import * as actions from '../actions';

describe('root reducer', () => {
    it('return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            getFieldMaterials: {
                loading: false,
                fieldMaterials: [],
                requested: false
            },
            getFieldMaterialsByState: {
                loading: false,
                fieldMaterials: [],
                requested: false
            },
            getFieldMaterialsByUps: {
                loading: false,
                fieldMaterials: [],
                requested: false
            },
            getFieldMaterialsByArea: {
                loading: false,
                fieldMaterials: [],
                requested: false
            }
        });
    });
});

describe('getFieldMaterials', () => {
    it('should return the initial state', () => {
        expect(getFieldMaterials(undefined, {})).toEqual({
            loading: false,
            fieldMaterials: [],
            requested: false
        });
    });

    it('should handle `GET_FIELD_MATERIALS_REQUEST`', () => {
        expect(getFieldMaterials(undefined, actions.getFieldMaterialsRequest())).toEqual({
            loading: true,
            requested: true,
            fieldMaterials: []
        });
    });

    it('should handle `GET_FIELD_MATERIALS_SUCCESS`', () => {
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                areas: 34,
                dwellings: 98
            }
        ];
        expect(getFieldMaterials(undefined, actions.getFieldMaterialsSuccess(fieldMaterials))).toEqual({
            fieldMaterials,
            loading: false,
            requested: true
        });
    });

    it('should handle `GET_FIELD_MATERIALS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getFieldMaterials(undefined, actions.getFieldMaterialsError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            fieldMaterials: []
        });
    });
});

describe('getFieldMaterialsByState', () => {
    it('should return the initial state', () => {
        expect(getFieldMaterialsByState(undefined, {})).toEqual({
            loading: false,
            fieldMaterials: [],
            requested: false
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_STATE_REQUEST`', () => {
        const state = 2;
        expect(getFieldMaterialsByState(undefined, actions.getFieldMaterialsByStateRequest(state))).toEqual({
            loading: true,
            requested: true,
            fieldMaterials: []
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_STATE_SUCCESS`', () => {
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                areas: 34,
                dwellings: 98
            }
        ];
        expect(getFieldMaterialsByState(undefined, actions.getFieldMaterialsByStateSuccess(fieldMaterials))).toEqual({
            fieldMaterials,
            loading: false,
            requested: true
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_STATE_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getFieldMaterialsByState(undefined, actions.getFieldMaterialsByStateError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            fieldMaterials: []
        });
    });
});

describe('getFieldMaterialsByUps', () => {
    it('should return the initial state', () => {
        expect(getFieldMaterialsByUps(undefined, {})).toEqual({
            loading: false,
            fieldMaterials: [],
            requested: false
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_UPS_REQUEST`', () => {
        const state = 2;
        const ups = 1;
        expect(getFieldMaterialsByUps(undefined, actions.getFieldMaterialsByUpsRequest(state, ups))).toEqual({
            loading: true,
            requested: true,
            fieldMaterials: []
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_UPS_SUCCESS`', () => {
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                area: 34,
                dwellings: 98
            }
        ];
        expect(getFieldMaterialsByUps(undefined, actions.getFieldMaterialsByUpsSuccess(fieldMaterials))).toEqual({
            fieldMaterials,
            loading: false,
            requested: true
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_UPS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getFieldMaterialsByUps(undefined, actions.getFieldMaterialsByUpsError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            fieldMaterials: []
        });
    });
});

describe('getFieldMaterialsByArea', () => {
    it('should return the initial state', () => {
        expect(getFieldMaterialsByArea(undefined, {})).toEqual({
            loading: false,
            requested: false,
            fieldMaterials: []
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_AREA_REQUEST`', () => {
        const state = 6;
        const ups = 1;
        const area = 4;
        expect(getFieldMaterialsByArea(undefined, actions.getFieldMaterialsByAreaRequest(state, ups, area))).toEqual({
            loading: true,
            requested: true,
            fieldMaterials: []
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_AREA_SUCCESS`', () => {
        const fieldMaterials = [
            {
                id: 735,
                block: 4,
                side: 4,
                locality: 'Morón',
                listNumber: 185,
                street: '620-CABILDO',
                cadastralNumber: '285',
                floor: 'PB',
                house: '',
                room: '',
                dwellingTypeCode: 'B',
                sector: '',
                entrance: '',
                building: '',
                description: 'TIMBRE PORTERO'
            }
        ];
        expect(getFieldMaterialsByArea(undefined, actions.getFieldMaterialsByAreaSuccess(fieldMaterials))).toEqual({
            fieldMaterials,
            requested: true,
            loading: false
        });
    });

    it('should handle `GET_FIELD_MATERIALS_BY_AREA_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getFieldMaterialsByArea(undefined, actions.getFieldMaterialsByAreaError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            fieldMaterials: []
        });
    });
});
