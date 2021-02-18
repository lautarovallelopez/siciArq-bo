import * as selectors from '../selectors';

describe('getFieldMaterials', () => {
    it('returns the state of the `getFieldMaterials` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterials: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterials(state)).toEqual({
            loading: true
        });
    });
});

describe('getFieldMaterialsLoading', () => {
    it('returns the `loading` state of the `getFieldMaterials` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterials: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsLoading(state)).toBe(true);
    });
});

describe('getFieldMaterialsRequested', () => {
    it('returns the `requested` state of the `getFieldMaterials` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterials: {
                    requested: true
                }
            }
        };
        expect(selectors.getFieldMaterialsRequested(state)).toBe(true);
    });
});

describe('getFieldMaterialsData', () => {
    it('returns the data state of the `getFieldMaterials` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterials: {
                    fieldMaterials: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getFieldMaterialsData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getFieldMaterialsByState', () => {
    it('returns the state of the `getFieldMaterialsByState` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByState: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByState(state)).toEqual({
            loading: true
        });
    });
});

describe('getFieldMaterialsByStateLoading', () => {
    it('returns the `loading` state of the `getFieldMaterialsByState` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByState: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByStateLoading(state)).toBe(true);
    });
});

describe('getFieldMaterialsByStateRequested', () => {
    it('returns the `requested` state of the `getFieldMaterialsByState` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByState: {
                    requested: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByStateRequested(state)).toBe(true);
    });
});

describe('getFieldMaterialsByStateData', () => {
    it('returns the data state of the `getFieldMaterialsByState` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByState: {
                    fieldMaterials: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getFieldMaterialsByStateData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getFieldMaterialsByUps', () => {
    it('returns the state of the `getFieldMaterialsByUps` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByUps: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByUps(state)).toEqual({
            loading: true
        });
    });
});

describe('getFieldMaterialsByUpsLoading', () => {
    it('returns the `loading` state of the `getFieldMaterialsByUps` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByUps: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByUpsLoading(state)).toBe(true);
    });
});

describe('getFieldMaterialsByUpsRequested', () => {
    it('returns the `requested` state of the `getFieldMaterialsByUps` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByUps: {
                    requested: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByUpsRequested(state)).toBe(true);
    });
});

describe('getFieldMaterialsByUpsData', () => {
    it('returns the data state of the `getFieldMaterialsByUps` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByUps: {
                    fieldMaterials: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getFieldMaterialsByUpsData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});

describe('getFieldMaterialsByArea', () => {
    it('returns the state of the `getFieldMaterialsByArea` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByArea: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByArea(state)).toEqual({
            loading: true
        });
    });
});

describe('getFieldMaterialsByAreaLoading', () => {
    it('returns the `loading` state of the `getFieldMaterialsByArea` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByArea: {
                    loading: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByAreaLoading(state)).toBe(true);
    });
});

describe('getFieldMaterialsByAreaRequested', () => {
    it('returns the `requested` state of the `getFieldMaterialsByArea` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByArea: {
                    requested: true
                }
            }
        };
        expect(selectors.getFieldMaterialsByAreaRequested(state)).toBe(true);
    });
});

describe('getFieldMaterialsByAreaData', () => {
    it('returns the data state of the `getFieldMaterialsByArea` request', () => {
        const state = {
            fieldMaterial: {
                getFieldMaterialsByArea: {
                    fieldMaterials: [
                        {
                            id: 1
                        }
                    ]
                }
            }
        };
        expect(selectors.getFieldMaterialsByAreaData(state)).toEqual([
            {
                id: 1
            }
        ]);
    });
});
