var cat , rat;
var cat1Img,cat2Img,cat3Img,rat1Img,rat2img,rat3Img;

function preload() {
    //load the images 
    cat1Img = loadImage("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadImage("images/cat4.png");
    rat1Img = loadImage("images/mouse1.png");
    rat2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    rat3Img = loadImage("images/mouse4.png");
    backgroundImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(800,700);
    //create tom and jerry sprites here
    cat = createSprite(600,600,50,50);
    cat.addImage(cat1Img);
    cat.scale = 0.13;

    rat = createSprite(100,600,50,50);
    rat.addImage(rat1Img);
    rat.scale = 0.11;

}

function draw() {

    background(backgroundImg);

    
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - rat.x < ( cat.width - rat.width)/2  ){
        cat.velocityX = 0;
        cat.x= cat.x + 80;
        cat.addImage("cat2",cat3Img);
        cat.changeImage("cat2");
        rat.addImage("rat2",rat3Img);
        rat.changeImage("rat2");
    }
       

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
  }
      cat.addAnimation("catt",cat2Img);
      cat.changeAnimation("catt");
      rat.addAnimation("ratt",rat2Img);
      rat.changeAnimation("ratt");
   

  if(keyCode === RIGHT_ARROW){
    cat.x = cat.x+50;
  }
}
