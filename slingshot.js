class SlingShot{
    constructor(bodyA,pointB){
          var options = {
              bodyA: bodyA,
              pointB: pointB,
              stifness: 0,
              length: 30
          }
          this.pointB = pointB
          this.sling = Constraint.create(options)
          World.add(world,this.sling)
       
          
    }

    soltar(){
       this.sling.bodyA = null
    }
    soltar2(){
        this.body = null
    }
    voltar(body){
       this.sling.bodyA = body
    }



    display(){

        if(this.sling.bodyA){
            var pontoA = this.sling.bodyA.position;
            var pontoB = this.pointB;
  
            push();
            var cor = color(random(0,250),random(0,250),random(0,250))
            if(pontoA.x!==200){
               stroke(cor)
               strokeWeight(4);
               stroke(250);
               line(pontoA.x-20,pontoA.y,pontoB.x,pontoB.y);
               
            }
            pop();
        }
    }


}