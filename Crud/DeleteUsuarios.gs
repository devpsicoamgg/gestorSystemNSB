function borrarUsuario(id) {
  if (id !== null && id !== undefined) {
    console.log("ID a borrar (borrarUsuario):", id);
    const fila = buscarFila(id);
    console.log("Fila a borrar:", fila);
    sheetsUsers.deleteRow(fila);
  } else {
    console.error("El ID es nulo o indefinido (borrarUsuario).");
  }
}
