
# API de Gestión de Eventos Comunitarios

Esta es la **API RESTful** para la gestión de eventos comunitarios, desarrollada con Node.js, Express y MySQL. Sirve como backend para una futuro desarrollo de aplicación móvil React Native (Expo).

---

## 🔖 Descripción

* Proyecto Final de Catedra Eventos Comunitarios para almacenar y manejar datos de:

  * Usuarios (con contraseña en texto plano)
  * Eventos
  * Categorías
  * Relaciones Eventos‑Categorías
  * Participación en eventos
  * Comentarios
  * Calificaciones
  * Social Logins
  * Notificaciones

Todos los endpoints están preparados con comentarios `// TODO:` para que se implemente la lógica de acceso a la base de datos `app_comunidad_eventos_dps`.

## 🚀 Tecnologías

* Node.js
* Express.js
* MySQL2 (promises)
* dotenv (variables de entorno)
* cors
* jsonwebtoken (JWT)
* nodemon (desarrollo)

## 📋 Requisitos Previos

* Node.js v16+ instalado
* MySQL en ejecución con la base de datos `app_comunidad_eventos_dps`
* Git (opcional)

## 🔧 Instalación

1. Clona este repositorio:

   ```bash
   git clone <https://github.com/CescPerdomo/api_eventos>
   cd api_eventos
   ```
2. Instala dependencias:

   ```bash
   npm install
   ```
3. Crea un archivo `.env` basado en `.env.example`:

   ```dotenv
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=1234
   DB_NAME=app_comunidad_eventos_dps
   JWT_SECRET=solo_testing_jwt
   PORT=3000
   ```
4. Arranca el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   El servidor escuchará en `http://localhost:3000`.

## ⚙️ Estructura de la API Eventos

```plaintext
api_eventos/
├── server.js           # Punto de entrada de la aplicación
├── package.json        # Dependencias y scripts
├── .env.example        # Plantilla de variables de entorno
├── config/
│   └── db.js           # Pool de conexiones MySQL
├── routes/             # Definición de rutas para cada recurso
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   └── ...             # userRoutes.js, categoryRoutes.js, etc.
├── controllers/        # Lógica de cada ruta (placeholders)
│   ├── authController.js
│   ├── eventController.js
│   └── ...
├── middleware/
│   └── authMiddleware.js  # Verificación de JWT y roles
└── utils/
    ├── jwt.js            # Generación y verificación de tokens
    └── errorHandler.js   # Manejador global de errores
```

## 📦 Scripts Disponibles

| Comando       | Descripción                                  |
| ------------- | -------------------------------------------- |
| `npm start`   | Inicia el servidor con Node.js               |
| `npm run dev` | Inicia el servidor con nodemon (auto‑reload) |

## 📡 Uso Básico

* Comprueba que el servidor esté corriendo:

  ```
  GET http://localhost:3000/api/events
  ```
* Todos los endpoints responden JSON y están protegidos con middleware donde corresponda.

## 🔗 Endpoints Principales

| Recurso        | Ruta                     | Método | Descripción                          |
| -------------- | ------------------------ | ------ | ------------------------------------ |
| **Auth**       | `/api/auth/register`     | POST   | Registro de usuario (genera JWT)     |
|                | `/api/auth/login`        | POST   | Inicio de sesión (genera JWT)        |
|                | `/api/auth/social-login` | POST   | Login social (placeholder)           |
| **Eventos**    | `/api/events`            | GET    | Listar todos los eventos             |
|                | `/api/events/:id`        | GET    | Obtener evento por ID                |
|                | `/api/events`            | POST   | Crear evento (organizador)           |
|                | `/api/events/:id`        | PUT    | Actualizar evento (organizador)      |
|                | `/api/events/:id`        | DELETE | Eliminar evento (organizador/admin)  |
| **Usuarios**   | `/api/users`             | GET    | Listar usuarios (placeholder)        |
|                | `/api/users/:id`         | GET    | Obtener usuario por ID (placeholder) |
|                | `/api/users`             | POST   | Crear usuario (placeholder)          |
| **Categorías** | `/api/categories`        | GET    | Listar categorías (placeholder)      |
| **...**        | ...                      | ...    | ...                                  |

> Cada controlador tiene `// TODO:` para implementar la lógica SQL. Aun pendiente de implementar.

## 🤝 Contribuciones

1. Haz un *fork* de este repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y *commits*.
4. Empuja a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un *Pull Request*.

## 📄 Licencia

* **Código:** MIT License (ver `LICENSE`).
* **Documentación:** Creative Commons Attribution 4.0 International (CC BY 4.0) (ver `LICENSE-CC.txt`).

---
## Desarrolladores
1. Cesar Ernesto Perdomo Guerrero pg241690
2. Fabricio Antonio Castro Martinez cm240137
3. Jose Alonso Aguirre Marquez am241838 
4. Victor Fabricio Mendez mm242458
5. Carlos David Guevara Martinez gm172474 



