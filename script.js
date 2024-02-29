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
    listItem.style.marginBottom = '15px'; // Agregar margen de 15px
    listaPersonas.appendChild(listItem);
  }); // Faltaba esta llave de cierre
} // Llave de cierre de la función actualizarListaPersonas

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
    deudaTexto.style.marginBottom = '15px';
    resultado.appendChild(deudaTexto);
  });
} // Llave de cierre de la función calcularGastos