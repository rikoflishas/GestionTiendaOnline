//Arreglo de Productos con Propiedades
const products = [
    {   name: "Milk", cost: 3.95, category: "Food"  },
    {   name: "Polo shirt", cost: 20, category: "Clothing"  },
    {   name: "Cream cheese and lox bagel", cost: 13.99, category: "Food"   },
    {   name: "Detergent", cost: 15, category: "main-wash compartment"  },
    {   name: "Brooms", cost: 7.99, category: "cleaning products"   },
    {   name: "Notebook", cost: 0.95, category: "school supplies"},
    {   name: "32 inch TV", cost: 500, category: "Electronics"  },
    {   name: "Laptop", cost: 800, category: "Electronics"  },
    {   name: "Guernica replica painting", cost: 1550, category: "Art"  },
    {   name: "Carrier A/C 3 Ton", cost: 5400, category: "Home Supplies"    },
];

console.log("Lista de Productos");
console.log('----------------------------------------------------------------------------------------');

products.forEach(product => {
    console.log(`Name: ${product.name}, Cost: ${product.cost}, Category: ${product.category}`)
  });

  export {  products  };