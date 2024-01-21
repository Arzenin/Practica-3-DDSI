const express = require('express');
const dotenv = require('dotenv'); // Uso dotenv para mantener seguro datos vulnerables
const cors = require('cors'); // Uso CORS para poder utilizar la API desde la app (Seguridad)
const mysql = require('mysql2');
const fs = require('fs');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());

// Revisar siempre si no va bien conexión a BD

const dbConfig = {
  //host: "localhost",
  host: "localhost",
  user: "root",
  password: "admin",
  database: "ddsip3",
  port: "3000"
};

async function abrirConexion(){
  const connection = await mysql.createConnection(dbConfig);
  return connection;
} 


app.post('/crearcliente', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { email, nombre, date, username, contraseña, domicilio, datosPago } = req.body;
    const querySelect = 'INSERT INTO CLIENTES (IdCliente, Nombre, Username, Contrasenia, Domicilio, Puntos, FechaNacimiento, DatosDePago) VALUES (?, ?, ?, ?, ?, 0, ?, ?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [email, nombre, username, contraseña, domicilio, date, datosPago]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Cliente creado correctamente' });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
});

app.post('/crearalergeno', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, nombre, descripcion } = req.body;
    const querySelect = 'INSERT INTO ALERGENOS (IdAlergeno, Nombre, Descripcion) VALUES (?, ?, ?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, nombre, descripcion]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Alergeno creado correctamente' });
  } catch (error) {
    console.error('Error al crear el alergeno:', error);
    res.status(500).json({ error: 'Error al crear alergeno' });
  }
});

app.post('/crearreceta', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const {id, precio} = req.body;
    const querySelect = 'INSERT INTO RECETAS (IdReceta, Precio) VALUES (?,?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, precio]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Receta creada correctamente' });
  } catch (error) {
    console.error('Error al crear Receta:', error);
    res.status(500).json({ error: 'Error al crear Receta' });
  }
});

app.post('/crearingrediente', async (req, res) => {

  try {
    const connection = await abrirConexion();
    const {id,nombre,numStock} = req.body;
    const querySelect = 'INSERT INTO INGREDIENTES (IdIngrediente,Nombre,NumStock) VALUES (?, ?, ?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, nombre, numStock]);

    connection.commit();
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Ingrediente creado correctamente' });
  } catch (error) {
    console.error('Error al crear Ingrediente:', error);
    res.status(500).json({ error: 'Error al crear Ingrediente' });
  }
});

app.put('/editarcliente', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { email, nombre, date, username, contraseña, domicilio, datosPago } = req.body;
    const querySelect = 'UPDATE CLIENTES SET Nombre=?, Username=?, Contrasenia=?, Domicilio=?, FechaNacimiento=?, DatosDePago=? WHERE IdCliente=?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [nombre, username, contraseña, domicilio, date, datosPago, email]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Cliente editado correctamente' });
  } catch (error) {
    console.error('Error al editar cliente:', error);
    res.status(500).json({ error: 'Error al editar cliente' });
  }
});

app.put('/editaringrediente', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { idIngrediente, nombre, numStock } = req.body;
    const querySelect = 'UPDATE INGREDIENTES SET Nombre=?,NumStock=? WHERE IdIngrediente=?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [nombre,numStock,idIngrediente]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Ingrediente editado correctamente' });
  } catch (error) {
    console.error('Error al editar Ingrediente:', error);
    res.status(500).json({ error: 'Error al editar Ingrediente' });
  }
});

app.put('/editaralergeno', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { idAlergeno,nombre,descripcion} = req.body;
    const querySelect = 'UPDATE ALERGENOS SET Nombre=?,Descripcion=? WHERE IdAlergeno=?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [nombre,descripcion,idAlergeno]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Ingrediente editado correctamente' });
  } catch (error) {
    console.error('Error al editar Ingrediente:', error);
    res.status(500).json({ error: 'Error al editar Ingrediente' });
  }
});

app.post('/crearreserva', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, idP, npersonas, hora} = req.body;
    const querySelect = 'INSERT INTO RESERVAS_PEDIDO (IdReserva, IdPedido, NumPersonas, HoraIni) VALUES (?, ?, ?, ?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, idP, npersonas, hora]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Reserva creada correctamente' });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear una reserva' });
  }
});

app.post('/creartrabajadores', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, turno, bono } = req.body;
    const querySelect = 'INSERT INTO TRABAJADOR (IdTrabajador, Turno, Bono) VALUES (?, ?, ?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, turno, bono]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Trabajador creado correctamente' });
  } catch (error) {
    console.error('Error al crear trabajador:', error);
    res.status(500).json({ error: 'Error al crear trabajador' });
  }
});

app.get('/clientes', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM CLIENTES';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

app.get('/trabajadores', async (req, res) => { // GET Trabajadores
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM TRABAJADOR';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/alergeno', async (req, res) => { // GET Alergeno
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM ALERGENOS';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/ingrediente', async (req, res) => { // GET Ingredientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM INGREDIENTES';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/verpedidos', async (req, res) => { // GET Ingredientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM PEDIDO';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/verpedidosactivos', async (req, res) => { // GET Ingredientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM PEDIDO WHERE Estado = \'Activo\';';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/verpedidosinactivos', async (req, res) => { // GET Ingredientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM PEDIDO WHERE Estado= \'Inactivo\';';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener listado de ingredientes:', error);
    res.status(500).json({ error: 'Error al obtener ingredientes' });
  }
});

app.get('/receta', async (req, res) => { // GET receta
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM RECETAS';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

app.get('/reservas', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM RESERVAS_PEDIDO';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

app.get('/clientes/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM CLIENTES WHERE idCliente = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener cliente:', error);
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
});

app.get('/ingrediente/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM INGREDIENTES WHERE IdIngrediente = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener Ingrediente:', error);
    res.status(500).json({ error: 'Error al obtener Ingrediente' });
  }
});

app.get('/alergeno/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM ALERGENOS WHERE IdAlergeno = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener Ingrediente:', error);
    res.status(500).json({ error: 'Error al obtener Ingrediente' });
  }
});

app.delete('/borrarcliente/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Cliente:", id);

    const checkQuery1 = 'SELECT * FROM  CLIENTES_ALERGENOS WHERE idCliente = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM CLIENTES_ALERGENOS WHERE idCliente = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  CLIENTES_PEDIDO WHERE idCliente = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM CLIENTES_PEDIDO WHERE idCliente = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    const checkQuery3 = 'SELECT * FROM  CLIENTES WHERE idCliente = ?';
    const [result3] = await connection.promise().query(checkQuery3, id);

    if (result3.length > 0) {
      const deleteQuery3 = 'DELETE FROM CLIENTES WHERE idCliente = ?';
      await connection.promise().query(deleteQuery3, id);
    }  

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Ingrediente:', error);
    res.status(500).json({ error: 'Error al borrar Ingrediente' });
  }
  console.log('Ingrediente eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Ingrediente eliminado con éxito' });
});

app.delete('/borrartrabajador/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Trabajador:", id);

    const checkQuery1 = 'SELECT * FROM  TRABAJADOR_PEDIDO WHERE IdTrabajador = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM TRABAJADOR_PEDIDO WHERE Idtrabajador = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  TRABAJADOR WHERE IdTrabajador = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM TRABAJADOR WHERE IdTrabajador = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Trabajador:', error);
    res.status(500).json({ error: 'Error al borrar Trabajador' });
  }
  console.log('Trabajador eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Trabajador eliminado con éxito' });
});

app.delete('/borraringrediente/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Ingrediente:", id);

    const checkQuery1 = 'SELECT * FROM  RECETAS_INGREDIENTES WHERE IdIngrediente = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM RECETAS_INGREDIENTES WHERE IdIngrediente = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  INGREDIENTES_ALERGENOS WHERE IdIngrediente = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM INGREDIENTES_ALERGENOS WHERE IdIngrediente = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    const checkQuery3 = 'SELECT * FROM  INGREDIENTES WHERE IdIngrediente = ?';
    const [result3] = await connection.promise().query(checkQuery3, id);

    if (result3.length > 0) {
      const deleteQuery3 = 'DELETE FROM INGREDIENTES WHERE IdIngrediente = ?';
      await connection.promise().query(deleteQuery3, id);
    }  

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Ingrediente:', error);
    res.status(500).json({ error: 'Error al borrar Ingrediente' });
  }
  console.log('Ingrediente eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Ingrediente eliminado con éxito' });
});

app.delete('/borrarpedido/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Pedido:", id);

    const checkQuery1 = 'SELECT * FROM  PEDIDO_RECETAS WHERE IdPedido = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM PEDIDO_RECETAS WHERE IdPedido = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  RESERVAS_PEDIDO WHERE IdPedido = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM RESERVAS_PEDIDO WHERE IdPedido = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    const checkQuery3 = 'SELECT * FROM  CLIENTES_PEDIDO WHERE IdPedido = ?';
    const [result3] = await connection.promise().query(checkQuery3, id);

    if (result3.length > 0) {
      const deleteQuery3 = 'DELETE FROM CLIENTES_PEDIDO WHERE IdPedido = ?';
      await connection.promise().query(deleteQuery3, id);
    }  

    const checkQuery4 = 'SELECT * FROM  TRABAJADOR_PEDIDO WHERE IdPedido = ?';
    const [result4] = await connection.promise().query(checkQuery4, id);

    if (result4.length > 0) {
      const deleteQuery4 = 'DELETE FROM TRABAJADOR_PEDIDO WHERE IdPedido = ?';
      await connection.promise().query(deleteQuery4, id);
    }  

    const checkQuery5 = 'SELECT * FROM  PEDIDO WHERE IdPedido = ?';
    const [result5] = await connection.promise().query(checkQuery5, id);

    if (result5.length > 0) {
      const deleteQuery5 = 'DELETE FROM PEDIDO WHERE IdPedido = ?';
      await connection.promise().query(deleteQuery5, id);
    }  

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Pedido:', error);
    res.status(500).json({ error: 'Error al borrar Pedido' });
  }
  console.log('Pedido eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Pedido eliminado con éxito' });
});

app.delete('/borrarreserva/:id', async (req,res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;

    console.log("Reserva:", id);

    const checkQuery1 = 'SELECT * FROM RESERVAS_PEDIDO WHERE IdReserva = ?';
    const [result1] = await connection.promise().query(checkQuery1,id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM RESERVAS_PEDIDO WHERE IdReserva = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar reserva:', error);
    res.status(500).json({ error: 'Error al borrar reserva' });
  }
  console.log('Reserva eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Reserva eliminado con éxito' });
});

app.delete('/borraralergeno/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Alergeno:", id);

    const checkQuery1 = 'SELECT * FROM  CLIENTES_ALERGENOS WHERE IdAlergeno = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM CLIENTES_ALERGENOS WHERE IdAlergeno = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  INGREDIENTES_ALERGENOS WHERE IdAlergeno = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM INGREDIENTES_ALERGENOS WHERE IdAlergeno = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    const checkQuery3 = 'SELECT * FROM  ALERGENOS WHERE IdAlergeno = ?';
    const [result3] = await connection.promise().query(checkQuery3, id);

    if (result3.length > 0) {
      const deleteQuery3 = 'DELETE FROM ALERGENOS WHERE IdAlergeno = ?';
      await connection.promise().query(deleteQuery3, id);
    }  

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Ingrediente:', error);
    res.status(500).json({ error: 'Error al borrar Ingrediente' });
  }
  console.log('Ingrediente eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Ingrediente eliminado con éxito' });
});

app.delete('/borrarreceta/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Receta:", id);

    const checkQuery1 = 'SELECT * FROM  PEDIDO_RECETAS WHERE IdReceta = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM PEDIDO_RECETAS WHERE IdReceta = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  RECETAS_INGREDIENTES WHERE IdReceta = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM RECETAS_INGREDIENTES WHERE IdReceta = ?';
      await connection.promise().query(deleteQuery2, id);
    }    

    const checkQuery3 = 'SELECT * FROM  RECETAS WHERE IdReceta = ?';
    const [result3] = await connection.promise().query(checkQuery3, id);

    if (result3.length > 0) {
      const deleteQuery3 = 'DELETE FROM RECETAS WHERE IdReceta = ?';
      await connection.promise().query(deleteQuery3, id);
    }  

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar Ingrediente:', error);
    res.status(500).json({ error: 'Error al borrar Ingrediente' });
  }
  console.log('Ingrediente eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Ingrediente eliminado con éxito' });
});

app.post('/reiniciar', async (req, res) => {
  try {
    const connection = await abrirConexion();

    // Sentencias SQL para reiniciar la BD
    const sqlStatements = [
      "SET foreign_key_checks = 0;",
      "DROP TABLE IF EXISTS TRABAJADOR;",
      "DROP TABLE IF EXISTS PEDIDO;",
      "DROP TABLE IF EXISTS RESERVAS;",
      "DROP TABLE IF EXISTS CLIENTES;",
      "DROP TABLE IF EXISTS ALERGENOS;",
      "DROP TABLE IF EXISTS INGREDIENTES;",
      "DROP TABLE IF EXISTS RECETAS;",
      "DROP TABLE IF EXISTS RESERVAS_PEDIDO;",
      "DROP TABLE IF EXISTS TRABAJADOR_PEDIDO;",
      "DROP TABLE IF EXISTS CLIENTES_PEDIDO;",
      "DROP TABLE IF EXISTS PEDIDO_RECETAS;",
      "DROP TABLE IF EXISTS CLIENTES_ALERGENOS;",
      "DROP TABLE IF EXISTS RECETAS_INGREDIENTES;",
      "DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS;",
      "DROP TRIGGER IF EXISTS RestarPuntos;",
      "DROP TRIGGER IF EXISTS RellenarStock;",
      "DROP TRIGGER IF EXISTS ContieneAlergeno;",
      "SET foreign_key_checks = 1;",
      "CREATE TABLE IF NOT EXISTS TRABAJADOR (IdTrabajador VARCHAR(20), Turno INT, Bono INT CHECK(Bono <= 500), PRIMARY KEY(IdTrabajador));",
      "CREATE TABLE IF NOT EXISTS PEDIDO (IdPedido INT, Valoracion INT CHECK(Valoracion <= 10), TPago VARCHAR(10) CHECK (TPago IN ('Tarjeta','Efectivo','Puntos')), Estado VARCHAR(10) CHECK (Estado IN ('Activo','Inactivo')), PRIMARY KEY(IdPedido));",
      "CREATE TABLE IF NOT EXISTS RESERVAS (IdReserva INT, PRIMARY KEY(IdReserva));",
      "CREATE TABLE IF NOT EXISTS CLIENTES (IdCliente VARCHAR(40), Nombre VARCHAR(40), UserName VARCHAR(40), Contrasenia VARCHAR(40), Domicilio VARCHAR(40), Puntos INT, FechaNacimiento VARCHAR(40), DatosDePago VARCHAR(30), PRIMARY KEY(IdCliente));",
      "CREATE TABLE IF NOT EXISTS ALERGENOS (IdAlergeno INT, Nombre VARCHAR(40), Descripcion VARCHAR(40), PRIMARY KEY(IdAlergeno));",
      "CREATE TABLE IF NOT EXISTS INGREDIENTES (IdIngrediente INT, Nombre VARCHAR(40), NumStock INT CHECK (NumStock >= 0), PRIMARY KEY(IdIngrediente));",
      "CREATE TABLE IF NOT EXISTS RECETAS (IdReceta INT, Precio INT CHECK (Precio >= 1), PRIMARY KEY(IdReceta));",
      "CREATE TABLE IF NOT EXISTS RESERVAS_PEDIDO (IdReserva INT, IdPedido INT UNIQUE, NumPersonas INT, HoraIni VARCHAR(40), PRIMARY KEY(IdReserva,Horaini), FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva), FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido));",
      "CREATE TABLE IF NOT EXISTS TRABAJADOR_PEDIDO (IdTrabajador VARCHAR(20), IdPedido INT, PRIMARY KEY(IdTrabajador,IdPedido), FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido), FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador));",
      "CREATE TABLE IF NOT EXISTS CLIENTES_PEDIDO (IdCliente VARCHAR(40), IdPedido INT, PRIMARY KEY(IdPedido,IdCliente), FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido), FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente));",
      "CREATE TABLE IF NOT EXISTS PEDIDO_RECETAS (IdReceta INT, IdPedido INT, numero INT CHECK (numero >= 1), PRIMARY KEY(IdPedido,IdReceta), FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido), FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta));",
      "CREATE TABLE IF NOT EXISTS CLIENTES_ALERGENOS (IdCliente VARCHAR(40), IdAlergeno INT, PRIMARY KEY(IdCliente,IdAlergeno), FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente), FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno));",
      "CREATE TABLE IF NOT EXISTS RECETAS_INGREDIENTES (IdReceta INT, IdIngrediente INT, numero INT CHECK (numero >= 1), PRIMARY KEY(IdReceta,IdIngrediente), FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta), FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente));",
      "CREATE TABLE IF NOT EXISTS INGREDIENTES_ALERGENOS (IdIngrediente INT, IdAlergeno INT, PRIMARY KEY(IdAlergeno,IdIngrediente), FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno), FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente));",
      "CREATE TRIGGER ActualizarStock AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE veces INT; SELECT numero INTO veces FROM PEDIDO_RECETAS WHERE IdReceta = NEW.IdReceta AND IdPedido = NEW.IdPedido; UPDATE INGREDIENTES JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente SET INGREDIENTES.NumStock = CASE WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 0 THEN -1 WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 10 THEN 200 + INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero ELSE (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) END WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta; END;",
      "CREATE TRIGGER ComprobarStockNoNegativo BEFORE UPDATE ON INGREDIENTES FOR EACH ROW BEGIN IF NEW.NumStock < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO DEBE DE HABER STOCK NEGATIVO'; END IF; END;",
      "CREATE TRIGGER ComprobarStockNoNegativoInit BEFORE INSERT ON INGREDIENTES FOR EACH ROW BEGIN IF NEW.NumStock < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER STOCK NEGATIVO'; END IF; END;",
      "CREATE TRIGGER RestarPuntos AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE resta INT; DECLARE multiplicador INT; DECLARE Tipo VARCHAR(40); SELECT Precio INTO resta FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta; SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta; SET resta = resta * multiplicador; SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido; IF Tipo = 'Puntos' THEN UPDATE CLIENTES JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente SET CLIENTES.Puntos = CASE WHEN (CLIENTES.Puntos - resta) < 0 THEN -1 ELSE (CLIENTES.Puntos - resta) END WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido; END IF; END;",
      "CREATE TRIGGER ComprobarPuntosNoNegativo BEFORE UPDATE ON CLIENTES FOR EACH ROW BEGIN IF NEW.Puntos < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO HAY SUFICIENTES PUNTOS PARA PAGAR EL PEDIDO'; END IF; END;",
      "CREATE TRIGGER ComprobarPuntosNoNegativoInit BEFORE INSERT ON CLIENTES FOR EACH ROW BEGIN IF NEW.Puntos < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER PUNTOS NEGATIVOS'; END IF; END;",
      "CREATE TRIGGER ContieneAlergeno BEFORE INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE Peligro BOOLEAN; SELECT 1 INTO Peligro FROM ALERGENOS JOIN INGREDIENTES_ALERGENOS ON ALERGENOS.IdAlergeno = INGREDIENTES_ALERGENOS.IdAlergeno JOIN INGREDIENTES ON INGREDIENTES_ALERGENOS.IdIngrediente = INGREDIENTES.IdIngrediente JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta AND EXISTS (SELECT 1 FROM CLIENTES_ALERGENOS WHERE CLIENTES_ALERGENOS.IdCliente = (SELECT IdCliente FROM PEDIDO WHERE IdPedido = NEW.IdPedido) AND CLIENTES_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno); IF Peligro THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EL CLIENTE TIENE ALERGIAS EN LA RECETA DEL PEDIDO'; END IF; END;",
      "CREATE TRIGGER SumarPuntos AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE suma INT; DECLARE multiplicador INT; DECLARE Tipo VARCHAR(40); SELECT Precio INTO suma FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta; SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta; SET suma = suma * multiplicador; SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido; IF Tipo != 'Puntos' THEN UPDATE CLIENTES JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente SET CLIENTES.Puntos = CLIENTES.Puntos + suma WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido; END IF; END;",
      "CREATE TRIGGER ReservasInferior BEFORE UPDATE ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas >= OLD.NumPersonas THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO SE PUEDEN AUMENTAR LAS RESERVAS A UN NUMERO MAYOR DE PERSONAS'; END IF; END;",
      "CREATE TRIGGER CalcularBono AFTER UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado = 'Inactivo' THEN UPDATE TRABAJADOR JOIN TRABAJADOR_PEDIDO ON TRABAJADOR_PEDIDO.IdTrabajador = TRABAJADOR.IdTrabajador JOIN PEDIDO ON TRABAJADOR_PEDIDO.IdPedido = PEDIDO.IdPedido SET TRABAJADOR.Bono = TRABAJADOR.Bono + PEDIDO.Valoracion WHERE PEDIDO.IdPedido = NEW.IdPedido; END IF; END;",
      "CREATE TRIGGER BonoMenor500 BEFORE UPDATE ON TRABAJADOR FOR EACH ROW BEGIN SET NEW.Bono = CASE WHEN NEW.Bono > 500 THEN 500 WHEN NEW.Bono < 0 THEN 0 ELSE NEW.Bono END; END;",
      "CREATE TRIGGER BonoMenor500Init BEFORE INSERT ON TRABAJADOR FOR EACH ROW BEGIN SET NEW.Bono = CASE WHEN NEW.Bono > 500 THEN 500 WHEN NEW.Bono < 0 THEN 0 ELSE NEW.Bono END; END;",
      "CREATE TRIGGER ValoracionMenor10 BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN SET NEW.Valoracion = CASE WHEN NEW.Valoracion > 10 THEN 10 WHEN NEW.Valoracion < 0 THEN 0 ELSE NEW.Valoracion END; END;",
      "CREATE TRIGGER ValoracionMenor10Init BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN SET NEW.Valoracion = CASE WHEN NEW.Valoracion > 10 THEN 10 WHEN NEW.Valoracion < 0 THEN 0 ELSE NEW.Valoracion END; END;",
      "CREATE TRIGGER PrecioPositivoInit BEFORE INSERT ON RECETAS FOR EACH ROW BEGIN IF NEW.Precio < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO'; END IF; END;",
      "CREATE TRIGGER PrecioPositivo BEFORE UPDATE ON RECETAS FOR EACH ROW BEGIN IF NEW.Precio < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO'; END IF; END;",
      "CREATE TRIGGER EstadoEnRangoInit BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado != 'Activo' AND NEW.Estado != 'Inactivo' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO'; END IF; END;",
      "CREATE TRIGGER EstadoEnRango BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado != 'Activo' AND NEW.Estado != 'Inactivo' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO'; END IF; END;",
      "CREATE TRIGGER TipoDePagoEnRangoInit BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO'; END IF; END;",
      "CREATE TRIGGER TipoDePagoEnRango BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO'; END IF; END;",
      "CREATE TRIGGER NumRecetasPositivoInit BEFORE INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO'; END IF; END;",
      "CREATE TRIGGER NumRecetasPositivo BEFORE UPDATE ON PEDIDO_RECETAS FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO'; END IF; END;",
      "CREATE TRIGGER NumIngredientesPositivoInit BEFORE INSERT ON RECETAS_INGREDIENTES FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA'; END IF; END;",
      "CREATE TRIGGER NumIngredientesPositivo BEFORE UPDATE ON RECETAS_INGREDIENTES FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA'; END IF; END;",
      "CREATE TRIGGER NumNumPersonasPositivoInit BEFORE INSERT ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA'; END IF; END;",
      "CREATE TRIGGER NumNumPersonasPositivo BEFORE UPDATE ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA'; END IF; END;",
      "INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('gonzalo@miemail.com', 'Gonzalo Sanz Guerrero', 'gonzasanz_', '1234abc', 'Calle A', 0, '2012-12-12 00:00:00', '123A');",
      "INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('jose','José Manuel Aranda Gutierrez', 'josemanuelaranda_', '12346ma', 'Calle B', 0, '2012-12-12 00:00:00', '123B');"
      ];
    // Ejecutar las sentencias SQL
    for (const sqlStatement of sqlStatements) {
      await connection.promise().query(sqlStatement);
    }

    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Tabla STOCK reiniciada correctamente' });
  } catch (error) {
    console.error('Error al generar la base de datos', error);
    res.status(500).json({ error: 'Error al generar la base de datos' });
  }
});



  app.listen(5050, () => { // Inicia el servidor en el puerto 5050
    console.log('Servidor en ejecución en el puerto 5050');
  });
  

    