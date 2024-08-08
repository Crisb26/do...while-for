// while 01 ejercicio//

let i = 1;
while (i <= 4) {
  console.log(`${i}`);
  i++;
}

// do... while //

let i = 1;
do {
  console.log(`${i}`);
  i++;
} while (i <= 4);

// for //

for (let i = 1; i <= 4; i++) {
    console.log(`${i}`);
}

// while 02 ejercicio//

let i = 2;
while (i < 6) {
  console.log(`Numero ${i}`);
  i += 2;
}

// do... while //

let i = 2;
do {
  console.log(`Numero ${i}`);
  i += 2;
} while (i < 6);

// for //

for (let i = 2; i < 6; i += 2) {
    console.log(`Numero ${i}`);
}

// while 03 ejercicio//

let i = 0;
let fin = 5;
while (i <= fin) {
  let x = i ** 2;
  console.log(`${x}`);
  i++;
}

// do...while //

let i = 0;
let fin = 5;
do {
  let x = i ** 2;
  console.log(`${x}`);
  i++;
} while (i <= fin);

// for //

let fin = 5;
for (let i = 0; i <= fin; i++) {
  let x = i ** 2;
  console.log(`${x}`);
}

// while 04 ejercicio//

let i = 8;
let fin = 2;
while (i >= fin) {
  let x = (i ** 2) / 2;
  console.log(`${x}`);
  i--;
}

// do...while //

let i = 8;
let fin = 2;
do {
  let x = (i ** 2) / 2;
  console.log(`${x}`);
  i--;
} while (i >= fin);

// for //

let fin = 2;
for (let i = 8; i >= fin; i--) {
  let x = (i ** 2) / 2;
  console.log(`${x}`);
}

// while 05 ejercicio//

let g = 1;
let f = 12;
while (g <= f) {
  console.log(g);
  g *= 2;
}

// do...while //

let g = 1;
let f = 12;
do {
  console.log(g);
  g *= 2;
} while (g <= f);

// for //

let f = 12;
for (let g = 1; g <= f; g *= 2) {
  console.log(g);
}

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

// while 07 ejercicio//

let check = false;
let saldoCuenta = 30000;

while (check != true) {
  console.log(`Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar`);
  let opcion = Number(prompt(`ingrese el valor a retirar`));
  switch (opcion) {
    case 1: 
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    case 2: {
      let retiro = Number(prompt(`ingrese el valor a retirar`));
      saldoCuenta -= retiro;
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    }
    case 3: 
      check = true; 
      break;
  }
}

// do...while //

let check = false;
let saldoCuenta = 30000;

do {
  console.log(`Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar \n 3. salir`);
  let opcion = Number(prompt(`ingrese su opción`));
  switch (opcion) {
    case 1: 
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    case 2: {
      let retiro = Number(prompt(`ingrese el valor a retirar`));
      saldoCuenta -= retiro;
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    }
    case 3: 
      check = true; 
      break;
  }
} while (check != true);

// for //

let saldoCuenta = 30000;

for (let check = false; check != true; ) {
  console.log(`Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar \n 3. salir`);
  let opcion = Number(prompt(`ingrese su opción`));
  switch (opcion) {
    case 1: 
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    case 2: {
      let retiro = Number(prompt(`ingrese el valor a retirar`));
      saldoCuenta -= retiro;
      console.log(`su saldo es ${saldoCuenta}`);
      break;
    }
    case 3: 
      check = true; 
      break;
  }
}

// while 08 ejercicio//

let opcion = " ";

while (opcion != "salir") {
  opcion = prompt(`Ingrese una opción \n notas \n salir`);
  if (opcion == "notas") {
    let nota = Number(prompt(`Ingrese la nota de su asignatura`));
    nota > 3 ? alert(`su nota de ${nota}, es aprobado`) : alert(`su nota de ${nota}, No es aprobado`);
  } else if (opcion == "salir") {
    break;
  } else {
    opcion = "salir";
    alert(`opción inválida..`);
  }
}

// do...while //

let opcion = " ";

do {
  opcion = prompt(`Ingrese una opción \n notas \n salir`);
  if (opcion == "notas") {
    let nota = Number(prompt(`Ingrese la nota de su asignatura`));
    nota > 3 ? alert(`su nota de ${nota}, es aprobado`) : alert(`su nota de ${nota}, No es aprobado`);
  } else if (opcion == "salir") {
    break;
  } else {
    opcion = "salir";
    alert(`opción inválida..`);
  }
} while (opcion != "salir");

// for //

for (let opcion = " "; opcion != "salir"; ) {
    opcion = prompt(`Ingrese una opción \n notas \n salir`);
    if (opcion == "notas") {
      let nota = Number(prompt(`Ingrese la nota de su asignatura`));
      nota > 3 ? alert(`su nota de ${nota}, es aprobado`) : alert(`su nota de ${nota}, No es aprobado`);
    } else if (opcion == "salir") {
      break;
    } else {
      opcion = "salir";
      alert(`opción inválida..`);
    }
}

// fin de la actividad //