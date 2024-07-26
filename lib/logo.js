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
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="70" fill="white" />;
        <text x="150" y="120" font-size="50"  text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="10" width="500" height="500" fill="red" />
<text x="170" y="125" font-size="60"text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

module.exports = { Circle, Square, Triangle };