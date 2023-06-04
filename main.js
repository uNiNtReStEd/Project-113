function preload()
{
        
}

function setup()
{
    canvas = createCanvas(910, 540);
    canvas.position(300,100);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw()
{
    image(video, 0, 0, 910, 540);
    noFill();
    rect(20,20,850,500);
    fill(0,250,0);
    circle(25,25,40);
    circle(870,25,40);
    circle(25,510,40);
    circle(870,510,40);
    
    fill(150);
    circle(100, 100, 100);
    ellipse(400, 50, 55, 80);
    rect(200, 200, 55, 55);
    rect(300, 20, 55, 55, 20);

    circle(500, 200, 100);
    ellipse(231, 32, 55, 80);
    rect(23, 150, 98, 55);
    rect(682, 191, 20, 55, 20);

    circle(300, 400, 100);
    ellipse(450, 280, 55, 80);
    rect(56, 300, 78, 55);
    rect(39, 230, 28, 55, 20);


}
