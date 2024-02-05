// Imports Logo class
const Logo = require('../lib/logo');

// Logo testing suite
describe('Logo',() => {
    // Tests the instance of Logo class
    describe('Instantiate', () => {
        it('should be an instance of Logo class', () => {
            const logo = new Logo();
            expect(logo).toBeInstanceOf(Logo);
        });
    });
    // Tests that the shape color is initialized
    describe('Initialize shape color', () => {
        it('should set shapeColor properly', () => {
            const shapeColor = 'green';
            const logo = new Logo(shapeColor);
            expect(logo.shapeColor).toBe(shapeColor);
        });
    });
    // Tests that text is initialized
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'text';
            const logo = new Logo('green',text);
            expect(logo.text).toBe(text);
        });
    });
    // Tests that text color is initialized
    describe('Initialize text color', () => {
        it('should set textColor properly', () => {
            const textColor = 'white';
            const logo = new Logo('green','text',textColor);
            expect(logo.textColor).toBe(textColor);
        });
    });
    // Tests that fontFamily is initialized
    describe('Initialize fontFamily', () => {
        it('should set fontFamily properly', () => {
            const fontFamily = 'sans-serif';
            const logo = new Logo('green','text','white',fontFamily);
            expect(logo.fontFamily).toBe(fontFamily);
        });
    });
    // Tests the functionality of fontSize method
    describe('fontSize method', () => {
        it('should return font size of 150 for text length of 1', () => {
            const text = 'A';
            const logo = new Logo('white',text);
            expect(logo.fontSize()).toEqual(150);
        });
        it('should return font size of 120 for text length of 2', () => {
            const text = 'AB';
            const logo = new Logo ('white',text);
            expect(logo.fontSize()).toEqual(120);
        });
        it('should return font size of 75 for text length of 3', () => {
            const text = 'ABC';
            const logo = new Logo ('white',text);
            expect(logo.fontSize()).toEqual(75);
        });
        it('should return font size of 55 for text length of 4', () => {
            const text = 'ABCD';
            const logo = new Logo ('white',text);
            expect(logo.fontSize()).toEqual(55);
        });
        it('should return font size of 40 for text length of 5', () => {
            const text = 'ABCDE';
            const logo = new Logo ('white',text);
            expect(logo.fontSize()).toEqual(40);
        });
        it('should return font size of 25 for text length of 0', () => {
            const text = '';
            const logo = new Logo ('white', text);
            expect(logo.fontSize()).toEqual(25);
        });
        it('should retrun font size of 25 for text length greater than 5', () => {
            const text = 'ABCDEF';
            const logo = new Logo ('white', text);
            expect(logo.fontSize()).toEqual(25);
        });
    });
});