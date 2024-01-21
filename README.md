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
  - Correo electrónico: jomagtr@gmail.com
  - Correo electrónico ugr: jomagtr@correo.ugr.es
  - Grupo: A3
- Rubén Gázquez Gallardo
  - Correo electrónico: pablosky7000@gmail.com
  - Correo electrónico ugr: pablogervilla@correo.ugr.es
  - Grupo: A3
- Gonzalo Sanz Guerrero
  - Correo electrónico: sanzguerrerogonzalo.com 
  - Correo electrónico ugr: gsanzguerrero@correo.ugr.es
  - Grupo: A3


En este fichero podremos encontrar la documentación completa del proyecto llevado a cabo para la práctica 2 de MC.
Realizar un Analizador Léxico, explicar el objetivo de dicho analizador, su funcionamiento.


Para ello se ha realizado un repositorio en Github con el siguiente enlace:[https://github.com/Arzenin/Analizador-Lexico](https://github.com/Arzenin/Sistema-Mc-And-Cheese)


__Se recomienda__ la visualización de la documentación desde el README.md en el github, ya que por medio de los enlaces se puede llegar más rápido a las partes en las que se esté interesado, sin embargo si se desea se puede tener la casi la misma experiencia visualizandolo tanto desde el README.md como desde el [PDF](Doc/) que o bien se ha obtenido por medio de su envio o bien por su obtención en la carpeta `Doc/` dentro del repositorio de github.

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
      1.[Instalación de Docker](#411-instalación-de-docker)
   2. [ZeroTier](#42-zerotier)
      1. [Instalación de ZeroTier](#421-instalación-de-zerotier)
   4. [PHP my Admin y el conector de MySQL2](#43-php-my-admin-y-el-conector-de-mysql2)
   5. [Node.js,Rect Native y Expo](#44-node.js,react-native-y-expo)
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

En esta practica se nos presenta la continuación e implementación de nustro sistema Mc And Cheese. Tras dejar la base de la P2, donde ya teniamos todos los subsistemas 
implementados, se ha seguido evolucionando el codigo y la base de datos. Basandonos tambien en los seminarios, especialmente en el segundo, hemos decidido implementar nustro 
sistema en una pagina web. Estuvimos dando muchas vueltas a la hora de elergir la implementacion , ya que java tambien era una muy buena opcion, pero nos decantamos por la 
programacion web.


Nuestra motivación al elegir nuestro sistema fue la amplia gama de funcionalidades que puede tomar, asi como que es un tema muy común y representativo de la realidad. 
Queríamos poder aprender a realizar proyectos reales, los cuales se pudieran reflejar en algún caso real de nuestro futuro profesional, ya que en asignaturas pasadas siempre 
se realizan ejemplos muy aislados, que no representan lo que se puede pedir a un programador en la vida real. Esa fue una de las motivaciones mas fuertes a la hora de 
elegir Mc And Cheese.

# 2. Objetivos

Nuestro objetivo principal a la hora de implementar este sistema era el de cumplir los requisitos funcionales establecidos a lo largo de las practicas y seminarios 
anteriores.Sin embargo, decidimos que demás de esto,  tomamos la decisión de intentar aplicar todo el conocimiento obtenido a lo largo del año, tanto dentro de las clases 
como fuera de estas.


Nada más comenzar la implementación del sistema, tomamos la decisión de automatizar el máximo número posible de los requisitos funcionales por medio del uso de triggers, para 
así poder distribuir la carga de cómputo entre las diferentes terminales en las que se ejecutasen cada uno de los servicios necesarios para el correcto funcionamiento del 
sistema Mc and Cheese.


Además de esto decidimos que trataríamos de profundizar más dentro del desarrollo de una aplicación web y experimentar diferentes tipos de implementaciones tanto del frontend 
como del backend.


En conclusión nuestro objetivo es el de demostrar todo el conocimiento que hemos adquirido entre todos a lo largo del año, automatizar determinadas funciones para una mejor 
distribución de la carga computacional y por último alcanzar una mayor profundidad dentro de la progración web.

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


Sin embargo lo que si se realizará es una breve explicación de lo que hará el test para comprobar que los triggers funcionan correctamente. 

### 3.1.4 web
El directorio __[web](src/web)__ es el más importante de todos, en el encontraremos desde los ficheros fuente del sistema como la api destinada a la ejecución del backend.
Además de esto también podremos encontrar varios dockerfiles y docker compose los cuales nos ayudarán a la ejecución del código, sin embargo esto lo explicaremos más adelante 
en el apartado __[6. Ejecución del Código](#6-ejecución-del-código)__ 

## 3.2 Descarga del Repositorio
En este apartado explicaremos la instalación del repositorio en nuestra máquina de forma local, recomendamos __*encarecidamente*__ su instalación en caso de querer probar el 
sistema, ya que esto nos ahorrará una gran cantidad de tiempo de cara a la instalación de ficheros dentro de nuestra máquina, además esto nos permitiría usea de forma más 
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
En exta sección explicaremos todas las herramientas que hemos usado a lo largo del desarrollo de este proyecto, queremos destacar que hay algunas que pueden llegar a ser 
opcionales, como puede ser el caso de __[ZeroTier]()__ sin embargo recomendamos su lectura e instalación para una mejor comprensión del proyecto.

## 4.1. Docker

Docker es un software especializado en en la creación y uso de contenedores, los cuales funcionan de tal forma que se puedan ejecutar aplicaciones de forma 
compartimentada dentro del sistema o aplicación.


Gracias a esto se nos permite exportar nuestro docker a otro sistema y poder ejecutarlo e instalar todo lo necesario para nuestra aplicacion fuera de nuestro propio sistema. 
Es decir que con docker no es necesario realizar modificaciones en el nuevo sistema.


Mientras que una máquina virtual usa virtualización de hardware de nuestro sistema, docker virtualiza el sistema operativo que queramos, además de que este es más ligero y 
eficiente que una máquina virtual al no consumir tantos recursos.


Docker da la posibilidad de acceder a una gran variedad de dockers prefabricados por parte de empresas como por ejemplo MySQL, y por supuesto también se nos permite generar 
nuestro propio docker.


En conclusión nuestro razoniento del uso de docker es el tener una clara diferenciación dentro del sistema entre base de datos y página web, además de facilitarnos el 
mantenimientro y uso de recursos por parte de las mismas dentro del sistema, lo que nos ayudaría a arreglar el problema de que se produjese un exceso de peticiones en nuestra 
página copiando el docker y redireccionando estas peticiones a los dockers paralelos al mismo.

### 4.1.1 Instalación de Docker

__Ubuntu__:

1. `sudo apt update`
2. `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
3. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
4. `echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
5. `sudo apt update`
6. `sudo apt install docker-ce docker-ce-cli containerd.io`
7. `docker --version`

__Windows__:

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
