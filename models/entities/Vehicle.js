class Vehicle {
    constructor(brand,model) {
        this.brand = brand
        this.model = model
    }
    getDetails(){
        console.log(`${this.brand}, ${this.model}`);
    }
}

module.exports = Vehicle