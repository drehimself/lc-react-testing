import { add, subtract, multiply } from '../Math.js';

describe('math tests', () => {
  it('does basic math', () => {
    expect(3 + 2).toBe(5);
    expect(3 * 2).toBe(6);
    expect(Math.sqrt(36)).toBe(6);
  });

  it('does basic math from external file', () => {
    expect(add(3, 2)).toBe(5);
    expect(multiply(3, 2)).toBe(6);
    expect(subtract(3, 2)).toBe(1);
  });
});

describe('strings tests', () => {
  it('contains a string', () => {
    expect('This is a string').toContain('is a string');
  });
});
