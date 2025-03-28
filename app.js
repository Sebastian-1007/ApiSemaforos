const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Configuración del certificado autofirmado
const privateKey = fs.readFileSync('/etc/nginx/ssl/key.pem', 'utf8');
const certificate = fs.readFileSync('/etc/nginx/ssl/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Middleware original (sin cambios)
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/sistema', routes);

// Puertos
const HTTP_PORT = 3000;  // HTTP
const HTTPS_PORT = 3001; // HTTPS

// Servidor HTTP (original en puerto 3000)
http.createServer(app).listen(HTTP_PORT, '0.0.0.0', () => {
  console.log(`Servidor HTTP escuchando en puerto ${HTTP_PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${HTTP_PORT} ya está en uso.`);
  } else {
    console.error('Error al iniciar servidor HTTP:', err.message);
  }
});

// Servidor HTTPS (nuevo en puerto 3001)
https.createServer(credentials, app).listen(HTTPS_PORT, '0.0.0.0', () => {
  console.log(`Servidor HTTPS escuchando en puerto ${HTTPS_PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${HTTPS_PORT} ya está en uso.`);
  } else {
    console.error('Error al iniciar servidor HTTPS:', err.message);
  }
});