//myscript.js

var x = 0;

/*
色
n:
    グレースケール 0-25
n1,n2,n3:
    RGB
    HSB
*/

// function setup() {
//     最初に1回だけ実行される処理
//     createCanvas(480, 240);
//     background(127);
    // background(250,0,0);
    // colorMode(HSB, 100);
    // background(50,100,80,20);
    // background('red');
    // background('ff0000');
    // background('rgba(255,0,0,.8)');
// }



/*
width height

rectMode(CORNER)
rect(x, y, w, h)

rectMode(CORNERS)
rect(x1, y1, w2, h2)

rectMode(CENTER)
rect(cx, cy, w, h)

rectMode(RADIUS)
rect(c1, c1, w/2, h/2)
*/

function setup() {
    createCanvas(480, 240);
    background('skyblue');

    // rect(50, 50, 150, 100);
    // rect(width/2, height/2, 150, 100);
    rectMode(CENTER)
    rect(width/2, height/2, 150, 100);
}

function draw() {
    //そのあと繰り返し実行される処理
    background(0);
    rect(x, 40, 50, 50);
    x++;
}