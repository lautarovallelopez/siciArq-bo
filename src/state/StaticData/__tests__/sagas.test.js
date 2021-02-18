import {call, put} from 'redux-saga/effects';

import * as sagas from '@state/StaticData/sagas';

import StaticDataService from '@services/staticData';
import {getStaticDataSuccess, getStaticDataError} from '@state/StaticData/actions';

describe('getStaticData', () => {
    it('handles successful attempts', () => {
        const staticData = {
            roles: []
        };
        const saga = sagas.getStaticData();
        expect(saga.next()).toEqual({
            done: false,
            value: call(StaticDataService.fetch)
        });
        expect(saga.next(staticData)).toEqual({
            done: false,
            value: put(getStaticDataSuccess(staticData))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const saga = sagas.getStaticData();
        expect(saga.next()).toEqual({
            done: false,
            value: call(StaticDataService.fetch)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(getStaticDataError(error))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
