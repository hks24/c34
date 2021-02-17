class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1,
            length: 250
            
        
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
      //  this.width = width;
        //this.height = height;
        World.add(world,this.rope); 
    }
    display(){
//var pos = this.body.position;
       //var angle = this.body.angle;
       var pointA = this.rope.bodyA.position;
       var pointB = this.pointB;
       push()
       strokeWeight(3)
      // line(pointA.x,pointA.y,pointB.x,pointB.y);
     pop()
    }
}