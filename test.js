const {sum,zarb} = require ('./server/app');

test('Sum', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Zarb', () => {
    expect(zarb(1, 2)).toBe(2);
});