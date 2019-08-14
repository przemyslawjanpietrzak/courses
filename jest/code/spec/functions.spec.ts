import { add, avg, selectIsTimeLeft, selectLessonChapter } from '../functions';

describe('functions', () => {

    it('add', () => {
        expect(add(2, 2)).toEqual(4)
    });

    it('avg', () => {
        expect(avg([])).toEqual(null);
        expect(avg([1, 2, 3])).toEqual(2);
    });

    it('selectTImeLeft', () => {
        const mockedStore = {
            time: {
                endDate: new Date(44),
            },
        };

        expect(selectIsTimeLeft(new Date(42))(mockedStore)).toEqual(true);
        expect(selectIsTimeLeft(new Date(45))(mockedStore)).toEqual(false);
    });

    it('selectLessonChapter', () => {
        const mockedStore = {
            chapterStore: [
                {
                    id: '0',
                    lessons: [
                        { id: 'a', content: 'A' },
                    ]
                }
            ]
        };

        expect(selectLessonChapter('a')(mockedStore)).toEqual(mockedStore.chapterStore[0])
    });
})
