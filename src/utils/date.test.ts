import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
	it('formats dates with a short month, day, and year', () => {
		expect(formatDate(new Date(2021, 7, 8, 12))).toBe('Aug 8, 2021');
	});

});