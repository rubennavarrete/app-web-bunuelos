export const queries = {
  // ----------------------------------------------LOGIN-------------------------------------------
  //Consultas para autentificar usuario
  obtenerUsuario:
    "Select usernameUs, contrasenaUs, nombreUS, tipoUs from Usuario where usernameUs = @usernameUs",
// ----------------------------------------------CLIENTE-------------------------------------------
  //Consultas para el apartado de clientes
  obtenerClientes: "SELECT * FROM Cliente",

  ingresarClientes:
    "INSERT INTO Cliente (cedulaCli, nombreCli, direccionCli, celularCli, correoCli, fechNac) VALUES (@cedulaCli, @nombreCli, @direccionCli, @celularCli, @correoCli, @fechNac)",

  buscarClienteCi: "Select * from Cliente where cedulaCli = @cedulaCli",

  eliminarClienteCi:
    "DELETE FROM [BonuelosDias].[dbo].[Cliente] WHERE cedulaCli = @cedulaCli",

  obtenerTotalClientes: "SELECT COUNT(*) FROM [BonuelosDias].[dbo].[Cliente]",

 /* actualizarClienteCi:
    "UPDATE Cliente SET nombreCli = @nombreCli, direccionCli = @direccionCli, celularCli = @celularCli, correoCli = @correoCli, fechNac = @fechNac WHERE cedulaCli = @cedulaCli",
    //"exec sp_ModificarCliente @cedulaantigua, @cedula, @nombre, @direccion, @celular, @correoCli, @fecN",
*/
  modificarCliente:
  "exec sp_ModificarCliente @cedula, @nombre, @direccion, @celular, @correoCli, @fecN",
    // ----------------------------------------------PRODUCTO-------------------------------------------
  // Cosnsultas para el apartado de productos
    obtenerProductos:
    "SELECT * FROM Producto ",
  //inserta un producto con procedimiento almacenado
    ingresarProducto:
    "exec sp_insertarProducto @codProducto, @nombre, @categoria, @precio, @stock, @fechaElab, @foto",

    //Buscar un producto por el código
    buscarProducto:
    "select * from Producto where [codProducto] = @codProducto",

    //Edita un producto
    editarProducto:
    "exec sp_ModificarProducto @codProducto, @nombre, @categoria, @precio, @stock, @fechaElab, @foto",

    //borrar un producto
    borrarProducto:
    "delete from Producto where [codProducto] = @codProducto",

};

