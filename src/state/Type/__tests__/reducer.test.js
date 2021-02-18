import rootReducer, {
    getAssignmentsTypes,
    getUpsDropdown,
    getAreasDropdown,
    getSegmentsDropdown,
    getFiles,
    getStatuses,
    getSituations
} from '../reducer';
import * as actions from '../actions';

describe('root reducer', () => {
    it('return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            getAreasDropdown: {
                loading: false,
                areas: [],
                requested: false
            },
            getUpsDropdown: {
                loading: false,
                ups: [],
                requested: false
            },
            getSegmentsDropdown: {
                loading: false,
                segments: [],
                requested: false
            },
            getFiles: {
                loading: false,
                files: [],
                requested: false
            },
            getStatuses: {
                loading: false,
                statuses: [],
                requested: false
            },
            getSituations: {
                loading: false,
                situations: [],
                requested: false
            },
            getAssignmentsTypes: {
                loading: false,
                assignmentsTypes: [],
                requested: false
            }
        });
    });
});

describe('getAreasDropdown', () => {
    it('should return the initial state', () => {
        expect(getAreasDropdown(undefined, {})).toEqual({
            loading: false,
            areas: [],
            requested: false
        });
    });

    it('should handle `GET_AREAS_DROPDOWN_REQUEST`', () => {
        const state = '02';
        const ups = 1;
        expect(getAreasDropdown(undefined, actions.getAreasDropdownRequest(state, ups))).toEqual({
            loading: true,
            requested: true,
            areas: [],
            error: null
        });
    });

    it('should handle `GET_AREAS_DROPDOWN_SUCCESS`', () => {
        const areas = [
            {
                area: 1
            }
        ];
        expect(getAreasDropdown(undefined, actions.getAreasDropdownSuccess(areas))).toEqual({
            areas,
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_AREAS_DROPDOWN_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getAreasDropdown(undefined, actions.getAreasDropdownError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            areas: []
        });
    });
});

describe('getUpsDropdown', () => {
    it('should return the initial state', () => {
        expect(getUpsDropdown(undefined, {})).toEqual({
            loading: false,
            ups: [],
            requested: false
        });
    });

    it('should handle `GET_UPS_REQUEST`', () => {
        const state = '02';
        expect(getUpsDropdown(undefined, actions.getUpsDropdownRequest(state))).toEqual({
            loading: true,
            requested: true,
            ups: [],
            error: null
        });
    });

    it('should handle `GET_UPS_SUCCESS`', () => {
        const ups = [
            {
                ups: 1
            }
        ];
        expect(getUpsDropdown(undefined, actions.getUpsDropdownSuccess(ups))).toEqual({
            loading: false,
            requested: true,
            ups,
            error: null
        });
    });

    it('should handle `GET_UPS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getUpsDropdown(undefined, actions.getUpsDropdownError(error))).toEqual({
            loading: false,
            requested: true,
            ups: [],
            error
        });
    });
});

describe('getSegmentsDropdown', () => {
    it('should return the initial state', () => {
        expect(getSegmentsDropdown(undefined, {})).toEqual({
            loading: false,
            segments: [],
            requested: false
        });
    });

    it('should handle `GET_SEGMENTS_REQUEST`', () => {
        const state = '02';
        const ups = 1;
        const area = 4;
        expect(getSegmentsDropdown(undefined, actions.getSegmentsDropdownRequest(state, ups, area))).toEqual({
            loading: true,
            requested: true,
            segments: [],
            error: null
        });
    });

    it('should handle `GET_SEGMENTS_SUCCESS`', () => {
        const segments = [
            {
                segment: 1
            }
        ];
        expect(getSegmentsDropdown(undefined, actions.getSegmentsDropdownSuccess(segments))).toEqual({
            segments,
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_SEGMENTS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getSegmentsDropdown(undefined, actions.getSegmentsDropdownError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            segments: []
        });
    });
});

describe('getFiles', () => {
    it('should return the initial state', () => {
        expect(getFiles(undefined, {})).toEqual({
            loading: false,
            files: [],
            requested: false
        });
    });

    it('should handle `GET_FILES_REQUEST`', () => {
        expect(getFiles(undefined, actions.getFilesRequest())).toEqual({
            loading: true,
            requested: true,
            files: [],
            error: null
        });
    });

    it('should handle `GET_FILES_SUCCESS`', () => {
        const files = [
            {
                description: 'Archivo 1',
                link: 'http',
                id: 2
            }
        ];
        expect(getFiles(undefined, actions.getFilesSuccess(files))).toEqual({
            files,
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_FILES_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getFiles(undefined, actions.getFilesError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            files: []
        });
    });
});

describe('getStatuses', () => {
    it('should return the initial state', () => {
        expect(getStatuses(undefined, {})).toEqual({
            loading: false,
            statuses: [],
            requested: false
        });
    });

    it('should handle `GET_STATUSES_REQUEST`', () => {
        expect(getStatuses(undefined, actions.getStatusesRequest())).toEqual({
            loading: true,
            requested: true,
            statuses: [],
            error: null
        });
    });

    it('should handle `GET_STATUSES_SUCCESS`', () => {
        const statuses = [
            {
                id: 1,
                label: 'En campo'
            }
        ];
        expect(getStatuses(undefined, actions.getStatusesSuccess(statuses))).toEqual({
            statuses,
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_STATUSES_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getStatuses(undefined, actions.getStatusesError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            statuses: []
        });
    });
});

describe('getSituations', () => {
    it('should return the initial state', () => {
        expect(getSituations(undefined, {})).toEqual({
            loading: false,
            situations: [],
            requested: false
        });
    });

    it('should handle `GET_SITUATIONS_REQUEST`', () => {
        const status = 1;
        expect(getSituations(undefined, actions.getSituationsRequest(status))).toEqual({
            loading: true,
            requested: true,
            situations: [],
            error: null
        });
    });

    it('should handle `GET_SITUATIONS_SUCCESS`', () => {
        const situations = [{
            id: 1,
            label: 'En recuperación'
        }];
        expect(getSituations(undefined, actions.getSituationsSuccess(situations))).toEqual({
            loading: false,
            requested: true,
            situations,
            error: null
        });
    });

    it('should handle `GET_SITUATIONS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getSituations(undefined, actions.getSituationsError(error))).toEqual({
            loading: false,
            requested: true,
            situations: [],
            error
        });
    });
});

describe('getAssignmentsTypes', () => {
    it('should return the initial state', () => {
        expect(getAssignmentsTypes(undefined, {})).toEqual({
            loading: false,
            assignmentsTypes: [],
            requested: false
        });
    });

    it('should handle `GET_ASSIGNMENTS_TYPES_REQUEST`', () => {
        expect(getAssignmentsTypes(undefined, actions.getAssignmentsTypesRequest())).toEqual({
            loading: true,
            requested: true,
            assignmentsTypes: [],
            error: null
        });
    });

    it('should handle `GET_ASSIGNMENTS_TYPES_SUCCESS`', () => {
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
        expect(getAssignmentsTypes(undefined, actions.getAssignmentsTypesSuccess(assignmentsTypes))).toEqual({
            assignmentsTypes,
            loading: false,
            requested: true,
            error: null
        });
    });

    it('should handle `GET_ASSIGNMENTS_TYPES_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getAssignmentsTypes(undefined, actions.getAssignmentsTypesError(error))).toEqual({
            loading: false,
            requested: true,
            error,
            assignmentsTypes: []
        });
    });
});
