import {getByTestId} from '@testing-library/react';

import HouseholdChapters from './HouseholdChapters';

describe('<HouseholdChapters>', () => {
    let props;
    const getComponent = () => render(HouseholdChapters, props);
    beforeEach(() => {
        props = {
            index: 0,
            household: {}
        };
    });
    afterEach(tearDown);

    describe('when `household.householdDetection` is defined', () => {
        beforeEach(() => {
            props.household = {
                householdDetection: {
                    status: 2
                }
            };
        });

        it('should render householdDetection chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'household-detection-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `household.dwellingCharacteristics` is defined', () => {
        beforeEach(() => {
            props.household = {
                dwellingCharacteristics: {
                    status: 2
                }
            };
        });

        it('should render dwellingCharacteristics chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'dwelling-characteristics-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `household.householdCharacteristics` is defined', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                householdCharacteristics: {
                    status: 2
                }
            };
        });

        it('should render householdCharacteristics chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'household-characteristics-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `household.householdIncome` is defined', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                householdIncome: {
                    status: 2
                }
            };
        });

        it('should render householdIncome chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'household-income-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when some members have `household.members.characteristics`', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                members: [
                    {
                        id: 1,
                        characteristics: {
                            status: 1,
                            name: 'test',
                            quantity: 21
                        }
                    }
                ]
            };
        });

        it('should render member characteristics chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'member-characteristics-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when some members have `household.members.careSeekers`', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                members: [
                    {
                        id: 1,
                        isCareSeeker: true,
                        careSeekers: {
                            status: 1
                        },
                        characteristics: {
                            status: 1,
                            name: 'test',
                            quantity: 21
                        }
                    }
                ]
            };
        });

        it('should render member seekers chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'care-seeker-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when some members have `household.members.laborSituation`', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                members: [
                    {
                        id: 1,
                        laborSituation: {
                            status: 1
                        },
                        characteristics: {
                            status: 1,
                            name: 'test',
                            quantity: 21
                        }
                    }
                ]
            };
        });

        it('should render member laborSituation chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'labor-situation-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when some members have `household.members.voluntaryWork`', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                members: [
                    {
                        id: 1,
                        voluntaryWork: {
                            status: 1
                        },
                        characteristics: {
                            status: 1,
                            name: 'test',
                            quantity: 21
                        }
                    }
                ]
            };
        });

        it('should render member voluntary work chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'voluntary-work-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `household.carePeopleOutsideHome` is defined', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                carePeopleOutsideHome: {
                    status: 2
                }
            };
        });

        it('should render carePeopleOutsideHome chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'care-people-outside-home-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `household.domesticWorkActivities` is defined', () => {
        beforeEach(() => {
            props.household = {
                id: 1,
                domesticWorkActivities: {
                    status: 2
                }
            };
        });

        it('should render domesticWorkActivities chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'domestic-work-activities-0')
            )
                .toBeInTheDocument();
        });
    });
});
