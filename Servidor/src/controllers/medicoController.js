const medicoController = {}
const bcrypt = require('bcrypt');
/**
 * Devuelve la información de todos los medicos en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.obtenerTodos = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT * FROM medicos', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
    })
  })
}

/**
 * Devuelve la información de un medico de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.obtener = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT * FROM medicos WHERE idMedico = ?', [id], (err, rows) => {
      if (err) return res.send(err);

      if (rows.length > 0) {
        const medico = rows[0];
        const fecha = new Date(medico.fechaNacimientoMedico);
        medico.fechaNacimientoMedico = fecha.toISOString().slice(0, 10);

        res.json(medico);
      } else {
        res.status(404).send("No se pudo encontrar al medico con ID " + id);
      }
    });
  });
}

/**
 * Actualiza la información de un medico de la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.actualizar = (req, res) => {
  const id = req.params.id;
  const updatedMedico = req.body;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('UPDATE medicos SET ? WHERE idMedico = ?', [updatedMedico, id], (err, result) => {
      if (err) return res.send(err);

      res.send(`Medico con id ${id} actualizado.`);
    });
  });
}

/**
 * Elimina la información de un medico de la base de datos
 * apartir de su id
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.eliminar = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('DELETE FROM medicos WHERE idMedico = ?', [id], (err, rows) => {
      if (err) return res.send(err);
      res.send('medico eliminado!')
    });
  });
}

/**
 * Agrega un medico a la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.insertar = (req, res) => {
  req.getConnection(async (err, conn) => {
    if (err) return res.send(err)

    req.body.contrasenaMedico=  await generarHashContraseña(req.body.contrasenaMedico, 10); 

    conn.query('INSERT INTO medicos set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)

      res.send('medico agregado!')
    })
  })
}

 medicoController.obtenerEspecialidades = (req, res) =>{
    req.getConnection((err, conn) =>{
         if(err) return res.send(err)

         conn.query('SELECT * FROM especialidades', (err, rows) =>{
             if(err) return res.send(err)
             res.json(rows)
        })
   })
}

medicoController.agenda = (req, res)=>{
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT citas.idCita, pacientes.nombrePaciente, citas.fecha, citas.horaInicio, citas.horaTermino FROM medicos JOIN citas join pacientes WHERE medicos.idMedico = citas.idMedico AND pacientes.idPaciente = citas.idPaciente AND medicos.idMedico= ?', [id], (err, rows) => {
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

medicoController.agendaDisponible= (req, res)=>{
  const id = req.params.id;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT citas.idCita, citas.fecha, citas.horaInicio, citas.horaTermino FROM medicos JOIN citas WHERE medicos.idMedico = citas.idMedico AND citas.idMedico=? AND citas.idPaciente IS NULL AND CONCAT(citas.fecha, ' ', citas.horaInicio) >= NOW()", [id], (err, rows) => {
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
medicoController.citasProgramadas = (req, res)=>{
  const id = req.params.id;
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT citas.fecha, medicos.idMedico, pacientes.idPaciente, citas.horaInicio, citas.horaTermino, citas.modalidad, medicos.nombreMedico, medicos.consultorioMedico, citas.idCita, pacientes.nombrePaciente, pacientes.CURPPaciente FROM medicos JOIN citas JOIN pacientes WHERE citas.idPaciente=pacientes.idPaciente AND medicos.idMedico=citas.idMedico AND citas.notasConsultas IS NULL AND CONCAT(citas.fecha, ' ', citas.horaInicio) >= NOW() AND medicos.idMedico=?", [id], (err, rows) => {
      if (err) return res.send(err);

      for (let i = 0; i < rows.length; i++) {
        const fecha = new Date(rows[i].fecha);
        rows[i].fecha = fecha.toISOString().slice(0, 10);
      }
      res.json(rows)
     
    });
  });
}

function generarHashContraseña(password, saltRounds) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        // Manejo del error
        reject(err);
      } else {
        // El hash de la contraseña encriptada
        resolve(hash);
      }
    });
  });
}

module.exports = medicoController