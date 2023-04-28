const miDiv = document.querySelector('Dyv');
const miBoton1 = document.querySelector('miBoton1');
const miBoton2 = document.querySelector('miBoton2');
const miBoton3 = document.querySelector('miBoton3');
const miBoton4 = document.querySelector('miBoton4');

miBoton1.addEventListener('click', () => {
Dyv.textContent = '¡Hola Mundo!';
});

miBoton2.addEventListener('click', () => {
Dyv.style.backgroundColor = 'pink';
});


miBoton3.addEventListener('click', () => {
alert('¡Haz hecho clic!');
});


miBoton4.addEventListener('click', () => {
if (miDiv.style.display === 'none') {
Dyv.style.display = 'block';
} else {
Dyv.style.display = 'none';
}
});
