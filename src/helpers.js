
// obtener diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
};

// calcula el total a pagar segun la marca

export function calcularMarca (marca) {
  let incremento;

  switch (marca) {
    case 'europe':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
};

// Calcula el tipo de seguro

export function obtenerPlan (plan) {
  return plan === 'basico' ? 1.20 : 1.50;
};

// Convertir primera letra a mayúscula

export function ConvertirMayuscula (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};