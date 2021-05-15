class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 320
        }
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA=body;
    }

    display(){
       
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight (6);
            stroke(48,22,8);
            line (pointB.x,pointB.y,pointA.x,pointA.y);
           
            
            pop();
        }
    }
    
}