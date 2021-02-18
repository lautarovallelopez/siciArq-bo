import * as selectors from '../selectors';

describe('getUser', () => {
    it('should return an user', () => {
        const state = {
            user: {
                currentUser: {
                    id: 1
                }
            }
        };
        expect(selectors.getUser(state)).toEqual({id: 1});
    });
});

describe('getPage', () => {
    it('should return the page number', () => {
        const state = {
            user: {
                page: 1
            }
        };
        expect(selectors.getPage(state)).toBe(1);
    });
});

describe('getUsers', () => {
    describe('when users size is 0', () => {
        it('should return users as `undefined` and total in zero', () => {
            const state = {
                user: {
                    users: [],
                    total: 0
                }
            };
            expect(selectors.getUsers(state)).toEqual({users: undefined, total: 0});
        });
    });

    describe('when users size is greater than 0', () => {
        it('should return a list of users and its total', () => {
            const state = {
                user: {
                    users: [
                        {
                            id: 1,
                            roles: ['cn'],
                            attributes: {
                                stateId: '02'
                            }
                        }
                    ],
                    total: 1
                },
                staticData: {
                    roles: [
                        {
                            id: 'cn',
                            name: 'Coordinador Nacional'
                        }
                    ],
                    states: [
                        {
                            _id: '02',
                            name: 'Buenos Aires'
                        }
                    ]
                }
            };
            expect(selectors.getUsers(state)).toEqual({
                users: [
                    {
                        id: 1,
                        roles: ['cn'],
                        role: 'Coordinador Nacional',
                        state: 'Buenos Aires',
                        attributes: {
                            stateId: '02'
                        }
                    }
                ],
                total: 1
            });
        });
    });
});

describe('getUsersList', () => {
    const state = {};
    beforeEach(() => {
        state.staticData = {
            roles: [{
                id: 'cn',
                name: 'Coordinador Nacional'
            }, {
                id: 'tl',
                name: 'Jefe de equipo'
            }],
            states: [{
                _id: '02',
                name: 'Buenos Aires'
            }]
        };
        state.session = {
            user: {
                id: 4
            }
        };
    });

    describe('when users are empty', () => {
        beforeEach(() => {
            state.user = {
                users: [],
                total: 0
            };
        });

        it('should return an empty array', () => {
            expect(selectors.getUsersList(state)).toEqual([]);
        });
    });

    describe('when users are not undefined', () => {
        beforeEach(() => {
            state.user = {
                users: [{
                    id: 1,
                    surname: 'Bravo',
                    name: 'Yankee',
                    roles: ['cn']
                }, {
                    id: 2,
                    surname: 'Alpha',
                    name: 'Zulu',
                    roles: ['cn']
                }, {
                    id: 3,
                    surname: 'Charlie',
                    name: 'X-Ray',
                    roles: ['tl']
                }],
                total: 0
            };
        });

        it('should return the users collection', () => {
            expect(selectors.getUsersList(state)).toEqual([{
                id: 2,
                label: 'Alpha, Zulu - Coordinador Nacional'
            }, {
                id: 1,
                label: 'Bravo, Yankee - Coordinador Nacional'
            }, {
                id: 3,
                label: 'Charlie, X-Ray - Jefe de equipo'
            }]);
        });

        describe('when the users collection includes session user', () => {
            beforeEach(() => {
                state.session.user.id = 1;
            });

            it('should return the user in the first position with isSessionUser as true', () => {
                expect(selectors.getUsersList(state)).toEqual([{
                    id: 1,
                    label: 'Asignarme a mí - Coordinador Nacional'
                }, {
                    id: 2,
                    label: 'Alpha, Zulu - Coordinador Nacional'
                }, {
                    id: 3,
                    label: 'Charlie, X-Ray - Jefe de equipo'
                }]);
            });
        });

        describe('when the users collection includes redundant user', () => {
            it('should filter redundant user from the users list', () => {
                const redundantUser = 2;

                expect(selectors.getUsersList(state, redundantUser)).toEqual([{
                    id: 1,
                    label: 'Bravo, Yankee - Coordinador Nacional'
                }, {
                    id: 3,
                    label: 'Charlie, X-Ray - Jefe de equipo'
                }]);
            });
        });
    });
});

describe('getLoading', () => {
    let loading;
    describe('when is loading', () => {
        beforeEach(() => {
            loading = true;
        });

        it('should return `true`', () => {
            const state = {
                user: {
                    loading
                }
            };

            expect(selectors.getLoading(state)).toBe(true);
        });
    });

    describe('when is not loading', () => {
        beforeEach(() => {
            loading = false;
        });

        it('should return `false`', () => {
            const state = {
                user: {
                    loading
                }
            };

            expect(selectors.getLoading(state)).toBe(false);
        });
    });
});

describe('getTeamLeaders', () => {
    it('should return a list of team leaders', () => {
        const state = {
            user: {
                teamLeaders: [
                    {
                        id: 1,
                        roles: ['tl']
                    },
                    {
                        id: 2,
                        roles: ['tl']
                    }
                ]
            }
        };
        expect(selectors.getTeamLeaders(state)).toEqual([
            {
                id: 1,
                roles: ['tl']
            },
            {
                id: 2,
                roles: ['tl']
            }
        ]);
    });
});

describe('getPollsters', () => {
    it('should return a list of pollsters', () => {
        const state = {
            user: {
                pollsters: [
                    {
                        id: 1,
                        roles: ['po']
                    },
                    {
                        id: 2,
                        roles: ['po']
                    }
                ]
            }
        };
        expect(selectors.getPollsters(state)).toEqual([
            {
                id: 1,
                roles: ['po']
            },
            {
                id: 2,
                roles: ['po']
            }
        ]);
    });
});

describe('getFullUser', () => {
    it('should return an user with an attribute called `role`', () => {
        const state = {
            user: {
                currentUser: {
                    id: 1,
                    roles: ['cn']
                }
            },
            staticData: {
                roles: [
                    {
                        id: 'cn',
                        name: 'Coordinador Nacional'
                    }
                ]
            }
        };

        expect(selectors.getFullUser(state)).toEqual({
            id: 1,
            roles: ['cn'],
            role: 'Coordinador Nacional'
        });
    });
});

describe('getSubCoordinators', () => {
    it('should return a list of sub-coordinators', () => {
        const state = {
            user: {
                subCoordinators: [
                    {
                        id: 1,
                        roles: ['sp']
                    },
                    {
                        id: 2,
                        roles: ['sp']
                    }
                ]
            }
        };
        expect(selectors.getSubCoordinators(state)).toEqual([
            {
                id: 1,
                roles: ['sp']
            },
            {
                id: 2,
                roles: ['sp']
            }
        ]);
    });
});
