export const queries = {
  //Consultas para autentificar usuario
  obtenerUsuario:
    "Select usernameUs, contrasenaUs, nombreUS, tipoUs from Usuario where usernameUs = @usernameUs",

  //Consultas para el apartado de clientes
  obtenerClientes: "SELECT * FROM Cliente",

  ingresarClientes:
    "INSERT INTO Cliente (cedulaCli, nombreCli, direccionCli, celularCli, correoCli, fechNac) VALUES (@cedulaCli, @nombreCli, @direccionCli, @celularCli, @correoCli, @fechNac)",

  buscarClienteCi: "Select * from Cliente where cedulaCli = @cedulaCli",

  eliminarClienteCi:
    "DELETE FROM [BonuelosDias].[dbo].[Cliente] WHERE cedulaCli = @cedulaCli",

  obtenerTotalClientes: "SELECT COUNT(*) FROM [BonuelosDias].[dbo].[Cliente]",

  actualizarClienteCi:
    "UPDATE Cliente SET nombreCli = @nombreCli, direccionCli = @direccionCli, celularCli = @celularCli, correoCli = @correoCli, fechNac = @fechNac WHERE cedulaCli = @cedulaCli",

  // Cosnsultas para el apartado de productos
  obtenerProductos:
    "SELECT codProducto, nombre, categoria, precio, stock, fechaCad, fechaElab FROM Producto ",
};
