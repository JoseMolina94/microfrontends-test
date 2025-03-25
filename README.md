# Proyecto de MicroFrontends (NextJS + Angular) con Federation Module
### Desarrollado por: Jose Molina

## Introducción 
Este proyecto surge como una prueba para implementar un modúlo Angular en una app NextJS usando **Module Federation**, sin embargo siendo la primera vez que uso **Module Federation** este mismo aunque esta dentro del proyecto no funciona de manera correcta, pero ambos microfrontends pueden visualizarse de manera individual en sus arranques propios.

Priorice el funcionamiento más que el estilado por lo que este último es simple, y cuenta con un responsive simple tambien pero que se adecua bien a los distintos tamaños de dispositivos.

## Cómo arrancar el proyecto
Actualmente este proyecto aunque usa Federation Module los micro-frontends se encuentran separados y no se conectan entre si.
Para arrancar los proyectos y ver sus individuales vistas de prueba como tal sigue los pasos:

Nota: Requeriras de al menos 2 terminales o consolas separadas.

### Angular

  **cd angular-microfrontend** -> 
  **npm install** -> 
  **ng serve --port 3001**

### NextJS

  **cd next-microfrontend** -> 
  **npm install** -> 
  **npm run dev**

### Adicionales
Puede verse en remoteEntry en **http://localhost:3001/remoteEntry.js** si el proyecto fue iniciado en el puerto 3001, en caso contrario usa el puerto en el que inicio el microfrontend de Angular.

**Module Federation** esta implementado pero no funciona actualmente. Podras ver los archivos correspondientes dentro de este proyecto.

En el microfrontend de NextJS, el archivo "src/app/user/[id]" es el que intentaba consumir mediante el **Module Federation** el microfrontend de angular.

### Muchas gracias por leer.