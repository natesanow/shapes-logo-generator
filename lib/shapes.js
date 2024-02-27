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
        return `<polygon fill="${this.shapeColor}" points="75,185 235,185 150,20"/>\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class circle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<cirle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class square extends shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        return `<rect x="75" y="25" fill="${this.shapeColor}" width="150" height="150/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
