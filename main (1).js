function preload(){

}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    fill('red');
    circle(50 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 45, 390, 10);
    fill('red');
    circle(445 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(440, 75, 10, 280);
    fill(255, 204, 0);
    rect(45, 75, 10, 280);
    fill('red');
    circle(50 , 360, 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 357, 350, 10);
    fill('red');
    circle( 445, 360, 50 , 50) ;
    
    
    
    
}
function draw(){

}
function take_snapshot()
{
    save("Filter_snapshot.png");
}