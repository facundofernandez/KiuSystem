# Prueba tecnica para KiuSystem

> ### CONSIGNA 

- Generar una aplicación que muestre una colección de fotos provistas por una api.
- El origen de las fotos a mostrar en el listado, será la llave thumbnailUrl.
- Al hacer click en cualquiera de las fotos, deberá mostrar dentro de un modal la imagen en tamaño completo(llave url) y el título de la foto(llave title).
- Inicialmente, ordenar ascendentemente el listado por la menor cantidad de vocales encontradas en llave title de cada ítem. Entre ítems con la misma cantidad, ordenar descendentemente por llave id.
- Una vez ordenado, permitir reordenar los ítems libremente arrastrándolos en la grilla.

> ### CONDICIONES DEL ENTREGABLE 

- Deberá ser una aplicación totalmente responsive.
- Utilizar Module bundler (Webpack/Browserify/etc.) o un HTML con sus JS/CSS utilizando VueJs/Angular/React como librería standalone.
- Usar algun framework web, ya sea Bootstrap, bulma css, etc.
- Utilizar al menos 1 componente e implementar al menos un tipo de comunicación entre ellos.

> ### API
- https://jsonplaceholder.typicode.com/photos?albumId=1

> ### EJEMPLOS DE ENTREGABLE

![alt text][imagen1]
![alt text][imagen2]

[imagen1]: ./assets/1.png
[imagen2]: ./assets/2.png

# Tecnologias utilizadas

- ReactJS con hooks
- SASS/CSS - bulma css
- Webpack


# Indicaciones para probar el código

```javascript
// Hago un clon del proyecto
git clone https://github.com/facundofernandez/KiuSystem.git

// Entro a la carpeta del proyecto
cd KiuSystem

// Instalo dependencias
npm install

// Inicio servidor web proyecto
npm run start:dev

// Modo edición de código
npm run watch

// Modo producción de código
npm run build
```

