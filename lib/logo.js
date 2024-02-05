// Class Logo
class Logo {
    // Constructor that takes color, text, textColor, and fontFamily as inputs
    constructor(shapeColor,text,textColor,fontFamily){
        this.shapeColor=shapeColor;
        this.text=text;
        this.textColor=textColor;
        this.fontFamily=fontFamily;
    }
    // fontSize method that determines font size based on text length
    fontSize(){
        switch (this.text.length){
            case 1: return 150;
            case 2: return 120;
            case 3: return 75;
            case 4: return 55;
            case 5: return 40;
            default: return 25;
        }
    }
}
// Exports Shapes module
module.exports = Logo;