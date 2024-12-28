import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils tests', () => {
    test('getFullYear returns the correct year', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    test('getFooterCopy returns the correct string when true', () => {
        expect(getFooterCopy(true)).toBe('ALX');
    });

    test('getFooterCopy returns the correct string when false', () => {
        expect(getFooterCopy(false)).toBe('ALX main dashboard');
    });

    test('getLatestNotification returns the expected string', () => {
        expect(getLatestNotification())
          .toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
