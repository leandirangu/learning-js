class Circle{
constructor(diameter){
	this.diameter=diameter;	
}
calcradius(){
	return 3.142*(this.diameter);
	}
}
const circle = new Circle(15);
console.log(circle.calcradius());