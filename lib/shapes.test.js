const shapes = require('./shapes');
const triangle = shapes.triangle;
const circle = shapes.circle;
const square = shapes.square;

describe('shapes', () => {
    describe('triangle render', () => {
        it('should return a triangle svg logo', () => {
            const myTriangle = new triangle('NRS', 'red', 'black');
            const result = myTriangle.render();
            const expected = `polygon fill="black" points="75,185 235,185 150,20"/>\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="red">NRS</text>`;
            expect(result).toBe(expected);
        });
    });
    describe('circle render',() => {
        it('should return a circle svg logo', () => {
            const myCircle = new circle('NRS', 'red', 'black');
            const result = myCircle.render();
            const expected = `<circle cx="150" cy="100" r="75" fill="black"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">NRS</text>`;
            expect(result).toBe(expected);
        });
    });
    describe('square render', () => {
        it('should return a square svg logo', () => {
            const mySquare = new square('NRS', 'red', 'black');
            const result = mySquare.render();
            const expected = `<rect x="75" y="25" fill="black" width="150" height="150"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">NRS</text>`;
            expect(result).toBe(expected);
        });
    });
});