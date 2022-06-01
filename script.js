// heavily inspired by: https://codepen.io/commonzen/pen/MWjWWbO

const PI = Math.PI

const dimensions = 500;

const container = document.body;
const two = new Two({
    width: window.dimensions,
    height: window.dimensions,
    autostart: true,
}).appendTo(container);

// π radians = 180° | rad = deg * π/180° | deg = rad * 180°/π 
const degToRad = deg => deg * PI / 180;
const radToDeg = rad => rad * 180 / PI;

// center x
let ox = two.width / 2; 

// center y
let oy = two.height / 2; 

// inner radius
let ir = 40; 

// outer radius
let or = 200; 

// start angle
let sa = 0; 

// end angle
let ea = 0; 

let arc = two.makeArcSegment(ox, oy, ir, or, sa, ea, 50);

// styling
arc.stroke = '#215282';
arc.noFill();

two.bind('update', _ => {
        ea+=3;
        arc.endAngle = degToRad(ea);
    })