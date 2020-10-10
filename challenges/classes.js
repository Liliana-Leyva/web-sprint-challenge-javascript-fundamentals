// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length,width,height){
//     this.length = length;
//     this.width=width;
//     this.height=height;
//   }
//   CuboidMaker.prototype.volume= function(){
//     return this.length * this.width * this.height
//   }
//   CuboidMaker.prototype.surface = function(){
//     return  2 *(this.length * this.width + this.length * this.height + this.width * this.height)
//   }    
    class CuboidMaker {
        constructor(attributes){
            this.length = attributes.length;
            this.width = attributes.width;
            this.height = attributes.height;
        }
    

    volume(){
        return this.length * this.width * this.height;
    }

    surface(){
        return 2 *(this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length : 4,
    width : 5,
    height : 5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Volume is: ", cuboid.volume()); // 100
console.log("Surface is: ", cuboid.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
 //Find out the formulas for volume and surface area for cubes and create 
 //those methods using the dimension properties from CuboidMaker.  
 //Test your work by logging out your volume and surface area.
 