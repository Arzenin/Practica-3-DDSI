# Autor:
- Jose Manuel Aranda Gutiérrez
  - Correo electrónico: jomagtr@gmail.com
  - Correo electrónico ugr: jomagtr@correo.ugr.es
  - Grupo: A3
- Gabriel Vico Arboledas
  - Correo electrónico: gabriel.arboledas@gmail.com
  - Correo electrónico ugr: gabrielvico02@correo.ugr.es
  - Grupo: A3
- Pablo Gervilla Miranda
  - Correo electrónico: pablosky7000@gmail.com
  - Correo electrónico ugr: pablogervilla@correo.ugr.es
  - Grupo: A3
- Rubén Gázquez Gallardo
  - Correo electrónico: ruben.gazquez@gmail.com
  - Correo electrónico ugr: rubeng@correo.ugr.es
  - Grupo: A3
- Gonzalo Sanz Guerrero
  - Correo electrónico: sanzguerrerogonzalo@gmail.com 
  - Correo electrónico ugr: gsanzguerrero@correo.ugr.es
  - Grupo: A3

Para ello se ha realizado un repositorio en Github con el siguiente enlace:[https://github.com/Arzenin/Sistema-Mc-And-Cheese](https://github.com/Arzenin/Sistema-Mc-And-Cheese)


__Se recomienda__ la visualización de la documentación desde el README.md en el github, ya que por medio de los enlaces se puede llegar más rápido a las partes en las que se esté interesado, sin embargo si se desea se puede tener la casi la misma experiencia visualizandolo tanto desde el README.md como desde el [PDF](Doc/) que o bien se ha obtenido por medio de su envío o bien por su obtención en la carpeta `Doc/` dentro del repositorio de github.

# 0. Índice

0. [Índice](#0-índice)
1. [Introducción y Motivación](#1-introducción-y-motivación)
2. [Objetivos](#2-objetivos)
3. [Github](#3-github)
   1. [Estructura del Repositorio](#31-estructura-del-repositorio)
      1. [src](#311-src)
      2. [DATABASE](#312-database)
      3. [TestTriggerJava](#313-testtriggerjava)
      4. [web](#314-web)
   2. [Descarga del Repositorio](#32-descarga-del-repositorio)
      1. [Instalación de Git](#321-instalación-de-git)
      2. [Clonar un Repositorio](#322-clonar-un-repositorio)
4. [Explicación e Instalaciones de las Herramientas](#4-explicación-e-instalaciones-de-las-herramientas)
   1. [Docker](#41-docker)
      1. [Instalación de Docker](#411-instalación-de-docker)
   2. [ZeroTier](#42-zerotier)
      1. [Instalación de ZeroTier](#421-instalación-de-zerotier)
   3. [WAF](#43-waf)
      1. [Instalación de WAF](#431-instalación-de-waf)
   4. [PHPMyAdmin y MySQL2](#44-phpmyadmin-y-mysql2)
      1. [Instalación de PHPMyAdmin](#441-instalación-de-phpmyadmin)
5. [Explicación del Código](#5-explicación-del-código)
   1. [Explicación del Código en SQL](#51-explicación-del-código-en-sql)
      1. [Tablas](#511-tablas)
      2. [Triggers](#512-triggers)
      3. [Archivo de BD completo](#513-archivo-de-bd-completo)
   2. [Explicación del Test](#52-explicación-del-test)
      1. [Archivo de Test Completo](#521-archivo-de-test-completo)
   3. [Explicación del Código Web](#53-explicación-del-codigo-web)
      1. [Frontend](#531-frontend)
      2. [Backend](#532-Backend)
 6. [Ejecución del Código](#6-ejecución-del-código)

# 1. Introducción y Motivación

En esta práctica se nos presenta la continuación e implementación de nuestro sistema Mc And Cheese. Tras dejar la base de la P2, donde ya teniamos todos los subsistemas 
implementados, se ha seguido evolucionando el código y la base de datos. El proyecto se ha basado tambien en los seminarios, especialmente en el segundo, se ha decidido implementar nuestro 
sistema en una página web. Se estuvo dando muchas vueltas a la hora de elegir la implementación , ya que java tambien era una muy buena opción, pero nos decantamos por la 
programación web.


Nuestra motivación al elegir nuestro sistema fue la amplia gama de funcionalidades que puede tomar, así como que es un tema muy común y representativo de la realidad. 
Queríamos poder aprender a realizar proyectos reales, los cuales se pudieran reflejar en algún caso real de nuestro futuro profesional, ya que en asignaturas pasadas siempre 
se realizan ejemplos muy aislados, que no representan lo que se puede pedir a un programador en la vida real. Esa fue una de las motivaciones más fuertes a la hora de 
elegir Mc And Cheese.


[Volver al índice](#0-índice)


# 2. Objetivos

Nuestro objetivo principal a la hora de implementar este sistema era el de cumplir los requisitos funcionales establecidos a lo largo de las prácticas y seminarios 
anteriores.Sin embargo, decidimos que además de esto,  tomamos la decisión de intentar aplicar todo el conocimiento obtenido a lo largo del año, tanto dentro de las clases 
como fuera de estas.


Nada más comenzar la implementación del sistema, tomamos la decisión de automatizar el máximo número posible de los requisitos funcionales por medio del uso de triggers, para 
así poder distribuir la carga de cómputo entre las diferentes terminales en las que se ejecutásen cada uno de los servicios necesarios para el correcto funcionamiento del 
sistema Mc and Cheese.


Además de esto decidimos que trataríamos de profundizar más dentro del desarrollo de una aplicación web y experimentar diferentes tipos de implementaciones tanto del frontend 
como del backend.


En conclusión nuestro objetivo es el de demostrar todo el conocimiento que hemos adquirido entre todos a lo largo del año, automatizar determinadas funciones para una mejor 
distribución de la carga computacional y por último alcanzar una mayor profundidad dentro de la programación web.


[Volver al índice](#0-índice)


# 3. Github

Al igual que en todos nuestros proyectos, se ha elegido Github como medio para crear nuestro repositorio del proyecto, el cual nos permitirá registrar tanto los resultados 
del mismo, como los distintos avances en él. Es por ello que se incluirá Github en la explicación del proyecto.


Github, es una plataforma ampliamente adoptada por millones de usuarios, se destaca como un espacio fundamental para el hospedaje de código. Esta plataforma brinda una 
ventaja sustancial al facilitar tanto la sincronización de archivos en un proyecto como la posibilidad de compartirlo con otros usuarios.

Se ha decidido emplear este portal con el objetivo principal de optimizar la sincronización entre los miembros del proyecto y, al mismo tiempo, ofrecer a los usuarios la capacidad 
de seguir tutoriales que mejoren su comprensión del proyecto.

En el archivo readme adjunto al repositorio, que estará disponible al final de esta sección, encontrarás un tutorial completo para la instalación de este proyecto. Te 
instamos fervientemente a revisarlo para aprovechar al máximo todas las funcionalidades disponibles.


[Volver al índice](#0-índice)


## 3.1 Estructura del Repositorio

Dentro de este apartado se explican los diferentes directorios dentro del repositorio y los ficheros que se pueden encontrar dentro de los mismos. Para poder realizar una 
explicación en profundidad se explica uno por uno los directorios superiores, siendo estos aquellos que no vayan destinados al almacenamiento de dependencias necesarias 
para la ejecución del proyecto.

### 3.1.1 src
En el directorio __[src](src/)__ se encontrarán los directorios destinados al almacenamiento del código necesario para la ejecución del programa además de aquellos ficheros 
que ayudarán a comprender el correcto funcionamiento de los triggers y los requisitos implementados.

### 3.1.2 DATABASE
En el directorio __[DATABASE](src/DATABASE)__ se encontrarán los ficheros destinados a la gestión y estructura de la base de datos, dentro del mismo se destaca el 
fichero __[ddsi3.sql](src/DATABASE/ddsip3.sql)__ el cuál contiene toda la estructura de nuestra base de datos, se centrará más en la explicación de este fichero en el 
apartado __[5.1 Explicación del Código en SQL](#51-explicación-del-codigo-en-sql)__

### 3.1.3 TestTriggerJava
En el directorio __[TestTriggerJava](src/TestTriggerJava)__ se encontrará un programa sencillo de cara a la comprensión de los triggers implementados en nuestro código, sobre 
los cuales se profundizará en el apartado __[5.1.2 Triggers](#512-triggers)__ , sobre este código cabe destacar que se ha usado el conector __MySQL JDBC__.


Se ha decidido no explicar en profundidad el proceso de instalación y de ejecución tanto del conector como del test ya que se considera esto como un añadido, sin embargo, si 
se desease probar este test, se deberá de generar un proyecto el cual tenga como base el archivo __TestTriggerJava.java__ y enlazada como una librería el conector de __JDBC__.


Sin embargo lo que sí se realizará es una breve explicación de lo que hará el test para comprobar que los triggers funcionan correctamente. 

### 3.1.4 web
El directorio __[web](src/web)__ es el más importante de todos, en él se encuentran desde los ficheros fuente del sistema como la api destinada a la ejecución del backend.
Además de esto también se pueede encontrar varios dockerfiles y docker compose los cuales ayudarán a la ejecución del código, sin embargo esto se explicará más adelante 
en el apartado __[6. Ejecución del Código](#6-ejecución-del-código)__ 


[Volver al índice](#0-índice)


## 3.2 Descarga del Repositorio
En este apartado se explica la instalación del repositorio en nuestra máquina de forma local, se recomienda __*encarecidamente*__ su instalación en caso de querer probar el 
sistema, ya que esto ahorrará una gran cantidad de tiempo de cara a la instalación de ficheros dentro de nuestra máquina, además esto permitirá usar de forma más 
sencilla este proyecto desde máquinas las cuales no tengan una propia interfaz gráfica, pudiendo así utilizarlo en máquinas con un menor número de recursos.

### 3.2.1 Instalación de Git
1. Se deberá abrir la terminal 
2. Se asegurará de tener todas las dependencias y paquetes actualizados por medio de `sudo apt update` y `sudo apt upgrade`
3. Tras esto se ejecutará `apt-get install git` por el cuál se instalará git junto a sus dependencias
4. Por último como en el resto de instalaciones se ejecutará `git --version` para asegurar que se ha instalado todo correctamente
   
### 3.2.2 Clonar un Repositorio
Una vez instalado Git se debe de crear un directorio, se recomienda que se cree uno con el siguiente esquema `/Documents/github` sin embargo esto esto no es 
obligatorio.

1. Hay que dirigirse al directorio en el que se quiera clonar el repositorio
2. Se abre la terminal en ese directorio
3. Se deberá ejecutar `git clone https://https://github.com/Arzenin/Sistema-Mc-And-Cheese.git`
4. Se deberá ejecutar `ls` y debería de haber aparecido un nuevo directorio llamado `/Analizador-Lexico`


[Volver al índice](#0-índice)


# 4. Explicación e Instalaciones de las Herramientas
En esta sección se explicará todas las herramientas que se han usado a lo largo del desarrollo de este proyecto, donde se quiere destacar que hay algunas que pueden llegar a ser 
opcionales, como puede ser el caso de __[ZeroTier]()__ sin embargo se recomienda su lectura e instalación para una mejor comprensión del proyecto.

## 4.1. Docker

Docker es un software especializado en en la creación y uso de contenedores, los cuales funcionan de tal forma que se puedan ejecutar aplicaciones de forma 
compartimentada dentro del sistema o aplicación.


Gracias a esto, se permite exportar nuestro docker a otro sistema y poder ejecutarlo e instalar todo lo necesario para nuestra aplicación fuera de nuestro propio sistema. 
Es decir que con docker no es necesario realizar modificaciones en el nuevo sistema.


Mientras que una máquina virtual usa virtualización de hardware de nuestro sistema, docker virtualiza el sistema operativo que queramos, además de que este es más ligero y 
eficiente que una máquina virtual al no consumir tantos recursos.


Docker da la posibilidad de acceder a una gran variedad de dockers prefabricados por parte de empresas como por ejemplo MySQL, y por supuesto también permite generar 
nuestro propio docker.


En conclusión, nuestro razonamiento del uso de docker es el tener una clara diferenciación dentro del sistema entre base de datos y página web, además de facilitar el 
mantenimiento y uso de recursos por parte de las mismas dentro del sistema, lo que nos ayudará a arreglar el problema de que se produjese un exceso de peticiones en nuestra 
página, copiando el docker y redireccionando estas peticiones a los dockers paralelos al mismo.

### 4.1.1 Instalación de Docker

__*Ubuntu:*__

1. `sudo apt update`
2. `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
3. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
4. `echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee
/etc/apt/sources.list.d/docker.list > /dev/null`
6. `sudo apt update`
7. `sudo apt install docker-ce docker-ce-cli containerd.io`
8. `docker --version`

__*Windows:*__

1-Se dirigirá al siguiente enlace y descargará la versión correspondiente a nuestro sistema:
https://www.docker.com/products/docker-desktop/

2-Se ejecutará el instalador con los valores por defecto, ya que en esta ocasión se añadirá esta variable automáticamente a PATH

3-Se reiniciará el ordenador

4-Se abrirá la Powershell y se ejecutará `docker --version` para comprobar la correcta instalación


[Volver al índice](#0-índice)


# 4.2 ZeroTier

Como mencionamos previamente, el propósito consistía no solo en ejecutar de manera eficiente el sitio web y la base de datos, sino también en tener la capacidad de 
acceder a estos recursos desde cualquier ubicación geográfica. Para lograrlo, se opta por utilizar ZeroTier por las razones que se presentaron en el semanario 2 (dificultad 
de la vpn). Esta plataforma se especializa en la creación de redes definidas por software, lo que permite establecer conexiones virtuales desde cualquier parte del mundo, 
comportándose estas como redes locales convencionales. La ventaja de esta elección radica en la simplicidad de generar una red virtual, asignar direcciones IP a los 
dispositivos conectados y, gracias a ello, acceder a nuestros recursos desde cualquier ubicación global.


En conclusión nuestro motivo a la hora de la instalación de ZeroTier fue debido a la facilidad de uso que ofrece, así como a la capa adicional de cifrado que proporciona para 
garantizar la confidencialidad de la información transmitida a través de la red virtual. Otra ventaja destacada es que ZeroTier no utiliza sus servidores para la 
comunicación, sino que estos actúan únicamente como enrutadores para facilitar conexiones directas entre dispositivos, eliminando la necesidad de intermediarios, lo que 
amplía la accesibilidad desde cualquier rincón del planeta.

### 4.2.1 Instalación de ZeroTier

__*Ubuntu:*__
   1. `sudo apt update`
   2. `sudo apt install curl`
   3. `curl -s https://install.zerotier.com | sudo bash`

__*Windows:*__
   1. Se dirigirá a https://www.zerotier.com/download/ y descargará el correspondiente
   ejecutable.
   2. Se ejecutará el ejecutable y se dejará los valores por defecto.
   3. Se ejecutará la aplicación
   4. En el apartado de iconos de la bandeja del sistema(la flecha en la barra de tareas que
      podemos desplegar). Se encuentra ZeroTier
      
  __*Generar una red en ZeroTier*__
  1. Se dirigirá a https://www.zerotier.com/
  2. Se iniciará sesión y tras esto se pulsará en Create a Network
  3. Se debe añadir a los dispositivos a la red, para ello se copia el network ID
  4. Se añade la red:
     1. __Ubuntu:__ `sudo zerotier-cli join <ID_de_Red>`
     2. __Windows:__ Click sobre el icono de zeroTier de la barra de tareas y join new network,
     se copiará el network id en el campo correspondiente.


[Volver al índice](#0-índice)


# 4.3 WAF

Para realizar nuestra aplicación se ha elegido utilizar de nuevo JavaScript por medio de __*Node.js*__


__*Node.js*__ es un entorno de ejecución para JavaScript del lado del servidor. Este permite ejecutar código JavaScript fuera del navegador, lo que da la posibilidad de 
crear aplicaciones backend escalables y eficientes. Node.js utiliza un modelo de E/S sin bloqueo, por lo tanto lo hace adecuado para aplicaciones que requieren un alto 
rendimiento y una gestión eficiente de las operaciones de entrada/salida. Para el backend de nuestra aplicación se usará este mismo entorno, este backend será el encargado de
conectarse a la base de datos y manipularla.


De cara a la interfaz de usuario se han elegido __*React Native*__,ya  que es un marco de desarrollo de aplicaciones móviles que permite a los desarrolladores utilizar 
__*React*__(biblioteca de JavaScript destinada a construir interfaces de usuario) para crear aplicaciones nativas en iOS y Android. Esto se consigue al proporcionar una capa 
de abstracción sobre los componentes nativos, permitiendo así a los desarrolladores compartir código base entre plataformas.

En concreto se ha elegido __*React Native*__ porque además de ser una herramienta que permite realizar interfaces de forma sencilla e intuitiva, permitía crear 
aplicaciones web compatibles con dispositivos móviles.


Para implementar la interfaz de la aplicación usando React Native, hemos usado __*Expo*__. Expo es una plataforma y conjunto de herramientas para desarrollar aplicaciones 
móviles con React Native. Este simplifica el proceso de desarrollo al proporcionar un conjunto de características y servicios listos para usar, eliminando así la necesidad de 
configurar y mantener manualmente ciertos aspectos del proyecto.


[Volver al índice](#0-índice)


### 4.3.1 Instalación de WAF

__*Ubuntu:*__

1. `sudo apt update`
2. `sudo apt install nodejs npm`
3. `node -v`
4. `npm -v`
5. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
6. `source ~/.bashrc`
7. `source ~/.zshrc`
8. `npm install stable`
9. Verificaremos la instalación por medio de ejecutar `node -v y npm -v`

__*Windows:*__

1. Nos dirigimos a la web de https://nodejs.org/en y descargamos el instalador
2. Verificamos la instalación con los comandos `node –version` 
y `node –version`, en caso de que estos fallen se deberá a que no se han añadido correctamente a la variable paths
3. Instalamos __*Expo*__ por medio de `npm install -g expo-cli en la terminal`
4. Nos dirigimos al directorio de `/src/app` en caso de no tenerlo clonado lo descargamos.
5. `npm install` para asegurar que tenemos todas las dependencias, esto debería de instalar también __*MySQL2*__ el cual explicaremos en
__[la siguiente sección](#44-phpmyadmin-y-el-conector-mysql2)__


[Volver al índice](#0-índice)


# 4.4 PHPMyAdmin y MySQL2

En el aspecto de la administración de nuestro SGBD, se ha decantado por _PHPMyAdmin_, ya que por una parte es herramienta de código abierto y gratuita, y por 
otra es ampliamente utilizada en el campo de desarrollo web y la administración de bases de datos MySQL debido a su facilidad de uso y su capacidad para realizar
diversas tareas de administración de bases de datos de manera eficiente. Se suele instalar en servidores web para permitir a los desarrolladores y administradores
de bases de datos interactuar con sus bases de datos de una manera más visual. Algunas de las funciones de PHPMyAdmin son las siguientes:

1. Gestionar las bases de datos de forma visual.
2. Realizar la gestión de tablas.
3. Manipulación de datos de manera sencilla.
4. Gestión de usuarios y privilegios.
5. Ejecución de Consultas SQL.
6. Importación y Exportación de datos.
7. Visualización de la estructura dentro de la base de datos.


Respecto a la conexión con la base de datos hemos utilizado el driver __MySQL2__, que es una biblioteca de Node.js diseñada para facilitar la conexión e 
interacción con bases de datos MySQL mediante JavaScript. Este driver es una evolución del anterior MySQL y destaca por su rendimiento mejorado y algunas 
funcionalidades adicionales. MySQL2 nos permite una fácil conexión y manipulación de datos, así como manejar los errores que se puedan presentar a la hora de 
realizar la conexión o el manejo de los datos.


[Volver al índice](#0-índice)


## 4.4.1 Instalación de PHPMyAdmin

_Ubuntu_:

1. `sudo apt install apache2 php mysql-server php-mysql`
2. `sudo apt install phpmyadmin (para instalar phpmyadmin)`
3. Seguir la instrucciones de la terminal para la configuración
4. Acceder a phpmyadmin a través del navegador con http://localhost/phpmyadmin


_Windows_:

1. Descargar PHPMyAdmin y descomprimir el archivo `.ZIP` en el directorio raíz del servidor web local.   
2. Si se utiliza XAMPP, por ejemplo, abrir el archivo `httpd-xampp.conf`y agregar la siguiente línea al final del archivo:
`Alias /phpmyadmin "C:/ruta/del/directorio/phpmyadmin/"`
La ruta tiene que ser la misma donde se colocó PHPMyAdmin.
3. Reiniciar el servidor web para aplicar los cambios.
4. Abrir el navegador y acceder a `http://localhost/phpmyadmin`.
5. Poner el usuario y contraseña para iniciar sesión en PHPMyAdmin.


__En nuestro caso para facilitar su instalación, se ha hecho que se ejecute en un docker compose el cual se podrá encontrar en el directorio __[DATABASE](src/DATABASE)__, concretamente en el fichero 
En el directorio se encuentran los ficheros destinados a la gestión y estructura de la base de datos, dentro del mismo se quiere destacar el 
fichero __[docker-compose.yml](src/DATABASE/docker-compose.yml)__ 


[Volver al índice](#0-índice)


# 5 Explicación del Código

En esta sección se explicará el código en profundidad, centrandose individualmente en el código implementado tanto en MySQL como en java y para finalizar el 
código en JavaScript de la aplicación web.


## 5.1 Explicación del Código en SQL

Este apartado tiene la función de explicar la base de datos implementada en MySQL, ya que será necesario conocer la estructura de la misma y los triggers 
implementados para poder comprender el razonamiento de la implementación de determinados requisitos. Ya que es un código de gran longitud hemos decidido dividir 
su explicación en dos secciones. Una destinada a las __[tablas y su estructura general](#511-tablas)__ y otra destinada al uso e implementación de los diferentes 
__[triggers](#512-triggers)__, pese a que se mostrará el código en este archivo, se recomienda también su visualización en el archivo  
__[ddsi3.sql](src/DATABASE/ddsip3.sql)__


[Volver al índice](#0-índice)

 
### 5.1.1 Tablas

 En esta sección se explicará una a una las tablas que se han realizado y la funcionalidad de cada uno de sus atributos, dicho esto comenzamos:


 #### Borrado de la base de datos
 
 ```sql
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS TRABAJADOR;
DROP TABLE IF EXISTS PEDIDO;
DROP TABLE IF EXISTS RESERVAS;
DROP TABLE IF EXISTS CLIENTES;
DROP TABLE IF EXISTS ALERGENOS;
DROP TABLE IF EXISTS INGREDIENTES;
DROP TABLE IF EXISTS RECETAS;
DROP TABLE IF EXISTS RESERVAS_PEDIDO;
DROP TABLE IF EXISTS TRABAJADOR_PEDIDO;
DROP TABLE IF EXISTS CLIENTES_PEDIDO;
DROP TABLE IF EXISTS PEDIDO_RECETAS;
DROP TABLE IF EXISTS CLIENTES_ALERGENOS;
DROP TABLE IF EXISTS RECETAS_INGREDIENTES;
DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS;
DROP TRIGGER IF EXISTS RestarPuntos;
DROP TRIGGER IF EXISTS RellenarStock;
DROP TRIGGER IF EXISTS ContieneAlergeno;

SET foreign_key_checks = 1;
```
En esta sección se desactivará la comprobación de claves externas para facilitar el borrado de las tablas y triggers, tras esto en caso de que exista alguna de las tablas
o triggers que se desea eliminar se eliminarán, esta sección está realizada con el objetivo de adaptar cualquier base de datos que estemos utilizando a la nuestra.

 #### TRABAJADOR:
```sql
CREATE TABLE IF NOT EXISTS TRABAJADOR (
    IdTrabajador VARCHAR(20),
    Nombre VARCHAR(40)
    Libre tinyint(1) NOT NULL,
    Turno INT,
    Bono INT CHECK(Bono <= 500),
    PRIMARY KEY(IdTrabajador)
);
```


La tabla TRABAJADOR está destinada al almacenamiento de todos los datos correspondientes al trabajador, sus atributos serían los siguientes:


1. `ÌdTrabajador`: Es el atributo destinado a la identificación única y singular del trabajador.
2. `Nombre`: Un atributo que está destinado a almacenar el nombre del trabajador.
3. `Libre`: Este atributo está encargado de determinar si un trabajador se encuentra disponible para realizar un turno.
4. `Turno`: En turno se determinan las horas de trabajo que va a realizar ese trabajador a lo largo del día.
5. `Bono`: Atributo el cual determina el dinero extra que se le pagará a un trabajador en base a su participación y calidad en los pedidos.


#### PEDIDO:
```sql
CREATE TABLE IF NOT EXISTS PEDIDO (
    IdPedido INT,
    Valoracion INT CHECK(Valoracion <= 10),
    TPago VARCHAR(10) CHECK (TPago IN ('Tarjeta','Efectivo','Puntos')),
    Estado VARCHAR(10) CHECK (Estado IN ('Activo','Inactivo')),
    PRIMARY KEY(IdPedido)
);
```


La tabla `PEDIDO` es la encargada de almacenar los datos básicos de cada pedido, más adelante por medio de relaciones con otras tablas se podrá acceder a datos más complejos 
de cada pedido, y además de esto nos ayudará a ligar todas las tablas de la base de datos, __*es el centro del sistema*__ . Sus atributos serían los siguientes:


1. `IdPedido`: Identificador que sirve para reconocer al pedido de forma singular dentro de su propia tabla y relacionarlo con otras tablas externas.
2. `Valoracion`: Este atributo será modificado por el cliente y será el encargado de determinar el bono de los trabajadores que hayan participado en el pedido.
3. `TPago`: Determina la forma en la que será pagado este pedido, en caso de ser puntos se deberán de restar de la cartera de puntos del cliente asociado al pedido.
4. `Estado`: Este atributo indica si el pedido ha finalizado.


#### RESERVAS:
```sql
CREATE TABLE IF NOT EXISTS RESERVAS (
    NumMesa INT UNIQUE,
    IdReserva INT,
    PRIMARY KEY(IdReserva)
);
```

La tabla `RESERVAS` está destinada al almacenamiento de las mesas del local y el determinar si están disponibles o no en base a la reserva.


1. `NumMesa`: Este atributo se encarga de determinar el número en la mesa, es único ya que no pueden existir dos mesas iguales en el mismo local.
2. `IdReserva`: Este atributo es el que relaciona a las mesas con los pedidos y es por el que se podrá identificar la mesa que hay asociada a cada reserva.


#### CLIENTES
```sql
CREATE TABLE IF NOT EXISTS CLIENTES (
    IdCliente VARCHAR(40),
    Nombre VARCHAR(40),
    UserName VARCHAR(40),
    Contrasenia VARCHAR(40),
    Domicilio VARCHAR(40),
    Puntos INT,
    FechaNacimiento VARCHAR(40),
    DatosDePago VARCHAR(30),
    PRIMARY KEY(IdCliente)
);
```


La tabla `CLIENTES` es la encargada de almacenar todos los datos del cliente necesarios para este sistema:


1. `IdCliente`: Es el atributo destinado a la identificación del cliente, se decidió que fuese `VARCHAR` pensando en la posibilidad de que este fuese el correo.
2. `Nombre`: Atributo destinado a almacenar el nombre del cliente.
3. `UserName`: Es el atributo de almacenamiento del nombre de usuario.
4. `Contrasenia`: En este atributo se almacenará la contraseña de acceso a la cuenta del cliente.
5. `Domicilio`: La funcionalidad de este atributo es almacenar la dirección del cliente.
6. `Puntos`: Este atributo es el tipo de moneda dentro del local, por cada pedido que se realice se añadirán `Puntos` al usuario.
7. `FechaNacimiento`: Es la fecha de nacimiento del usuario, se ha decidido inplementarla como `VARCHAR(40)` y la implementación del formato realizarla en código.
8. `DatosDePago`: Aquí se almacenarán los datos de la tarjeta del cliente.


#### ALERGENOS
```sql
CREATE TABLE IF NOT EXISTS ALERGENOS (
    IdAlergeno INT,
    Nombre VARCHAR(40),
    Descripcion VARCHAR(40),
    PRIMARY KEY(IdAlergeno)
);
```

La tabla `ALERGENOS` tiene la función de almacenar todos los tipos de alérgenos que incluyan los ingredientes con los que se preparan las recetas,sus atributos serían los 
siguientes:


1. `IdAlergeno`: Es el identificador del alérgeno, se tomó la decisión de que fuese `INT` para que en caso de que haya dos alergenos con nombres similares no exista confusión.
2. `Nombre`: Atributo que almacena el nombre del alérgeno.
3. `Descripcion`: En esta variable se almacenará una breve descripción del alergeno, como por ejemplo los tipos de alimentos donde se encuentran.



#### INGREDIENTES
```sql
CREATE TABLE IF NOT EXISTS INGREDIENTES (
    IdIngrediente INT,
    Nombre VARCHAR(40),
    NumStock INT CHECK (NumStock >= 0),
    PRIMARY KEY(IdIngrediente)
);
```


La tabla `INGREDIENTES` tiene como función almacenar todos los ingredientes que tenemos disponibles en el local, estén o no incluidos en alguna receta, sus atributos serían 
los siguientes:


1. `IdIngrediente`: Este ID tiene la función de identificar rápidamente un ingrediente, ya que al igual que en `ALERGENOS` puede tener un nombre similar a otro
2. `Nombre`: Atributo encargado de almacenar el nombre del ingrediente
3. `NumStock`: Es un atributo de gran importancia ya que almacenará las unidades del ingrediente que disponemos en el local, __deberá de actualizarse automáticamente con cada pedido__


#### RECETAS
```sql
CREATE TABLE IF NOT EXISTS RECETAS (
    IdReceta INT,
    Nombre VARCHAR(40),
    Precio INT CHECK (Precio >= 1),
    PRIMARY KEY(IdReceta)
);
```


La tabla `RECETAS` almacenará todas las recetas disponibles del local, además de esto __es la capa más alta del subsistema menú__ ya que por medio de él y sus relaciones
se podrá llegar a las capas más inferiores de este mismo subsistema, sus atributos son los siguientes:


1. `IdReceta`: Es el identificador único de receta y por medio de él se tendrá acceso a todas las relaciones en las que se encuentre esa receta concreta.
2. `Nombre`: Atributo encargado de almacenar el nombre de la receta y por el cual el usuario sabrá que `IdReceta` corresponde a que receta.
3. `Precio`: Es el precio de la receta y será de gran importancia, ya que gracias a este se podrá calcular cuánto se le deberá de restar a la cartera de puntos del cliente si
esta receta se encuentra en un pedido cuyo método de pago sean puntos 

### Tablas de relaciones:
A continuación se explicarán las tablas encargadas de llevar a cabo las relaciones entre las diversas tablas individuales explicadas anteriormente:

#### RESERVAS_PEDIDO
```sql
CREATE TABLE IF NOT EXISTS RESERVAS_PEDIDO (
    IdReserva INT,
    IdPedido INT UNIQUE,
    NumPersonas INT,
    HoraIni VARCHAR(40),
    PRIMARY KEY(IdReserva,Horaini),
    FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido)
);
```


La tabla `RESERVAS_PEDIDO` será la encargada de __relacionar el pedido con una reserva concreta__, no es necesario que pedido pertenezca a la relación ya que pueden existir
pedidos que no tengan reserva, sin embargo como el __`IdPedido` es único para cada pedido, deberá de ser único dentro de la tabla__. Además de esto gracias a ella __se podrá
saber que cliente tiene cada reserva__


1. `IdReserva`: Es la reserva que está ligada a un pedido en una hora concreta
2. `IdPedido`: Es el pedido que está ligado a una reserva a una hora concreta
3. `NumPersonas`: Es el número de personas que atenderán a la reserva, en caso de modificarlo __no podrá ser mayor al número previamente establecido__
4. `HoraIni`:Es la hora a la que se realizará la reserva, junto a `IdReserva` __serán la clave principal__ ya que se ha tenido en cuenta que pueden haber `IdReserva`
repetidos, ya que, si pensamos a largo plazo, llegará un momento en el que se deban de almacenar __números de gran tamaño__ lo cual haría difícil identificar la reserva,
además de esto se sabrá que mesa es en la que ha estado el cliente ya que __cada `IdReserva` tiene una mesa única ligada__  


#### TRABAJADOR_PEDIDO
```sql
CREATE TABLE IF NOT EXISTS TRABAJADOR_PEDIDO (
    IdTrabajador VARCHAR(20),
    IdPedido INT,
    PRIMARY KEY(IdTrabajador,IdPedido),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador)
);
```

La tabla `TRABAJADOR_PEDIDO` está destinada a __ligar un trabajador a un pedido determinado__ para así cuando el pedido haya finalizado __poder calcular el bono__ y además de
esto poder estudiar las causas de la buena o mala reacción de un cliente determinado (El cual estará ligado al pedido).Sus atributos son:


1. `IdTrabajador`: Es el identificador del trabajador que ha formado parte en el pedido
2. `IdPedido`: Es el identificador del pedido del cual ha tomado parte el trabajador


#### CLIENTES_PEDIDO
```sql
CREATE TABLE IF NOT EXISTS CLIENTES_PEDIDO (
    IdCliente VARCHAR(40),
    IdPedido INT,
    PRIMARY KEY(IdPedido,IdCliente),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente)
);
```


La tabla `CLIENTES_PEDIDO` es una de las más importantes dentro del sistema, ya que por medio de ella se le dará acceso al cliente a los diferentes subsistemas de una forma 
controlada y gracias a ella __se podrá ligar un cliente a una reserva__ , __un cliente a un pedido__ , __detectar si un alergeno del cliente forma parte del pedido__ , 
__restar los puntos o sumarlos segun el metodo de pago__ etc... Sus atributos son los siguientes:

1. `IdCliente`: El identificador del cliente el cual ha realizado el pedido
2. `IdPedido`: El identificador del pedido que ha realizado un cliente determinado
   
#### PEDIDO_RECETAS
```sql
CREATE TABLE IF NOT EXISTS PEDIDO_RECETAS (
    IdReceta INT,
    IdPedido INT,
    numero INT CHECK (numero >= 1),
    PRIMARY KEY(IdPedido,IdReceta),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta)
);
```

La tabla `PEDIDO_RECETAS` será la encargada de unir __el subsistema menú con el subsistema de pedido__. Gracias a ella se podrá saber datos complejos como, por ejemplo, 
cuál ha sido la receta más pedida en el local, hasta algunos más sencillos como puede ser el listado de las recetas de un pedido concreto. Además de esto esta tabla tendrá 
gran importancia de cara a saber si un pedido concreto contiene alérgenos que tenga el cliente o no. Sus atributos son los siguientes.


1. `IdReceta`:Contiene el identificador de la receta que está ligada al pedido
2. `IdPedido`:Contiene el identificador del pedido por el cual se podrá saber a que pedido está ligada la receta
3. `numero`:Es la cantidad de la misma receta que se haya en el pedido, por ejemplo si tiene el valor 2 significará que se han pedido dos unidades de la receta identificada
por `ÌdReceta`


Para finalizar cabe destacar que pese a que se haya implementado teniendo en cuenta que se vaya a pedir más platos de un tipo, junto al correspondiente __aumento que 
supondría en la resta de puntos al cliente__ en caso de pagar por puntos. Se ha decidido con motivo de una mejor comprensión y explicación del sistema los platos __se pedirán 
de uno en uno__

#### CLIENTES_ALERGENOS
```sql
CREATE TABLE IF NOT EXISTS CLIENTES_ALERGENOS (
    IdCliente VARCHAR(40),
    IdAlergeno INT,
    PRIMARY KEY(IdCliente,IdAlergeno),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno)
);
```
La tabla `CLIENTES_ALERGENOS` es la encargada de dictaminar el listado de los alergenos de un cliente determinado, por medio de ella se podrá saber si hay un alergeno que
coincida con el cliente en el pedido, ya que de __aquí será de donde se obtendrá la información de que alérgenos no deben de estar en pedido__, sus atributos son los
siguientes:


1. `IdCliente`: Es el identificador del cliente del cual se obtendrá el listado de los alérgenos
2. `IdAlergeno`: Es el identificador de uno de los posibles alérgenos a los cuales puede reaccionar el cliente con id `IdCliente`


   
#### RECETAS_INGREDIENTES
```sql
CREATE TABLE IF NOT EXISTS RECETAS_INGREDIENTES (
    IdReceta INT,
    IdIngrediente INT,
    numero INT CHECK (numero >= 1),
    PRIMARY KEY(IdReceta,IdIngrediente),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);
```


La tabla `RECETAS_INGREDIENTES` es la tabla situada entre medias de `RECETAS` e `INGREDIENTES` y será por la cual se podrá obtener que ingredientes forman parte de que plato, 
el número de ingredientes de cada plato, y además de esto ayudará a disminuir el `NumStock` de ingredientes cada vez que se seleccione una receta en un pedido. Sus 
atributos son los siguientes:

1. `IdReceta`: Es el identificador de la receta la cual pertenecen los ingredientes
2. `IdIngrediente`: Es el identidicador de un ingrediente concreto perteneciente a la receta con `IdReceta`
3. `numero`: Es el número de ingredientes con `IdIngrediente` que se necesitan para preparar cada plato, por medio de este atributo, como he mencionado anteriormente,
se podrá calcular la resta correcta que se le debe de hacer a `numStock` cada vez que una receta se añada a `PEDIDO_RECETAS` 



#### INGREDIENTES_ALERGENOS
```sql
CREATE TABLE IF NOT EXISTS INGREDIENTES_ALERGENOS (
    IdIngrediente INT,
    IdAlergeno INT,
    PRIMARY KEY(IdAlergeno,IdIngrediente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);
```

La última tabla que queda por explicar sería `INGREDIENTES_ALERGENOS`. Esta tabla es la encargada de definir qué alérgenos contiene cada ingrediente, es decir que
también determinaría qué alérgenos contiene cada receta. Sus atributos son los siguientes:


1. `IdIngrediente`: Es el identidicador del ingrediente del cual quieren saberse los alergenos
2. `IdAlergeno`: Es el identificador de un alergeno determinado del ingrediente identificado por `IdIngrediente`

## RELACIONES ENTRE TABLAS:
Para finalizar queríamos añadir una imágen en la cual se pueden observar las diferentes relaciones entre tablas, el motivo por el que los nombres no son idénticos en este
caso es porque esta imagen se trata de un esquema inicial que se realizo previamente a la implementación de la base de datos:



![image](https://github.com/Arzenin/Sistema-Mc-And-Cheese/assets/79646195/5b6c6e39-c669-44b8-b03a-b30b5f6400c6)


[Volver al índice](#0-índice)


### 5.1.2 Triggers
En esta sección se comentarán los triggers del sistema, como se ha mencionado previamente se han configurado algunos de ellos para realizar funciones más allá de
la comprobación de actualizaciones correctas dentro de la base de datos. Se ha decidido que la base de datos por sí misma se encague del cálculo y realización de 
determinados requisitos funcionales, para que así nuestro sistema únicamente deba de devolver el resultado.

Antes de comenzar con la explicación se debe de aclarar una cosa, en determinadas secciones hay dos triggers en un único fragmento de código, si nos fijamos bien, 
la única diferencia del código será que cambiará en el momento en el que se ejecuta el trigger y al final del nombre aquellos que se disparen en la creación
tendrán un `Init` al final del nombre.


#### ActualizarStock
```sql
CREATE TRIGGER ActualizarStock AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE veces INT;
    SELECT numero INTO veces FROM PEDIDO_RECETAS WHERE IdReceta = NEW.IdReceta AND IdPedido = NEW.IdPedido;
    
    UPDATE INGREDIENTES
    JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
    SET INGREDIENTES.NumStock = CASE
        WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 0 THEN -1
        WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 10 THEN 200 + INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero
        ELSE (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero)
    END
    WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta;
END;
```


Este trigger es el encargado de comprobar que cuando realize un pedido, en caso de que el pedido sea tan grande que requiera más ingredientes de los que 
disponemos, ponga `numStock= -1`, esto se debe a que como más adelante veremos, se dispone de un trigger que hará que se devuelva un error.


Además de esto el requisito funcional de que se aumente el stock cada vez que queden pocas existencias se hará de forma automática con este trigger, ya que en
caso de que un pedido haga que el número de existencias baje a menos de 10, automáticamente se aumentará en 200 unidades el stock.


Por último, este trigger también se encargará de restar el stock correpondiente tras añadir una receta a un pedido, como se puede comprobar también se tendrá en
cuenta el número de esa misma receta que se hayan pedido y cuantos ingredientes requiere esa receta.


#### RestarPuntos
```sql
CREATE TRIGGER RestarPuntos AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE resta INT;
    DECLARE multiplicador INT;
    DECLARE Tipo VARCHAR(40);
    
    SELECT Precio INTO resta FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta;
    SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta;
    
    SET resta = resta * multiplicador;
    
    SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido;
    
    IF Tipo = 'Puntos' THEN
        UPDATE CLIENTES
        JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente
        SET CLIENTES.Puntos = CASE
            WHEN (CLIENTES.Puntos - resta) < 0 THEN -1
            ELSE (CLIENTES.Puntos - resta)
        END
        WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
```


Este trigger automatizará la gestión de los puntos de los clientes, es decir que cada vez que un cliente seleccione como método de pago del pedido `Puntos` se 
irá restando a los puntos el precio de la receta, y al igual que en stock en caso de que el precio sea mayor al número de puntos, se actualizará el valor de 
`Puntos = -1` haciendo así que otro trigger implementado más adelante salte dando un error.


Por último se debe destacar que para calcular la resta de precios también se ha tenido en cuenta el número de una misma receta que se ha pedido en un mismo
pedido.


#### ContieneAlergeno
```sql
CREATE TRIGGER ContieneAlergeno BEFORE INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE Peligro BOOLEAN;
    SELECT 1 INTO Peligro FROM ALERGENOS
    JOIN INGREDIENTES_ALERGENOS ON ALERGENOS.IdAlergeno = INGREDIENTES_ALERGENOS.IdAlergeno
    JOIN INGREDIENTES ON INGREDIENTES_ALERGENOS.IdIngrediente = INGREDIENTES.IdIngrediente
    JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
    WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta
    AND EXISTS (
        SELECT 1
        FROM CLIENTES_ALERGENOS
        WHERE CLIENTES_ALERGENOS.IdCliente = (SELECT IdCliente FROM PEDIDO WHERE IdPedido = NEW.IdPedido)
        AND CLIENTES_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno
    );
    
    IF Peligro THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EL CLIENTE TIENE ALERGIAS EN LA RECETA DEL PEDIDO';
    END IF;
END;
```


Este es uno de los trigger más importantes, ya que será el encargado de evitar que un cliente pida una receta la cual contenga un alérgeno que esté en su listado 
de alérgenos, para ello usará las relaciones entre tablas desde `CLIENTES_ALERGENOS` hasta `INGREDIENTE_ALERGENOS`, haciendo así posible la automatización del
requisito funcional de detección de alergenos


#### SumarPuntos
```sql
CREATE TRIGGER SumarPuntos AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE suma INT;
    DECLARE multiplicador INT;
    DECLARE Tipo VARCHAR(40);
    
    SELECT Precio INTO suma FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta;
    SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta;
    
    SET suma = suma * multiplicador;
    
    SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido;
    
    IF Tipo != 'Puntos' THEN
        UPDATE CLIENTES
        JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente
        SET CLIENTES.Puntos = CLIENTES.Puntos + suma
        WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
```


Este trigger será el encargado de que cada vez que cada vez que un cliente pague con otro metodo que no sean puntos se le añada el precio que ha pagado en el
pedido a sus puntos. Al igual que en varios triggers anteriores se tendrán en cuenta el número de recetas que se hayan pedido en el pedido.


#### ReservasInferior
```sql
CREATE TRIGGER ReservasInferior BEFORE UPDATE ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas >= OLD.NumPersonas THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO SE PUEDEN AUMENTAR LAS RESERVAS A UN NUMERO MAYOR DE PERSONAS';
    END IF;
END;
```


La funcionalidad de este trigger es la de evitar que cada vez que se edite la reserva, si el número nuevo de comensales es superior al anterior no lo permita. El objetivo de esto sería que en un entorno real, en las horas puntas, pudiese llegar a superar el aforo máximo permitido en el restaurante.


#### CalcularBono
```sql
CREATE TRIGGER CalcularBono AFTER UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado = 'Inactivo' THEN
        UPDATE TRABAJADOR
        JOIN TRABAJADOR_PEDIDO ON TRABAJADOR_PEDIDO.IdTrabajador = TRABAJADOR.IdTrabajador
        JOIN PEDIDO ON TRABAJADOR_PEDIDO.IdPedido = PEDIDO.IdPedido
        SET TRABAJADOR.Bono = TRABAJADOR.Bono + PEDIDO.Valoracion
        WHERE PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
```


La función que realizará este trigger será la de actualizar el bono del trabajador por medio de la valoración del pedido. Esta actualización se llevará a cabo 
cada vez que un pedido pase de estado activo a inactivo


#### ComprobarPuntosNoNegativo
```sql
CREATE TRIGGER ComprobarPuntosNoNegativoInit BEFORE INSERT ON CLIENTES
FOR EACH ROW
BEGIN
    IF NEW.Puntos < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER PUNTOS NEGATIVOS';
    END IF;
END;

CREATE TRIGGER ComprobarPuntosNoNegativo BEFORE UPDATE ON CLIENTES
FOR EACH ROW
BEGIN
    IF NEW.Puntos < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO HAY SUFICIENTES PUNTOS PARA PAGAR EL PEDIDO';
    END IF;
END;
```


Este trigger es el encargado de comprobar que en ningún momento los puntos de un cliente puedan llegar a ser negativos, en caso de ser así, dará un error.


#### ComprobarStockNoNegativo
```sql
CREATE TRIGGER ComprobarStockNoNegativoInit BEFORE INSERT ON INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.NumStock < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER STOCK NEGATIVO';
    END IF;
END;

CREATE TRIGGER ComprobarStockNoNegativo BEFORE UPDATE ON INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.NumStock < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO DEBE DE HABER STOCK NEGATIVO';
    END IF;
END;
```

Este trigger es el encargado de comprobar que en ningún momento el stock de un ingrediente pueda llegar a ser negativo, en caso de ser así, dará un error.


#### BonoMenor500
```sql
CREATE TRIGGER BonoMenor500 BEFORE UPDATE ON TRABAJADOR
FOR EACH ROW
BEGIN
    SET NEW.Bono = CASE
        WHEN NEW.Bono > 500 THEN 500
        WHEN NEW.Bono < 0 THEN 0
        ELSE NEW.Bono
    END;
END;

CREATE TRIGGER BonoMenor500Init BEFORE INSERT ON TRABAJADOR
FOR EACH ROW
BEGIN
    SET NEW.Bono = CASE
        WHEN NEW.Bono > 500 THEN 500
        WHEN NEW.Bono < 0 THEN 0
        ELSE NEW.Bono
    END;
END;
```

Este trigger será el encargado de evitar que un trabajador pueda tener un bono total mayor a 500 euros e inferior a 0, ya que en caso de ser así actualizará el
bono a un valor dado por defecto, en caso de ser mayor a 500 el valor será 500 y en caso de ser 0 el valor será 0


#### ValoracionMenor10
```sql

CREATE TRIGGER ValoracionMenor10Init BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    SET NEW.Valoracion = CASE
        WHEN NEW.Valoracion > 10 THEN 10
        WHEN NEW.Valoracion < 0 THEN 0
        ELSE NEW.Valoracion
    END;
END;

CREATE TRIGGER ValoracionMenor10 BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    SET NEW.Valoracion = CASE
        WHEN NEW.Valoracion > 10 THEN 10
        WHEN NEW.Valoracion < 0 THEN 0
        ELSE NEW.Valoracion
    END;
END;
```

Este trigger será el encargado de evitar que una valoración sea superior a 10 e inferior a 0, ya que en caso de ser así actualizará la valoración a un valor dado
por defecto, en caso de ser mayor a 10 el valor será 10 y en caso de ser 0 el valor será 0


#### PrecioPositivoInit
```sql
CREATE TRIGGER PrecioPositivoInit BEFORE INSERT ON RECETAS
FOR EACH ROW
BEGIN
    IF NEW.Precio < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO';
    END IF;
END;

CREATE TRIGGER PrecioPositivo BEFORE UPDATE ON RECETAS
FOR EACH ROW
BEGIN
    IF NEW.Precio < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO';
    END IF;
END;
```

La funcionalidad de este trigger es la de comprobar que ninguna receta pueda generarse con un valor inferior o igual a 0, ya que en caso de o bien modificarse o 
bien generarse siendo 0 o menor que el mismo nos devolverá un error


#### EstadoEnRango
```sql
CREATE TRIGGER EstadoEnRangoInit BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado != 'Activo' AND  NEW.Estado != 'Inactivo' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO';
    END IF;
END;

CREATE TRIGGER EstadoEnRango BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado != 'Activo' AND  NEW.Estado != 'Inactivo' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO';
    END IF;
END;
```

La misión de este trigger es la de asegurarse que sean cuales sean las condiciones de la modificación del parámetro estado, solo pueda estar en el rango `Activo`
o bien `Inactivo`


#### TipoDePagoEnRango
```sql
CREATE TRIGGER TipoDePagoEnRangoInit BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO';
    END IF;
END;

CREATE TRIGGER TipoDePagoEnRango BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO';
    END IF;
END;
```

La misión de este trigger es la de asegurarse que sean cuales sean las condiciones de la modificación del parámetro tipo de pago, solo pueda estar en el rango
`Tarjeta` , `Efectivo` y `Puntos` 

#### NumRecetasPositivo
```sql
CREATE TRIGGER NumRecetasPositivoInit BEFORE INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO';
    END IF;
END;

CREATE TRIGGER NumRecetasPositivo BEFORE UPDATE ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO';
    END IF;
END;
```

Este trigger nos asegurará que en un pedido no se pueda pedir en una receta un número negativo o 0 de veces sea cual sea el contexto.


#### NumIngredientes
```sql
CREATE TRIGGER NumIngredientesPositivoInit BEFORE INSERT ON RECETAS_INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA';
    END IF;
END;

CREATE TRIGGER NumIngredientesPositivo BEFORE UPDATE ON RECETAS_INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA';
    END IF;
END;
```

Al igual que el anterior caso, este trigger controla que un valor no pueda ser inferior a uno, en este caso el número de ingredientes dentro de una receta. 

#### NumPersonasPositivo
```sql
CREATE TRIGGER NumPersonasPositivoInit BEFORE INSERT ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA';
    END IF;
END;

CREATE TRIGGER NumNumPersonasPositivo BEFORE UPDATE ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA';
    END IF;
END;
```

Para finalizar, el último trigger será el encargado de que una reserva no pueda tener un número menor a uno en el número de clientes sea cual sea el contexto, ya
que si no, no podría llegar a existir la reserva.


[Volver al índice](#0-índice)


### 5.1.3 Archivo de BD completo

En esta sección en caso de no disponer de conexión se podrá observar el archivo de configuración completa de la base de datos, este archivo se puede encontrar en el directorio __[DATABASE](src/DATABASE)__ y dentro de este el fichero concreto sería el llamado __[ddsip3.sql](src/DATABASE/ddsip3.sql)__

```sql
-- Borrar tablas
DROP TABLE IF EXISTS TRABAJADOR;
DROP TABLE IF EXISTS PEDIDO;
DROP TABLE IF EXISTS RESERVAS;
DROP TABLE IF EXISTS CLIENTES;
DROP TABLE IF EXISTS ALERGENOS;
DROP TABLE IF EXISTS INGREDIENTES;
DROP TABLE IF EXISTS RECETAS;
DROP TABLE IF EXISTS RESERVAS_PEDIDO;
DROP TABLE IF EXISTS TRABAJADOR_PEDIDO;
DROP TABLE IF EXISTS CLIENTES_PEDIDO;
DROP TABLE IF EXISTS PEDIDO_RECETAS;
DROP TABLE IF EXISTS CLIENTES_ALERGENOS;
DROP TABLE IF EXISTS RECETAS_INGREDIENTES;
DROP TABLE IF EXISTS INGREDIENTES_ALERGENOS;
DROP TRIGGER IF EXISTS RestarPuntos;
DROP TRIGGER IF EXISTS RellenarStock;
DROP TRIGGER IF EXISTS ContieneAlergeno;

-- Activar verificación de claves foráneas
SET foreign_key_checks = 1;

-- Crear tablas


CREATE TABLE IF NOT EXISTS TRABAJADOR (
    IdTrabajador VARCHAR(20),
    Libre tinyint(1) NOT NULL,
    Turno INT,
    Bono INT CHECK(Bono <= 500),
    PRIMARY KEY(IdTrabajador)
);

CREATE TABLE IF NOT EXISTS PEDIDO (
    IdPedido INT,
    Valoracion INT CHECK(Valoracion <= 10),
    TPago VARCHAR(10) CHECK (TPago IN ('Tarjeta','Efectivo','Puntos')),
    Estado VARCHAR(10) CHECK (Estado IN ('Activo','Inactivo')),
    PRIMARY KEY(IdPedido)
);

CREATE TABLE IF NOT EXISTS RESERVAS (
    NumMesa INT UNIQUE,
    IdReserva INT,
    PRIMARY KEY(IdReserva)
);

CREATE TABLE IF NOT EXISTS CLIENTES (
    IdCliente VARCHAR(40),
    Nombre VARCHAR(40),
    UserName VARCHAR(40),
    Contrasenia VARCHAR(40),
    Domicilio VARCHAR(40),
    Puntos INT,
    FechaNacimiento VARCHAR(40),
    DatosDePago VARCHAR(30),
    PRIMARY KEY(IdCliente)
);

CREATE TABLE IF NOT EXISTS ALERGENOS (
    IdAlergeno INT,
    Nombre VARCHAR(40),
    Descripcion VARCHAR(40),
    PRIMARY KEY(IdAlergeno)
);

CREATE TABLE IF NOT EXISTS INGREDIENTES (
    IdIngrediente INT,
    Nombre VARCHAR(40),
    NumStock INT CHECK (NumStock >= 0),
    PRIMARY KEY(IdIngrediente)
);

CREATE TABLE IF NOT EXISTS RECETAS (
    IdReceta INT,
    Nombre VARCHAR(40),
    Precio INT CHECK (Precio >= 1),
    PRIMARY KEY(IdReceta)
);

CREATE TABLE IF NOT EXISTS RESERVAS_PEDIDO (
    IdReserva INT,
    IdPedido INT UNIQUE,
    NumPersonas INT,
    HoraIni VARCHAR(40),
    PRIMARY KEY(IdReserva,Horaini),
    FOREIGN KEY(IdReserva) REFERENCES RESERVAS(IdReserva),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido)
);

CREATE TABLE IF NOT EXISTS TRABAJADOR_PEDIDO (
    IdTrabajador VARCHAR(20),
    IdPedido INT,
    PRIMARY KEY(IdTrabajador,IdPedido),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdTrabajador) REFERENCES TRABAJADOR(IdTrabajador)
);

CREATE TABLE IF NOT EXISTS CLIENTES_PEDIDO (
    IdCliente VARCHAR(40),
    IdPedido INT,
    PRIMARY KEY(IdPedido,IdCliente),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente)
);

CREATE TABLE IF NOT EXISTS PEDIDO_RECETAS (
    IdReceta INT,
    IdPedido INT,
    numero INT CHECK (numero >= 1),
    PRIMARY KEY(IdPedido,IdReceta),
    FOREIGN KEY(IdPedido) REFERENCES PEDIDO(IdPedido),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta)
);

CREATE TABLE IF NOT EXISTS CLIENTES_ALERGENOS (
    IdCliente VARCHAR(40),
    IdAlergeno INT,
    PRIMARY KEY(IdCliente,IdAlergeno),
    FOREIGN KEY(IdCliente) REFERENCES CLIENTES(IdCliente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno)
);

CREATE TABLE IF NOT EXISTS RECETAS_INGREDIENTES (
    IdReceta INT,
    IdIngrediente INT,
    numero INT CHECK (numero >= 1),
    PRIMARY KEY(IdReceta,IdIngrediente),
    FOREIGN KEY(IdReceta) REFERENCES RECETAS(IdReceta),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);

CREATE TABLE IF NOT EXISTS INGREDIENTES_ALERGENOS (
    IdIngrediente INT,
    IdAlergeno INT,
    PRIMARY KEY(IdAlergeno,IdIngrediente),
    FOREIGN KEY(IdAlergeno) REFERENCES ALERGENOS(IdAlergeno),
    FOREIGN KEY(IdIngrediente) REFERENCES INGREDIENTES(IdIngrediente)
);

-- Crear triggers




DELIMITER //

CREATE TRIGGER ActualizarStock AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE veces INT;
    SELECT numero INTO veces FROM PEDIDO_RECETAS WHERE IdReceta = NEW.IdReceta AND IdPedido = NEW.IdPedido;
    
    UPDATE INGREDIENTES
    JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
    SET INGREDIENTES.NumStock = CASE
        WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 0 THEN -1
        WHEN (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero) < 10 THEN 200 + INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero
        ELSE (INGREDIENTES.NumStock - veces * RECETAS_INGREDIENTES.numero)
    END
    WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta;
END;
//

CREATE TRIGGER ComprobarStockNoNegativo BEFORE UPDATE ON INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.NumStock < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO DEBE DE HABER STOCK NEGATIVO';
    END IF;
END;
//


CREATE TRIGGER ComprobarStockNoNegativoInit BEFORE INSERT ON INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.NumStock < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER STOCK NEGATIVO';
    END IF;
END;
//

CREATE TRIGGER RestarPuntos AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE resta INT;
    DECLARE multiplicador INT;
    DECLARE Tipo VARCHAR(40);
    
    SELECT Precio INTO resta FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta;
    SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta;
    
    SET resta = resta * multiplicador;
    
    SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido;
    
    IF Tipo = 'Puntos' THEN
        UPDATE CLIENTES
        JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente
        SET CLIENTES.Puntos = CASE
            WHEN (CLIENTES.Puntos - resta) < 0 THEN -1
            ELSE (CLIENTES.Puntos - resta)
        END
        WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
//

CREATE TRIGGER ComprobarPuntosNoNegativo BEFORE UPDATE ON CLIENTES
FOR EACH ROW
BEGIN
    IF NEW.Puntos < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO HAY SUFICIENTES PUNTOS PARA PAGAR EL PEDIDO';
    END IF;
END;
//

CREATE TRIGGER ComprobarPuntosNoNegativoInit BEFORE INSERT ON CLIENTES
FOR EACH ROW
BEGIN
    IF NEW.Puntos < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER PUNTOS NEGATIVOS';
    END IF;
END;
//

CREATE TRIGGER ContieneAlergeno BEFORE INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE Peligro BOOLEAN;
    SELECT 1 INTO Peligro FROM ALERGENOS
    JOIN INGREDIENTES_ALERGENOS ON ALERGENOS.IdAlergeno = INGREDIENTES_ALERGENOS.IdAlergeno
    JOIN INGREDIENTES ON INGREDIENTES_ALERGENOS.IdIngrediente = INGREDIENTES.IdIngrediente
    JOIN RECETAS_INGREDIENTES ON INGREDIENTES.IdIngrediente = RECETAS_INGREDIENTES.IdIngrediente
    WHERE RECETAS_INGREDIENTES.IdReceta = NEW.IdReceta
    AND EXISTS (
        SELECT 1
        FROM CLIENTES_ALERGENOS
        WHERE CLIENTES_ALERGENOS.IdCliente = (SELECT IdCliente FROM PEDIDO WHERE IdPedido = NEW.IdPedido)
        AND CLIENTES_ALERGENOS.IdAlergeno = ALERGENOS.IdAlergeno
    );
    
    IF Peligro THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EL CLIENTE TIENE ALERGIAS EN LA RECETA DEL PEDIDO';
    END IF;
END;
//

CREATE TRIGGER SumarPuntos AFTER INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    DECLARE suma INT;
    DECLARE multiplicador INT;
    DECLARE Tipo VARCHAR(40);
    
    SELECT Precio INTO suma FROM RECETAS WHERE RECETAS.IdReceta = NEW.IdReceta;
    SELECT numero INTO multiplicador FROM PEDIDO_RECETAS WHERE PEDIDO_RECETAS.IdPedido = NEW.IdPedido AND PEDIDO_RECETAS.IdReceta = NEW.IdReceta;
    
    SET suma = suma * multiplicador;
    
    SELECT TPago INTO Tipo FROM PEDIDO WHERE PEDIDO.IdPedido = NEW.IdPedido;
    
    IF Tipo != 'Puntos' THEN
        UPDATE CLIENTES
        JOIN CLIENTES_PEDIDO ON CLIENTES_PEDIDO.IdPedido = NEW.IdPedido AND CLIENTES.IdCliente = CLIENTES_PEDIDO.IdCliente
        SET CLIENTES.Puntos = CLIENTES.Puntos + suma
        WHERE CLIENTES_PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
//

CREATE TRIGGER ReservasInferior BEFORE UPDATE ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas >= OLD.NumPersonas THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO SE PUEDEN AUMENTAR LAS RESERVAS A UN NUMERO MAYOR DE PERSONAS';
    END IF;
END;
//

CREATE TRIGGER CalcularBono AFTER UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado = 'Inactivo' THEN
        UPDATE TRABAJADOR
        JOIN TRABAJADOR_PEDIDO ON TRABAJADOR_PEDIDO.IdTrabajador = TRABAJADOR.IdTrabajador
        JOIN PEDIDO ON TRABAJADOR_PEDIDO.IdPedido = PEDIDO.IdPedido
        SET TRABAJADOR.Bono = TRABAJADOR.Bono + PEDIDO.Valoracion
        WHERE PEDIDO.IdPedido = NEW.IdPedido;
    END IF;
END;
//

CREATE TRIGGER BonoMenor500 BEFORE UPDATE ON TRABAJADOR
FOR EACH ROW
BEGIN
    SET NEW.Bono = CASE
        WHEN NEW.Bono > 500 THEN 500
        WHEN NEW.Bono < 0 THEN 0
        ELSE NEW.Bono
    END;
END;
//

CREATE TRIGGER BonoMenor500Init BEFORE INSERT ON TRABAJADOR
FOR EACH ROW
BEGIN
    SET NEW.Bono = CASE
        WHEN NEW.Bono > 500 THEN 500
        WHEN NEW.Bono < 0 THEN 0
        ELSE NEW.Bono
    END;
END;
//

CREATE TRIGGER ValoracionMenor10 BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    SET NEW.Valoracion = CASE
        WHEN NEW.Valoracion > 10 THEN 10
        WHEN NEW.Valoracion < 0 THEN 0
        ELSE NEW.Valoracion
    END;
END;
//

CREATE TRIGGER ValoracionMenor10Init BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    SET NEW.Valoracion = CASE
        WHEN NEW.Valoracion > 10 THEN 10
        WHEN NEW.Valoracion < 0 THEN 0
        ELSE NEW.Valoracion
    END;
END;
//

CREATE TRIGGER PrecioPositivoInit BEFORE INSERT ON RECETAS
FOR EACH ROW
BEGIN
    IF NEW.Precio < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO';
    END IF;
END;
//

CREATE TRIGGER PrecioPositivo BEFORE UPDATE ON RECETAS
FOR EACH ROW
BEGIN
    IF NEW.Precio < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN PRECIO NEGATIVO';
    END IF;
END;
//

CREATE TRIGGER EstadoEnRangoInit BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado != 'Activo' AND  NEW.Estado != 'Inactivo' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO';
    END IF;
END;
//

CREATE TRIGGER EstadoEnRango BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.Estado != 'Activo' AND  NEW.Estado != 'Inactivo' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'FUERA DEL RANGO VALIDO';
    END IF;
END;
//

CREATE TRIGGER TipoDePagoEnRangoInit BEFORE INSERT ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO';
    END IF;
END;
//

CREATE TRIGGER TipoDePagoEnRango BEFORE UPDATE ON PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.TPago != ('Tarjeta' AND 'Efectivo' AND 'Puntos') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'TIPO DE PAGO INVALIDO';
    END IF;
END;
//

CREATE TRIGGER NumRecetasPositivoInit BEFORE INSERT ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO';
    END IF;
END;
//


CREATE TRIGGER NumRecetasPositivo BEFORE UPDATE ON PEDIDO_RECETAS
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE PLATOS NEGATIVOS O 0 EN EL PEDIDO';
    END IF;
END;
//


CREATE TRIGGER NumIngredientesPositivoInit BEFORE INSERT ON RECETAS_INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA';
    END IF;
END;
//

CREATE TRIGGER NumIngredientesPositivo BEFORE UPDATE ON RECETAS_INGREDIENTES
FOR EACH ROW
BEGIN
    IF NEW.numero < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE INGREDIENTES NEGATIVO O 0 EN LA RECETA';
    END IF;
END;
//

CREATE TRIGGER NumNumPersonasPositivoInit BEFORE INSERT ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA';
    END IF;
END;
//

CREATE TRIGGER NumNumPersonasPositivo BEFORE UPDATE ON RESERVAS_PEDIDO
FOR EACH ROW
BEGIN
    IF NEW.NumPersonas < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'NO PUEDE HABER UN NUMERO DE DE PERSONAS NEGATIVO O 0 EN LA MESA';
    END IF;
END;
//

DELIMITER ;


INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('gonzalo@miemail.com', 'Gonzalo Sanz Guerrero', 'gonzasanz_', '1234abc', 'Calle A', 0, '2012-12-12 00:00:00', '123A');
INSERT INTO CLIENTES (`IdCliente`, `Nombre`, `UserName`, `Contrasenia`, `Domicilio`, `Puntos`, `FechaNacimiento`, `DatosDePago`) VALUES ('jose','José Manuel Aranda Gutierrez', 'josemanuelaranda_', '12346ma', 'Calle B', 0, '2012-12-12 00:00:00', '123B');
```


[Volver al índice](#0-índice)


## 5.2 Explicación del Test

Como mencionamos anteriormente, hemos realizado un programa en java el cual se encargará de comprobar los diversos triggers, para comprobar que se han realizado de forma 
correcta, se debe destacar que la razón por la que determinados parámetros no están añadidos es dado a que la única funcionalidad de este código es el de realizar pruebas. 
Además de esto los nombres no tienen por que coincidir, ya que estos triggers pertenecen a una versión previa a la final.


- Resetear_BD() :
  Este método se encarga de resetear la base de datos e introduce una serie de valores por defecto. Lo primero que se hace es el borrado de todas
  las tablas de la base de datos, a continuación se encarga de crear las tablas y diversos triggers. Y por último se introduce unos valores para realizar pruebas y
  se maneja excepciones para los errores.


```java
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
```

- TestActualizarStockANDComprobarStockNoNegativo() :
  Se encarga de comprobar el funcionamiento de los trigger ActualizarStock y ComprobarStockNoNegativo. Al principio se insertan datos de prueba en las
  tablas CLIENTES, INGREDIENTES, RECETAS, RECETAS_INGREDIENTES, PEDIDO, CLIENTES_PEDIDO y PEDIDO_RECETAS para simular una situación realista. Luego, intenta realizar
  algunas operaciones incorrectas, como la inserción de números negativos o cero en los triggers asociados a las recetas y pedidos, así como actualizaciones con
  valores incorrectos en los precios de las recetas y métodos de pago, estas operaciones fallidas están comentadas. Finalmente, se consulta la base de datos
  para recuperar el valor actual de NumStock de dos ingredientes y se imprime en la consola. Cualquier excepción durante la ejecución se captura y se imprime un mensaje de error.


```java
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
```


- TestRestarPuntosySumar():
  Realiza una prueba de los triggers RestarPuntos y SumarPuntos. Simula una situación donde se inserta un pedido y se añade un receta. Luego, consulta la base de datos
  para obtener y mostrar los puntos acumulados por el cliente. Se espera que los puntos se actualicen correctamente. Cualquier excepción durante la ejecución se captura y
  se imprime un mensaje de error.


```java
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
````


- TestRellenarStock():
  El método evalúa el funcionamiento del trigger ActualizarStock al representar la inserción de un pedido, la cual utiliza un ingrediente con un stock inicial.
  La receta requiere ciertas unidades del ingrediente. Después de la operación, se espera que el stock del ingrediente se actualice mediante el trigger, incrementándose en
  200 unidades debido a que el stock resultante es inferior a 10. Cualquier excepción durante la ejecución se captura y se imprime un mensaje de error.


```java
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
```


- TestDetectarAlergenos():
  El método verifica el funcionamiento del trigger ContieneAlergeno. En el escenario de prueba, se inserta un alérgeno y se asocia a un ingrediente, luego se crea una receta
  que utiliza dicho ingrediente. Al intentar añadir esta receta a un pedido asociado a un cliente con el alérgeno registrado, se espera que el trigger genere un error.
  La salida esperada se basa en la detección del alérgeno y la interrupción del proceso posterior al error.

  
```java
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
```


- TestReservasInferior():
  Evalúa el comportamiento del sistema al gestionar reservas asociadas a pedidos. El código incluye casos donde se intenta asignar un número de personas negativo o igual a 0,
  lo cual debería generar un error. Además, se verifica que un pedido no pueda tener más de una reserva asociada. También, se comprueba un posible error al intentar
  actualizar el número de personas a un valor mayor al anterior, esto se debe a que no podemos asegurar que el local tenga suficiente espacio.


```java
public void TestReservasInferior(){
      try{
            
            sentencia.executeUpdate("INSERT INTO RESERVAS (`IdReserva`) VALUES (1)");
            //Error por asignar un numero de personas negativo o 0
            //sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,1,-5,'15:00/21/12/2002')");
            sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,1,5,'15:00/21/12/2002')");
            sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,2,5,'16:00/21/12/2002')");
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
```


- CalcularBonus():
  La función simula la actualización del bono de un trabajador basándose en el desempeño de los pedidos. Se inserta un trabajador con un bono inicial de 0 y se le asigna un
  pedido. Luego, se consulta y muestra el bono antes del cálculo. Se actualiza la valoración y el estado de un pedido asociado al trabajador, y posteriormente se muestra el
  bono después del cálculo. Cualquier excepción se gestiona, imprimiendo un mensaje de error.


```java
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
            
        }
        catch(Exception e){
            System.out.println("TestReservasInferior");
            e.printStackTrace();
        }
    }
```


[Volver al índice](#0-índice)


### 5.2.1 Archivo de Test Completo

Al igual que en el apartado anterior, en caso de no tener conexión hemos decido incluir en el README.md el código que podemos encontrar en el directorio __[testtriggerjava](src/TestTriggerJava/src/testtriggerjava)__ , en concreto el fichero de  __[TestTriggerJava.java](src/TestTriggerJava/src/testtriggerjava/TestTriggerJava.java)__ 

```java
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
            sentencia.executeUpdate("INSERT INTO RESERVAS_PEDIDO (`IdReserva`,`IdPedido`,`NumPersonas`,`HoraIni`) VALUES (1,2,5,'16:00/21/12/2002')");
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
```


[Volver al índice](#0-índice)
