import {
    request, requestError, requestStart, requestSuccess
} from '../state';

describe('request', () => {
    describe('when no args are provided', () => {
        const state = undefined;
        const args = undefined;

        it('should set the appropriate values', () => {
            expect(request(state, args)).toEqual({
                requested: false,
                loading: false,
                error: null
            });
        });
    });

    describe('when extra args are provided', () => {
        const state = {
            requested: true,
            loading: true,
            error: null
        };
        const args = {value: 'test'};

        it('should merge both args', () => {
            expect(request(state, args)).toEqual({
                ...state,
                ...args
            });
        });
    });

    describe('when the `requested` arg is provided', () => {
        const args = {requested: true};

        it('sets `requested` to the `requested` arg', () => {
            expect(request(args).requested).toBe(args.requested);
        });
    });

    describe('when the `loading` arg is provided', () => {
        const args = {loading: true};

        it('sets `loading` to the `loading` arg', () => {
            expect(request(args).loading).toBe(args.loading);
        });
    });

    describe('when the `error` arg is provided', () => {
        const args = {error: new Error('Oops')};

        it('sets `error` to the `error` arg', () => {
            expect(request(args).error).toBe(args.error);
        });
    });

    describe('when additional arg is provided', () => {
        const status = undefined;
        const args = {value: 'test'};

        it('sets value to the arg', () => {
            expect(request(status, args).value).toBe(args.value);
        });
    });
});

describe('requestError', () => {
    describe('when no `error` is provided', () => {
        const state = undefined;
        const args = undefined;

        it('should set the appropriate values', () => {
            expect(requestError(state, args)).toEqual({
                requested: true,
                loading: false,
                error: null
            });
        });
    });

    describe('when `error` is provided', () => {
        const state = {error: new Error('Oops')};
        const args = undefined;

        it('should set the appropriate values', () => {
            expect(requestError(state, args)).toEqual({
                requested: true,
                loading: false,
                error: state.error
            });
        });
    });

    describe('when additional arg is provided', () => {
        const state = undefined;
        const args = {value: 'test'};

        it('should set the appropriate values', () => {
            expect(requestError(state, args)).toEqual({
                requested: true,
                loading: false,
                error: null,
                value: args.value
            });
        });
    });
});

describe('requestStart', () => {
    describe('when no args are provided', () => {
        const state = undefined;
        const args = undefined;

        it('should set the appropriate values', () => {
            expect(requestStart(state, args)).toEqual({
                requested: true,
                loading: true,
                error: null
            });
        });
    });

    describe('when args are provided', () => {
        const state = undefined;
        const args = {value: 'test'};

        it('should set the appropriate values', () => {
            expect(requestStart(state, args)).toEqual({
                requested: true,
                loading: true,
                error: null,
                value: args.value
            });
        });
    });
});

describe('requestSuccess', () => {
    describe('when no args are provided', () => {
        const state = undefined;
        const args = undefined;

        it('should set the appropriate values', () => {
            expect(requestSuccess(state, args)).toEqual({
                requested: true,
                loading: false,
                error: null
            });
        });
    });

    describe('when args are provided', () => {
        const state = undefined;
        const args = {value: 'test'};

        it('should set the appropriate values', () => {
            expect(requestSuccess(state, args)).toEqual({
                requested: true,
                loading: false,
                error: null,
                value: args.value
            });
        });
    });
});
