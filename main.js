const recuadros = document.querySelectorAll('.tablero__recuadro')

/////////////////////////////////////////////////////////////
let tablero = [
  'azul', 'azul', 'azul', 'azul', 'azul', 'azul', 'azul', 'azul',
  'azul', 'azul', 'azul', 'azul', 'azul', 'azul', 'azul', 'azul',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo',
  'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo',
]

/////////////////////////////////////////////////////////////
function llenarDeFichas() {
  for (let indice = 0; indice < recuadros.length; indice++) {

    if (tablero[indice]) {
      let ficha = `<span class="ficha color--${tablero[indice]}" data-ficha='${tablero[indice]}' draggable="true"></span>`

      recuadros[indice].innerHTML = ficha
    }
  }
}

/////////////////////////////////////////////////////////////
function obtenerValores() {
  const fichas = document.querySelectorAll('.ficha')

  fichas.forEach(ficha => {
    console.log(ficha);
  });
}
