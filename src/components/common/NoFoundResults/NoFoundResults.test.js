import {getByText, getByTestId} from '@testing-library/react';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import NoFoundResults from './NoFoundResults';

describe('<NoFoundResults>', () => {
    let props;
    const getComponent = () => render(NoFoundResults, props);
    beforeEach(() => {
        props = {
            title: 'Title test',
            icon: faUser
        };
    });
    afterEach(tearDown);

    describe('when `props.show` is `true`', () => {
        beforeEach(() => {
            props.show = true;
        });

        it('should display `props.title`', () => {
            const {container} = getComponent();
            expect(getByText(container, props.title)).toBeInTheDocument();
        });

        it('should render an icon', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'icon')).toBeInTheDocument();
        });
    });

    describe('when `props.show` is `false`', () => {
        beforeEach(() => {
            props.show = false;
        });

        it('should not render nothing', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'empty')).toBeInTheDocument();
        });
    });
});
