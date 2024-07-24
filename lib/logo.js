class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
        setColor(color) {
            this.shapeColor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = {Circle, Square, Triangle};