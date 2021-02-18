import {call, put} from 'redux-saga/effects';

import FieldMaterialService from '@services/fieldMaterial';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';

import * as actions from '../actions';
import * as sagas from '../sagas';

describe('getFieldMaterials', () => {
    it('handles successful attempts', () => {
        const saga = sagas.getFieldMaterials();
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                ups: 1,
                areas: 121,
                dwellings: 321
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getFieldMaterials)
        });
        expect(saga.next(fieldMaterials)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsSuccess(fieldMaterials))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const saga = sagas.getFieldMaterials();
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getFieldMaterials)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la muestra, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getFieldMaterialsByState', () => {
    it('handles successful attempts', () => {
        const state = 6;
        const action = actions.getFieldMaterialsByStateRequest(state);
        const saga = sagas.getFieldMaterialsByState(action);
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                ups: 1,
                areas: 121,
                dwellings: 321
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByState, state)
        });
        expect(saga.next(fieldMaterials)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByStateSuccess(fieldMaterials))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = 6;
        const action = actions.getFieldMaterialsByStateRequest(state);
        const saga = sagas.getFieldMaterialsByState(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByState, state)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByStateError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la muestra de ups, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getFieldMaterialsByUps', () => {
    it('handles successful attempts', () => {
        const state = 6;
        const ups = 1;
        const action = actions.getFieldMaterialsByUpsRequest(state, ups);
        const saga = sagas.getFieldMaterialsByUps(action);
        const fieldMaterials = [
            {
                id: 1,
                state: 6,
                ups: 1,
                area: 121,
                dwellings: 321
            }
        ];
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByUps, state, ups)
        });
        expect(saga.next(fieldMaterials)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByUpsSuccess(fieldMaterials))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = 6;
        const ups = 1;
        const action = actions.getFieldMaterialsByUpsRequest(state, ups);
        const saga = sagas.getFieldMaterialsByUps(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByUps, state, ups)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByUpsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la muestra de areas, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getDwellings', () => {
    it('handles successful attempts', () => {
        const state = 6;
        const ups = 1;
        const area = 247;
        const action = actions.getFieldMaterialsByAreaRequest(state, ups, area);
        const saga = sagas.getFieldMaterialsByArea(action);
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
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByArea, state, ups, area)
        });
        expect(saga.next(fieldMaterials)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByAreaSuccess(fieldMaterials))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = 6;
        const ups = 1;
        const area = 247;
        const action = actions.getFieldMaterialsByAreaRequest(state, ups, area);
        const saga = sagas.getFieldMaterialsByArea(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(FieldMaterialService.getByArea, state, ups, area)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getFieldMaterialsByAreaError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se han podido traer la muestra de viviendas, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
