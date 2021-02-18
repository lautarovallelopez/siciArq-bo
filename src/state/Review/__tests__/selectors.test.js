import * as selectors from '../selectors';

describe('getSurveys', () => {
    it('returns the state of the `getSurveys` request', () => {
        const state = {
            review: {
                getSurveys: {
                    loading: true
                }
            }
        };
        expect(selectors.getSurveys(state)).toEqual({loading: true});
    });
});

describe('getSurveysData', () => {
    it('returns the data of the `getSurveys` request', () => {
        const state = {
            review: {
                getSurveys: {
                    surveys: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getSurveysData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getSurveysCount', () => {
    it('returns the count of the `getSurveys` request', () => {
        const state = {
            review: {
                getSurveys: {
                    surveys: [
                        {
                            id: 1
                        }
                    ],
                    count: 1
                }
            }
        };
        expect(selectors.getSurveysCount(state)).toBe(1);
    });
});

describe('getSurveysLoading', () => {
    it('should return the `loading` state of `getSurveys` request', () => {
        const state = {
            review: {
                getSurveys: {
                    loading: true
                }
            }
        };
        expect(selectors.getSurveysLoading(state)).toBe(true);
    });
});

describe('getSurveysRequested', () => {
    it('should return the `requested` state of `getSurveys` request', () => {
        const state = {
            review: {
                getSurveys: {
                    requested: true
                }
            }
        };
        expect(selectors.getSurveysRequested(state)).toBe(true);
    });
});

describe('getSurvey', () => {
    it('returns the state of the `getSurvey` request', () => {
        const state = {
            review: {
                getSurvey: {
                    loading: true
                }
            }
        };
        expect(selectors.getSurvey(state)).toEqual({loading: true});
    });
});

describe('getSurveyData', () => {
    it('returns the data of the `getSurvey` request', () => {
        const state = {
            review: {
                getSurvey: {
                    survey: {
                        id: 1
                    }
                }
            }
        };
        expect(selectors.getSurveyData(state)).toEqual({
            id: 1
        });
    });
});

describe('getSurveyLoading', () => {
    it('should return the `loading` state of `getSurvey` request', () => {
        const state = {
            review: {
                getSurvey: {
                    loading: true
                }
            }
        };
        expect(selectors.getSurveyLoading(state)).toBe(true);
    });
});

describe('getSurveyRequested', () => {
    it('should return the `requested` state of `getSurvey` request', () => {
        const state = {
            review: {
                getSurvey: {
                    requested: true
                }
            }
        };
        expect(selectors.getSurveyRequested(state)).toBe(true);
    });
});
