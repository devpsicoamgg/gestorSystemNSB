function readUsers() {
  const dataUsuarios = sheetsUsers.getDataRange().getDisplayValues();
  dataUsuarios.shift();
  if (dataUsuarios.length === 0) {
    return "No hay registros para mostrar";
  }

  return dataUsuarios;
}
