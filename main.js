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

  let segundos = 4000

  for (let indice = 0; indice < recuadros.length; indice++) {

    if (tablero[indice]) {
      let ficha = `<span id="ficha${indice}" class="ficha color--${tablero[indice]}" data-ficha='${tablero[indice]}' draggable="true"></span>`

      recuadros[indice].innerHTML = ficha


      segundos = segundos + 100

      setTimeout(() => {

        let ficha = document.querySelector(`#ficha${indice}`)
        ficha.classList.add('visible')

      }, segundos);


    }
  }
}

/////////////////////////////////////////////////////////////
function obtenerValores() {
  const fichas = document.querySelectorAll('.ficha')
  const recuadros = document.querySelectorAll('.recuadros')

  fichas.forEach(ficha => {


    ficha.addEventListener('dragstart', (evento) => {
      let idFichaMovida = evento.target.id
      evento.dataTransfer.setData("ficha", idFichaMovida)

    })
  });

  recuadros.forEach(ficha => {

    ficha.addEventListener('dragover', (evento) => {
      evento.preventDefault();

    });

    ficha.addEventListener('drop', (evento) => {
      let idFichaMovida = evento.dataTransfer.getData("ficha")
      let idRecuadro = evento.target.id

      let ficha = document.getElementById(idFichaMovida)
      let recuadro = document.getElementById(idRecuadro)

      recuadro.appendChild(ficha)

      // console.log(idRecuadro);
    });
  });

  // document.querySelector(".recuadros").innerHTML = cadena



}


llenarDeFichas()
obtenerValores()
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function darleVisibilidad(id) {
  // const fichas = document.querySelectorAll('.ficha')

  // fichas.forEach(ficha => {
  //   ficha.classList.add('visible')
  // });


}

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//MOVER EN3D////////////////////////////////////////
////////////////////////////////////////////////////
// const mundo3D = document.getElementById('mundo3D')

// window.addEventListener('mousedown', () => {
//   window.addEventListener('mousemove', girar)
// })
// window.addEventListener('mouseup', () => {
//   removeEventListener('mousemove', girar)
// })
// function girar(evento) {
//   let X = evento.clientX
//   let Y = evento.clientY
//   mundo3D.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg )`
// }
