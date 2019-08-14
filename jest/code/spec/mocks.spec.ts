import { fn1, fn2, fn3, fn4 } from '../mocks';

describe('spieces1', () => {

    it('fn1', () => {
        const axiosMock = jest.fn();
        fn1(axiosMock);

        expect(axiosMock).toBeCalled();
    });

    it('fn2', () => {
        const axiosMock = jest.fn();
        fn2(axiosMock);

        expect(axiosMock).toBeCalledWith({
            url: 'https://google.pl',
            method: 'POST',
        });
    });

    it('fn3', () => {
        const axiosMock = jest.fn();
        fn3(axiosMock);

        expect(axiosMock.mock.calls[0][0].body.data.importantKey).toEqual(42)
    });

    it('fn4', () => {
        const returnValue = {};
        const axiosMock = jest.fn().mockReturnValue(returnValue);


        expect(fn4(axiosMock)).toEqual(returnValue);

    });
});
