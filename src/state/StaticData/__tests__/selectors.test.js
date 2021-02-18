import * as selectors from '../selectors';

describe('getRoles', () => {
    it('should return an array of roles', () => {
        const state = {
            staticData: {
                roles: [
                    {
                        _id: 'cn',
                        name: 'Coordinador Nacional'
                    }
                ]
            }
        };
        expect(selectors.getRoles(state)).toEqual([
            {
                _id: 'cn',
                name: 'Coordinador Nacional'
            }
        ]);
    });
});

describe('getRoleByName', () => {
    it('should return a role name that matches with the id provided', () => {
        const state = {
            staticData: {
                roles: [
                    {
                        id: 'cn',
                        name: 'Coordinador Nacional'
                    }
                ]
            }
        };
        expect(selectors.getRoleByName(state, 'cn')).toBe('Coordinador Nacional');
    });
});

describe('getStates', () => {
    it('should return an array of states', () => {
        const state = {
            staticData: {
                states: [
                    {
                        _id: '02',
                        name: 'Buenos Aires'
                    }
                ]
            }
        };
        expect(selectors.getStates(state)).toEqual([
            {
                _id: '02',
                name: 'Buenos Aires'
            }
        ]);
    });
});

describe('getStateName', () => {
    it('should return the name of state that matches with the id provided', () => {
        const state = {
            staticData: {
                states: [
                    {
                        _id: '02',
                        name: 'Buenos Aires'
                    }
                ]
            }
        };
        expect(selectors.getStateName(state, '02')).toBe('Buenos Aires');
    });
});

describe('getRolesToFilter', () => {
    it('should return an array of roles', () => {
        const state = {
            session: {
                user: {
                    id: '1',
                    roles: ['cn']
                }
            },
            staticData: {
                roles: [
                    {
                        id: 'cn',
                        name: 'Coordinador Nacional'
                    },
                    {
                        id: 'po',
                        name: 'Encuestador'
                    }
                ]
            }
        };

        expect(selectors.getRolesToFilter(state)).toEqual([
            {
                id: 'cn',
                name: 'Coordinador Nacional'
            },
            {
                id: 'po',
                name: 'Encuestador'
            }
        ]);
    });
});
