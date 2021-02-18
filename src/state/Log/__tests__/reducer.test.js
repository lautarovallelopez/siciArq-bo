import rootReducer, {getLogs} from '../reducer';
import * as actions from '../actions';
import roles from '../../../constants/roles';

describe('root reducer', () => {
    it('return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            getLogs: {
                loading: false,
                logs: [],
                count: undefined,
                requested: false
            }
        });
    });
});

describe('getLogs', () => {
    it('should return the initial state', () => {
        expect(getLogs(undefined, {})).toEqual({
            loading: false,
            logs: [],
            count: undefined,
            requested: false
        });
    });

    it('should handle `GET_LOGS_REQUEST`', () => {
        const state = 2;
        const term = 'car';
        const role = roles.SUB_COORDINATOR;
        const fromDate = new Date();
        const toDate = new Date();
        expect(getLogs(undefined, actions.getLogsRequest({
            state, term, role, fromDate, toDate
        }))).toEqual({
            loading: true,
            requested: true,
            logs: [],
            count: undefined,
            error: null
        });
    });

    it('should handle `GET_LOGS_SUCCESS`', () => {
        const logs = [{
            id: 1
        }];
        const count = 1;
        expect(getLogs(undefined, actions.getLogsSuccess(logs, count))).toEqual({
            loading: false,
            requested: true,
            logs,
            count,
            error: null
        });
    });

    it('should handle `GET_LOGS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getLogs(undefined, actions.getLogsError(error))).toEqual({
            loading: false,
            requested: true,
            logs: [],
            count: undefined,
            error
        });
    });
});
