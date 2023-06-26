/* Class for a Vehicle */
class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return "Beep.";
	}
	toString() {
		return `This vehicle is a ${this.make} ${this.mode} from ${this.year}`;
	}
}

/* Class for a Car */
class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

/* Class for a Motorcycle */
class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return "VROOM!!!";
	}
}

/* Class for a Garage */
class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
			return "Only vehicles are allowed in here!";
		}
		if (this.vehicles.length >= this.capacity) {
			return "Sorry, we're full.";
		}
		this.vehicles.push(newVehicle);
		return "Vehicle Added!";
	}
}
