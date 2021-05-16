class Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        this.name           = name;
        this.price          = price;
        this.ingredients    = ingredients;
        this.type           = type;
        this.isSweet        = isSweet || false;
    }  
    
}
class Chocolate extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type, isSweet);
    }
}
class Sweet extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type, isSweet);
    }
}
class Strawberry extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type, isSweet);
    }
}

let chocolate = new Chocolate("Blackforest", 700000,"Chocolate, Egg, Flour", "Cake")
let sweet = new Sweet("Cheesecake", 200000,"Cheese, Egg, Flour", "Cake")
let strawberry = new Strawberry("Strawberry Short Cake", 300000,"Strawberry, Egg, Flour", "Cake")

console.log(chocolate);
console.log(sweet);
console.log(strawberry);
// Cookie.identifyCookies();
// Cookie.startisSweet();

