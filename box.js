class Box{
    constructor(x, y) {
        var options = {
          //isStatic:false,
          restitution:0.8,
            friction:1.0
           // density:1.0
          
        }
        this.body = Bodies.rectangle(x, y,40, 50, options);
        this.width = 40;
        this.height =50;
        World.add(world, this.body);
      }
      display(){
        fill("grey")
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}