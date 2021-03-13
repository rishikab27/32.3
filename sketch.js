
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2, ground;
var box1, box2, box3, box4;
var slingy, poly
var score=0
var bg
var hour
function preload()
{
	poly=loadImage("polygon.png")
}

function setup() {
    createCanvas(1200,500);
    engine = Engine.create();
	world = engine.world;
    getBG()

    ground= new Ground(600,490,1200,30)
    ground1 = new Ground(390,300,250,10);
    ground2 = new Ground(700,200,170,10);


    box1= new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3= new Box(360,275,30,40);
    box4= new Box(390,275,30,40);
    box5= new Box(420,275,30,40);
    box6= new Box(450,275,30,40);
    box7= new Box(480,275,30,40);

    box8= new Box(330,235,30,40);
    box9= new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);

    box13= new Box(360,190,30,40);
    box14= new Box(390,190,30,40);
    box15= new Box(420,190,30,40);

    box16= new Box(390,150,30,40);

    
    
    box17= new Box(630,170,30,40);
    box18= new Box(660,170,30,40);
    box19= new Box(690,170,30,40);
    box20= new Box(720,170,30,40);
    box21= new Box(750,170,30,40);
    
    box22= new Box(660,130,30,40);
    box23= new Box(690,130,30,40);
    box24= new Box(720,130,30,40);
    
    box26= new Box(690,100,30,40);
    
    
    ball= Bodies.circle(50,200,20);
    World.add(world,ball);
    slingy= new SlingShot(this.ball,{x:100,y:200})
	

	Engine.run(engine);
   
	
}
function draw(){
      if(hour >6 && hour <18){
       
       background("yellow")
    }

    else{
        background("black")
    }

    text("SCORE : "+ score,750,40); 

    imageMode(CENTER)
    image(poly, ball.position.x, ball.position.y,40,40);

    fill("orange")
    ground.display();

    fill("green")
    ground1.display();
    ground2.display();
    
    fill("aqua")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()

    fill("lightpink")

    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
   
    box26.display();

    slingy.display()

    box1.score()
    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    box10.score()
    box11.score()
    box12.score()
    box13.score()
    box14.score()
    box15.score()
    box16.score()
    box17.score()
    box18.score()
    box19.score()
    box20.score()
    box21.score()
    box22.score()
    box23.score()
    box24.score()
   

}
function mouseDragged(){

    Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingy.fly()
}

function keyPressed(){
    if(keyCode === 32){
        slingy.attach(this.ball);
    }
}

async function getBG(){

    var fetching =await fetch ("http://worldtimeapi.org/api/timezone/America/Los_Angeles");

    var fetchingJSON =await  fetching.json();

    var datetime = fetchingJSON.datetime;
    hour = datetime.slice(11,13)
  
  
}


