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
  host: "172.28.111.168", // Nombre del contenedor MySQL
  user: "root",
  password: "prac3",
  database: "practica3",
  port: "3306" // Puerto de entrada,red local=nombre docker, red global ip
};

async function abrirConexion(){
  const connection = await mysql.createConnection(dbConfig);
  return connection;
} 

app.get('/ver', async (req, res) => { // GET Usuarios
  try {
      const connection = await abrirConexion();
      const queryUsuarios = 'SELECT * FROM *';
      const [resultado] = await connection.promise().query(queryUsuarios);
      connection.end(); // Libera recursos BD
      connection.destroy();
      res.json([resultado]); // Resultado servido en HTTP formato JSON
    } catch (error) {
      console.error('Error al obtener datos:', error);
      res.status(500).json({ error: 'Error al obtener datos' });
    }

  });

  app.post('/aniadir', async (req, res) => {
    try {
      const connection = await abrirConexion();
      const { Cproducto, cantidad } = req.body;
  
      // Convertir la cantidad a un número
      const cantidadNumerica = parseInt(cantidad);
      if (cantidadNumerica < 0) {
        // Si el nuevo stock es negativo, devolver un error
        return res.status(400).json({ error: 'No se admiten números negativos' });
      }
  
      // Obtener el stock actual
      const querySelect = 'SELECT Cantidad FROM STOCK WHERE Cproducto = ?';
      const [stockAnterior] = await connection.promise().query(querySelect, [Cproducto]);
  
      if (stockAnterior.length === 0) {
        // Si no se encuentra el producto en el stock, devolver un error
        return res.status(404).json({ error: 'Producto no encontrado en el stock' });
      }
  
      const stockAnteriorCantidad = stockAnterior[0].Cantidad;
  
      // Calcular el nuevo stock
      const nuevoStock = stockAnteriorCantidad + cantidadNumerica;
  
      const queryUpdate = 'UPDATE STOCK SET Cantidad = ? WHERE Cproducto = ?';
      await connection.promise().query(queryUpdate, [nuevoStock, Cproducto]);
  
      connection.end(); // Liberar recursos BD
      connection.destroy();
  
      // Devolver la respuesta exitosa
      res.status(200).json({ mensaje: 'Stock actualizado correctamente' });
    } catch (error) {
      console.error('Error al sumar stock:', error);
      res.status(500).json({ error: 'Error al sumar stock' });
    }
  });

  app.post('/reiniciar', async (req, res) => {
    try {
      const connection = await abrirConexion();
  
      // Sentencias SQL para reiniciar la tabla STOCK
      const sqlStatements = [
        'SET foreign_key_checks = 0;',
        'DROP TABLE IF EXISTS TRABAJADOR;',
        'DROP TABLE IF EXISTS PEDIDO;',
        'DROP TABLE IF EXISTS RESERVAS;',
        'DROP TABLE IF EXISTS CLIENTES;',
        'DROP TABLE IF EXISTS ALERGENOS;',
        'DROP TABLE IF EXISTS INGREDIENTES;',
        'DROP TABLE IF EXISTS RECETAS;',
        'DROP TABLE IF EXISTS RESERVAS_PEDIDO;',
        'DROP TABLE IF EXISTS TRABAJADOR_PEDIDO;',
        'DROP TABLE IF EXISTS CLIENTES_PEDIDO;',
        'DROP TABLE IF EXISTS PEDIDO_RECETAS;',
        'DROP TABLE IF EXISTS CLIENTES_ALERGENOS;',
        'DROP TABLE IF EXISTS RECETAS_INGREDIENTES;',
        'DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS;',
        'DROP TRIGGER IF EXISTS ActualizarStock;',
        'DROP TRIGGER IF EXISTS RestarPuntos',
        'DROP TRIGGER IF EXISTS RellenarStock;',
        'DROP TRIGGER IF EXISTS ContieneAlergeno',
        'SET foreign_key_checks = 1;',
        'CREATE TABLE IF NOT EXISTS TRABAJADOR(IdTrabajador INT,Turno INT,PRIMARY KEY(IdTrabajador));',
        'CREATE TABLE IF NOT EXISTS PEDIDO(IdPedido INT,Valoracion INT,TPago VARCHAR(10) CHECK (TPago IN (\'Tarjeta\',\'Efectivo\',\'Puntos\')),Estado VARCHAR(10) CHECK (Estado IN (\'Activo\',\'Inactivo\')),PRIMARY KEY(IdPedido));',
        'CREATE TABLE IF NOT EXISTS RESERVAS(IdReserva INT,IdMesa INT,PRIMARY KEY(IdReserva));',
        'CREATE TABLE IF NOT EXISTS CLIENTES(IdCliente INT,Valoracion INT,Nombre VARCHAR(40),UserName VARCHAR(10),Contrasenia VARCHAR(40),Domicilio VARCHAR(40),Puntos INT,FechaNacimiento DATETIME,DatosDePago VARCHAR(30),PRIMARY KEY(IdCliente));',
        'CREATE TABLE IF NOT EXISTS ALERGENOS(IdAlergeno INT,Nombre VARCHAR(40),Descripcion VARCHAR(40),PRIMARY KEY(IdAlergeno));',
        'CREATE TABLE IF NOT EXISTS INGREDIENTES(IdIngrediente INT,Nombre VARCHAR(40),NumStock INT CHECK (NumStock >= 0),PRIMARY KEY(IdIngrediente));',
        'CREATE TABLE IF NOT EXISTS RECETAS(IdReceta INT,Precio INT CHECK (Precio >= 1),PRIMARY KEY(IdReceta));',
        'CREATE TABLE IF NOT EXISTS RESERVAS_PEDIDO(IdReserva INT,IdPedido INT,NumPersonas INT,HoraIni DATETIME,PRIMARY KEY(IdPedido,IdReserva),FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido));',
        'CREATE TABLE IF NOT EXISTS TRABAJADOR_PEDIDO(IdTrabajador INT,IdPedido INT,PRIMARY KEY(IdTrabajador,IdPedido),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador));',
        'CREATE TABLE IF NOT EXISTS CLIENTES_PEDIDO(IdCliente INT,IdPedido INT,PRIMARY KEY(IdPedido,IdCliente),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente));',
        'CREATE TABLE IF NOT EXISTS PEDIDO_RECETAS(IdReceta INT,IdPedido INT,PRIMARY KEY(IdPedido,IdReceta),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta));',
        'CREATE TABLE IF NOT EXISTS CLIENTES_ALERGENOS(IdCliente INT,IdAlergeno INT,PRIMARY KEY(IdCliente,IdAlergeno),FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente),FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno));',
        'CREATE TABLE IF NOT EXISTS RECETAS_INGREDIENTES(IdReceta INT,IdIngrediente INT,PRIMARY KEY(IdReceta,IdIngrediente),FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta),FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente));',
        'CREATE TABLE IF NOT EXISTS INGREDIENTES_ALERGENOS(IdIngrediente INT,IdAlergeno INT,PRIMARY KEY(IdAlergeno,IdIngrediente),FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno),FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente));',
        
        `CREATE TRIGGER ActualizarStock 
        BEFORE INSERT ON PEDIDO_RECETAS 
        FOR EACH ROW 
        BEGIN 
            DECLARE cantidad INT; 
            SELECT COUNT(*) INTO cantidad 
            FROM PEDIDO_RECETAS 
            WHERE IdReceta = NEW.IdReceta AND IdPedido = NEW.IdPedido; 
            UPDATE Ingredientes i 
            JOIN RECETAS_INGREDIENTES ir ON i.IdIngrediente = ir.IdIngrediente 
            SET i.NumStock = CASE WHEN (i.NumStock - cantidad) < 0 THEN 0 ELSE (i.NumStock - cantidad) END 
            WHERE ir.IdReceta = NEW.IdReceta; 
        END;`,

        `CREATE TRIGGER IF NOT EXISTS RestarPuntos
        BEFORE INSERT ON CLIENTES_PEDIDO
        FOR EACH ROW
        BEGIN
            DECLARE PuntosSinActualizar INT;  
            DECLARE TotalPuntosNecesarios INT;
            DECLARE TipoPago VARCHAR(10);
    
            SELECT Puntos, TPago
            INTO PuntosSinActualizar, TipoPago
            FROM CLIENTES
            JOIN PEDIDO ON CLIENTES.IdCliente = NEW.IdCliente AND PEDIDO.IdPedido = NEW.IdPedido;
    
            SELECT SUM(RECETAS.Precio)
            INTO TotalPuntosNecesarios
            FROM RECETAS
            JOIN PEDIDO_RECETAS ON RECETAS.IdReceta = PEDIDO_RECETAS.IdReceta
            WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido;
    
            IF TipoPago = 'Puntos' AND PuntosSinActualizar >= TotalPuntosNecesarios THEN

                UPDATE CLIENTES
                SET Puntos = PuntosSinActualizar - TotalPuntosNecesarios
                WHERE IdCliente = NEW.IdCliente;
            ELSE
                IF TipoPago = 'Puntos' THEN
                  SIGNAL SQLSTATE '45000'
                  SET MESSAGE_TEXT = 'NO TIENES LOS PUNTOS SUFICIENTES O EL TIPO DE PAGO NO ES PUNTOS';
                END IF;
            END IF;
        END;`,

        `CREATE TRIGGER IF NOT EXISTS RellenarStock
        AFTER INSERT ON PEDIDO_RECETAS
        FOR EACH ROW
        BEGIN
            DECLARE NumeroActual INT;
            SELECT NumStock
            INTO NumeroActual
            FROM INGREDIENTES
            JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
            WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta;

            IF NumeroActual-1 < 10 THEN 
                UPDATE INGREDIENTES
                JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
                SET NumStock = NumStock + 50
                WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta;
            END IF;
        END;`,
        
        `CREATE TRIGGER IF NOT EXISTS ContieneAlergeno
        BEFORE INSERT ON CLIENTES_PEDIDO
        FOR EACH ROW
        BEGIN

          DECLARE Peligro BOOLEAN;
          SELECT 1 INTO Peligro
          FROM CLIENTES_ALERGENOS
          JOIN ALERGENOS ON CLIENTE_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno
          JOIN PEDIDO_RECETAS ON NEW.IdPedido = PEDIDO_RECETAS.IdPedido
          JOIN RECETAS_INGREDIENTES ON PEDIDO_RECETAS.IdReceta = RECETAS_INGREDIENTES.IdReceta
          JOIN INGREDIENTES_ALERGENOS ON RECETAS_INGREDIENTES.IdIngrediente = INGREDIENTES_ALERGENOS.IdIngrediente
          WHERE CLIENTES_ALERGENOS.IdCliente = NEW.IdCliente
          AND INGREDIENTE_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno;
          
          IF Peligro THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El cliente tiene alérgenos en las recetas del pedido';
          END IF;
        END;
        `
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
  
  

  app.post('/restar', async (req, res) => {
    try {
      const connection = await abrirConexion();
      const { Cproducto, cantidad } = req.body;
  
      // Obtener el stock actual
      const querySelect = 'SELECT Cantidad FROM STOCK WHERE Cproducto = ?';
      const [stockAnterior] = await connection.promise().query(querySelect, [Cproducto]);
  
      if (stockAnterior.length === 0) {
        // Si no se encuentra el producto en el stock, devolver un error
        return res.status(404).json({ error: 'Producto no encontrado en el stock' });
      }
  
      const stockAnteriorCantidad = stockAnterior[0].Cantidad;
      if (cantidad < 0) {
        // Si el nuevo stock es negativo, devolver un error
        return res.status(400).json({ error: 'No se admiten números negativos' });
      }
      // Calcular el nuevo stock
      const nuevoStock = stockAnteriorCantidad - cantidad;
  
      if (nuevoStock < 0) {
        // Si el nuevo stock es negativo, devolver un error
        return res.status(400).json({ error: '¡El stock no puede ser menor de 0!' });
      }
  
      // Actualizar el stock en la base de datos
      const queryUpdate = 'UPDATE STOCK SET Cantidad = ? WHERE Cproducto = ?';
      await connection.promise().query(queryUpdate, [nuevoStock, Cproducto]);
  
      connection.end(); // Liberar recursos BD
      connection.destroy();
  
      // Devolver la respuesta exitosa
      res.status(200).json({ mensaje: 'Stock actualizado correctamente' });
    } catch (error) {
      console.error('Error al restar stock:', error);
      res.status(500).json({ error: 'Error al restar stock' });
    }
  });
  


  app.listen(5050, () => { // Inicia el servidor en el puerto 5050
    console.log('Servidor en ejecución en el puerto 5050');
  });
  