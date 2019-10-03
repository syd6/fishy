let img;

function preload() {
    img = loadImage('water.png');
}

function setup() {
    createCanvas(1415, 730);
    image(img, 0, 0);
}

//u want the movements to be random 

const screenW = 1415;
const screenH = 730;

var posX = 200;
var posY = 200;

var angle = Math.random()*360;
var lastTime = 0; //gets the current time
//travel no more than 10 pix in any direction 


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
    if (currentx > screenW-50 || currenty > screenH-50 || currentx < 50 || currenty < 50){
        //change direction
        angle -= 180;
        newCoords(angle)
        console.log("switch!")
    }
    //console.log(millis())
    if (lastTime <= millis() - 2500){
        console.log("hello")
        angle -= 70;
        newCoords(angle)
        lastTime = millis(); //update last time 
    }
    newCoords(angle)
}


function fish(){
    fill(8,59,12);
    ellipse(posX+29,posY,20,25);
    fill(35,150,44);
    ellipse(posX,posY,50,30);
    fill("white");
    ellipse(posX-10,posY-5,10);
    fill("grey");
    ellipse(posX-13,posY-5,4);
    fill(62,66,63,90);
}

function draw() {
    background(img);
    noStroke();
    fill(255);
    //fish();
    ellipse(posX, posY, 10, 10)
    //image(img, posX, posY, 20, 20);
    direction(posX, posY); //moves the object
    // if it hits the bottom of canvas then go back  up
}

function mouseClicked() {
    ellipse(mouseX+30, mouseY+30, 20, 20)
    // prevent default
    return false;
} 

 
