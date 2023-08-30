const Triangle = require("../Triangle");

describe('Triangle', () => {
    it('should render the logo based on selections of text, text color, shape, and shape color', () => {
        const triangle = new Triangle('red','kms','green');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="red"/>
            <text x="100" y="185" font-size="60" text-anchor="middle" fill="green">kms</text>
        </svg>
        `
        );
    });
});