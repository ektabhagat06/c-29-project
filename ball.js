class Ball{
    constructor(x,y,radius){
        var option ={
            'restitution':0.8
            'friction':1.0
            'density':1.0:
        }
        this.body=bodies.circle(x,y,radius,options);
        this.radius=radius;
        world.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        fill(176,219,83);
        ellipseMode(CENTRE);
        ellipse(pos.x,pos.y,this.radius);
    }
}