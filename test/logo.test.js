// should give me a string
const Shape = require('../lib/logo.js')
const shape1 = new Shape('ABC', 'black', 'triangle', 'green');

describe('testing shape class', () => {
    test('should render a green triangle', () => {
        const expectSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">'ABC'</text>
</svg>`;
        const triangle = new Shape()
        triangle.setColor('green')
        const actualSvg = triangle.render()
        expect(actualSvg).toEqual(expectSVG)
    })

})