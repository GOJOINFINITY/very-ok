class Bird{
    constructor(x,y,w,h){
        var options = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
        }
        this.body= Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width= w
        this.height = h
    }
    display(){
       push() 
       var pos = this.body.position
       pos.x = mouseX
       pos.y = mouseY
        rectMode(CENTER)
        fill("red")
        translate(pos.x,pos.y)    
        rotate(this.body.angle)
        rect(0,0,this.width, this.height)
        pop()
    }
}