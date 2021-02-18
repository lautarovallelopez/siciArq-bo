import {queryByTestId, getByTestId, getByText} from '@testing-library/react';

import FilesList from './FilesList';

describe('<FilesList>', () => {
    let props;
    const getComponent = () => render(FilesList, props);
    beforeEach(() => {
        props = {
            getFiles: jest.fn(),
            files: [
                {
                    id: 1,
                    description: 'Go to news',
                    link: 'https://news.es'
                }
            ]
        };
    });
    afterEach(tearDown);

    describe('when `props.loading` is `true`', () => {
        beforeEach(() => {
            props.loading = true;
        });

        it('should render a spinner', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'spinner-icon')).toBeInTheDocument();
        });
    });

    describe('when `props.loading is false`', () => {
        beforeEach(() => {
            props.loading = false;
        });

        it('should not render a spinner', () => {
            const {container} = getComponent();
            expect(queryByTestId(container, 'spinner-icon')).toBeNull();
        });

        it('should display a list of files', () => {
            const {container} = getComponent();
            props.files.forEach((file, index) => {
                const currentFile = getByTestId(container, `file-${index}`);

                expect(getByText(currentFile, file.description)).toBeInTheDocument();
            });
        });
    });
});
