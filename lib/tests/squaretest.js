const Square = require("../Square");

describe('Square', () => {
    it('should render the logo based on selections of text, text color, shape, and shape color', () => {
        const square = new Square('red','kms','green');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="green">kms</text>
        </svg>
        `
        );
    });
});