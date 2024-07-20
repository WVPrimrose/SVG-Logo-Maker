class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    file() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

const shape1 = new Shape ('ABC', 'black', 'triangle', 'green');
const shape2 = new Shape ('OLI', 'black', 'triangle', 'blue')
const shape3 = new Shape ('WCG', 'black', 'triangle', 'brown')
const shape4 = new Shape ('VER', 'black', 'triangle', 'pink')
const shape5 = new Shape ('BEN', 'black', 'triangle', 'orange')

shape1.file();
shape2.file();
shape3.file();
shape4.file();
shape5.file();




module.exports = Shape;