const personas = [];

function agregarPersona() {
  const nombre = document.getElementById('nombre').value;
  const gasto = parseFloat(document.getElementById('gasto').value);

  if (nombre && !isNaN(gasto)) {
    personas.push({ nombre, gasto });
    actualizarListaPersonas();
  }
}

function actualizarListaPersonas() {
  const listaPersonas = document.getElementById('listaPersonas');
  listaPersonas.innerHTML = '';

  personas.forEach(persona => {
    const listItem = document.createElement('li');
    listItem.textContent = `${persona.nombre}: $${persona.gasto.toFixed(2)}`;
    listItem.style.color = 'white'; // Establecer el color del texto a blanco
    listItem.style.marginBottom = '10px'; // Agregar margen de 15px
    listaPersonas.appendChild(listItem);
  });
}

function calcularGastos() {
  const totalGastos = personas.reduce((total, persona) => total + persona.gasto, 0);
  const promedio = totalGastos / personas.length;

  const resultado = document.getElementById('resultado');
  resultado.textContent = '';

  personas.forEach(persona => {
    const deuda = promedio - persona.gasto;
    const deudaTexto = document.createElement('div');

    if (deuda > 0) {
      deudaTexto.innerHTML = `${persona.nombre} debe pagar $${deuda.toFixed(2)}`;
      deudaTexto.classList.add('debe-pagar');
    } else if (deuda < 0) {
      deudaTexto.innerHTML = `${persona.nombre} debe recuperar $${Math.abs(deuda).toFixed(2)}`;
      deudaTexto.classList.add('debe-recuperar');
    } else {
      deudaTexto.innerHTML = `${persona.nombre} no debe nada`;
      deudaTexto.classList.add('no-debe-nada');
    }

    deudaTexto.style.color = 'white'; // Establecer el color del texto a blanco
    deudaTexto.style.marginBottom = '10px';
    resultado.appendChild(deudaTexto);
  });
}

// Obtener los campos de entrada
const inputNombre = document.getElementById('nombre');
const inputGasto = document.getElementById('gasto');

// Agregar evento de escucha para la tecla Enter
inputNombre.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    agregarPersona(); // Llamar a la función agregarPersona() cuando se presiona Enter
  }
});

inputGasto.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    agregarPersona(); // Llamar a la función agregarPersona() cuando se presiona Enter
  }
});
