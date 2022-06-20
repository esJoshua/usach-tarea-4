//1.Función recursiva que realice lo siguiente:
//a.Mostrar en consola los números del 1 al 100 de 1 en 1

const numerosUnoEnUno = (x, y) => {
  console.log("numerosUnoEnUno", x);
  if (x < y) {
    numerosUnoEnUno(x + 1, y);
  }
};
numerosUnoEnUno(1, 100);

//b.Mostrar en consola los números del 1000 al 500 de 2 en 2.

const numerosDosEnDos = (x, y) => {
  console.log("numerosDosEnDos", x);
  if (x > y) {
    numerosDosEnDos(x - 2, y);
  }
};
numerosDosEnDos(1000, 500);

//2.Hacer las funciones que sean necesarias para:
//a.Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una función
//y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.

const x1 = 6;
const x2 = 8;
const x3 = 9;
const x4 = 2;
const x5 = 5;
const x6 = 10;

const sumaNotas = () => {
  return x1 + x2 + x3 + x4 + x5 + x6;
};

const promedioNotas = () => {
  return sumaNotas() / 6;
};

console.log('sumaNotas', sumaNotas())
console.log('promedioNotas', promedioNotas())
