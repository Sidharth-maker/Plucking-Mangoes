class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("mango.png")
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      fill("brown");
      image(this.image,pos.x,pos.y,50,50);
      pop();
      
    }
  };
