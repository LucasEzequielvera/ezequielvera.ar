let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/CATALINA.png') {
      miImage.setAttribute('src','images/CATALINA2.jpg');
    } else {
      miImage.setAttribute('src', 'images/CATALINA.png');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido, ' + miNombre;
  }
}
