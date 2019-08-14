import { Class1, someStorage } from '../spieces';

describe('', () => {

    it('class1', () => {
        const class1 = new Class1();
        const localStorageSpy = jest.spyOn(someStorage, 'setItem');

        class1.method();

        expect(localStorageSpy).toBeCalled();

        localStorageSpy.mockRestore();

    });

    it('class2', () => {

    });
});
