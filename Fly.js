class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.pointB=pointB;
        this.fly= Constraint.create(options);
        World.add(world, this.fly);

    }
    
    attach(){
        this.fly.bodyA =null;

    }
     Launch(bodyA){
         this.fly.bodyA=bodyA;
     }
      
      display(){
          
      }
        }
        

