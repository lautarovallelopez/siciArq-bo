import roles from '@constants/roles';
import * as selectors from '../selectors';

describe('getUser', () => {
    it('should return an user', () => {
        const state = {
            session: {
                user: {
                    id: 1,
                    username: 'userTest'
                }
            }
        };

        expect(selectors.getUser(state)).toEqual({
            id: 1,
            username: 'userTest'
        });
    });
});

describe('getUserRole', () => {
    describe('when user has defined role', () => {
        it('should return user role value', () => {
            const state = {
                session: {
                    user: {
                        roles: [roles.SUB_COORDINATOR]
                    }
                }
            };
            expect(selectors.getUserRole(state)).toBe(roles.SUB_COORDINATOR);
        });
    });

    describe('when user has not defined role', () => {
        it('should return `undefined`', () => {
            const state = {
                session: {
                    user: {
                        roles: undefined
                    }
                }
            };
            expect(selectors.getUserRole(state)).toBe(undefined);
        });
    });
});

describe('getUserState', () => {
    describe('when user has defined `stateId`', () => {
        it('should return user `stateId` value', () => {
            const state = {
                session: {
                    user: {
                        attributes: {
                            stateId: '06'
                        }
                    }
                }
            };
            expect(selectors.getUserState(state)).toBe('06');
        });
    });

    describe('when user has not defined `stateId`', () => {
        it('should return `undefined`', () => {
            const state = {
                session: {
                    user: {
                        attributes: {
                            stateId: undefined
                        }
                    }
                }
            };
            expect(selectors.getUserState(state)).toBe(undefined);
        });
    });
});

describe('isSubCoordinator', () => {
    describe('when user has role subCoordinator', () => {
        it('should return `true`', () => {
            const state = {
                session: {
                    user: {
                        roles: [roles.SUB_COORDINATOR]
                    }
                }
            };
            expect(selectors.isSubCoordinator(state)).toBe(true);
        });
    });

    describe('when user has not role subCoordinator', () => {
        it('should return `false`', () => {
            const state = {
                session: {
                    user: {
                        roles: [roles.POLLSTER]
                    }
                }
            };
            expect(selectors.isSubCoordinator(state)).toBe(false);
        });
    });
});

describe('getLoading', () => {
    it('should return loading value', () => {
        const state = {
            session: {
                loading: true
            }
        };

        expect(selectors.getLoading(state)).toBe(true);
    });
});

describe('getToken', () => {
    it('should return a token', () => {
        const state = {
            session: {
                token: 'ladnaldkandlj'
            }
        };

        expect(selectors.getToken(state)).toBe('ladnaldkandlj');
    });
});

describe('getError', () => {
    it('should return an error', () => {
        const state = {
            session: {
                error: 'An error occurred'
            }
        };

        expect(selectors.getError(state)).toBe('An error occurred');
    });
});
