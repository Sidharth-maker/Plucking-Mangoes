class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.image = loadImage("tree.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ;
      image(this.image,650,120,350,600);
      pop();
     
    }
  };
