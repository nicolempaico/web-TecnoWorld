# TecnoWorld

TecnoWorld es una aplicación web de comercio electrónico desarrollada con **React** y **Vite**, enfocada en la venta de productos tecnológicos. La aplicación consume datos mediante **Fetch API** desde una base de datos simulada con **json-server**, permitiendo gestionar productos, usuarios y sesiones de forma dinámica.

## Tecnologías utilizadas

* React
* Vite
* JavaScript (ES6+)
* Context API
* Fetch API
* JSON Server
* CSS
* Bootstrap Icons
* LocalStorage

## Funcionalidades

* Registro de usuarios con almacenamiento en `db.json`.
* Inicio de sesión utilizando los usuarios registrados.
* Persistencia de la sesión mediante `localStorage`.
* Catálogo de productos obtenido desde una base de datos simulada.
* Visualización del detalle de cada producto.
* Agregado de productos al carrito de compras.
* Búsqueda de productos por nombre, marca o descripción.
* Filtros por categoría y marca.
* Ordenamiento de productos por precio (mayor a menor y menor a mayor).
* Gestión completa del carrito de compras:

  * Aumentar cantidad.
  * Disminuir cantidad.
  * Eliminar productos.
* Resumen de compra con:

  * Subtotal.
  * Costo de envío fijo (S/ 10.00).
  * Total de la compra.
* Validaciones y manejo de errores durante las operaciones principales.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* Node.js
* npm

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/nicolempaico/web-TecnoWorld.git
```

Ingresa al proyecto:

```bash
cd web-TecnoWorld
```

Instala las dependencias:

```bash
npm install
```

## Ejecución del proyecto

### 1. Iniciar la base de datos simulada

Desde una terminal ejecuta:

```bash
npm run server
```

Esto iniciará `json-server` utilizando el archivo `db.json` ubicado en la raíz del proyecto en el puerto **3001**.

### 2. Iniciar la aplicación

En una segunda terminal ejecuta:

```bash
npm run dev
```

Vite mostrará la dirección local (generalmente `http://localhost:5173`) donde podrás visualizar la aplicación.

## Estructura general

* `src/` → Componentes, páginas, contexto y estilos.
* `public/` → Recursos públicos.
* `db.json` → Base de datos simulada con productos y usuarios.
* `package.json` → Dependencias y scripts del proyecto.

## Autor

Proyecto desarrollado por **Nicole Paico** como parte del curso de JavaScript Avanzado.
