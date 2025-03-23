const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());

// Middleware para configurar las cabeceras CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas de la API
app.use('/sistema', routes);

// Puerto
const PORT = process.env.PORT || 3000;

// Validar que el puerto sea un número válido
const portNumber = parseInt(PORT, 10);
if (isNaN(portNumber) || portNumber < 1 || portNumber > 65535) {
  console.error('El puerto especificado no es válido. Usando el puerto 3000 por defecto.');
  portNumber = 3000;
}

// Iniciar el servidor
app.listen(portNumber, '0.0.0.0', () => {
  console.log(`Servidor API a la espera de consulta, por el puerto ${portNumber}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${portNumber} ya está en uso.`);
  } else {
    console.error('Error al iniciar el servidor:', err.message);
  }
  process.exit(1); // Terminar el proceso con un código de error
});