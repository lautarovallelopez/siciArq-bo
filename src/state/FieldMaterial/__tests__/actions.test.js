import * as actions from '../actions';
import * as types from '../types';

describe('getFieldMaterialsRequest', () => {
    it('should create an action to request get field materials', () => {
        expect(actions.getFieldMaterialsRequest()).toEqual({
            type: types.GET_FIELD_MATERIALS_REQUEST
        });
    });
});

describe('getFieldMaterialsSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        const fieldMaterials = [{
            id: 1,
            state: 6,
            ups: 1,
            areas: 32,
            dwellings: 98
        }];
        expect(actions.getFieldMaterialsSuccess(fieldMaterials)).toEqual({
            type: types.GET_FIELD_MATERIALS_SUCCESS,
            fieldMaterials
        });
    });
});

describe('getFieldMaterialsError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getFieldMaterialsError(error)).toEqual({
            type: types.GET_FIELD_MATERIALS_ERROR,
            error
        });
    });
});

describe('getFieldMaterialsByStateRequest', () => {
    it('should create an action to request get field materials', () => {
        const state = 6;
        expect(actions.getFieldMaterialsByStateRequest(state)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_STATE_REQUEST,
            state
        });
    });
});

describe('getFieldMaterialsByStateSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        const fieldMaterials = [{
            id: 1,
            state: 6,
            ups: 1,
            areas: 32,
            dwellings: 98
        }];
        expect(actions.getFieldMaterialsByStateSuccess(fieldMaterials)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_STATE_SUCCESS,
            fieldMaterials
        });
    });
});

describe('getFieldMaterialsByStateError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getFieldMaterialsByStateError(error)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_STATE_ERROR,
            error
        });
    });
});

describe('getFieldMaterialsByUpsRequest', () => {
    it('should create an action to request get field materials', () => {
        const state = 6;
        const ups = 1;
        expect(actions.getFieldMaterialsByUpsRequest(state, ups)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_UPS_REQUEST,
            state,
            ups
        });
    });
});

describe('getFieldMaterialsByUpsSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        const fieldMaterials = [{
            id: 1,
            state: 6,
            ups: 1,
            area: 32,
            dwellings: 98
        }];
        expect(actions.getFieldMaterialsByUpsSuccess(fieldMaterials)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_UPS_SUCCESS,
            fieldMaterials
        });
    });
});

describe('getFieldMaterialsByUpsError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getFieldMaterialsByUpsError(error)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_UPS_ERROR,
            error
        });
    });
});

describe('getFieldMaterialsByAreaRequest', () => {
    it('should create an action to request get dwellings', () => {
        const state = 6;
        const ups = 1;
        const area = 8;
        expect(actions.getFieldMaterialsByAreaRequest(state, ups, area)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_AREA_REQUEST,
            state,
            ups,
            area
        });
    });
});

describe('getFieldMaterialsByAreaSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        const fieldMaterials = [{
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
        }];
        expect(actions.getFieldMaterialsByAreaSuccess(fieldMaterials)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_AREA_SUCCESS,
            fieldMaterials
        });
    });
});

describe('getFieldMaterialsByAreaError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getFieldMaterialsByAreaError(error)).toEqual({
            type: types.GET_FIELD_MATERIALS_BY_AREA_ERROR,
            error
        });
    });
});
