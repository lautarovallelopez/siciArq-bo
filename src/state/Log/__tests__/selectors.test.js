import * as selectors from '../selectors';

describe('getLogs', () => {
    it('returns the state of the `getLogs` request', () => {
        const state = {
            log: {
                getLogs: {
                    loading: true
                }
            }
        };
        expect(selectors.getLogs(state)).toEqual({loading: true});
    });
});

describe('getLogsData', () => {
    it('returns the data of the `getLogs` request', () => {
        const state = {
            log: {
                getLogs: {
                    logs: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getLogsData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getLogsCount', () => {
    it('returns the count of the `getLogs` request', () => {
        const state = {
            log: {
                getLogs: {
                    logs: [
                        {
                            id: 1
                        }
                    ],
                    count: 1
                }
            }
        };
        expect(selectors.getLogsCount(state)).toBe(1);
    });
});

describe('getLogsLoading', () => {
    it('should return the `loading` state of `getLogs` request', () => {
        const state = {
            log: {
                getLogs: {
                    loading: true
                }
            }
        };
        expect(selectors.getLogsLoading(state)).toBe(true);
    });
});

describe('getLogsRequested', () => {
    it('should return the `requested` state of `getLogs` request', () => {
        const state = {
            log: {
                getLogs: {
                    requested: true
                }
            }
        };
        expect(selectors.getLogsRequested(state)).toBe(true);
    });
});
