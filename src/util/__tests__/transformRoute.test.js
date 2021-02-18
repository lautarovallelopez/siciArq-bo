import transformRoute from '../transformRoute';

describe('transformRoute', () => {
    describe('when the route has no params', () => {
        const route = '/some-route';

        it('returns the unmodified route', () => {
            expect(transformRoute(route)).toBe(route);
        });
    });

    describe('when the route has a single param', () => {
        const route = '/some-route/:someParam';
        const params = {someParam: 'someValue'};

        it('returns the transformed route', () => {
            expect(transformRoute(route, params)).toBe('/some-route/someValue');
        });
    });

    describe('when the route has multiple params', () => {
        const route = '/some-route/:someParam/:anotherParam';
        const params = {someParam: 'someValue', anotherParam: 'anotherValue'};

        it('returns the transformed route', () => {
            expect(transformRoute(route, params)).toBe(
                '/some-route/someValue/anotherValue'
            );
        });
    });
});
