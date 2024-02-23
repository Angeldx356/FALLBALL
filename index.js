var buttonTiro = document.getElementById('tiro');

buttonTiro.addEventListener('click',insertarpelota)

function insertarpelota(){
    var barra = document.getElementById('spawner');
    var positionbarra = barra.getAttribute('position');

    var scene = document.querySelector('a-scene');

    // Crear una esfera
    var sphere = document.createElement('a-sphere');

    // Establecer atributos para la esfera (posición, color, etc.)
    sphere.setAttribute('id', 'esferita');
    sphere.setAttribute('dynamic-body','');
    sphere.setAttribute('position', positionbarra);
    sphere.setAttribute('radius', '.2');
    sphere.setAttribute('color', 'blue');
    sphere.setAttribute('aabb-collider','');

    // Agregar la esfera a la escena
    scene.appendChild(sphere);

}

var collia = document.getElementById('a');
var collib = document.getElementById('b');
var colibc = document.getElementById('c')



