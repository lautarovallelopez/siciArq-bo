import roles from '@constants/roles';
import {operations, situations} from '@constants';

import {getOptions, hasOptions} from '../reviewOperations';

describe('getOptions', () => {
    let label;

    describe('when label is FINISH', () => {
        beforeEach(() => {
            label = operations.FINISH;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
                situations: [situations.FINISHED_IN_FIELD],
                label
            });
        });
    });

    describe('when label is APPROVE', () => {
        beforeEach(() => {
            label = operations.APPROVE;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR],
                situations: [situations.FINISHED_IN_OFFICE],
                label
            });
        });
    });

    describe('when label is REASSIGN', () => {
        beforeEach(() => {
            label = operations.REASSIGN;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
                situations: [situations.ON_SURVEYING, situations.ON_RECOVERY, situations.ON_SUPERVISING, situations.CLOSED_IN_FIELD],
                label
            });
        });
    });

    describe('when label is REOPEN', () => {
        beforeEach(() => {
            label = operations.REOPEN;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
                situations: [situations.FINISHED_IN_FIELD, situations.FINISHED_IN_OFFICE],
                label
            });
        });
    });

    describe('when label is RECOVER', () => {
        beforeEach(() => {
            label = operations.RECOVER;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR, roles.TEAM_LEADER],
                situations: [situations.FINISHED_IN_FIELD],
                label
            });
        });
    });

    describe('when label is SUPERVISE', () => {
        beforeEach(() => {
            label = operations.SUPERVISE;
        });

        it('should return the option described for the operation', () => {
            expect(getOptions(label)).toStrictEqual({
                roles: [roles.NATIONAL_COORDINATOR, roles.COORDINATOR, roles.SUB_COORDINATOR],
                situations: [situations.FINISHED_IN_FIELD, situations.FINISHED_IN_OFFICE],
                label
            });
        });
    });

    describe('when label is not a valid operation', () => {
        beforeEach(() => {
            label = 'anything else';
        });

        it('must return null', () => {
            expect(getOptions(label)).toBeNull();
        });
    });
});

describe('hasOptions', () => {
    let role;
    let situation;

    describe('when role and situation are included in some enabled operation', () => {
        beforeEach(() => {
            role = roles.NATIONAL_COORDINATOR;
            situation = situations.ON_SURVEYING;
        });

        it('should return true', () => {
            expect(hasOptions(role, situation)).toBe(true);
        });
    });

    describe('when role is not included in any enabled operation', () => {
        beforeEach(() => {
            role = roles.POLLSTER;
            situation = situations.ON_SURVEYING;
        });

        it('must return false', () => {
            expect(hasOptions(role, situation)).toBe(false);
        });
    });

    describe('when situation is not included in any enabled operation', () => {
        beforeEach(() => {
            role = roles.NATIONAL_COORDINATOR;
            situation = situations.UNASSIGNED;
        });

        it('should return false', () => {
            expect(hasOptions(role, situation)).toBe(false);
        });
    });
});
