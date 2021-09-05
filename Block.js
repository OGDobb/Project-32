class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        fill("green");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        console.log(this.body.speed);
         
       
    
        if (this.body.speed<5) {
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
        }
         else{
           World.remove(world,this.body);
          push();
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
        pop();
      }
      calculateScore(){
        if (this.Visibility<0 && this.Visibility>-105){
          score++;
        }
    }
  }