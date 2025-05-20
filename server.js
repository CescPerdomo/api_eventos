require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

// Importa tus routers
const authRoutes          = require('./routes/authRoutes');
const eventRoutes         = require('./routes/eventRoutes');
const userRoutes          = require('./routes/userRoutes');
const categoryRoutes      = require('./routes/categoryRoutes');
const participationRoutes = require('./routes/participationRoutes');
const commentRoutes       = require('./routes/commentRoutes');
const ratingRoutes        = require('./routes/ratingRoutes');
const notificationRoutes  = require('./routes/notificationRoutes');

const app = express();

// Middlewares globales
app.use(cors());            // Habilita CORS
app.use(express.json());    // Parseo de JSON en el body

// Rutas base
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/participations', participationRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/notifications', notificationRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Arranca el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});