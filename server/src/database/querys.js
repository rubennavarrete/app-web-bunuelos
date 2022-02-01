export const queries = {
  // ----------------------------------------------LOGIN-------------------------------------------
  //Consultas para autentificar usuario
  obtenerUsuario:
    "Select usernameUs, contrasenaUs, nombreUS, tipoUs, urImgUs from Usuario where usernameUs = @usernameUs",

  //Consultas para el apartado de clientes
  obtenerClientes: "SELECT * FROM Cliente",

  ingresarClientes:
    "INSERT INTO Cliente (cedulaCli, nombreCli, direccionCli, celularCli, correoCli, fechNac) VALUES (@cedulaCli, @nombreCli, @direccionCli, @celularCli, @correoCli, @fechNac)",

  buscarClienteCi: "Select * from Cliente where cedulaCli = @cedulaCli",

  eliminarClienteCi: "exec sp_BorrarCliente @cedulaCli",

  obtenerTotalClientes: "SELECT COUNT(*) FROM [BonuelosDias].[dbo].[Cliente]",

  actualizarClienteCi:
    "UPDATE Cliente SET nombreCli = @nombreCli, direccionCli = @direccionCli, celularCli = @celularCli, correoCli = @correoCli, fechNac = @fechNac WHERE cedulaCli = @cedulaCli",
  //"exec sp_ModificarCliente @cedulaantigua, @cedula, @nombre, @direccion, @celular, @correoCli, @fecN",

  // modificarCliente:
  //   "exec sp_ModificarCliente @cedula, @nombre, @direccion, @celular, @correoCli, @fecN",
  // ----------------------------------------------PRODUCTO-------------------------------------------
  // Cosnsultas para el apartado de productos
  obtenerProductos: "SELECT * FROM Producto ",
  //inserta un producto con procedimiento almacenado
  ingresarProducto:
    "exec sp_insertarProducto @codProducto, @nombre, @categoria, @precio, @stock, @fechaElab, @foto",

  //Buscar un producto por el código
  buscarProducto: "select * from Producto where [codProducto] = @codProducto",

  //Edita un producto
  editarProducto:
    "exec sp_ModificarProducto @codProducto, @nombre, @categoria, @precio, @stock, @fechaElab, @foto",

  //borrar un producto
  borrarProducto: "exec sp_BorrarProducto @codProducto",

  // ----------------------------------------------VENTAS-------------------------------------------
  //Esto es un listado de todos los productos aptos para vender
  mostrarPAVender: "select * from ProductoAVender",

  //lo que debe aperecer en la tabla de detalle de venta
  detalleventa: "exec [dbo].[sp_DetalleVenta] @no",

  //para nulliar y obtener el nuevo número de orden de compra
  generarOC: "exec sp_insertarOrdenCompra",

  //para crear orden compra
  llenarOrdenCompra:
    "sp_ModificarOrdenCompra @oc,@Vtotal,@fech,@cedulC,@usernameU",

  //Para insertqar en la tabla detalle de venta
  insertarDv: "exec sp_insertarDetalleVenta @codPro, @nOrd, @cant",

  //Borrar una fila de la tabla detalle de venta
  borrarDv: "EXEC sp_BorrarDetalleVenta @codPro, @nOrd, @cant",

  //Modificar una fila de la tabla detalle de venta
  modificarDv: "exec sp_ModificarDetalleVenta @codPro, @nOrd, @cant",

  // conocer en que número de orden se está
  OC: "select COUNT(numOrden) as OC from OrdenCompra",
};
