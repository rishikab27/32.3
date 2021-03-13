class Box {

    constructor(x,y,width,height){

        var Option = {
          restitution :0.4,
          friction :1,
          density:2
          }
        
        
        this.width= width;
        this.height= height;
          this.body= Bodies.rectangle(x,y,width,height,Option);
          World.add(world,this.body);
        this.visisbility = 255; 
    }
    score(){
      if(this.visisbility < 0 && this.visisbility> -105){
         score++; 
      }
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed< 3){
        push ()
        translate(pos.x,pos.y);
        rotate(angle)
        //fill("aqua");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop ()
        }
      else{
        World.remove(world,this.body)
        this.visisbility-=10
      }
    }


}