// Imports Shapes class
const Shapes = require('../lib/shapes');

// Shapes testing suite
describe('Shapes',() => {
    // Tests the instance of Shapes class
    describe('Instantiate', () => {
        it('should be an instance of Shapes class', () => {
            const shape = new Shapes();
            expect(shape).toBeInstanceOf(Shapes);
        });
    });
    // Tests that the shape color is initialized
    describe('Initialize shape color', () => {
        it('should set color properly', () => {
            const color = 'green';
            const shape = new Shapes(color);
            expect(shape.color).toBe(color);
        });
    });
    // Tests that text is initialized
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'text';
            const shape = new Shapes('green',text);
            expect(shape.text).toBe(text);
        });
    });
    // Tests that text color is initialized
    describe('Initialize text color', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const shape = new Shapes('green','text',textColor);
            expect(shape.textColor).toBe(textColor);
        });
    });
    // Tests that fontFamily is initialized
    describe('Initialize fontFamily', () => {
        it('should set fontFamily properly', () => {
            const fontFamily = 'sans-serif';
            const shape = new Shapes('green','text','white',fontFamily);
            expect(shape.fontFamily).toBe(fontFamily);
        });
    });
    // Tests the functionality of fontSize method
    describe('fontSize method', () => {
        it('should return font size of 150 for text length of 1', () => {
            const text = 'A';
            const shape = new Shapes('white',text);
            expect(shape.fontSize()).toEqual(150);
        });
        it('should return font size of 120 for text length of 2', () => {
            const text = 'AB';
            const shape = new Shapes ('white',text);
            expect(shape.fontSize()).toEqual(120);
        });
        it('should return font size of 75 for text length of 3', () => {
            const text = 'ABC';
            const shape = new Shapes ('white',text);
            expect(shape.fontSize()).toEqual(75);
        });
        it('should return font size of 55 for text length of 4', () => {
            const text = 'ABCD';
            const shape = new Shapes ('white',text);
            expect(shape.fontSize()).toEqual(55);
        });
        it('should return font size of 40 for text length of 5', () => {
            const text = 'ABCDE';
            const shape = new Shapes ('white',text);
            expect(shape.fontSize()).toEqual(40);
        });
        it('should return font size of 25 for text length of 0', () => {
            const text = '';
            const shape = new Shapes ('white', text);
            expect(shape.fontSize()).toEqual(25);
        });
        it('should retrun font size of 25 for text length greater than 5', () => {
            const text = 'ABCDEF';
            const shape = new Shapes ('white', text);
            expect(shape.fontSize()).toEqual(25);
        });
    });
});