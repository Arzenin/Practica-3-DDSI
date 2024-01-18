DROP TABLE STOCK;
DROP TABLE PEDIDO;
DROP TABLE DETALLE_PEDIDO;


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
    PRIMARY KEY(IdTrabajador)
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
    FOREIGN KEY(IdCliente) REFERENCES CLIENTE(IdCliente)
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
    FOREIGN KEY(IdCliente) REFERENCES CLIENTE(IdCliente),
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
CREATE TRIGGER ActualizarStock
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
END;
//
DELIMITER ;

INSERT INTO Stock(Cproducto,Cantidad) VALUES(1,1);
INSERT INTO Pedido(Cpedido,Ccliente,Fecha_pedido) VALUES(1,1,TO_DATE('01/01/2002','dd/mm/yy')); 
INSERT INTO Detalle_Pedido(Cpedido,Cproducto,Cantidad) VALUES(1,1,1);  
SELECT * FROM Stock;
SELECT * FROM Pedido;
SELECT * FROM Detalle_Pedido;