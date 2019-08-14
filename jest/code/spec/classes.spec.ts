import { Class1, Class2, Class3, Class4 } from '../classes';

describe('', () => {

    it('class1', () => {
        const class1 = new Class1();

        expect(class1.attr).toEqual(42);

        class1.setAttr(44);
        expect(class1.attr).toEqual(44);

    })


    it('class2', () => {
        const class2 = new Class2();

        expect(class2.attr).toEqual(42);
        expect(class2.increment()).toEqual(43);
        expect(class2.attr).toEqual(43);
    });

    it('class3', () => {
        const someServiceMock = { value: 41 };
        const class3 = new Class3(someServiceMock);

        expect(class3.isCorrent()).toEqual(false);
    })

    it('class3', () => {
        const someServiceMock = { value: 43 };
        const class3 = new Class3(someServiceMock);

        expect(class3.isCorrent()).toEqual(true);
    });

    it('class4', (done) => {
        const class4 = new Class4();

        class4.method().then((value) => {
            expect(value).toEqual(44);
            done();
        });
    });
})
