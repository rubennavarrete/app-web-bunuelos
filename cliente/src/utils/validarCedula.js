const ValidarCedula = (cedula) => {
  //Preguntamos si la cedula consta de 10 digitos
  if (cedula != null && cedula.length === 10) {
    // Obtenemos el digito de la region que sonlos dos primeros digitos
    const digitoRegion = cedula.substring(0, 2);

    // Pregunto si la region existe ecuador se divide en 24 regiones
    if (digitoRegion >= 1 && digitoRegion <= 24) {
      // Extraigo el ultimo digito
      const ultimoDigito = Number(cedula.substring(9, 10));

      // Agrupo todos los pares y los sumo
      const pares =
        Number(cedula.substring(1, 2)) +
        Number(cedula.substring(3, 4)) +
        Number(cedula.substring(5, 6)) +
        Number(cedula.substring(7, 8));

      // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
      let numeroUno = cedula.substring(0, 1);
      numeroUno = numeroUno * 2;
      if (numeroUno > 9) {
        numeroUno = numeroUno - 9;
      }

      let numeroTres = cedula.substring(2, 3);
      numeroTres = numeroTres * 2;
      if (numeroTres > 9) {
        numeroTres = numeroTres - 9;
      }

      let numeroCinco = cedula.substring(4, 5);
      numeroCinco = numeroCinco * 2;
      if (numeroCinco > 9) {
        numeroCinco = numeroCinco - 9;
      }

      let numeroSiete = cedula.substring(6, 7);
      numeroSiete = numeroSiete * 2;
      if (numeroSiete > 9) {
        numeroSiete = numeroSiete - 9;
      }

      let numeroNueve = cedula.substring(8, 9);
      numeroNueve = numeroNueve * 2;
      if (numeroNueve > 9) {
        numeroNueve = numeroNueve - 9;
      }

      const impares =
        numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;

      // Suma total
      const sumaTotal = pares + impares;

      // extraemos el primero digito
      const primerDigitoSuma = String(sumaTotal).substring(0, 1);

      // Obtenemos la decena inmediata
      const decena = (Number(primerDigitoSuma) + 1) * 10;

      // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
      let digitoValidador = decena - sumaTotal;

      // Si el digito validador es = a 10 toma el valor de 0
      if (digitoValidador === 10) {
        digitoValidador = 0;
      }

      // Validamos que el digito validador sea igual al de la cedula
      if (digitoValidador === ultimoDigito) {
        return true; //"la cedula: " + cedula + " es correcta";
      } else {
        return false; //"la cedula: " + cedula + " es incorrecta";
      }
    } else {
      // imprimimos en consola si la region no pertenece
      return false; //"Esta cedula no pertenece a ninguna region";
    }
  } else {
    //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
    return false; //"Esta cedula tiene menos de 10 Digitos";
  }
};

export default ValidarCedula;
