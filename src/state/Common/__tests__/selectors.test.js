import types from '@constants/notificationTypes';

import * as selectors from '../selectors';

describe('getMessage', () => {
    it('should return a message', () => {
        const state = {
            common: {
                notification: {
                    message: 'This is a message'
                }
            }
        };

        expect(selectors.getMessage(state)).toBe('This is a message');
    });
});

describe('getType', () => {
    it('should return a notification type', () => {
        const state = {
            common: {
                notification: {
                    notificationType: types.ERROR
                }
            }
        };

        expect(selectors.getType(state)).toBe(types.ERROR);
    });
});

describe('getSearchParams', () => {
    it('should return the search params', () => {
        const state = {
            common: {
                searchParams: {
                    state: 2,
                    ups: 1,
                    area: 4
                }
            }
        };

        expect(selectors.getSearchParams(state)).toEqual({
            state: 2,
            ups: 1,
            area: 4
        });
    });
});

describe('getSearchParamsBySection', () => {
    const state = {
        common: {
            searchParams: {
                state: 2,
                ups: 1,
                area: 4,
                section: 'review'
            }
        }
    };

    describe('when the section provided is the same as the searchParams', () => {
        const section = 'review';

        it('should return a the search params', () => {
            expect(selectors.getSearchParamsBySection(state, section)).toEqual({
                state: 2,
                ups: 1,
                area: 4,
                section
            });
        });
    });

    describe('when the section provided differs from the searchParams', () => {
        const section = 'logs';

        it('should return search params containing only section', () => {
            expect(selectors.getSearchParamsBySection(state, section)).toEqual({});
        });
    });
});

describe('getIsOpenModal', () => {
    it('should return `true` if the modal is open', () => {
        const state = {
            common: {
                confirmModal: {
                    isOpen: true
                }
            }
        };
        expect(selectors.getIsOpenModal(state)).toBe(true);
    });

    it('should return `false` if the modal is close', () => {
        const state = {
            common: {
                confirmModal: {
                    isOpen: false
                }
            }
        };
        expect(selectors.getIsOpenModal(state)).toBe(false);
    });
});

describe('getModalContext', () => {
    it('should return the modal context', () => {
        const context = {
            title: 'this is a title',
            onAccept: jest.fn()
        };
        const state = {
            common: {
                confirmModal: {
                    context
                }
            }
        };
        expect(selectors.getModalContext(state)).toEqual(context);
    });
});

describe('getAssignmentType', () => {
    it('should return an assignmentType', () => {
        const state = {
            common: {
                searchParams: {
                    assignmentType: 1
                }
            }
        };

        expect(selectors.getAssignmentType(state)).toBe(1);
    });
});
