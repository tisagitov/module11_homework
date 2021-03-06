import getPercents from './index';

describe('tests for getPercents', () => {
    it('should work correctly with numbers as arguments', () => {
        expect(getPercents(30, 200)).toBe(60);
    }),
    it('should return NaN if one of the arguments is a string or undefined', () => {
        expect(getPercents('fail', 200)).toBe(NaN);
    }),
    it('should return NaN if one of the arguments is a string or undefined', () => {
        expect(getPercents(20, undefined)).toBe(NaN);
    }),
    it('should return 0 if one of the arguments is a null', () => {
        expect(getPercents(20, null)).toBe(0);
    })
})
