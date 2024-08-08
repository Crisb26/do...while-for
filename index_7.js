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