class Ball{
    constructor(x,y){
    var options={
        density:1,
        frictionAir:0.005
    }
    this.body=Bodies.circle(x,y,100,options);
    this.r=15;
    World .add(world,this.body);
    }
    display(){
       var pos=this.body.position;
       var angle=this.body.angle;
       push ();
       translate (pos.x,pos.y);
       rotate (angle);
       ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);
       pop ();
    }
}