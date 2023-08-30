const Triangle = require('./Triangle.js');
const Square = require('./Square.js');
const Circle = require('./Circle.js');

function generateSvg(answers) {
if (answers.shape === 'Triangle')  {
    let chosenShape = new Triangle (answers.shapeColor, answers.text, answers.textColor)
    return chosenShape.render()
}  
if (answers.shape === 'Square') {
    let chosenShape = new Square (answers.shapeColor, answers.text, answers.textColor)
    return chosenShape.render()
}
if (answers.shape === 'Circle') {
    let chosenShape = new Circle (answers.shapeColor, answers.text, answers.textColor)
    return chosenShape.render()
}
}

module.exports = generateSvg;
