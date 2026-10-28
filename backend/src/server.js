// 1. Cargar las configuraciones del archivo .env
require('dotenv').config();

// 2. Importar Express y CORS
const express = require('express');
const cors = require('cors');

// 3. Crear la aplicación
const app = express();

// 4. Definir el puerto del servidor
const PORT = process.env.PORT || 3000;

// 5. Configurar los middlewares
app.use(cors());
app.use(express.json());

// 6. Crear una ruta de prueba
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        mensaje: 'El servidor del taller funciona333'
    });
});

// 7. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});