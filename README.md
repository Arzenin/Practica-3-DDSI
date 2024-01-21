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
   1. [Explicación del Código en SQL](#51-explicación-del-código-sql)
      1. [Tablas](#511-tablas)
      2. [Triggers](#512-triggers)
   2. [Explicación del Test](#52-explicación-del-test)
      1. [Archivo de Test Completo](#521-archivo-de-test-completo)
   3. [Explicación del Código Web](#53-explicación-del-codigo-web)
      1. [Frontend](#531-frontend)
      2. [Backend](#532-Backend)
 6. [Ejecución del Código](#6-ejecución-del-código)

# 1. Introducción y Motivación

En esta práctica se nos presenta la continuación e implementación de nuestro sistema Mc And Cheese. Tras dejar la base de la P2, donde ya teniamos todos los subsistemas 
implementados, se ha seguido evolucionando el código y la base de datos. Basándonos tambien en los seminarios, especialmente en el segundo, hemos decidido implementar nuestro 
sistema en una página web. Estuvimos dando muchas vueltas a la hora de elegir la implementación , ya que java tambien era una muy buena opción, pero nos decantamos por la 
programación web.


Nuestra motivación al elegir nuestro sistema fue la amplia gama de funcionalidades que puede tomar, así como que es un tema muy común y representativo de la realidad. 
Queríamos poder aprender a realizar proyectos reales, los cuales se pudieran reflejar en algún caso real de nuestro futuro profesional, ya que en asignaturas pasadas siempre 
se realizan ejemplos muy aislados, que no representan lo que se puede pedir a un programador en la vida real. Esa fue una de las motivaciones más fuertes a la hora de 
elegir Mc And Cheese.

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

# 3. Github

Al igual que en todos nuestros proyectos, hemos elegido Github como medio para crear nuestro repositorio del proyecto, el cual nos permitirá registrar tanto los resultados 
del mismo, como los distintos avances en él. Es por ello que incluiremos Github en la explicación del proyecto.


Github, es una plataforma ampliamente adoptada por millones de usuarios, se destaca como un espacio fundamental para el hospedaje de código. Esta plataforma brinda una 
ventaja sustancial al facilitar tanto la sincronización de archivos en un proyecto como la posibilidad de compartirlo con otros usuarios.

Decidimos emplear este portal con el objetivo principal de optimizar la sincronización entre los miembros del proyecto y, al mismo tiempo, ofrecer a los usuarios la capacidad 
de seguir tutoriales que mejoren su comprensión del proyecto.

En el archivo readme adjunto al repositorio, que estará disponible al final de esta sección, encontrarás un tutorial completo para la instalación de este proyecto. Te 
instamos fervientemente a revisarlo para aprovechar al máximo todas las funcionalidades disponibles.

## 3.1 Estructura del Repositorio

Dentro de este apartado explicaremos los diferentes directorios dentro del repositorio y los ficheros que podremos encontrar dentro de los mismos. Para poder realizar una 
explicación en profundidad explicaremos uno por uno los directorios superiores, siendo estos aquellos que no vayan destinados al almacenamiento de dependencias necesarias 
para la ejecución del proyecto.

### 3.1.1 src
En el directorio __[src](src/)__ encontraremos los directorios destinados al almacenamiento del código necesario para la ejecución del programa además de aquellos ficheros 
que nos ayudarán a comprender el correcto funcionamiento de los triggers y los requisitos implementados.

### 3.1.2 DATABASE
En el directorio __[DATABASE](src/DATABASE)__ encontraremos los ficheros destinados a la gestión y estructura de la base de datos, dentro del mismo queremos destacar el 
fichero __[ddsi3.sql](src/DATABASE/ddsip3.sql)__ el cual contiene toda la estructura de nuestra base de datos, nos centraremos más en la explicación de este fichero en el 
apartado __[5.1 Explicación del Código en SQL](#51-explicación-del-codigo-en-sql)__

### 3.1.3 TestTriggerJava
En el directorio __[TestTriggerJava](src/TestTriggerJava)__ encontraremos un programa sencillo de cara a la comprensión de los triggers implementados en nuestro código, sobre 
los cuales profundizaremos en el apartado __[5.1.2 Triggers](#512-triggers)__ , sobre este código cabe destacar que hemos usado el conector __MySQL JDBC__.


Hemos decidido no explicar en profundidad, el proceso de instalación y de ejecución tanto del conector como del test ya que consideramos esto como un añadido, sin embargo si 
se desease probar este test, se deberá de generar un proyecto el cual tenga como base el archivo __TestTriggerJava.java__ y enlazada como una librería el conector de __JDBC__.


Sin embargo lo que sí se realizará es una breve explicación de lo que hará el test para comprobar que los triggers funcionan correctamente. 

### 3.1.4 web
El directorio __[web](src/web)__ es el más importante de todos, en él encontraremos desde los ficheros fuente del sistema como la api destinada a la ejecución del backend.
Además de esto también podremos encontrar varios dockerfiles y docker compose los cuales nos ayudarán a la ejecución del código, sin embargo esto lo explicaremos más adelante 
en el apartado __[6. Ejecución del Código](#6-ejecución-del-código)__ 

## 3.2 Descarga del Repositorio
En este apartado explicaremos la instalación del repositorio en nuestra máquina de forma local, recomendamos __*encarecidamente*__ su instalación en caso de querer probar el 
sistema, ya que esto nos ahorrará una gran cantidad de tiempo de cara a la instalación de ficheros dentro de nuestra máquina, además esto nos permitiría usar de forma más 
sencilla este proyecto desde máquinas las cuales no tengan una propia interfaz gráfica, pudiendo así utilizarlo en máquinas con un menor número de recursos.

### 3.2.1 Instalación de Git
1. Deberemos abrir el terminal 
2. Nos aseguraremos de tener todas las dependencias y paquetes actualizados por medio de `sudo apt update` y `sudo apt upgrade`
3. Tras esto ejecutaremos `apt-get install git` por el cual instalaremos git junto a sus dependencias
4. Por último como en el resto de instalaciones ejecutaremos `git --version` para asegurarnos que se ha instalado todo correctamente
   
### 3.2.2 Clonar un Repositorio
Una vez instalado Git deberemos de crear un directorio personalmente recomiendo que creemos uno con el siguiente esquema `/Documents/github` sin embargo esto esto no es 
obligatorio.

1. Nos dirigiremos al directorio en el que queramos clonar el repositorio
2. Abrimos la terminal en ese directorio
3. Ejecutamos `git clone https://https://github.com/Arzenin/Sistema-Mc-And-Cheese.git`
4. Ejecutamos `ls` y debería de haber aparecido un nuevo directorio llamado `/Analizador-Lexico`

# 4. Explicación e Instalaciones de las Herramientas
En esta sección explicaremos todas las herramientas que hemos usado a lo largo del desarrollo de este proyecto, queremos destacar que hay algunas que pueden llegar a ser 
opcionales, como puede ser el caso de __[ZeroTier]()__ sin embargo recomendamos su lectura e instalación para una mejor comprensión del proyecto.

## 4.1. Docker

Docker es un software especializado en en la creación y uso de contenedores, los cuales funcionan de tal forma que se puedan ejecutar aplicaciones de forma 
compartimentada dentro del sistema o aplicación.


Gracias a esto se nos permite exportar nuestro docker a otro sistema y poder ejecutarlo e instalar todo lo necesario para nuestra aplicación fuera de nuestro propio sistema. 
Es decir que con docker no es necesario realizar modificaciones en el nuevo sistema.


Mientras que una máquina virtual usa virtualización de hardware de nuestro sistema, docker virtualiza el sistema operativo que queramos, además de que este es más ligero y 
eficiente que una máquina virtual al no consumir tantos recursos.


Docker da la posibilidad de acceder a una gran variedad de dockers prefabricados por parte de empresas como por ejemplo MySQL, y por supuesto también se nos permite generar 
nuestro propio docker.


En conclusión, nuestro razonamiento del uso de docker es el tener una clara diferenciación dentro del sistema entre base de datos y página web, además de facilitarnos el 
mantenimiento y uso de recursos por parte de las mismas dentro del sistema, lo que nos ayudaría a arreglar el problema de que se produjese un exceso de peticiones en nuestra 
página copiando el docker y redireccionando estas peticiones a los dockers paralelos al mismo.

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

1-Nos dirigiremos al siguiente enlace y descargamos la versión correspondiente a nuestro sistema:
https://www.docker.com/products/docker-desktop/

2-Ejecutamos el instalador con los valores por defecto, ya que en esta ocasión se añadirá esta variable automáticamente a PATH

3-Reiniciamos el ordenador

4-Abrimos la Powershell y ejecutamos `docker --version` para comprobar la correcta instalación

# 4.2 ZeroTier

Como mencionamos previamente, nuestro propósito consistía no solo en ejecutar de manera eficiente el sitio web y la base de datos, sino también en tener la capacidad de 
acceder a estos recursos desde cualquier ubicación geográfica. Para lograrlo, optamos por utilizar ZeroTier por las razones que se presentaron en el semanario 2 (dificultad 
de la vpn). Esta plataforma se especializa en la creación de redes definidas por software, lo que nos permite establecer conexiones virtuales desde cualquier parte del mundo, 
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
   1. Nos dirigimos a https://www.zerotier.com/download/ y descargamos el correspondiente
   ejecutable.
   2. Ejecutamos el ejecutable y dejamos los valores por defecto.
   3. Ejecutamos la aplicación
   4. En el apartado de iconos de la bandeja del sistema(la flecha en la barra de tareas que
      podemos desplegar). Se encuentra ZeroTier
      
  __*Generar una red en ZeroTier*__
  1. Nos dirigimos a https://www.zerotier.com/
  2. Iniciaremos sesión y tras esto pulsaremos en Create a Network
  3. Deberemos añadir a los dispositivos a la red, para ello copiamos el network ID
  4. Añadimos la red:
     1. __Ubuntu:__ `sudo zerotier-cli join <ID_de_Red>`
     2. __Windows:__ Click sobre el icono de zeroTier de la barra de tareas y join new network,
     copiamos el network id en el campo correspondiente.

# 4.3 WAF

Para realizar nuestra aplicación hemos elegido utilizar de nuevo JavaScript por medio de __*Node.js*__


__*Node.js*__ es un entorno de ejecución para JavaScript del lado del servidor. Este permite ejecutar código JavaScript fuera del navegador, lo que nos da la posibilidad de 
crear aplicaciones backend escalables y eficientes. Node.js utiliza un modelo de E/S sin bloqueo, por lo tanto lo hace adecuado para aplicaciones que requieren un alto 
rendimiento y una gestión eficiente de las operaciones de entrada/salida. Para el backend de nuestra aplicación usamos este mismo entorno, este backend será el encargado de
conectarse a la base de datos y manipularla.


De cara a la interfaz de usuario hemos elegido __*React Native*__,ya  que es un marco de desarrollo de aplicaciones móviles que permite a los desarrolladores utilizar 
__*React*__(biblioteca de JavaScript destinada a construir interfaces de usuario) para crear aplicaciones nativas en iOS y Android. Esto se consigue al proporcionar una capa 
de abstracción sobre los componentes nativos, permitiendo así a los desarrolladores compartir código base entre plataformas.

En concreto hemos elegido __*React Native*__ porque además de ser una herramienta que nos permite realizar interfaces de forma sencilla e intuitiva, nos permitía crear 
aplicaciones web compatibles con dispositivos móviles.


Para implementar la interfaz de la aplicación usando React Native, hemos usado __*Expo*__. Expo es una plataforma y conjunto de herramientas para desarrollar aplicaciones 
móviles con React Native. Este simplifica el proceso de desarrollo al proporcionar un conjunto de características y servicios listos para usar, eliminando así la necesidad de 
configurar y mantener manualmente ciertos aspectos del proyecto.

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

# 4.4 PHPMyAdmin y MySQL2

En el aspecto de la administración de nuestro SGBD nos hemos decantado por _PHPMyAdmin_, ya que por una parte es herramienta de código abierto y gratuita, y por 
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


__En nuestro caso para facilitar su instalación, hemos hecho que se ejecute en un docker compose el cual se podrá encontrar en el directorio __[DATABASE](src/DATABASE)__, concretamente en el fichero 
En el directorio  encontraremos los ficheros destinados a la gestión y estructura de la base de datos, dentro del mismo queremos destacar el 
fichero __[docker-compose.yml](src/DATABASE/docker-compose.yml)__ 

# 5 Explicación del Código

En esta sección explicaremos el código en profundidad, centrándonos individualmente en el código implementado tanto en MySQL como en java y para finalizar el 
código en JavaScript de la aplicación web.


# 5.1 Explicación del Código en SQL

Este apartado tiene la función de explicar la base de datos implementada en MySQL, ya que será necesario conocer la estructura de la misma y los triggers 
implementados para poder comprender el razonamiento de la implementación de determinados requisitos. Ya que es un código de gran longitud hemos decidido dividir 
su explicación en dos secciones. Una destinada a las __[tablas y su estructura general](#511-tablas)__ y otra destinada al uso e implementación de los diferentes 
__[triggers](#512-triggers)__, pese a que se mostrará el código en este archivo, recomendamos también su visualización en el archivo  
__[ddsi3.sql](src/DATABASE/ddsip3.sql)__


# 5.2 Explicación de los Tests


- Resetear_BD() :
  Este método se encarga de resetear la base de datos e introduce una serie de valores por defecto. Lo primero que se hace es el borrado de todas
  las tablas de la base de datos, acontinuación se encarga de crear las tablas y diversos triggers. Y por último se introduce unos valores para realizar pruebas y
  se maneja excepciones para los errores.


- TestActualizarStockANDComprobarStockNoNegativo() :
  Se encarga de comprobar el funcionamiento de los trigger ActualizarStock y ComprobarStockNoNegativo. Al principio se insertan datos de prueba en las
  tablas CLIENTES, INGREDIENTES, RECETAS, RECETAS_INGREDIENTES, PEDIDO, CLIENTES_PEDIDO y PEDIDO_RECETAS para simular una situación realista. Luego, intenta realizar
  algunas operaciones incorrectas, como la inserción de números negativos o cero en los triggers asociados a las recetas y pedidos, así como actualizaciones con
  valores incorrectos en los precios de las recetas y métodos de pago, stas operaciones fallidas están comentadas. Finalmente, se consulta la base de datos
  para recuperar el valor actual de NumStock de dos ingredientes y se imprime en la consola. Cualquier excepción durante la ejecución se captura y se imprime un mensaje de error.


- TestRestarPuntosySumar():
  Realiza una prueba de los triggers RestarPuntos y SumarPuntos. Simula una situación donde se inserta un pedido y se añade un receta. Luego, consulta la base de datos
  para obtener y mostrar los puntos acumulados por el cliente. Se espera que los puntos se actualicen correctamente. Cualquier excepción durante la ejecución se captura y
  se imprime un mensaje de error.
  

- TestRellenarStock():
  El método evalúa el funcionamiento del trigger ActualizarStock al representar la inserción de un pedido, la cual utiliza un ingredient con un stock inicial.
  La receta requiere ciertas unidades del ingrediente. Después de la operación, se espera que el stock del ingrediente se actualice mediante el trigger, incrementándose en 200
  unidades debido a que el stock resultante es inferior a 10. Cualquier excepción durante la ejecución se captura y se imprime un mensaje de error.


- TestDetectarAlergenos():
  El método verifica el funcionamiento del trigger ContieneAlergeno. En el escenario de prueba, se inserta un alérgeno y se asocia a un ingrediente, luego se crea una receta
  que utiliza dicho ingrediente. Al intentar añadir esta receta a un pedido asociado a un cliente con el alérgeno registrado, se espera que el trigger genere un error.
  La salida esperada se basa en la detección del alérgeno y la interrupción del proceso posterior al error.


- TestReservasInferior():
  Evalúa el comportamiento del sistema al gestionar reservas asociadas a pedidos. El código incluye casos donde se intenta asignar un número de personas negativo o igual a 0,
  lo cual debería generar un error. Además, se verifica que un pedido no pueda tener más de una reserva asociada. También, se comprueba un posible de error al intentar
  actualizar el número de personas a un valor mayor al anterior, esto se debe a que no podemos asegurar que el local tenga suficiente espacio.


- CalcularBonus():
  La función simula la actualización del bono de un trabajador basándose en el desempeño de los pedidos. Se inserta un trabajador con un bono inicial de 0 y se le asigna un pedido.
  Luego, se consulta y muestra el bono antes del cálculo. Se actualiza la valoración y el estado de un pedido asociado al trabajador, y posteriormente se muestra
  el bono después del cálculo. Cualquier excepción se gestiona, imprimiendo un mensaje de error.


      
    1. Archivo de Test Completo
 

ejemplo de rollback:
  ```javascript
    app.post('/crearmesa', async (req, res) => {
  let connection;    //esta linea
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

    // Rollback en caso de excepción
    if (connection) {           //este if
      await connection.promise().rollback();
    }

  }finally {  // este finally
    // Asegurarse de liberar recursos incluso si hay una excepción
    if (connection) {
      connection.end();
      connection.destroy();
    }
  }
});
```


 
