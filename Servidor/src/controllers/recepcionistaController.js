const recepcionistaController = {}

/**
 * Devuelve la información de todos los recepcionistas en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.obtenerTodos = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT * FROM recepcionistas', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
    })
  })
}

/**
 * Devuelve la información de un recepcionista de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.obtener = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT * FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
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
}

/**
 * Actualiza la información de un recepcionista de la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.actualizar = (req, res) => {
  const id = req.params.id;
  const updatedRecepcionista = req.body;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('UPDATE recepcionistas SET ? WHERE idRecepcionista = ?', [updatedRecepcionista, id], (err, result) => {
      if (err) return res.send(err);

      res.send(`Recepcionista con id ${id} actualizado.`);
    });
  });
}

/**
 * Elimina la información de un recepcionista de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.eliminar = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('DELETE FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
      if (err) return res.send(err);
      res.send('recepcionista eliminado!')
    });
  });
}

/**
 * Agrega un recepcionista a la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
recepcionistaController.insertar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('INSERT INTO recepcionistas set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)

      res.send('recepcionista agregado!')
    })
  })
}

module.exports = recepcionistaController