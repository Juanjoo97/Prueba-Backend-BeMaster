function obtenerImparesSegunSigno(numero) {
    if (!Number.isInteger(numero)) {
      console.error('Por favor, ingresa un número entero.');
      return [];
    }
  
    const impares = [];
    const inicio = numero < 0 ? numero : 1;
    const fin = numero < 0 ? 1 : numero;
    for (let i = inicio; i <= Math.abs(fin); i += 2) {
      impares.push(i);
    }
    console.log('Impares:', impares);
    return impares;
  }
  
  // Ejemplo de uso:
  const numeroEntradaPositivo = 9;
  const resultadoPositivo = obtenerImparesSegunSigno(numeroEntradaPositivo);
//   console.log(resultadoPositivo); // Output: [1, 3, 5, 7, 9]
  
  const numeroEntradaNegativo = -9;
  const resultadoNegativo = obtenerImparesSegunSigno(numeroEntradaNegativo);
//   console.log(resultadoNegativo); // Output: [-9, -7, -5, -3, -1, 1 ]
  