let fishArray = [];
let numFish = 40;
function setup() {
    createCanvas(600, 600);
    /*fish = new Fish();
    fish2 = new Fish();*/
    for (x = 0;x<numFish;x++){
        let fish = new Fish();
        fishArray.push(fish);
    }

}

function draw(){
    background(50, 89, 100);

    for (x=0;x<fishArray.length;x++){
        fishArray[x].swimInBound();
        fishArray[x].display();
    }
    /*fish.swimInBound();
    fish.display();
    fish2.swimInBound();
    fish2.display();*/
}

// GLOBAL VARIABLES
lastTimeTracked = 0;

// CLASS FISH
class Fish {
    constructor(){
        this.angle = Math.random()*360;;
        this.x = 300;
        this.y = 300;
        this.speed = 2;
    }

    //describe functions here 
    swim(){
        this.x += this.speed*cos(this.angle)+random(-2, 2);
        this.y += this.speed*sin(this.angle)
    }

    swimInBound(){
        //if circle is getting close to border
        if (this.x >= width-50 || this.y >= height-50 || this.x <= 50 || this.y <= 50){
            //change direction
            this.angle -= 180;
            this.swim(this.angle)
        }
        //console.log(millis())
        if (lastTimeTracked <= millis() - 2500){
            this.angle -= 70;
            this.swim(this.angle);
            lastTimeTracked = millis(); //update last time 
        }
        this.swim(this.angle);
    }

    display() {
        ellipse(this.x, this.y, 20, 20);
    }
}

