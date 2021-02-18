import isEmpty from 'lodash/isEmpty';

import roles from '@constants/roles';

import rootReducer, {
    getAssignments,
    updateAssignments
} from '../reducer';
import * as actions from '../actions';

describe('root reducer', () => {
    it('return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({
            getAssignments: {
                loading: false,
                assignments: [],
                requested: false
            },
            updateAssignments: {
                loading: false,
                requested: false
            }
        });
    });
});

describe('getAssignments', () => {
    it('should return the initial state', () => {
        expect(getAssignments(undefined, {})).toEqual({
            loading: false,
            assignments: [],
            requested: false
        });
    });

    it('should handle `GET_ASSIGNMENTS_REQUEST`', () => {
        const state = '02';
        const ups = 1;
        const area = 2;
        const segment = 5;
        expect(getAssignments(undefined, actions.getAssignmentsRequest({
            state, ups, area, segment
        }))).toEqual({
            loading: true,
            requested: true,
            assignments: [],
            count: undefined,
            error: null
        });
    });

    it('should handle `GET_ASSIGNMENTS_SUCCESS`', () => {
        const assignments = [
            {
                state: 2,
                ups: 1,
                area: 2,
                segment: 5
            }
        ];
        const count = 1;
        expect(getAssignments(undefined, actions.getAssignmentsSuccess(assignments, count))).toEqual({
            loading: false,
            requested: true,
            assignments,
            count,
            error: null
        });
    });

    it('should handle `GET_ASSIGNMENTS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(getAssignments(undefined, actions.getAssignmentsError(error))).toEqual({
            loading: false,
            requested: true,
            assignments: [],
            error
        });
    });

    describe('when the assignment provided has teamLeader and does not have pollster', () => {
        it('should handle `UPDATE_ASSIGNMENT`', () => {
            const assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 4
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 8
                }
            ];
            const assignment = {
                id: 2,
                state: 2,
                ups: 1,
                area: 8,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000'
            };
            expect(getAssignments({assignments}, actions.updateAssignment(assignment))).toEqual({
                assignments: [
                    {
                        id: 1,
                        state: 2,
                        ups: 1,
                        area: 4
                    },
                    {
                        id: 2,
                        state: 2,
                        ups: 1,
                        area: 8,
                        teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                        originalData: {
                            id: 2,
                            state: 2,
                            ups: 1,
                            area: 8
                        },
                        pollster: undefined,
                        subCoordinator: undefined,
                        toAssign: true
                    }
                ]
            });
        });
    });

    describe('when the assignment provided has pollster and does not have teamLeader', () => {
        it('should handle `UPDATE_ASSIGNMENT`', () => {
            const assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 4
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 8
                }
            ];
            const assignment = {
                id: 2,
                state: 2,
                ups: 1,
                area: 8,
                pollster: '123e4567-e89b-12d3-a456-426614174000'
            };
            expect(getAssignments({assignments}, actions.updateAssignment(assignment))).toEqual({
                assignments: [
                    {
                        id: 1,
                        state: 2,
                        ups: 1,
                        area: 4
                    },
                    {
                        id: 2,
                        state: 2,
                        ups: 1,
                        area: 8,
                        pollster: '123e4567-e89b-12d3-a456-426614174000',
                        originalData: {
                            id: 2,
                            state: 2,
                            ups: 1,
                            area: 8
                        },
                        teamLeader: undefined,
                        subCoordinator: undefined,
                        toAssign: false
                    }
                ]
            });
        });
    });

    describe('when the assignment provided has sub-coordinator', () => {
        it('should handle `UPDATE_ASSIGNMENT`', () => {
            const assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 4
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 8
                }
            ];
            const assignment = {
                id: 2,
                state: 2,
                ups: 1,
                area: 8,
                subCoordinator: '123e4567-e89b-12d3-a456-426614174000'
            };
            expect(getAssignments({assignments}, actions.updateAssignment(assignment))).toEqual({
                assignments: [
                    {
                        id: 1,
                        state: 2,
                        ups: 1,
                        area: 4
                    },
                    {
                        id: 2,
                        state: 2,
                        ups: 1,
                        area: 8,
                        subCoordinator: '123e4567-e89b-12d3-a456-426614174000',
                        originalData: {
                            id: 2,
                            state: 2,
                            ups: 1,
                            area: 8
                        },
                        teamLeader: undefined,
                        pollster: undefined,
                        toAssign: true
                    }
                ]
            });
        });
    });

    describe('when the assignment provided has role', () => {
        it('should handle `UPDATE_ASSIGNMENT`', () => {
            const assignments = [
                {
                    id: 1,
                    state: 2,
                    ups: 1,
                    area: 4
                },
                {
                    id: 2,
                    state: 2,
                    ups: 1,
                    area: 8
                }
            ];
            const assignment = {
                id: 2,
                state: 2,
                ups: 1,
                area: 8,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                role: roles.TEAM_LEADER
            };
            expect(getAssignments({assignments}, actions.updateAssignment(assignment))).toEqual({
                assignments: [
                    {
                        id: 1,
                        state: 2,
                        ups: 1,
                        area: 4
                    },
                    {
                        id: 2,
                        state: 2,
                        ups: 1,
                        area: 8,
                        originalData: {
                            id: 2,
                            state: 2,
                            ups: 1,
                            area: 8
                        },
                        teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                        toAssign: true,
                        role: roles.TEAM_LEADER
                    }
                ]
            });
        });
    });

    it('should handle `UNSET_TO_ASSIGN`', () => {
        const assignments = [
            {
                state: 2,
                area: 1,
                ups: 6,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                toAssign: true
            },
            {
                state: 2,
                area: 1,
                ups: 3
            }
        ];
        expect(getAssignments({assignments}, actions.unsetToAssign())).toEqual({
            assignments: [
                {
                    state: 2,
                    area: 1,
                    ups: 6,
                    teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                    originalData: null,
                    toAssign: false
                },
                {
                    state: 2,
                    area: 1,
                    ups: 3,
                    originalData: null,
                    toAssign: false
                }
            ]
        });
    });
});

describe('updateAssignments', () => {
    it('should return the initial state', () => {
        expect(updateAssignments(undefined, {})).toEqual({
            loading: false,
            requested: false
        });
    });

    it('should handle `UPDATE_ASSIGNMENTS_REQUEST`', () => {
        const assignments = [
            {
                id: '1',
                state: 2,
                ups: 1,
                area: 4,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000'
            },
            {
                state: 2,
                ups: 1,
                area: 8,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                id: '2'
            },
            {
                state: 2,
                ups: 1,
                area: 8,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                user: '123e4567-e89b-12d3-a456-426614174000',
                id: '3'
            },
            {
                state: 2,
                ups: 1,
                area: 8,
                teamLeader: '123e4567-e89b-12d3-a456-426614174000',
                user: '123e4567-e89b-12d3-a456-426614174000',
                id: '4',
                role: roles.TEAM_LEADER
            }
        ];
        expect(updateAssignments(undefined, actions.updateAssignmentsRequest(assignments))).toEqual({
            loading: true,
            requested: true,
            assignments: assignments.map(assign => ({
                state: assign.state,
                ups: assign.ups,
                area: assign.area,
                ...(assign.segment && {segment: assign.segment}),
                ...(assign.role && {user: assign.role === roles.TEAM_LEADER ? assign.teamLeader : assign.pollster}),
                id: assign.id,
                teamLeader: isEmpty(assign.teamLeader) ? null : assign.teamLeader,
                pollster: isEmpty(assign.pollster) ? null : assign.pollster,
                subCoordinator: isEmpty(assign.subCoordinator) ? null : assign.subCoordinator
            }))
        });
    });

    it('should handle `UPDATE_ASSIGNMENTS_SUCCESS`', () => {
        expect(updateAssignments(undefined, actions.updateAssignmentsSuccess())).toEqual({
            loading: false,
            requested: true,
            assignments: null
        });
    });

    it('should handle `UPDATE_ASSIGNMENTS_ERROR`', () => {
        const error = new Error('Oops!');
        expect(updateAssignments(undefined, actions.updateAssignmentsError(error))).toEqual({
            loading: false,
            requested: true,
            error
        });
    });
});
