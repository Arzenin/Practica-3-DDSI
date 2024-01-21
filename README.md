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
      1. [/](#31-estructura-del-repositorio)
   2. [Descarga del Repositorio](#32-descarga-del-repositorio)
      1. [Instalación de Git](#321-instalación-de-git)
      2. [Clonar un Repositorio](#322-clonar-un-repositorio)
4. [Instalación de la Herramienta](#4-instalación-de-la-herramienta)
   1. [Docker](#41-docker)
   2. [ZeroTier](#42-zerotier)
   3. [MySQL y el conector de MySQL2](#43-mysql-y-el-conector-de-mysql2)
   4. [Node.js,Rect Native y Expo](#44-node.js,react-native-y-expo)
5. [Explicación del Código](#5-explicación-del-código)
   1. [Explicación del Código en SQL](#51-explicación-del-sql)
      1. [Tablas](#511-tablas)
      2. [Triggers](#512-triggers)
   2. [Explicación del Test](#52-explicación-del-test)
      1. [Archivo de Test Completo](#521-archivo-de-test-completo)
   3. [Explicación del Código Web](#53-explicación-del-codigo-web)
      1. [Frontend](#531-frontend)
      2. [Backend](#532-Backend)
 5. [Ejeccución del Código](#54-ejecución-del-código)

# 1. Introducción y Motivación

En esta practica se nos presenta la continuación e implementación de nustro sistema Mc And 
Cheese. Tras dejar la base de la P2, donde ya teniamos todos los subsistemas 
implementados, se ha seguido evolucionando el codigo y la base de datos. Basandonos tambien en 
los seminarios, especialmente en el segundo, hemos decidido implementar nustro 
sistema en una pagina web. Estuvimos dando muchas vueltas a la hora de elergir la 
implementacion , ya que java tambien era una muy buena opcion, pero nos decantamos por la 
programacion web.


Nuestra motivación al elegir nuestro sistema fue la amplia gama de funcionalidades que puede 
tomar, asi como que es un tema muy común y representativo de la realidad. 
Queríamos poder aprender a realizar proyectos reales, los cuales se pudieran reflejar en algún 
caso real de nuestro futuro profesional, ya que en asignaturas pasadas siempre 
se realizan ejemplos muy aislados, que no representan lo que se puede pedir a un programador 
en la vida real. Esa fue una de las motivaciones mas fuertes a la hora de 
elegir Mc And Cheese.

# 2. Objetivos

Nuestro objetivo principal a la hora de implementar este sistema era el de cumplir los 
requisitos funcionales establecidos a lo largo de las practicas y seminarios 
anteriores.Sin embargo, decidimos que demás de esto,  tomamos la decisión de intentar aplicar 
todo el conocimiento obtenido a lo largo del año, tanto dentro de las clases como 
fuera de estas.


Nada más comenzar la implementación del sistema, tomamos la decisión de automatizar el máximo 
número posible de los requisitos funcionales por medio del uso de triggers, para 
así poder distribuir la carga de cómputo entre las diferentes terminales en las que se 
ejecutasen cada uno de los servicios necesarios para el correcto funcionamiento del 
sistema Mc and Cheese.


Además de esto decidimos que trataríamos de profundizar más dentro del desarrollo de una 
aplicación web y experimentar diferentes tipos de implementaciones tanto del frontend 
como del backend.


En conclusión nuestro objetivo es el de demostrar todo el conocimiento que hemos adquirido 
entre todos a lo largo del año, automatizar determinadas funciones para una mejor distribución 
de la carga computacional y por último alcanzar una mayor profundidad dentro de la progración 
web.

# 3. Github

Al igual que en todos nuestros proyectos, hemos elegido Github como medio para crear nuestro repositorio del proyecto, el cual nos permitirá registrar tanto los resultados del mismo, como los distintos avances en él. Es por ello que incluiremos Github en la explicación del proyecto.


Github, es una plataforma ampliamente adoptada por millones de usuarios, se destaca como un espacio fundamental para el hospedaje de código. Esta plataforma brinda una ventaja sustancial al facilitar tanto la sincronización de archivos en un proyecto como la posibilidad de compartirlo con otros usuarios.

Decidimos emplear este portal con el objetivo principal de optimizar la sincronización entre los miembros del proyecto y, al mismo tiempo, ofrecer a los usuarios la capacidad de seguir tutoriales que mejoren su comprensión del proyecto.

En el archivo readme adjunto al repositorio, que estará disponible al final de esta sección, encontrarás un tutorial completo para la instalación de este proyecto. Te instamos fervientemente a revisarlo para aprovechar al máximo todas las funcionalidades disponibles.

## 3.1 Estructura del Repositorio

Dentro de este apartado explicaremos los diferentes directorios dentro del repositorio y los 
ficheros que podremos encontrar dentro de los mismos. Para poder realizar una explicación en 
profundidad explicaremos uno por uno los directorios superiores, siendo estos aquellos que no 
vayan destinados al almacenamiento de dependencias necesarias para la ejecución del proyecto.

## 3.2 Descarga del Repositorio

### 3.2.1 Instalación de Git
1. Deberemos abrir el terminal
2. Nos aseguraremos de tener todas las dependencias y paquetes actualizados por medio de `sudo apt update` y `sudo apt upgrade`
3. Tras esto ejecutaremos `apt-get install git` por el cual instalaremos git junto a sus dependencias
4. Por último como en el resto de instalaciones ejecutaremos `git --version` para asegurarnos que se ha instalado todo correctamente
   
### 3.2.2 Clonar un Repositorio
Una vez instalado Git deberemos de crear un directorio personalmente recomiendo que creemos uno con el siguiente esquema `/Documents/github` sin embargo esto esto no es obligatorio.



