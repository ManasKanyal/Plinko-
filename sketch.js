const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;


var plinkos = [];
var division = [];
var particles = [];

var engine,world;
var ground;


var divisionHeight=300;

function setup() {
 
 createCanvas(480,800);

 engine = Engine.create();
 world = engine.world;

ground = new Ground(200,793,600,15);

for (var k=0; k <=innerWidth; k= k+80){

  division.push(new Divisions(k,height-divisionHeight/2,12,divisionHeight));

}


for (var j=15; j<=width-15; j=j+50)
	{

    plinkos.push(new Plinko(j,175));
    
  }
  
  for (var m=40; m<=width-40; m=m+50)
	{

    plinkos.push(new Plinko(m,75));
    
  }
  
  for (var n=40; n<=width-40; n=n+50)
	{

    plinkos.push(new Plinko(n,275));
    
  }
  
  for (var l=15; l<=width-15; l=l+50)
	{

    plinkos.push(new Plinko(l,375));
    
	}

Engine.run(engine);

}

function draw() {

  background(0);  

  Engine.update(engine);

fill(255)
  for(var b=0;b<plinkos.length;b++){
    plinkos[b].display();
}

if(frameCount % 60 === 0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
}

for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();

}

for(var k=0;  k<division.length;  k++){
	division[k].display();
 }

 ground.display();




}