# Proyecto de MicroFrontends (NextJS + Angular) con Federation Module
### Desarrollado por: Jose Molina

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

### Muchas gracias por leer.