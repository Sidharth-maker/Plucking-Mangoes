class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("boy.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      
      image(this.image,pos.x,pos.y,200,400);
      pop();
    }
  };
