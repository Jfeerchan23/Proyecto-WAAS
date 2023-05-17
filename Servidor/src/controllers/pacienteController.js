const pacienteController = {}
const moment = require('moment');
/**
 * Devuelve la información de todos los pacientes en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
pacienteController.obtenerTodos = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT * FROM pacientes', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
    })
  })
}


/**
 * Devuelve la información de un paciente de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
pacienteController.obtener = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT * FROM pacientes WHERE idPaciente = ?', [id], (err, rows) => {
      if (err) return res.send(err);

      if (rows.length > 0) {
        const paciente = rows[0];
        const fecha = new Date(paciente.fechaNacimientoPaciente);
        paciente.fechaNacimientoPaciente = fecha.toISOString().slice(0, 10);

        res.json(paciente);
      } else {
        res.status(404).send("No se pudo encontrar al paciente con ID " + id);
      }
    });
  });
}

/**
 * Actualiza la información de un paciente de la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
pacienteController.actualizar = (req, res) => {
  const id = req.params.id;
  const updatedPaciente = req.body;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('UPDATE pacientes SET ? WHERE idPaciente = ?', [updatedPaciente, id], (err, result) => {
      if (err) return res.send(err);

      res.send(`paciente con id ${id} actualizado.`);
    });
  });
}

/**
 * Elimina la información de un paciente de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
pacienteController.eliminar = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('DELETE FROM pacientes WHERE idPaciente = ?', [id], (err, rows) => {
      if (err) return res.send(err);
      res.send('paciente eliminado!')
    });
  });
}

/**
 * Agrega un paciente a la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
pacienteController.insertar = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    console.log(req.body)
    conn.query('INSERT INTO pacientes set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)

      res.send('paciente agregado!')
    })
  })
}

/**
 * Obtiene el historial clínico del paciente
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */

pacienteController.historialClinico = (req, res)=>{
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT citas.fecha, citas.horaInicio, citas.modalidad, citas.notasConsultas, medicos.nombreMedico, medicos.consultorioMedico,citas.idCita, pacientes.nombrePaciente FROM medicos JOIN citas JOIN pacientes WHERE citas.idPaciente=pacientes.idPaciente AND medicos.idMedico=citas.idMedico AND pacientes.idPaciente= ? ORDER BY citas.idCita DESC', [id], (err, rows) => {
      if (err) return res.send(err);

      for (let i = 0; i < rows.length; i++) {
        const fecha = new Date(rows[i].fecha);
        rows[i].fecha = fecha.toISOString().slice(0, 10);
      }
      res.json(rows)
     
    });
  });
}


pacienteController.agenda = (req, res)=>{
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT citas.idCita, medicos.nombreMedico, citas.fecha, citas.horaInicio, citas.horaTermino FROM medicos JOIN citas join pacientes WHERE medicos.idMedico = citas.idMedico AND pacientes.idPaciente = citas.idPaciente AND pacientes.idPaciente= ?', [id], (err, rows) => {
      if (err) return res.send(err);
      for(let i=0; i<rows.length;i++){
        const fecha = rows[i].fecha;
        const fechaFormateada = fecha.toISOString().substring(0, 10); // "2023-05-07"
        const start = fechaFormateada.concat("T", rows[i].horaInicio); // "2023-05-07T12:36:00"
        const end = fechaFormateada.concat("T", rows[i].horaTermino); // "2023-05-07T12:36:00"
        rows[i].start= start;
        rows[i].end= end;
      }
      res.json(rows)
     
    });
  });
}

module.exports = pacienteController