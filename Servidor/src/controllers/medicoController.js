const medicoController = {}

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
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    console.log(req.body)
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

module.exports = medicoController