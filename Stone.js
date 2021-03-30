class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.image = loadImage("stone.png")
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      
      image(this.image,pos.x,pos.y,50,50);
      pop();
    }
  };
