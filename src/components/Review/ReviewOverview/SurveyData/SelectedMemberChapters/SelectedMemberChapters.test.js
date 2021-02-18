import {getByTestId, getByText} from '@testing-library/react';

import SelectedMemberChapters from './SelectedMemberChapters';

describe('<SelectedMemberChapters>', () => {
    let props;
    const getComponent = () => render(SelectedMemberChapters, props);
    beforeEach(() => {
        props = {
            householdId: 1,
            member: {
                characteristics: {
                    name: 'Luis',
                    quantity: 45
                }
            },
            index: 0
        };
    });
    afterEach(tearDown);

    it('should display some information of selected member', () => {
        const {container} = getComponent();
        expect(
            getByText(container, 'Miembro seleccionado - Luis 45')
        )
            .toBeInTheDocument();
    });

    describe('when `member.timeUseIntroduction` is defined', () => {
        beforeEach(() => {
            props.member.timeUseIntroduction = {
                status: 2
            };
        });

        it('should render timeUseIntroduction chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'time-use-introduction-1-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `member.rescueQuestions` is defined', () => {
        beforeEach(() => {
            props.member.rescueQuestions = {
                status: 2
            };
        });

        it('should render rescueQuestions chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'rescue-questions-1-0')
            )
                .toBeInTheDocument();
        });
    });

    describe('when `member.income` is defined', () => {
        beforeEach(() => {
            props.member.income = {
                status: 2
            };
        });

        it('should render income chapter card', () => {
            const {container} = getComponent();
            expect(
                getByTestId(container, 'income-1-0')
            )
                .toBeInTheDocument();
        });
    });
});
