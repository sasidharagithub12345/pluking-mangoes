class Boy{
   constructor(x,y,width,height){

var options = {

isStatic : true,
friction : 0.1
}

this.body = Bodies.rectangle(x,y,width,height,options)
this.image = loadImage("Plucking mangoes/boy.png")
}
display(){

}
}