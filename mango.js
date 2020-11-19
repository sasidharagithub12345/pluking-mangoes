class Mango {

constructor(x,y,r){

var options = {

isStatic : true,
restitution: 0.01,
friction: 1

}

this.body = Bodies.circle(x,y,r,options)
this.r = r
this.image = loadImage("Plucking mangoes/mango.png")
}
display(){

imageMode(CENTER)
image(this.image,this.position.x,this.position.y,this.r)

}
}