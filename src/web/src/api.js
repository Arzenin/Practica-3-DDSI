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

app.delete('/borrarcliente/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Cliente:", id);

    const query1 = 'DELETE FROM CLIENTE_ALERGENOS WHERE idCliente = ?';
    await connection.promise().query(query1, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente-alérgeno: ' + err);
      res.status(500).json({ error: 'Error al borrar cliente-alergeno' });
      return;
    }
    res.status(201).json({ message: 'Cliente borrado con éxito' });
    });

    const query2 = 'DELETE FROM CLIENTE_PEDIDO WHERE idCliente = ?';
    await connection.promise().query(query2, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente-pedido: ' + err);
      return;
    }
    });

    const query3 = 'DELETE FROM CLIENTES WHERE idCliente = ?';
    await connection.promise().query(query3, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente: ' + err);
      return;
    }

    });
    connection.end();
  } catch (error){
    console.error('Error al borrar cliente:', error);
    res.status(500).json({ error: 'Error al borrar cliente' });
  }
  console.log('Cliente eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Cliente eliminado con éxito' });
});

app.get('/alergenos', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM ALERGENOS';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener alergenoss:', error);
    res.status(500).json({ error: 'Error al obtener alergenoss' });
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
    console.error('Error al crear alergeno:', error);
    res.status(500).json({ error: 'Error al crear alergeno' });
  }
});

app.delete('/borraralergeno/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = parseInt(req.params.id, 10);

    const query1 = 'DELETE FROM CLIENTE_ALERGENOS WHERE idAlergeno = ?';
    await connection.promise().query(query1, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente-alérgeno: ' + err);
      res.status(500).json({ error: 'Error al borrar cliente-alergeno' });
      return;
    }
    res.status(201).json({ message: 'Alergeno borrado con éxito' });
    });

    const query2 = 'DELETE FROM INGREDIENTES_ALERGENOS WHERE idAlergeno = ?';
    await connection.promise().query(query2, id, (err, result) => {
    if (err) {
      console.error('Error al borrar ingrediente-alergeno: ' + err);
      return;
    }
    });

    const query3 = 'DELETE FROM ALERGENOS WHERE idAlergeno = ?';
    await connection.promise().query(query3, id, (err, result) => {
    if (err) {
      console.error('Error al borrar alergeno: ' + err);
      return;
    }

    });
    connection.end();
  } catch (error){
    console.error('Error al borrar alergeno:', error);
    res.status(500).json({ error: 'Error al borrar alergeno' });
  }
  console.log('Alergeno eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Alergeno eliminado con éxito' });
});

app.get('/alergenos/clienteId/:IdCliente', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const IdCliente = req.params.IdCliente;
    const queryTareas = 'SELECT * FROM CLIENTE_ALERGENOS JOIN ALERGENOS ON CLIENTE_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno WHERE CLIENTE_ALERGENOS.IdCliente = ?';
    const [resultado] = await connection.promise().query(queryTareas, [IdCliente]);
    connection.end();

    // Devuelve un array vacío si no hay resultados
    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener alergenos del cliente:', error);
    res.status(500).json({ error: 'Error al obtener alergenos del cliente' });
  }
});




app.post('/clientes/quitaralergenos', async (req, res) => {
  try {
    const {IdCliente, alergenos } = req.body;
    const connection = await abrirConexion();

    try {
      // Iterar sobre los estudiantes seleccionados
      for (const alergenoId of alergenos) {
        // Eliminar la fila correspondiente a la asignación
        const queryDelete = 'DELETE FROM CLIENTE_ALERGENOS WHERE IdCliente = ? AND IdAlergeno = ?';
        await connection.promise().query(queryDelete, [IdCliente, alergenoId], (err, result) => {
          if (err) {
            console.error('Error al establecer conexión con la base de datos:' + err);
            res.status(500).json({ error: 'Error al establecer conexión con la base de datos.' });
          }
        });
      }

    } catch (error) {
      console.error('Error al quitar tareas a estudiante:', error);
      res.status(500).json({ error: 'Error al quitar tareas a estudiante.' });
    } finally {
      connection.end();
    }

  } catch (error) {
    console.error('Error al quitar tareas a estudiante:', error);
    res.status(500).json({ error: 'Error al quitar tareas a estudiante.' });
  }
  console.log('Tarea(s) quitadas al Estudiante con éxito');
  res.status(200).json({ message: 'Tarea(s) quitadas al Estudiante con éxito.' });
});

app.post('/clientes/aniadealergenos', async (req, res) => {
  try {
    const { IdCliente, alergenos } = req.body;
    const connection = await abrirConexion();
    console.log(alergenos);

    try {
      if (Array.isArray(alergenos)) {
        for (const alergenoId of alergenos) {
        // Eliminar la fila correspondiente a la asignación
        const queryDelete = 'DELETE FROM CLIENTE_ALERGENOS WHERE IdCliente = ? AND IdAlergeno = ?';
        await connection.promise().query(queryDelete, [IdCliente, alergenoId], (err, result) => {
          if (err) {
            console.error('Error al establecer conexión con la base de datos:' + err);
            res.status(500).json({ error: 'Error al establecer conexión con la base de datos.' });
          }
        });
      }
        
        // Use Promise.all to wait for all queries to complete
        await Promise.all(
          alergenos.map(async (alergenoId) => {
            const queryInsert =
              'INSERT INTO CLIENTE_ALERGENOS (IdCliente, IdAlergeno) VALUES (?, ?)';
            await connection.promise().query(queryInsert, [IdCliente, alergenoId]);
          })
        );



        // All queries are successful, send a response
        console.log('Tareas añadidas al estudiante con éxito');
        res.status(201).json({ message: 'Tareas añadidas al estudiante con éxito.' });
      } else {
        // Si tareas no es un array, realizar una única inserción
        const queryInsert =
          'INSERT INTO CLIENTE_ALERGENOS (IdCliente, IdAlergeno) VALUES (?, ?)';
        await connection.promise().query(queryInsert, [IdCliente, alergenos]);

        // Query is successful, send a response
        console.log('Tarea añadida al estudiante con éxito');
        res.status(201).json({ message: 'Tarea añadida al estudiante con éxito.' });
      }
    } catch (error) {
      console.error('Error al añadir tareas al alumno:', error);
      res.status(500).json({ error: 'Error al añadir tareas al alumno.' });
    } finally {
      // Always close the connection in a finally block
      connection.end();
    }
  } catch (error) {
    console.error('Error al añadir las tareas:', error);
    res.status(500).json({ error: 'Error al añadir las tareas.' });
  }
});

app.get('/ingredientes', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM INGREDIENTES';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener alergenoss:', error);
    res.status(500).json({ error: 'Error al obtener alergenoss' });
  }
});

app.delete('/borraringrediente/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = parseInt(req.params.id, 10);

    const query1 = 'DELETE FROM INGREDIENTES_ALERGENOS WHERE IdIngrediente = ?';
    await connection.promise().query(query1, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente-alérgeno: ' + err);
      res.status(500).json({ error: 'Error al borrar cliente-alergeno' });
      return;
    }
    res.status(201).json({ message: 'Alergeno borrado con éxito' });
    });

    const query2 = 'DELETE FROM RECETAS_INGREDIENTES WHERE IdIngrediente = ?';
    await connection.promise().query(query2, id, (err, result) => {
    if (err) {
      console.error('Error al borrar ingrediente-alergeno: ' + err);
      return;
    }
    });

    const query3 = 'DELETE FROM INGREDIENTES WHERE IdIngrediente = ?';
    await connection.promise().query(query3, id, (err, result) => {
    if (err) {
      console.error('Error al borrar alergeno: ' + err);
      return;
    }

    });
    connection.end();
  } catch (error){
    console.error('Error al borrar alergeno:', error);
    res.status(500).json({ error: 'Error al borrar alergeno' });
  }
  console.log('Alergeno eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Alergeno eliminado con éxito' });
});

app.post('/crearingrediente', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, nombre, alergenos } = req.body;
    const querySelect = 'INSERT INTO INGREDIENTES (IdIngrediente, Nombre, NumStock) VALUES (?, ?, 100)';
    
    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, nombre]);

    if (Array.isArray(alergenos)) {
      // Use Promise.all to wait for all queries to complete
      await Promise.all(
        alergenos.map(async (alergenoId) => {
          const queryInsert = 'INSERT INTO INGREDIENTES_ALERGENOS (IdIngrediente, IdAlergeno) VALUES (?,?)';
          await connection.promise().query(queryInsert, [id, alergenoId]);
        })
      );

      // All queries are successful, send a response
      console.log('Tareas añadidas al estudiante con éxito');
      res.status(200).json({ mensaje: 'Ingrediente creado correctamente' });
    } else {
      // Si tareas no es un array, realizar una única inserción
      const queryInsert = 'INSERT INTO CLIENTE_ALERGENOS (IdCliente, IdAlergeno) VALUES (?, ?)';
      await connection.promise().query(queryInsert, [IdCliente, alergenos]);

      // Query is successful, send a response
      console.log('Tarea añadida al estudiante con éxito');
      res.status(201).json({ message: 'Tarea añadida al estudiante con éxito.' });
    }

    // Mover el cierre de la conexión aquí, después de todas las operaciones
    connection.end(); // Liberar recursos BD
    connection.destroy();
  } catch (error) {
    console.error('Error al crear Ingrediente:', error);
    res.status(500).json({ error: 'Error al crear Ingrediente' });
  }
});

app.get('/alergenos/ingrediente/:id', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryTareas = 'SELECT * FROM INGREDIENTES_ALERGENOS JOIN ALERGENOS ON INGREDIENTES_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno WHERE INGREDIENTES_ALERGENOS.IdIngrediente = ?';
    const [resultado] = await connection.promise().query(queryTareas, [id]);
    connection.end();

    // Devuelve un array vacío si no hay resultados
    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener alergenos del ingrediente:', error);
    res.status(500).json({ error: 'Error al obtener alergenos del cliente' });
  }
});

app.get('/trabajadores', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM TRABAJADOR';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener trabajadores:', error);
    res.status(500).json({ error: 'Error al obtener trabajadores' });
  }
});

app.post('/trabajadores/creartrabajador', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const {id, nombre, turno, libre} = req.body;
    const querySelect = 'INSERT INTO TRABAJADOR (IdTrabajador, Turno, Nombre, Libre, Bono) VALUES (?, ?, ?, ?, 0)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, turno, nombre, libre]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Trabajador creado correctamente' });
  } catch (error) {
    console.error('Error al crear Trabajador:', error);
    res.status(500).json({ error: 'Error al crear Trabajador' });
  }
});

app.get('/trabajadores/trabajador/:id', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const query = 'SELECT * FROM TRABAJADOR WHERE IdTrabajador = ?';
    const [resultado] = await connection.promise().query(query, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener trabajador:', error);
    res.status(500).json({ error: 'Error al obtener trabajador' });
  }
});

app.put('/trabajadores/editartrabajador', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, nombre, turno, libre} = req.body;
    const querySelect = 'UPDATE TRABAJADOR SET Nombre=?, Turno=?, Libre=? WHERE IdTrabajador=?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [nombre, turno, libre, id]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Trabajador editado correctamente' });
  } catch (error) {
    console.error('Error al editar Trabajador:', error);
    res.status(500).json({ error: 'Error al editar Trabajador' });
  }
});

app.delete('/borrartrabajador/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = parseInt(req.params.id, 10);

    const query1 = 'DELETE FROM TRABAJADOR_PEDIDO WHERE IdTrabajador = ?';
    await connection.promise().query(query1, id, (err, result) => {
    if (err) {
      console.error('Error al borrar trabajador-pedido: ' + err);
      res.status(500).json({ error: 'Error al borrar trabajador-pedido' });
      return;
    }
    res.status(201).json({ message: 'Trabajador borrado con éxito' });
    });

    const query3 = 'DELETE FROM TRABAJADOR WHERE IdTrabajador = ?';
    await connection.promise().query(query3, id, (err, result) => {
    if (err) {
      console.error('Error al borrar trabajador: ' + err);
      return;
    }

    });
    connection.end();
  } catch (error){
    console.error('Error al borrar trabajador:', error);
    res.status(500).json({ error: 'Error al borrar trabajador' });
  }
  console.log('Trabajador eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Trabajador eliminado con éxito' });
});

app.get('/reservas/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM RESERVAS_PEDIDO WHERE IdReserva = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener cliente:', error);
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
});

app.get('/recetas', async (req, res) => { // GET Clientes
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

app.post('/crearreceta', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, nombre, precio, ingredientes } = req.body;
    const querySelect = 'INSERT INTO RECETAS (IdReceta, Nombre, Precio) VALUES (?, ?, ?)';
    
    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, nombre, precio]);

    if (Array.isArray(ingredientes)) {
      // Use Promise.all to wait for all queries to complete
      await Promise.all(
        ingredientes.map(async (ingredienteId) => {
          const queryInsert = 'INSERT INTO RECETAS_INGREDIENTES (IdReceta, IdIngrediente, numero) VALUES (?,?, 1)';
          await connection.promise().query(queryInsert, [id, ingredienteId]);
        })
      );

      // All queries are successful, send a response
      console.log('Tareas añadidas al estudiante con éxito');
      res.status(200).json({ mensaje: 'Ingrediente creado correctamente' });
    } else {
      
    }

    // Mover el cierre de la conexión aquí, después de todas las operaciones
    connection.end(); // Liberar recursos BD
    connection.destroy();
  } catch (error) {
    console.error('Error al crear recetas:', error);
    res.status(500).json({ error: 'Error al crear Ingrediente' });
  }
});

app.delete('/borrarreceta/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = parseInt(req.params.id, 10);

    const query1 = 'DELETE FROM RECETAS_INGREDIENTES WHERE IdReceta = ?';
    await connection.promise().query(query1, id, (err, result) => {
    if (err) {
      console.error('Error al borrar cliente-alérgeno: ' + err);
      res.status(500).json({ error: 'Error al borrar cliente-alergeno' });
      return;
    }
    res.status(201).json({ message: 'Alergeno borrado con éxito' });
    });

    const query2 = 'DELETE FROM PEDIDO_RECETAS WHERE IdReceta = ?';
    await connection.promise().query(query2, id, (err, result) => {
    if (err) {
      console.error('Error al borrar ingrediente-alergeno: ' + err);
      return;
    }
    });

    const query3 = 'DELETE FROM RECETAS WHERE IdReceta = ?';
    await connection.promise().query(query3, id, (err, result) => {
    if (err) {
      console.error('Error al borrar alergeno: ' + err);
      return;
    }

    });
    connection.end();
  } catch (error){
    console.error('Error al borrar alergeno:', error);
    res.status(500).json({ error: 'Error al borrar alergeno' });
  }
  console.log('Alergeno eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Alergeno eliminado con éxito' });
});

app.get('/ingredientes/:idReceta', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const id = req.params.idReceta;
    const queryTareas = 'SELECT * FROM RECETAS_INGREDIENTES JOIN INGREDIENTES ON RECETAS_INGREDIENTES.IdIngrediente = INGREDIENTES.IdIngrediente WHERE RECETAS_INGREDIENTES.IdReceta = ?';
    const [resultado] = await connection.promise().query(queryTareas, [id]);
    connection.end();

    // Devuelve un array vacío si no hay resultados
    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener alergenos del ingrediente:', error);
    res.status(500).json({ error: 'Error al obtener alergenos del cliente' });
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

app.post('/crearpedido', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const {id, tipoPago, clientes, recetas } = req.body;
    const querySelect = 'INSERT INTO PEDIDO (IdPedido, Valoracion, TPago, Estado) VALUES (?, 0, ?, "Activo")';
    
    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, tipoPago]);

    if (Array.isArray(clientes)) {
      // Use Promise.all to wait for all queries to complete
      await Promise.all(
        clientes.map(async (clienteId) => {
          const queryInsert = 'INSERT INTO  CLIENTES_PEDIDO (IdCliente, IdPedido) VALUES (?,?)';
          await connection.promise().query(queryInsert, [clienteId, id]);
        })
      );

      // All queries are successful, send a response
      console.log('Tareas añadidas al estudiante con éxito');
    } else {
      
    }

    if (Array.isArray(recetas)) {
      // Use Promise.all to wait for all queries to complete
      await Promise.all(
        recetas.map(async (recetaId) => {
          const queryInsert = 'INSERT INTO  PEDIDO_RECETAS (IdReceta, IdPedido, numero) VALUES (?,?, 1)';
          await connection.promise().query(queryInsert, [recetaId, id]);
        })
      );

      // All queries are successful, send a response
      console.log('Pedido añadido con éxito');
      res.status(200).json({ mensaje: 'Pedido creado correctamente' });
    } else {
      
    }


    // Mover el cierre de la conexión aquí, después de todas las operaciones
    connection.end(); // Liberar recursos BD
    connection.destroy();
  } catch (error) {
    console.error('Error al crear pedido:', error);
    res.status(500).json({ error: 'Error al crear Pedido' });
  }
});

app.post('/finalizarpedido', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const {id, valoracion, trabajadores } = req.body;

    if (Array.isArray(trabajadores)) {
      // Use Promise.all to wait for all queries to complete
      await Promise.all(
        trabajadores.map(async (trabajadorId) => {
          const queryInsert = 'INSERT INTO  TRABAJADOR_PEDIDO (IdTrabajador, IdPedido) VALUES (?,?)';
          await connection.promise().query(queryInsert, [trabajadorId, id]);
        })
      );

      // All queries are successful, send a response
      console.log('Tareas añadidas al estudiante con éxito');
    } else {
      
    }
    const querySelect = 'UPDATE PEDIDO SET Valoracion=? WHERE IdPedido=?';
    
    const result = await connection.promise().query(querySelect, [valoracion, id]);
    const querySelect2 = 'UPDATE PEDIDO SET Estado="Inactivo" WHERE IdPedido=?';
    
    // Cambiar el nombre de la variable result
    const result2 = await connection.promise().query(querySelect2, [id]);

      // All queries are successful, send a response
      console.log('Pedido finalizado con éxito');
      res.status(200).json({ mensaje: 'Pedido creado correctamente' });


    // Mover el cierre de la conexión aquí, después de todas las operaciones
    connection.end(); // Liberar recursos BD
    connection.destroy();
  } catch (error) {
    console.error('Error al crear pedido:', error);
    res.status(500).json({ error: 'Error al crear Pedido' });
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

app.post('/crearmesa', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { id, num} = req.body;
    const querySelect = 'INSERT INTO RESERVAS (IdReserva, NumMesa) VALUES (?,?)';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [id, num]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Mesa creada correctamente' });
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear una mesa' });
  }
});


app.put('/editarreserva', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const { idReserva, numPersonas, horaIni} = req.body;
    const querySelect = 'UPDATE RESERVAS_PEDIDO SET NumPersonas=? WHERE IdReserva = ? AND HoraIni=?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [numPersonas, idReserva, horaIni]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Reserva editada correctamente' });
  } catch (error) {
    console.error('Error al editar la reserva:', error);
    res.status(500).json({ error: 'Error al editar reserva' });
  }
});

app.put('/editarmesa', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const {idReserva, numMesa} = req.body;
    const querySelect = 'UPDATE RESERVAS SET NumMesa=? WHERE IdReserva = ?';

    // Cambiar el nombre de la variable result
    const result = await connection.promise().query(querySelect, [numMesa, idReserva]);
    
    connection.end(); // Liberar recursos BD
    connection.destroy();

    // Devolver la respuesta exitosa
    res.status(200).json({ mensaje: 'Mesa editada correctamente' });
  } catch (error) {
    console.error('Error al editar la mesa:', error);
    res.status(500).json({ error: 'Error al editar mesa' });
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

app.get('/reservas/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM RESERVAS_PEDIDO WHERE IdReserva = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener reserva:', error);
    res.status(500).json({ error: 'Error al obtener reserva' });
  }
});

app.get('/mesas', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM RESERVAS';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

app.get('/mesas/:id', async (req, res) => { // GET Estudiantes
  try {
    const connection = await abrirConexion();
    const id = req.params.id;
    const queryEstudiantes = 'SELECT * FROM RESERVAS WHERE IdReserva = ?';
    const [resultado] = await connection.promise().query(queryEstudiantes, [id]);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON
  } catch (error) {
    console.error('Error al obtener mesa:', error);
    res.status(500).json({ error: 'Error al obtener mesa' });
  }
});

app.get('/mesasdisponibles', async (req, res) => { // GET Clientes
  try {
    const connection = await abrirConexion();
    const query = 'SELECT * FROM RESERVAS WHERE NOT EXISTS (SELECT 1 FROM RESERVAS_PEDIDO WHERE RESERVAS_PEDIDO.IdReserva = RESERVAS.IdReserva)';
    const [resultado] = await connection.promise().query(query);
    connection.end(); // Libera recursos BD
    res.json([resultado]); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});


app.get('/infopedido/:id', async (req, res) => {
  try {
    const connection = await abrirConexion();
    const idPedido = req.params.id; // Obtener el valor del parámetro desde la URL
    const query = 'SELECT * FROM RESERVAS_PEDIDO JOIN PEDIDO ON RESERVAS_PEDIDO.IdPedido = PEDIDO.IdPedido WHERE RESERVAS_PEDIDO.IdPedido = ?';

    const [resultado] = await connection.promise().query(query, [idPedido]); // Pasar el valor del parámetro como un array

    connection.end(); // Libera recursos BD
    res.json(resultado); // Resultado servido en HTTP formato JSON  
  } catch (error) {
    console.error('Error al obtener información del pedido:', error);
    res.status(500).json({ error: 'Error al obtener información del pedido' });
  }
});

app.delete('/borrarmesa/:id', async (req, res) => {
  try{
    const connection = await abrirConexion();
    const id = req.params.id;
    console.log("Mesa:", id);

    const checkQuery1 = 'SELECT * FROM  RESERVAS_PEDIDO WHERE IdReserva = ?';
    const [result1] = await connection.promise().query(checkQuery1, id);

    if (result1.length > 0) {
      const deleteQuery1 = 'DELETE FROM RESERVAS_PEDIDO WHERE IdReserva = ?';
      await connection.promise().query(deleteQuery1, id);
    }

    const checkQuery2 = 'SELECT * FROM  RESERVAS WHERE IdReserva = ?';
    const [result2] = await connection.promise().query(checkQuery2, id);

    if (result2.length > 0) {
      const deleteQuery2 = 'DELETE FROM RESERVAS WHERE IdReserva = ?';
      await connection.promise().query(deleteQuery2, id);
    }

    connection.commit();
    connection.end();

  } catch (error){
    console.error('Error al borrar mesa:', error);
    res.status(500).json({ error: 'Error al borrar mesa' });
  }
  console.log('Mesa eliminado con éxito en la base de datos!');
  res.status(201).json({ message: 'Mesa eliminado con éxito' });
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
      "CREATE TABLE IF NOT EXISTS RESERVAS (NumMesa INT UNIQUE,IdReserva INT, PRIMARY KEY(IdReserva));",
      "CREATE TABLE IF NOT EXISTS CLIENTES (IdCliente VARCHAR(40), Nombre VARCHAR(40), UserName VARCHAR(40), Contrasenia VARCHAR(40), Domicilio VARCHAR(40), Puntos INT, FechaNacimiento VARCHAR(40), DatosDePago VARCHAR(30), PRIMARY KEY(IdCliente));",
      "CREATE TABLE IF NOT EXISTS ALERGENOS (IdAlergeno INT, Nombre VARCHAR(40), Descripcion VARCHAR(40), PRIMARY KEY(IdAlergeno));",
      "CREATE TABLE IF NOT EXISTS INGREDIENTES (IdIngrediente INT, Nombre VARCHAR(40), NumStock INT CHECK (NumStock >= 0), PRIMARY KEY(IdIngrediente));",
      "CREATE TABLE IF NOT EXISTS RECETAS (IdReceta INT, Nombre VARCHAR(40),Precio INT CHECK (Precio >= 1), PRIMARY KEY(IdReceta));",
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
