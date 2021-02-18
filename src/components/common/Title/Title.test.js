import {getByText, getByTestId} from '@testing-library/react';

import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';

import Title from './Title';

describe('<Title>', () => {
    let props;
    const getComponent = () => render(Title, props);
    beforeEach(() => {
        props = {
            title: 'Title Review',
            icon: faClipboardCheck
        };
    });
    afterEach(tearDown);

    it('should display `props.title`', () => {
        const {container} = getComponent();
        expect(getByText(container, props.title)).toBeInTheDocument();
    });

    it('should render an icon', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'icon')).toBeInTheDocument();
    });
});
