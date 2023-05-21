const recepcionistaController = {}
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
/**
 * Devuelve la información de todos los recepcionistas en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.obtenerTodos = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT idRecepcionista, nombreRecepcionista, CURPRecepcionista, fechaNacimientoRecepcionista, correoRecepcionista, telefonoRecepcionista, direccionRecepcionista, bloqueadoRecepcionista FROM recepcionistas WHERE bloqueadoRecepcionista = 0', (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
};

/**
 * Devuelve la información de un recepcionista de la base de datos a partir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviará a la petición
 */
recepcionistaController.obtener = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT idRecepcionista, nombreRecepcionista, CURPRecepcionista, fechaNacimientoRecepcionista, correoRecepcionista, telefonoRecepcionista, direccionRecepcionista, bloqueadoRecepcionista FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
      if (err) return res.send(err);

      if (rows.length > 0) {
        const recepcionista = rows[0];
        const fecha = new Date(recepcionista.fechaNacimientoRecepcionista);
        recepcionista.fechaNacimientoRecepcionista = fecha.toISOString().slice(0, 10);
        res.json(recepcionista);
      } else {
        res.status(404).send("No se pudo encontrar al recepcionista con ID " + id);
      }
    });
  });
};

/**
 * Actualiza la información de un recepcionista en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviará a la petición
 */
recepcionistaController.actualizar = (req, res) => {
  const id = req.params.id;
  const updatedRecepcionista = req.body;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    const correoRecepcionista = updatedRecepcionista.correoRecepcionista; // Nuevo correo del recepcionista a actualizar

    // Verificar si el correo ya existe en otros usuarios, excluyendo el recepcionista actualizado
    conn.query(
      'SELECT COUNT(*) AS count FROM (SELECT correoRecepcionista FROM recepcionistas UNION SELECT correoPaciente FROM pacientes UNION SELECT correoMedico FROM medicos) AS usuarios WHERE correoRecepcionista = ? AND correoRecepcionista != (SELECT correoRecepcionista FROM recepcionistas WHERE idRecepcionista = ?)',
      [correoRecepcionista, id],
      (err, result) => {
        if (err) return res.send(err);

        const count = result[0].count;

        if (count > 0) {
          // El correo ya existe en otro usuario, enviar una respuesta indicando el problema
          res.json('Correo inválido. El correo ya está registrado en otro usuario.');
        } else {
          conn.query('UPDATE recepcionistas SET ? WHERE idRecepcionista = ?', [updatedRecepcionista, id], (err, result) => {
            if (err) return res.send(err);

            res.json('Recepcionista actualizado.');
          });
        }
      }
    );
  });
};

/**
 * Elimina la información de un recepcionista de la base de datos a partir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviará a la petición
 */
recepcionistaController.eliminar = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('DELETE FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
      if (err) return res.send(err);
      res.send('¡Recepcionista eliminado!');
    });
  });
};

/**
 * Agrega un recepcionista a la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviará a la petición
 */
recepcionistaController.insertar = (req, res) => {
  req.getConnection(async (err, conn) => {
    if (err) return res.send(err);

    const correoRecepcionista = req.body.correoRecepcionista;

    // Verificar si el correo ya existe en otros usuarios
    conn.query(
      'SELECT COUNT(*) AS count FROM (SELECT correoRecepcionista FROM recepcionistas UNION SELECT correoPaciente FROM pacientes UNION SELECT correoMedico FROM medicos) AS usuarios WHERE correoRecepcionista = ?',
      [correoRecepcionista],
      async (err, result) => {
        if (err) return res.send(err);

        const count = result[0].count;

        if (count > 0) {
          return res.json('Correo inválido. El correo ya está registrado en otro usuario.');
        } else {
          try {
            const contrasenaTextoPlano = req.body.contrasenaRecepcionista;

            // Llamar a la función de encriptarContrasena
            encriptarContrasena(contrasenaTextoPlano, (err, contrasenaEncriptada) => {
              if (err) return res.send(err);

              // Asignar la contraseña encriptada al cuerpo de la solicitud
              req.body.contrasenaRecepcionista = contrasenaEncriptada;

              conn.query('INSERT INTO recepcionistas SET ?', [req.body], (err, rows) => {
                if (err) return res.send(err);

                res.json('¡Recepcionista agregado!');
              });
            });
          } catch (error) {
            return res.send(error);
          }
        }
      }
    );
  });
};

// Función para encriptar una contraseña usando bcrypt
const encriptarContrasena = (contrasena, callback) => {
  bcrypt.hash(contrasena, 10, (err, contrasenaEncriptada) => {
    if (err) {
      callback(err);
    } else {
      callback(null, contrasenaEncriptada);
    }
  });
};
module.exports = recepcionistaController