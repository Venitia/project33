class Snow {
    constructor(x,y,r)
      {
          var options = { 
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("snow4.webp");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
          
  
      }
      
      display(){
      
              
             
              rectMode(CENTER)
             // fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
             
      }
  }
  