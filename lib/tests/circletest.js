const Circle = require("../Circle");

describe('Circle', () => {
    it('should render the logo based on selections of text, text color, shape, and shape color', () => {
        const circle = new Circle('red','kms','green');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=green">kms</text>
        </svg>
        `
        );
    });
});