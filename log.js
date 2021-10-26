class Log{
    constructor(x,y,w,h,a){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width= w
        this.height = h
        Matter.Body.setAngle(this.body,a)
    }
    display(){
       push() 
        rectMode(CENTER)
        fill("yellow")
        translate(this.body.position.x,this.body.position.y)    
        rotate(this.body.angle)
        rect(0,0,this.width, this.height)
        pop()
    }
}