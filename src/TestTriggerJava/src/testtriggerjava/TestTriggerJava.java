/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package testtriggerjava;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;
import java.util.Scanner;
import java.sql.Savepoint;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author jomar
 */
public class TestTriggerJava {

    String jdbcUrl = "jdbc:mysql://172.28.111.168:3000/ddsip3";
    String username = "root"; // Reemplaza con tu nombre de usuario
    String password = "admin"; // Reemplaza con tu contraseña

    Connection connection = null;
    Statement sentencia = null;
    ResultSet resultSet = null;
    PreparedStatement preparedStatement = null;
    Savepoint savepoint = null;
    
    public TestTriggerJava(){}
    
    public TestTriggerJava(String user, String pass)
    {
        username = user; 
        password = pass;
    }
    
    public void Iniciar_Sesion(){
        try {
            // Cargar el controlador JDBC de Oracle
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Conexión a la base de datos
            connection =DriverManager.getConnection(jdbcUrl, username, password);
            sentencia=connection.createStatement();
            connection.setAutoCommit(false);
            savepoint = connection.setSavepoint();
        } 
        catch (Exception e) {
            System.out.println("Error al iniciar sesión");
            e.printStackTrace();
        }     
    }
    
    public void Cerrar_Sesion(){
        try{
            if (resultSet != null) resultSet.close();
            if (sentencia != null) sentencia.close();
            if (connection != null) connection.close();
            System.exit(0);
        }
        catch(Exception e){
            System.out.println("Error al cerrar sesión");
            System.exit(0);
        }
        
    }
    
    public Boolean BD_Vacía(){
        Boolean resultado = false;
        try{

            String orden = "SHOW TABLES";
            resultSet = sentencia.executeQuery(orden);
            
            if(!resultSet.next()){
                resultado = true;
            } 
           
        }
        catch(Exception e){
            System.out.println("Error al Consultar si la base de datos esta vacía");
            e.printStackTrace();
        }
        
        return resultado;
    }
    
    public void Resetear_BD(){
        try{
            // Desactivar verificación de claves foráneas
            sentencia.executeUpdate("SET foreign_key_checks = 0");

            // Borrar tablas
            sentencia.executeUpdate("DROP TABLE IF EXISTS TRABAJADOR");
            sentencia.executeUpdate("DROP TABLE IF EXISTS PEDIDO");
            sentencia.executeUpdate("DROP TABLE IF EXISTS RESERVAS");
            sentencia.executeUpdate("DROP TABLE IF EXISTS CLIENTES");
            sentencia.executeUpdate("DROP TABLE IF EXISTS ALERGENOS");
            sentencia.executeUpdate("DROP TABLE IF EXISTS INGREDIENTES");
            sentencia.executeUpdate("DROP TABLE IF EXISTS RECETAS");
            sentencia.executeUpdate("DROP TABLE IF EXISTS RESERVAS_PEDIDO");
            sentencia.executeUpdate("DROP TABLE IF EXISTS TRABAJADOR_PEDIDO");
            sentencia.executeUpdate("DROP TABLE IF EXISTS CLIENTES_PEDIDO");
            sentencia.executeUpdate("DROP TABLE IF EXISTS PEDIDO_RECETAS");
            sentencia.executeUpdate("DROP TABLE IF EXISTS CLIENTES_ALERGENOS");
            sentencia.executeUpdate("DROP TABLE IF EXISTS RECETAS_INGREDIENTES");
            sentencia.executeUpdate("DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS");
            sentencia.executeUpdate("DROP TRIGGER IF EXISTS RestarPuntos");
            sentencia.executeUpdate("DROP TRIGGER IF EXISTS RellenarStock;");
            sentencia.executeUpdate("DROP TRIGGER IF EXISTS ContieneAlergeno");
            // Activar verificación de claves foráneas
            sentencia.executeUpdate("SET foreign_key_checks = 1");
            // Crear tablas
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS TRABAJADOR(IdTrabajador VARCHAR(20),Turno INT,Bono INT CHECK(Bono <= 500),PRIMARY KEY(IdTrabajador))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS PEDIDO(IdPedido INT,Valoracion INT CHECK(Valoracion <= 10),TPago VARCHAR(10) CHECK (TPago IN ('Tarjeta','Efectivo','Puntos')),Estado VARCHAR(10) CHECK (Estado IN ('Activo','Inactivo')),PRIMARY KEY(IdPedido))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS RESERVAS(IdReserva INT,PRIMARY KEY(IdReserva))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS CLIENTES(IdCliente VARCHAR(40),Nombre VARCHAR(40),UserName VARCHAR(40),Contrasenia VARCHAR(40),Domicilio VARCHAR(40),Puntos INT,FechaNacimiento VARCHAR(40),DatosDePago VARCHAR(30),PRIMARY KEY(IdCliente))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS ALERGENOS(IdAlergeno INT,Nombre VARCHAR(40),Descripcion VARCHAR(40),PRIMARY KEY(IdAlergeno))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS INGREDIENTES(IdIngrediente INT,Nombre VARCHAR(40),NumStock INT CHECK (NumStock >= 0),PRIMARY KEY(IdIngrediente))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS RECETAS(IdReceta INT,Precio INT CHECK (Precio >= 1),PRIMARY KEY(IdReceta))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS RESERVAS_PEDIDO(IdReserva INT,IdPedido INT UNIQUE,NumPersonas INT,HoraIni VARCHAR(40),PRIMARY KEY(IdReserva,Horaini),FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS TRABAJADOR_PEDIDO(IdTrabajador VARCHAR(20),IdPedido INT,PRIMARY KEY(IdTrabajador,IdPedido),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS CLIENTES_PEDIDO(IdCliente VARCHAR(40),IdPedido INT,PRIMARY KEY(IdPedido,IdCliente),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS PEDIDO_RECETAS(IdReceta INT,IdPedido INT,numero INT CHECK (numero >= 1),PRIMARY KEY(IdPedido,IdReceta),FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS CLIENTES_ALERGENOS(IdCliente VARCHAR(40),IdAlergeno INT,PRIMARY KEY(IdCliente,IdAlergeno),FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente),FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS RECETAS_INGREDIENTES(IdReceta INT,IdIngrediente INT,numero INT CHECK (numero >= 1),PRIMARY KEY(IdReceta,IdIngrediente),FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta),FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente))");
            sentencia.executeUpdate("CREATE TABLE IF NOT EXISTS INGREDIENTES_ALERGENOS(IdIngrediente INT,IdAlergeno INT,PRIMARY KEY(IdAlergeno,IdIngrediente),FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno),FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente))");
            // Crear triggers
            sentencia.executeUpdate("CREATE TRIGGER ActualizarStock AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE veces INT;SELECT numero INTO veces FROM PEDIDO_RECETAS WHERE IdReceta = NEW.IdReceta AND IdPedido = NEW.IdPedido; UPDATE INGREDIENTES JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente SET INGREDIENTES.NumStock = CASE WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 0 THEN -1 WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 10 THEN 200+INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero ELSE (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) END WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta; END");
            sentencia.executeUpdate("CREATE TRIGGER ComprobarStockNoNegativo BEFORE UPDATE ON INGREDIENTES FOR EACH ROW BEGIN IF NEW.NumStock < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No hay suficiente stock de ingredientes para completar el pedido'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER RestarPuntos AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE resta INT; DECLARE multiplicador INT; DECLARE Tipo VARCHAR(40); SELECT Precio INTO resta FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta; SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta; SET resta = resta * multiplicador; SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido; IF Tipo = 'Puntos' THEN UPDATE CLIENTES JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente SET CLIENTES.Puntos = CASE WHEN (CLIENTES.Puntos - resta) < 0 THEN -1 ELSE (CLIENTES.Puntos - resta) END WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido; END IF; END");
            sentencia.executeUpdate("CREATE TRIGGER ComprobarPuntosNoNegativo BEFORE UPDATE ON CLIENTES FOR EACH ROW BEGIN IF NEW.Puntos < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No hay suficientes puntos como para pagar el pedido, por favor elija otro método de pago'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER ContieneAlergeno BEFORE INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE Peligro BOOLEAN; SELECT 1 INTO Peligro FROM ALERGENOS JOIN INGREDIENTES_ALERGENOS ON ALERGENOS.IdAlergeno = INGREDIENTES_ALERGENOS.IdAlergeno JOIN INGREDIENTES ON INGREDIENTES_ALERGENOS.IdIngrediente = INGREDIENTES.IdIngrediente JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta AND EXISTS (SELECT 1 FROM CLIENTES_ALERGENOS WHERE CLIENTES_ALERGENOS.IdCliente = (SELECT IdCliente FROM PEDIDO WHERE IdPedido = NEW.IdPedido) AND CLIENTES_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno); IF Peligro THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente tiene alérgenos en las recetas del pedido'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER SumarPuntos AFTER INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN DECLARE suma INT; DECLARE multiplicador INT; DECLARE Tipo VARCHAR(40); SELECT Precio INTO suma FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta; SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta; SET suma = suma * multiplicador; SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido; IF Tipo != 'Puntos' THEN UPDATE CLIENTES JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente SET CLIENTES.Puntos = CLIENTES.Puntos + suma WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER ReservasInferior BEFORE UPDATE ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas >= OLD.NumPersonas THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No hay suficiente espacio'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER CalcularBono AFTER UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado = 'Inactivo' THEN UPDATE TRABAJADOR JOIN TRABAJADOR_PEDIDO ON TRABAJADOR_PEDIDO.IdTrabajador = TRABAJADOR.IdTrabajador JOIN PEDIDO ON TRABAJADOR_PEDIDO.IdPedido = PEDIDO.IdPedido SET TRABAJADOR.Bono = TRABAJADOR.Bono + PEDIDO.Valoracion WHERE PEDIDO.IdPedido = NEW.IdPedido; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER ValoracionMenor10 BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN SET NEW.Valoracion = CASE WHEN NEW.Valoracion > 10 THEN 10 WHEN NEW.Valoracion < 0 THEN 0 ELSE NEW.Valoracion END; END;");
            sentencia.executeUpdate("CREATE TRIGGER BonoMenor500 BEFORE UPDATE ON TRABAJADOR FOR EACH ROW BEGIN SET NEW.Bono = CASE WHEN NEW.Bono > 500 THEN 500 WHEN NEW.Bono < 0 THEN 0 ELSE NEW.Bono END; END;");
            sentencia.executeUpdate("CREATE TRIGGER BonoIniMenor500 BEFORE INSERT ON TRABAJADOR FOR EACH ROW BEGIN SET NEW.Bono = CASE WHEN NEW.Bono > 500 THEN 500 WHEN NEW.Bono < 0 THEN 0 ELSE NEW.Bono END; END;");
            sentencia.executeUpdate("CREATE TRIGGER ValoracionIniMenor10 BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN SET NEW.Valoracion = CASE WHEN NEW.Valoracion > 10 THEN 10 WHEN NEW.Valoracion < 0 THEN 0 ELSE NEW.Valoracion END; END;");
            sentencia.executeUpdate("CREATE TRIGGER PrecioPositivoInit BEFORE INSERT ON RECETAS FOR EACH ROW BEGIN IF NEW.Precio < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER PrecioPositivo BEFORE UPDATE ON RECETAS FOR EACH ROW BEGIN IF NEW.Precio < 0 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER EstadoEnRangoInit BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado != 'Activo' AND NEW.Estado != 'Inactivo' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER EstadoEnRango BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.Estado != 'Activo' AND NEW.Estado != 'Inactivo' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER TipoDePagoEnRangoInit BEFORE INSERT ON PEDIDO FOR EACH ROW BEGIN IF NEW.TPago NOT IN ('Tarjeta', 'Efectivo', 'Puntos') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER TipoDePagoEnRango BEFORE UPDATE ON PEDIDO FOR EACH ROW BEGIN IF NEW.TPago NOT IN ('Tarjeta', 'Efectivo', 'Puntos') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumRecetasPositivoInit BEFORE INSERT ON PEDIDO_RECETAS FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumRecetasPositivo BEFORE UPDATE ON PEDIDO_RECETAS FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumIngredientesPositivo BEFORE INSERT ON RECETAS_INGREDIENTES FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumIngredientesPositivoInit BEFORE UPDATE ON RECETAS_INGREDIENTES FOR EACH ROW BEGIN IF NEW.numero < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumNumPersonasPositivoInit BEFORE UPDATE ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA'; END IF; END;");
            sentencia.executeUpdate("CREATE TRIGGER NumNumPersonasPositivo BEFORE INSERT ON RESERVAS_PEDIDO FOR EACH ROW BEGIN IF NEW.NumPersonas < 1 THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA'; END IF; END;");

            
            // Insertar datos
            sentencia.executeUpdate("INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('gonzalo@miemail.com','Gonzalo Sanz Guerrero', 'gonzasanz_', '1234abc', 'Calle A', 0, '2012-12-12 00:00:00', '123A')");
            sentencia.executeUpdate("INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('jose','José Manuel Aranda Gutierrez', 'josemanuelaranda_', '12346ma', 'Calle B', 0, '2012-12-12 00:00:00', '123B')");
            connection.commit();
        }
        catch(Exception e){
            System.out.println("Error al Borrar las tablas de la base de Datos");
            e.printStackTrace();
            
        }
    }
    
    public void TestTrigger(){
        
        
    }
    
    public void TestActualizarStockANDComprobarStockNoNegativo(){
        try{
            System.out.println("\nTrigger comprobado: ActualizaStock Y StockNegativo"+ 
                               "\n\tFuncion:Cada vez que se genere un pedido, se actualiza el Stock de los Ingredientes"+ 
                               "\n\tFuncion:Cada vez que se genere un pedido, comprueba que el numero de stock no se quede en negativo"+
                               " de las recetas que conformen el pedido\n" +
                               "\tCaso de Ejemplo:\n\t\tPedido:\n\t\t\tReceta con ID 1, 2 veces\n\t\t\tReceta con ID 2, 1 vez"+
                               "\n\tReceta con ID 1:\n\t\t\tIngrediente con ID 1 Nveces:5 /Ingregiente con ID 2 Nveces:2" +
                               "\n\tReceta con ID 2:\n\t\t\tIngrediente con ID 2 Nveces:1" +
                               "\n Entado inicial de numStock de ID 1 y 2: 100"+
                               "\n Resultado esperado ID 1: 90, ID 2:95\n");
            
            sentencia.executeUpdate("INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('a','a', 'a', 'a', 'a', 100, '2012-12-12 00:00:00', '123B')");
            sentencia.executeUpdate("INSERT INTO INGREDIENTES (`IdIngrediente`, `Nombre`,`NumStock`) VALUES (1,'a',100)");
            sentencia.executeUpdate("INSERT INTO RECETAS (`IdReceta`,`Precio`) VALUES (1,1)");
            sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (1,1,5)");
            //Daría error al intentar asignar un numero de ingredientes negativo o 0
            //sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (1,1,-5)");
            sentencia.executeUpdate("INSERT INTO INGREDIENTES (`IdIngrediente`, `Nombre`,`NumStock`) VALUES (2,'a',100)");
            sentencia.executeUpdate("INSERT INTO RECETAS (`IdReceta`,`Precio`) VALUES (2,20)");
            sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (1,2,2)");
            sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (2,2,1)");
            sentencia.executeUpdate("INSERT INTO PEDIDO (`IdPedido`, `Valoracion`, `TPago`, `Estado`) VALUES (1,10,'Tarjeta','Activo')");
            sentencia.executeUpdate("INSERT INTO CLIENTES_PEDIDO (`IdCliente`, `IdPedido`) VALUES ('a',1)");
            sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (1,1,2)");
            //Daría Negativo al intentar asignar un numero de recetas negativas o 0 a un pedido
            //sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (1,1,-2)");
            sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (2,1,2)");
            //Error cuando se actualiza a un precio negativo
            //sentencia.executeUpdate("UPDATE RECETAS SET Precio = -1 WHERE IdReceta = 1;");
            //Error cuando se actualiza a un pago fuera de rango
            //sentencia.executeUpdate("UPDATE PEDIDO SET TPago = 'a' WHERE IdPedido = 1;");
            //Error cuando se actualiza a un numero de Ingredientes negativo o 0
            //sentencia.executeUpdate("UPDATE RECETAS_INGREDIENTES SET numero = -1 WHERE IdIngrediente = 1;");
            //Error cuando se actualiza a un numero de recetas negativo o 0
            //sentencia.executeUpdate("UPDATE PEDIDO_RECETAS SET numero = 0 WHERE IdPedido = 1;");
            connection.commit();

            String sql = "SELECT NumStock FROM INGREDIENTES WHERE IdIngrediente = 1";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumStock");
                System.out.println("NumStock para el ID '1': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '1'");
            }

            sql = "SELECT NumStock FROM INGREDIENTES WHERE IdIngrediente = 2";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();

            // Mueve el cursor al primer resultado
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumStock");
                System.out.println("NumStock para el ID '2': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '2'");
            }

        }
        catch(Exception e){
            System.out.println("Error en el Test ActualizarStock");
            e.printStackTrace();
            
        }
    }
    
    public void TestRestarPuntosySumar(){
        try{
            System.out.println("\nTrigger comprobado: RestarPuntos y SumarPuntos"+ 
                               "\n\tFuncion:Cada vez que se inserte una receta al pedido, se actualiza el numero de puntos"+ 
                               "\n Resultado esperado 140"+
                               "\n Esto se debe a Que en total se han hecho 2 pedidos, uno con 2 veces la receta 1 y otro con 2 veces la receta 2"+
                               "\n El segundo contiene la receta 1 dos veces"+
                               "\n Es decir 100+1*2+20*2-1*2=140\n");
            
            sentencia.executeUpdate("INSERT INTO PEDIDO (`IdPedido`, `Valoracion`, `TPago`, `Estado`) VALUES (2,10,'Puntos','Activo')");
            sentencia.executeUpdate("INSERT INTO CLIENTES_PEDIDO (`IdCliente`, `IdPedido`) VALUES ('a',2)");
            sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (1,2,2)");
            connection.commit();
            
            String sql = "SELECT Puntos FROM CLIENTES WHERE IdCliente = 'a'";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("Puntos");
                System.out.println("Puntos para el ID 'a': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID 'a'");
            }
            
            sql = "SELECT Puntos FROM CLIENTES WHERE IdCliente = 'a'";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("Puntos");
                System.out.println("Puntos para el ID 'a': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID 'a'");
            }
        }
        catch(Exception e){
            System.out.println("Error en el Test RestarPuntos");
            e.printStackTrace();
        }
    }
    
    public void TestRellenarStock(){
      try{
            System.out.println("\nTrigger comprobado: ActualizarStock 2.0,si el numero de stock tras insertar a PEDIDO_RECETAS es < 10 se añaden 200");
            System.out.println("\n\tResultado esperado 209");
            sentencia.executeUpdate("INSERT INTO INGREDIENTES (`IdIngrediente`, `Nombre`,`NumStock`) VALUES (3,'a',100)");
            sentencia.executeUpdate("INSERT INTO RECETAS (`IdReceta`,`Precio`) VALUES (3,10)");
            sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (3,3,91)");
            sentencia.executeUpdate("INSERT INTO PEDIDO (`IdPedido`, `Valoracion`, `TPago`, `Estado`) VALUES (3,10,'Tarjeta','Activo')");
            sentencia.executeUpdate("INSERT INTO CLIENTES_PEDIDO (`IdCliente`, `IdPedido`) VALUES ('a',3)");
            sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (3,3,1)");
            connection.commit();
            
            String sql = "SELECT NumStock FROM INGREDIENTES WHERE IdIngrediente = 3";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumStock");
                System.out.println("Stock para el ID '3': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
        }
        catch(Exception e){
            System.out.println("Error en el Test RellenarStock");
            e.printStackTrace();
        }
    }
        
   public void TestDetectarAlergenos(){
      try{
            System.out.println("\nTrigger comprobado: Detectar alergenos, en caso de detectar un alergeno nos devuelve error");
            System.out.println("\n\tNo error a no ser que se descomente la linea que hay mas abajo en el codigo");
            
            sentencia.executeUpdate("INSERT INTO ALERGENOS (`IdAlergeno`, `Nombre`,`Descripcion`) VALUES (4,'A','A')");
            sentencia.executeUpdate("INSERT INTO ALERGENOS (`IdAlergeno`, `Nombre`,`Descripcion`) VALUES (3,'A','A')");
            sentencia.executeUpdate("INSERT INTO INGREDIENTES (`IdIngrediente`, `Nombre`,`NumStock`) VALUES (4,'a',100)");
            sentencia.executeUpdate("INSERT INTO INGREDIENTES_ALERGENOS (`IdIngrediente`, `IdAlergeno`) VALUES (4,4)");
            //sentencia.executeUpdate("INSERT INTO INGREDIENTES_ALERGENOS (`IdIngrediente`, `IdAlergeno`) VALUES (4,3)");
            sentencia.executeUpdate("INSERT INTO RECETAS (`IdReceta`,`Precio`) VALUES (4,10)");
            sentencia.executeUpdate("INSERT INTO RECETAS_INGREDIENTES (`IdReceta`, `IdIngrediente`,`numero`) VALUES (4,4,91)");
            sentencia.executeUpdate("INSERT INTO CLIENTES_ALERGENOS (`IdCliente`, `IdAlergeno`) VALUES ('a',3)");
            
            sentencia.executeUpdate("INSERT INTO PEDIDO (`IdPedido`, `Valoracion`, `TPago`, `Estado`) VALUES (4,10,'Tarjeta','Activo')");
            sentencia.executeUpdate("INSERT INTO CLIENTES_PEDIDO (`IdCliente`, `IdPedido`) VALUES ('a',4)");
            sentencia.executeUpdate("INSERT INTO PEDIDO_RECETAS (`IdReceta`, `IdPedido`,`numero`) VALUES (4,4,1)");
            connection.commit();

            String sql = "SELECT NumStock FROM INGREDIENTES WHERE IdIngrediente = 3";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumStock");
                System.out.println("Puntos para el ID '3': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
        }
        catch(Exception e){
            System.out.println("Error en el Test RellenarStock");
            e.printStackTrace();
        }
   }
   
    public void TestReservasInferior(){
      try{
            
            sentencia.executeUpdate("INSERT INTO RESERVAS (`IdReserva`) VALUES (1)");
            //Error por asignar un numero de personas negativo o 0
            //sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,1,-5,'15:00/21/12/2002')");
            sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,1,5,'15:00/21/12/2002')");
            sentencia.executeUpdate("INSERT INTO RESERVAS (`IdReserva`) VALUES (2)");
            //Comprobar que un pedido no puede tener mas de una reserva
            //sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (2,1,5,'15:00/21/12/2002')");
            
            String sql = "SELECT NumPersonas FROM RESERVAS_PEDIDO WHERE IdReserva= 1 AND HoraIni = '15:00/21/12/2002'";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumPersonas");
                System.out.println("Stock para el ID '3': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
            connection.commit();
            
            sentencia.executeUpdate("UPDATE RESERVAS_PEDIDO SET NumPersonas = 4 WHERE IdReserva = 1 AND HoraIni = '15:00/21/12/2002';");
           
            sql = "SELECT NumPersonas FROM RESERVAS_PEDIDO WHERE IdReserva= 1 AND HoraIni = '15:00/21/12/2002'";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("NumPersonas");
                System.out.println("Stock para el ID '3': " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
            connection.commit();
            
            //SI SE DESCOMENTA ESTA LINEA DEBERÍA DE DAR ERROR POQUE SE TRATA DE INSERTAR UN NUMERO MAYOR AL ANTIGUO
            //sentencia.executeUpdate("UPDATE RESERVAS_PEDIDO SET NumPersonas = 6 WHERE IdReserva = 1 AND HoraIni = '15:00/21/12/2002';");
            //Error No puede haber un numero negativo de NumPersonas o 0
            //sentencia.executeUpdate("UPDATE RESERVAS_PEDIDO SET NumPersonas = -6 WHERE IdReserva = 1 AND HoraIni = '15:00/21/12/2002';");
        }
        catch(Exception e){
            System.out.println("TestReservasInferior");
            e.printStackTrace();
        }
    }
    
        public void CalcularBonus(){
      try{
            
            sentencia.executeUpdate("INSERT INTO TRABAJADOR (`IdTrabajador`,`Turno`,`Bono`) VALUES (1,1,0)");
            sentencia.executeUpdate("INSERT INTO TRABAJADOR_PEDIDO (`IdTrabajador`,`IdPedido`) VALUES (1,1)");

            
            
            String sql = "SELECT Bono FROM TRABAJADOR WHERE IdTrabajador = 1";
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("Bono");
                System.out.println("Bono antes del calculo para el ID 1: " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
            connection.commit();
            
            sentencia.executeUpdate("UPDATE PEDIDO SET Valoracion = 10 WHERE IdPedido = 1;");
            sentencia.executeUpdate("UPDATE PEDIDO SET Estado = 'Inactivo' WHERE IdPedido = 1;");
            
           
            sql = "SELECT Bono FROM TRABAJADOR WHERE IdTrabajador = 1";;
            preparedStatement = connection.prepareStatement(sql);
            resultSet = preparedStatement.executeQuery();
            
            if (resultSet.next()) {
                int numStock = resultSet.getInt("Bono");
                System.out.println("Bono Despues del calculo para el ID '1: " + numStock);
            } else {
                System.out.println("No se encontraron resultados para el ID '3'");
            }
            connection.commit();
            
            //Si se descomenta esta linea dara error por tratar de asignar un numero mayor de comensales al anterior
            //sentencia.executeUpdate("UPDATE RESERVAS_PEDIDO SET NumPersonas = 6 WHERE IdReserva = 1 AND HoraIni = '15:00/21/12/2002';");
        }
        catch(Exception e){
            System.out.println("TestReservasInferior");
            e.printStackTrace();
        }
    }
   
    public static void main(String[] args) {
        TestTriggerJava BD = new TestTriggerJava("root","admin");
        BD.Iniciar_Sesion();
        BD.Resetear_BD();
        BD.TestActualizarStockANDComprobarStockNoNegativo();
        BD.TestRestarPuntosySumar();
        BD.TestRellenarStock();
        BD.TestDetectarAlergenos();
        BD.TestReservasInferior();
        BD.CalcularBonus();
        BD.Cerrar_Sesion();
    }
    
}
