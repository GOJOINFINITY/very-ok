class Pig{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width= w
        this.height = h
    }
    display(){
       push() 
        rectMode(CENTER)
        fill("green")
        translate(this.body.position.x,this.body.position.y)    
        rotate(this.body.angle)
        rect(0,0,this.width, this.height)
        pop()
    }
}