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
    resultado.innerHTML += `${persona.nombre} debe `;
    
    if (deuda > 0) {
      resultado.innerHTML += `pagar $${deuda.toFixed(2)}`;
    } else if (deuda < 0) {
      resultado.innerHTML += `recuperar $${Math.abs(deuda).toFixed(2)}`;
    } else {
      resultado.innerHTML += `nada`;
    }

    resultado.innerHTML += `<br>`;
  });
}
