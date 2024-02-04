const Shapes = require('./shapes');

describe('Shapes',() => {
    describe('Instantiate', () => {
        it('should be an instance of Shapes class', () => {
            const shape = new Shapes();
            expect(shape).toBeInstanceOf(Shapes);
        });
    });
});