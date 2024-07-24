class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    file() {
        let shapeSVG;
        if (this.shape === 'triangle') {
            shapeSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        } else if (this.shape === 'square') {
            shapeSVG = `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}" />`;
        } else if (this.shape === 'circle') {
            shapeSVG = `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}" />`;
        }

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shapeSVG}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = Shape;

module.exports = Shape;