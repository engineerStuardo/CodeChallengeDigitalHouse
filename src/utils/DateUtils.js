export const toLongDate = dateString => {
  const date = new Date(dateString);
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  const formattedDate = `${date.getDate()} de ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;

  return formattedDate;
};
