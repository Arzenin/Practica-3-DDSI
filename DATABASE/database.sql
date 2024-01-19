DROP TABLE IF EXISTS TRABAJADOR;
DROP TABLE IF EXISTS PEDIDO;
DROP TABLE IF EXISTS RESERVAS;
DROP TABLE IF EXISTS CLIENTES;
DROP TABLE IF EXISTS ALERGENOS;
DROP TABLE IF EXISTS INGREDIENTES;
DROP TABLE IF EXISTS RECETAS;
DROP TABLE IF EXISTS RESERVAS_PEDIDO;
DROP TABLE IF EXISTS TRABAJADOR_PEDIDO;
DROP TABLE IF EXISTS CLIENTE_PEDIDO;
DROP TABLE IF EXISTS PEDIDO_RECETAS;
DROP TABLE IF EXISTS CLIENTE_ALERGENOS;
DROP TABLE IF EXISTS RECETAS_INGREDIENTES;
DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS;


CREATE TABLE TRABAJADOR(
    IdTrabajador INT,
    Turno INT,
    PRIMARY KEY(IdTrabajador)
);

CREATE TABLE PEDIDO(
    IdPedido INT,
    Valoracion INT,
    TPago VARCHAR(10) CHECK (TPago IN ('Tarjeta','Efectivo','Puntos')),
    Estado VARCHAR(10) CHECK (Estado IN ('Activo','Inactivo')),
    PRIMARY KEY(IdPedido)
);

CREATE TABLE RESERVAS(
    IdReserva INT,
    IdMesa INT,
    PRIMARY KEY(IdReserva)
);

CREATE TABLE CLIENTES(
    IdCliente INT,
    Valoracion INT,
    Nombre VARCHAR(40),
    UserName VARCHAR(10),
    Contrasenia VARCHAR(40),
    Domicilio VARCHAR(40),
    Puntos INT,
    FechaNacimiento DATETIME,
    DatosDePago VARCHAR(30),
    PRIMARY KEY(IdCliente)
);

CREATE TABLE ALERGENOS(
    IdAlergeno INT,
    Nombre VARCHAR(40),
    Descripcion VARCHAR(40),
    PRIMARY KEY(IdAlergeno)
);

CREATE TABLE INGREDIENTES(
    IdIngrediente INT,
    Nombre VARCHAR(40),
    NumStock INT CHECK (NumStock >= 0),
    PRIMARY KEY(IdIngrediente)
);

CREATE TABLE RECETAS(
    IdReceta INT,
    Precio INT CHECK (Precio >= 1),
    PRIMARY KEY(IdReceta)
);

CREATE TABLE RESERVAS_PEDIDO(
    IdReserva INT,
    IdPedido INT,
    NumPersonas INT,
    HoraIni DATETIME,
    PRIMARY KEY(IdPedido,IdReserva),
    FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido)
);

CREATE TABLE TRABAJADOR_PEDIDO(
    IdTrabajador INT,
    IdPedido INT,
    PRIMARY KEY(IdPedido,IdReserva),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador)
);

CREATE TABLE CLIENTE_PEDIDO(
    IdCliente INT,
    IdPedido INT,
    PRIMARY KEY(IdPedido,IdCliente),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente)
);

CREATE TABLE PEDIDO_RECETAS(
    IdReceta INT,
    IdPedido INT,
    PRIMARY KEY(IdPedido,IdReceta),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta)
);

CREATE TABLE CLIENTE_ALERGENOS(
    IdCliente INT,
    IdAlergeno INT,
    PRIMARY KEY(IdCliente,IdAlergeno),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno)
);

CREATE TABLE RECETAS_INGREDIENTES(
    IdReceta INT,
    IdIngrediente INT,
    PRIMARY KEY(IdReceta,IdIngrediente),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);

CREATE TABLE INGREDIENTES_ALERGENOS(
    IdIngrediente INT,
    IdAlergeno INT,
    PRIMARY KEY(IdAlergeno,IdIngrediente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);

DELIMITER //
CREATE TRIGGER ReponerStock
AFTER UPDATE ON INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.NumStock < 10 THEN
        UPDATE INGREDIENTES
        SET NumStock = NEW.NumStock + 50
        WHERE id = NEW.id
    END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER ActualizarStock
AFTER INSERT ON PEDIDO_RECETAS
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
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER RestarPuntos
BEFORE INSERT ON CLIENTE_PEDIDO
FOR EACH ROW
BEGIN

    DECLARE PuntosSinActualizar INT;  
    DECLARE Tipo VARCHAR(10);
    DECLARE NumRestar INT;

    SELECT Puntos INTO PuntosSinActualizar
    FROM CLIENTES
    WHERE IdCliente = NEW.IdCliente;

    SELECT TPago INTO Tipo
    FROM PEDIDO
    WHERE IdPedido = NEW.IdPedido;

    SELECT Precio INTO NumRestar
    FROM PEDIDO
    WHERE IdPedido = NEW.IdPedido;

    IF Tipo = 'Puntos' THEN
        IF (PuntosSinActualizar-NumRestar) < 0 THEN
            SIGNAL SQLSTATE '4500'
            SET MESSAGE_TEXT = 'NO TIENES LOS PUNTOS SUFICIENTES'
        -- HACER ROLLBACK EN EL CÓDIGO A ANTES DE ENVIAR EL PEDIDO
        ELSE
            UPDATE CLIENTE
            SET Puntos = PuntosSinActualizar - NumRestar
            WHERE IdCliente = new.IdCliente;
        END IF;
    ELSE
    END IF;

END;
//
DELIMITER ;