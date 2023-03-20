class Vehicle {
    constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isVehicle = true;
    }
    honk(){
        return "BEEP";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'Vroooom';
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if(vehicle.isVehicle !== true){
            console.log('Only vehicles are allowed here!')
            console.log(type)
        }
        if(this.vehicles.length === this.capacity){
            return 'Sorry, we are full';
        }
        this.vehicles.push(vehicle);
    }
}