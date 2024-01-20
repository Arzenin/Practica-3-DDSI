# Usa una imagen de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
COPY script.sh /usr/src/app/
# Copia los archivos necesarios al directorio de trabajo
COPY package*.json ./
# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Exponer el puerto que utiliza Expo (por defecto es el puerto 19006)
EXPOSE 19006
EXPOSE 5050
# Exponer los puertos adicionales necesarios para la aplicación
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 3000
# Configura el comando para iniciar la aplicación y permitir conexiones desde dispositivos externos
CMD ["sh", "script.sh"]
