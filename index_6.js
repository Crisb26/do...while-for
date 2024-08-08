// while 06 ejercicio//

let valor = true;

while (valor) {
  console.log(`menu: 1. consultar 2. actualizar 3. salir`);
  let opcion = Number(prompt("ingresar la opción"));
  valor = opcion === 3 ? false : true;
}

// do...while //

let valor = true;

do {
  console.log(`menu: 1. consultar 2. actualizar 3. salir`);
  let opcion = Number(prompt("ingresar la opción"));
  valor = opcion === 3 ? false : true;
} while (valor);

// for //

let opcion;
for (let valor = true; valor; ) {
  console.log(`menu: 1. consultar 2. actualizar 3. salir`);
  opcion = Number(prompt("ingresar la opción"));
  valor = opcion !== 3;
}
