// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db');

////////////////////////////
///////////////////////////
//////////////////////////Semaforo Estudiantes

// Obtener todos los registros
router.get('/semaforo_estudiantes', (req, res) => {
  connection.query('SELECT * FROM semaforo_estudiantes', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro por su ID
router.get('/semaforo_estudiantes/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM semaforo_estudiantes WHERE Id_semaforo_estu = ?', id, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});

// Crear un nuevo registro
router.post('/semaforo_estudiantes', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO semaforo_estudiantes SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro
router.put('/semaforo_estudiantes/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE semaforo_estudiantes SET ? WHERE Id_semaforo_estu = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro
router.delete('/semaforo_estudiantes/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM semaforo_estudiantes WHERE Id_semaforo_estu= ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});


////////////////////////////
///////////////////////////
//////////////////////////Sensor Precensia


// Obtener todos los registros
router.get('/sensor_presencia', (req, res) => {
  connection.query('SELECT * FROM sensor_presencia', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro por su ID
router.get('/sensor_presencia/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM sensor_presencia WHERE Id_sensor = ?', id, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});

// Crear un nuevo registro
router.post('/sensor_presencia', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO sensor_presencia SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro
router.put('/sensor_presencia/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE sensor_presencia SET ? WHERE Id_sensor = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro
router.delete('/sensor_presencia/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM sensor_presencia WHERE Id_sensor = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});



//////////////
// ///////////
// ////////////Semaforo Vehiculos1

// Obtener todos los registros
router.get('/semaforo_vehiculos1', (req, res) => {
  connection.query('SELECT * FROM semaforo_vehiculos1', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro por su ID
router.get('/semaforo_vehiculos1/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM semaforo_vehiculos1 WHERE Id_semaforo1 = ?', id, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});

// Crear un nuevo registro
router.post('/semaforo_vehiculos1', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO semaforo_vehiculos1 SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro
router.put('/semaforo_vehiculos1/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE semaforo_vehiculos1 SET ? WHERE Id_semaforo1 = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro
router.delete('/semaforo_vehiculos1/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM semaforo_vehiculos1 WHERE Id_semaforo1= ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});



//////////////
// ///////////
// /////////// Semaforo_Vehiculos2


// Obtener todos los registros
router.get('/semaforo_vehiculos2', (req, res) => {
  connection.query('SELECT * FROM semaforo_vehiculos2', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro por su ID
router.get('/semaforo_vehiculos2/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM semaforo_vehiculos2 WHERE Id_semaforo2 = ?', id, (err, results) => {
      if (err) {
        console.error('Error al obtener el registro:', err);
        res.status(500).json({ error: 'Error al obtener el registro' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Registro no encontrado' });
        return;
      }
      res.json(results[0]);
    });
});

// Crear un nuevo registro
router.post('/semaforo_vehiculos2', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO semaforo_vehiculos2 SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro
router.put('/semaforo_vehiculos2/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE semaforo_vehiculos2 SET ? WHERE Id_semaforo2 = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro
router.delete('/semaforo_vehiculos2/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM semaforo_vehiculos2 WHERE Id_semaforo2 = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

module.exports = router;
