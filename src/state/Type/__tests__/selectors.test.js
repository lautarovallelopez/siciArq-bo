import * as selectors from '../selectors';

describe('getUpsDropdown', () => {
    it('returns the state of the `getUpsDropdown` request', () => {
        const state = {
            type: {
                getUpsDropdown: {
                    loading: true
                }
            }
        };
        expect(selectors.getUpsDropdown(state)).toEqual({loading: true});
    });
});

describe('getUpsDropdownData', () => {
    it('returns the data of the `getUpsDropdown` request', () => {
        const state = {
            type: {
                getUpsDropdown: {
                    ups: [
                        {
                            ups: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getUpsDropdownData(state)).toEqual([
            {
                ups: 1
            }
        ]);
    });
});

describe('getAreasDropdown', () => {
    it('returns the state of the `getAreasDropdown` request', () => {
        const state = {
            type: {
                getAreasDropdown: {
                    loading: true
                }
            }
        };
        expect(selectors.getAreasDropdown(state)).toEqual({loading: true});
    });
});

describe('getAreasDropdownData', () => {
    it('returns the data of the `getAreasDropdown` request', () => {
        const state = {
            type: {
                getAreasDropdown: {
                    areas: [
                        {
                            area: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getAreasDropdownData(state)).toEqual([
            {
                area: 1
            }
        ]);
    });
});

describe('getSegmentsDropdown', () => {
    it('returns the state of the `getSegmentsDropdown` request', () => {
        const state = {
            type: {
                getSegmentsDropdown: {
                    loading: true
                }
            }
        };
        expect(selectors.getSegmentsDropdown(state)).toEqual({loading: true});
    });
});

describe('getSegmentsDropdownData', () => {
    it('returns the data of the `getSegmentsDropdown` request', () => {
        const state = {
            type: {
                getSegmentsDropdown: {
                    segments: [
                        {
                            segment: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getSegmentsDropdownData(state)).toEqual([
            {
                segment: 1
            }
        ]);
    });
});

describe('getFiles', () => {
    it('should return the state of `getFiles` request', () => {
        const state = {
            type: {
                getFiles: {
                    loading: true
                }
            }
        };
        expect(selectors.getFiles(state)).toEqual({loading: true});
    });
});

describe('getFilesData', () => {
    it('returns the data of the `getFiles` request', () => {
        const state = {
            type: {
                getFiles: {
                    files: [
                        {
                            description: 'Archivo 7',
                            link: 'http://drive.google.com/file7',
                            id: 7
                        }
                    ]
                }
            }
        };
        expect(selectors.getFilesData(state)).toEqual([
            {
                description: 'Archivo 7',
                link: 'http://drive.google.com/file7',
                id: 7
            }
        ]);
    });
});

describe('getFilesLoading', () => {
    it('returns the data of the `getFiles` request', () => {
        const state = {
            type: {
                getFiles: {
                    loading: true
                }
            }
        };
        expect(selectors.getFilesLoading(state)).toBe(true);
    });
});

describe('getStatuses', () => {
    it('should return the state of `getStatuses` request', () => {
        const state = {
            type: {
                getStatuses: {
                    loading: true
                }
            }
        };
        expect(selectors.getStatuses(state)).toEqual({loading: true});
    });
});

describe('getStatusesData', () => {
    it('returns the data of the `getStatuses` request', () => {
        const state = {
            type: {
                getStatuses: {
                    statuses: [
                        {
                            id: 7,
                            label: 'En campo'
                        }
                    ]
                }
            }
        };
        expect(selectors.getStatusesData(state)).toEqual([
            {
                id: 7,
                label: 'En campo'
            }
        ]);
    });
});

describe('getSituations', () => {
    it('should return the state of `getSituations` request', () => {
        const state = {
            type: {
                getSituations: {
                    loading: true
                }
            }
        };
        expect(selectors.getSituations(state)).toEqual({loading: true});
    });
});

describe('getSituationsData', () => {
    it('returns the data of the `getSituations` request', () => {
        const state = {
            type: {
                getSituations: {
                    situations: [{
                        id: 1,
                        label: 'Encuestándose'
                    }]
                }
            }
        };
        expect(selectors.getSituationsData(state)).toEqual([{
            id: 1,
            label: 'Encuestándose'
        }]);
    });
});

describe('getAssignmentsTypes', () => {
    it('should return the state of `getAssignmentsTypes` request', () => {
        const state = {
            type: {
                getAssignmentsTypes: {
                    loading: true
                }
            }
        };
        expect(selectors.getAssignmentsTypes(state)).toEqual({loading: true});
    });
});

describe('getAssignmentsTypesData', () => {
    it('returns the data of the `getAssignmentsTypes` request', () => {
        const state = {
            type: {
                getAssignmentsTypes: {
                    assignmentsTypes: [
                        {
                            id: 1,
                            label: 'Area'
                        }
                    ]
                }
            }
        };
        expect(selectors.getAssignmentsTypesData(state)).toEqual([
            {
                id: 1,
                label: 'Area'
            }
        ]);
    });
});
