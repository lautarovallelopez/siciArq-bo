import * as actions from '../actions';
import * as types from '../types';

describe('getUpsDropdownRequest', () => {
    it('should create an action to get the list of ups', () => {
        const state = '02';
        expect(actions.getUpsDropdownRequest(state)).toEqual({
            type: types.GET_UPS_DROPDOWN_REQUEST,
            state
        });
    });
});

describe('getUpsDropdownSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const ups = [
            {
                ups: 1
            }
        ];
        expect(actions.getUpsDropdownSuccess(ups)).toEqual({
            type: types.GET_UPS_DROPDOWN_SUCCESS,
            ups
        });
    });
});

describe('getUpsDropdownError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getUpsDropdownError(error)).toEqual({
            type: types.GET_UPS_DROPDOWN_ERROR,
            error
        });
    });
});

describe('getAreasDropdownRequest', () => {
    it('should create an action to get the list of areas', () => {
        const state = '02';
        const ups = 1;
        expect(actions.getAreasDropdownRequest(state, ups)).toEqual({
            type: types.GET_AREAS_DROPDOWN_REQUEST,
            state,
            ups
        });
    });
});

describe('getAreasDropdownSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const areas = [
            {
                area: 1
            }
        ];
        expect(actions.getAreasDropdownSuccess(areas)).toEqual({
            type: types.GET_AREAS_DROPDOWN_SUCCESS,
            areas
        });
    });
});

describe('getAreasDropdownError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getAreasDropdownError(error)).toEqual({
            type: types.GET_AREAS_DROPDOWN_ERROR,
            error
        });
    });
});

describe('getSegmentsDropdownRequest', () => {
    it('should create an action to get the list of segments', () => {
        const state = '02';
        const ups = 1;
        const area = 8;
        expect(actions.getSegmentsDropdownRequest(state, ups, area)).toEqual({
            type: types.GET_SEGMENTS_DROPDOWN_REQUEST,
            state,
            ups,
            area
        });
    });
});

describe('getSegmentsDropdownSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const segments = [
            {
                segment: 1
            }
        ];
        expect(actions.getSegmentsDropdownSuccess(segments)).toEqual({
            type: types.GET_SEGMENTS_DROPDOWN_SUCCESS,
            segments
        });
    });
});

describe('getSegmentsDropdownError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getSegmentsDropdownError(error)).toEqual({
            type: types.GET_SEGMENTS_DROPDOWN_ERROR,
            error
        });
    });
});

describe('getFilesRequest', () => {
    it('should create an action to get the list of files', () => {
        expect(actions.getFilesRequest()).toEqual({
            type: types.GET_FILES_REQUEST
        });
    });
});

describe('getFilesSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const files = [
            {
                description: 'Archivo',
                link: 'http://drive.google.com/file',
                id: 5
            }
        ];
        expect(actions.getFilesSuccess(files)).toEqual({
            type: types.GET_FILES_SUCCESS,
            files
        });
    });
});

describe('getFilesError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getFilesError(error)).toEqual({
            type: types.GET_FILES_ERROR,
            error
        });
    });
});

describe('getStatusesRequest', () => {
    it('should create an action to get the list of statuses', () => {
        expect(actions.getStatusesRequest()).toEqual({
            type: types.GET_STATUSES_REQUEST
        });
    });
});

describe('getStatusesSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const statuses = [{
            id: 1,
            label: 'En campo'
        }, {
            id: 2,
            label: 'En gabinete'
        }];
        expect(actions.getStatusesSuccess(statuses)).toEqual({
            type: types.GET_STATUSES_SUCCESS,
            statuses
        });
    });
});

describe('getStatusesError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getStatusesError(error)).toEqual({
            type: types.GET_STATUSES_ERROR,
            error
        });
    });
});

describe('getSituationsRequest', () => {
    it('should create an action to get the list of situations', () => {
        const status = 1;
        expect(actions.getSituationsRequest(status)).toEqual({
            type: types.GET_SITUATIONS_REQUEST,
            status
        });
    });
});

describe('getSituationsSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const situations = [{
            id: 1,
            label: 'Encuestandose'
        }, {
            id: 2,
            label: 'Asignada'
        }];
        expect(actions.getSituationsSuccess(situations)).toEqual({
            type: types.GET_SITUATIONS_SUCCESS,
            situations
        });
    });
});

describe('getSituationsError', () => {
    it('should create an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getSituationsError(error)).toEqual({
            type: types.GET_SITUATIONS_ERROR,
            error
        });
    });
});

describe('getAssignmentsTypesRequest', () => {
    it('should create an action to get the list of files', () => {
        expect(actions.getAssignmentsTypesRequest()).toEqual({
            type: types.GET_ASSIGNMENTS_TYPES_REQUEST
        });
    });
});

describe('getAssignmentsTypesSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const assignmentsTypes = [
            {
                id: 1,
                label: 'Area'
            },
            {
                id: 2,
                label: 'UPS'
            }
        ];
        expect(actions.getAssignmentsTypesSuccess(assignmentsTypes)).toEqual({
            type: types.GET_ASSIGNMENTS_TYPES_SUCCESS,
            assignmentsTypes
        });
    });
});

describe('getAssignmentsTypesError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getAssignmentsTypesError(error)).toEqual({
            type: types.GET_ASSIGNMENTS_TYPES_ERROR,
            error
        });
    });
});
