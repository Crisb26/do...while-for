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