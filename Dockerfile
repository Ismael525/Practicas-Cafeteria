# Usamos la imagen oficial de Nginx basada en Alpine por su ligereza y seguridad
FROM nginx:alpine

# Autor del contenedor (opcional)
LABEL maintainer="Cafeteria Antonio Machado Staff"

# Eliminamos los archivos por defecto que Nginx trae preconfigurados
RUN rm -rf /usr/share/nginx/html/*

# Copiamos nuestra configuración de producción optimizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiamos todos los archivos estáticos de nuestro proyecto al directorio público de Nginx
COPY . /usr/share/nginx/html/

# Exponemos el puerto 80 del contenedor
EXPOSE 80

# El comando por defecto inicia Nginx en primer plano (heredado de la imagen base nginx:alpine)
CMD ["nginx", "-g", "daemon off;"]
