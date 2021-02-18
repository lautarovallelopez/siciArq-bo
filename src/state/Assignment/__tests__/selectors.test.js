import assignmentTypes from '@constants/assignmentTypes';
import * as selectors from '../selectors';

describe('getAssignments', () => {
    it('returns the state of the `getPropertiesDropdown` request', () => {
        const state = {
            assignment: {
                getAssignments: {
                    loading: true
                }
            }
        };
        expect(selectors.getAssignments(state)).toEqual({loading: true});
    });
});

describe('getAssignmentsData', () => {
    it('returns the data of the `getAssignments` request', () => {
        const state = {
            assignment: {
                getAssignments: {
                    assignments: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getAssignmentsData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getAssignmentsLoading', () => {
    it('should return the `loading` state of `getAssignments` request', () => {
        const state = {
            assignment: {
                getAssignments: {
                    loading: true
                }
            }
        };
        expect(selectors.getAssignmentsLoading(state)).toBe(true);
    });
});

describe('getAssignmentsRequested', () => {
    it('should return the `requested` state of `getAssignments` request', () => {
        const state = {
            assignment: {
                getAssignments: {
                    requested: true
                }
            }
        };
        expect(selectors.getAssignmentsRequested(state)).toBe(true);
    });
});

describe('getAssignmentsCount', () => {
    it('should return the `count` state of `getAssignments` request', () => {
        const state = {
            assignment: {
                getAssignments: {
                    count: 2
                }
            }
        };
        expect(selectors.getAssignmentsCount(state)).toBe(2);
    });
});

describe('getAssignmentsPending', () => {
    describe('when assignments in an empty array', () => {
        it('should return an empty array', () => {
            const state = {
                assignment: {
                    getAssignments: {
                        assignments: []
                    }
                }
            };
            expect(selectors.getAssignmentsPending(state)).toEqual([]);
        });
    });

    describe('when assignments is not an empty array', () => {
        it('should return the list of assignments filtered by `toAssign` field', () => {
            const state = {
                assignment: {
                    getAssignments: {
                        assignments: [
                            {
                                id: 1,
                                toAssign: true
                            },
                            {
                                id: 2,
                                toAssign: false
                            }
                        ]
                    }
                }
            };
            expect(selectors.getAssignmentsPending(state)).toEqual([
                {
                    id: 1,
                    toAssign: true
                }
            ]);
        });
    });
});

describe('getAssignmentsPendingWithUserName', () => {
    it('should return the list of assignments pending with the user description', () => {
        const state = {
            assignment: {
                getAssignments: {
                    assignments: [
                        {
                            id: 1,
                            state: 6,
                            ups: 1,
                            area: 4,
                            teamLeader: 1,
                            toAssign: true
                        },
                        {
                            id: 2,
                            state: 6,
                            ups: 1,
                            area: 8,
                            teamLeader: 1,
                            pollster: 2,
                            toAssign: true
                        },
                        {
                            id: 3,
                            state: 66,
                            ups: 1,
                            area: 8,
                            toAssign: true,
                            subCoordinator: 3
                        }
                    ]
                }
            },
            user: {
                teamLeaders: [
                    {
                        id: 1,
                        name: 'user',
                        surname: 'test'
                    }
                ],
                pollsters: [
                    {
                        id: 2,
                        name: 'pollster',
                        surname: 'test'
                    }
                ],
                subCoordinators: [
                    {
                        id: 3,
                        name: 'subCoordinator',
                        surname: 'SubA'
                    }
                ]
            }
        };
        expect(selectors.getAssignmentsPendingWithUserName(state)).toEqual([
            {
                id: 1,
                state: 6,
                ups: 1,
                area: 4,
                teamLeader: 'test, user',
                pollster: 'Sin definir',
                subCoordinator: 'Sin definir',
                toAssign: true
            },
            {
                id: 2,
                state: 6,
                ups: 1,
                area: 8,
                teamLeader: 'test, user',
                pollster: 'test, pollster',
                subCoordinator: 'Sin definir',
                toAssign: true
            },
            {
                id: 3,
                state: 66,
                ups: 1,
                area: 8,
                teamLeader: 'Sin definir',
                pollster: 'Sin definir',
                subCoordinator: 'SubA, subCoordinator',
                toAssign: true
            }
        ]);
    });
});

describe('getAssignmentsToUpdateLoading', () => {
    it('should return the `loading` state of `updateAssignments` request', () => {
        const state = {
            assignment: {
                updateAssignments: {
                    loading: true
                }
            }
        };
        expect(selectors.getAssignmentsToUpdateLoading(state)).toBe(true);
    });
});

describe('validateAddressAssignmentType', () => {
    let state;
    describe('when assignmentType is by `address`', () => {
        beforeEach(() => {
            state = {
                common: {
                    searchParams: {
                        assignmentType: assignmentTypes.ADDRESS
                    }
                }
            };
        });

        it('should return `true`', () => {
            expect(selectors.validateAddressAssignmentType(state)).toBe(true);
        });
    });

    describe('when assignmentType is by `reassignment`', () => {
        beforeEach(() => {
            state = {
                common: {
                    searchParams: {
                        assignmentType: assignmentTypes.REASSIGNMENT
                    }
                }
            };
        });

        it('should return `true`', () => {
            expect(selectors.validateAddressAssignmentType(state)).toBe(true);
        });
    });

    describe('when assignmentType is not by `reassignment` and `address`', () => {
        beforeEach(() => {
            state = {
                common: {
                    searchParams: {
                        assignmentType: assignmentTypes.AREA
                    }
                }
            };
        });

        it('should return `false`', () => {
            expect(selectors.validateAddressAssignmentType(state)).toBe(false);
        });
    });
});

describe('displayAssignmentsTable', () => {
    let assignmentType;
    describe('when `assignmentType` is by `address`', () => {
        beforeEach(() => {
            assignmentType = assignmentTypes.ADDRESS;
        });

        it('should return `true` or `false` depends on provided values', () => {
            const state = {
                assignment: {
                    getAssignments: {
                        requested: true,
                        loading: false,
                        assignments: [
                            {
                                id: 1
                            }
                        ]
                    }
                },
                user: {
                    loading: false
                },
                common: {
                    searchParams: {
                        ups: 1,
                        area: 4,
                        assignmentType
                    }
                }
            };
            expect(selectors.displayAssignmentsTable(state)).toBe(true);
        });
    });

    describe('when `assignmentType` is not by `address`', () => {
        beforeEach(() => {
            assignmentType = assignmentTypes.AREA;
        });

        it('should return `true` or `false` depends on provided values', () => {
            const state = {
                assignment: {
                    getAssignments: {
                        requested: true,
                        loading: false,
                        assignments: [
                            {
                                id: 1
                            }
                        ]
                    }
                },
                user: {
                    loading: false
                },
                common: {
                    searchParams: {
                        ups: 1,
                        area: 4,
                        assignmentType
                    }
                }
            };
            expect(selectors.displayAssignmentsTable(state)).toBe(true);
        });
    });

    describe('when `assignmentType` is by `ups`', () => {
        beforeEach(() => {
            assignmentType = assignmentTypes.UPS;
        });

        it('should return `true` or `false` depends on provided values', () => {
            const state = {
                assignment: {
                    getAssignments: {
                        requested: true,
                        loading: false,
                        assignments: [
                            {
                                id: 1
                            }
                        ]
                    }
                },
                user: {
                    loading: false
                },
                common: {
                    searchParams: {
                        area: 4,
                        assignmentType
                    }
                }
            };
            expect(selectors.displayAssignmentsTable(state)).toBe(true);
        });
    });
});

describe('isValidGetAssignments', () => {
    describe('when assignment type is by area', () => {
        it('should return `true`', () => {
            const state = {
                common: {
                    searchParams: {
                        state: 6,
                        ups: 1,
                        assignmentType: assignmentTypes.AREA
                    }
                }
            };

            expect(selectors.isValidGetAssignments(state)).toBe(true);
        });
    });

    describe('when assignment type is by reassignment', () => {
        it('should return `false`', () => {
            const state = {
                common: {
                    searchParams: {
                        state: 6,
                        ups: 1,
                        assignmentType: assignmentTypes.REASSIGNMENT
                    }
                }
            };

            expect(selectors.isValidGetAssignments(state)).toBe(false);
        });
    });

    describe('when assignmentType is by UPS', () => {
        it('should return `true`', () => {
            const state = {
                common: {
                    searchParams: {
                        state: 6,
                        assignmentType: assignmentTypes.UPS
                    }
                }
            };

            expect(selectors.isValidGetAssignments(state)).toBe(true);
        });
    });
});
