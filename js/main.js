import { products } from './products.js'

/**
 * Objetivo
El objetivo de este proyecto es permitir que los estudiantes practiquen cómo aplicar 
algunos de los métodos de arreglos más usados en JavaScript. 
En particular practicar los métodos filter(), sort(), y map() para manipular datos de un arreglo.

Problema: Filtro y Orden de Productos de una Tienda Online
Eres el encargado de gestionar los datos de una tienda online. 
Tienes un listado de productos con información como nombre, precio y categoría. 
Tu tarea será filtrar los productos por precio, 
ordenarlos alfabéticamente y generar una lista con los nombres.

-   Usa filter() para obtener los productos que cuesten menos de $100.
-   Usa sort() para ordenar esos productos alfabéticamente por su nombre.
-   Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
-   Muestra los resultados de la aplicación de cada métiodo en consola.

 */
console.log('----------------------------------------------------------------------------------------');

// Productos que cuestan menos de 100
const lessThan100 = products.filter( product => product.cost < 100 );

console.log("Productos que cuestan menos de $100: ");
console.log('----------------------------------------------------------------------------------------');
lessThan100.forEach( product => {
    console.log(`Nombre: ${product.name}`);
    console.log(`Precio: ${product.cost}`);
    console.log(`Categoria: ${product.category}`);
    console.log('----------------------------------------------------------------------------------------');
});

//En orden alfabetico
console.log("Productos en orden alfabetico: ");
console.log('----------------------------------------------------------------------------------------');
const alphabeticalOrder = products.sort((a,b) => {
    return a.name.localeCompare(b.name);
});

alphabeticalOrder.forEach ( product => {
    console.log(`Nombre: ${product.name}`);
});

 