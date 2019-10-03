/* let water;
let fishobject;

function preload() {
    water = loadImage('water.png');
    fishobject = loadImage('fish.png');
} */

function setup() {
    createCanvas(600, 600);
    //image(water, 0, 0);
    //image(fishobject, 0, 0);
    spr = createSprite(
        width/2, height/2, 40, 40);
}

//u want the movements to be random 

const screenW = 600;
const screenH = 600;

var posX = 300;
var posY = 300;

var angle = Math.random()*360;
var lastTime = 0; //gets the current time
//travel no more than 10 pix in any direction 


function fish(){
    ellipse(posX, posY, 20, 20);
    direction(posX, posY); //moves the object
    this.velocity = createVector(0,0);
    this.swimAngle = angle;
}


function newCoords(ang){
    //distance = 5 px
    // x = 3 , y = 4. these are the ratios you want to use 
    // how to determine where x and y are: use angle
    //opposite angle
    posX = posX+3*cos(ang)+random(-2, 2);
    posY = posY+3*sin(ang)
}
//you want the direction to change randomly within a 8 second interval

//what moves the ball
function direction(currentx,currenty){
    //if circle is getting close to border
    if (currentx >= screenW-50 || currenty >= screenH-50 || currentx <= 50 || currenty <= 50){
        //change direction
        angle -= 180;
        newCoords(angle)
    }
    //console.log(millis())
    if (lastTime <= millis() - 2500){
        angle -= 70;
        newCoords(angle)
        lastTime = millis(); //update last time 
    }
    newCoords(angle)
}

// not working
function swimTo(mousex, mousey){
    //var slope = (posX-mousex)/(posY-mousey)
    var newangle = atan2(mousex-posX, mousey-posY)
    posX = posX+3*cos(newangle)+random(-2,2)
    posY = posY+3*sin(newangle)
}





function draw() {
    //background(water);
    background(125);
    noStroke();
    fill(255);
    fish();
    // if it hits the bottom of canvas then go back  up
}

//https://github.com/processing/p5.js/wiki/Beyond-the-canvas
function mouseClicked() {
    swimTo(mouseX, mouseY)
    // prevent default
    return false;
} 

 
//use this for animation https://creative-coding.decontextualize.com/making-games-with-p5-play/