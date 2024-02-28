class shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
class triangle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<polygon fill="${this.shapeColor}" points="150, 18 244, 182 56, 182"/>\n<text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class circle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class square extends shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        return `<rect x="75" y="25" fill="${this.shapeColor}" width="150" height="150"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
// Function to generate logo from user input
function generateLogo(data){
    const shapes = {triangle: triangle, square: square, circle: circle}
    let shape = new shapes[data.shape](data.text, data.textColor, data.shapeColor);

    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n${shape.render()}\n</svg>`;
}

module.exports = {
    generateLogo: generateLogo,
    triangle: triangle,
    square: square,
    circle: circle,
}
