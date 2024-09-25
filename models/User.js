class User {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hola soy ${this.name} y tengo ${this.age} años`);
    }
}

module.exports = User