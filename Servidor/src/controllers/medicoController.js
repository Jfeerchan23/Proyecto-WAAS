const medicoController = {}
const crypto = require('crypto');

/**
 * Devuelve la información de todos los medicos en la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
medicoController.obtenerTodos = (req, res) => {
 
  req.getConnection((err, conn) => {
    if (err) return res.send(err)

    conn.query('SELECT idMedico,nombreMedico,CURPMedico,fechaNacimientoMedico,correoMedico,telefonoMedico,direccionMedico,especialidadMedico,consultorioMedico,cedulaProfesionalMedico,bloqueadoMedico FROM medicos WHERE bloqueadoMedico=0 ORDER BY nombreMedico', (err, rows) => {
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

    conn.query('SELECT idMedico,nombreMedico,CURPMedico,fechaNacimientoMedico,correoMedico,telefonoMedico,direccionMedico,especialidadMedico,consultorioMedico,cedulaProfesionalMedico,bloqueadoMedico FROM medicos WHERE idMedico = ?', [id], (err, rows) => {
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

    const correoMedico = updatedMedico.correoMedico; // Nuevo correo del médico a actualizar

    // Verificar si el correo ya existe en otros usuarios, excluyendo el médico actualizado
    conn.query(
      'SELECT COUNT(*) AS count FROM (SELECT correoMedico FROM medicos UNION SELECT correoRecepcionista FROM recepcionistas UNION SELECT correoPaciente FROM pacientes) AS usuarios WHERE correoMedico = ? AND correoMedico != (SELECT correoMedico FROM medicos WHERE idMedico = ?)',
      [correoMedico, id],
      (err, result) => {
        if (err) return res.send(err);

        const count = result[0].count;

        if (count > 0) {
          // El correo ya existe en otro usuario, enviar una respuesta indicando el problema
          return res.json('Correo inválido. El correo ya está registrado en otro usuario.');
        } else {
          conn.query('UPDATE medicos SET ? WHERE idMedico = ?', [updatedMedico, id], (err, result) => {
            if (err) return res.send(err);

            if (updatedMedico.bloqueadoMedico) {
              conn.query("UPDATE citas JOIN medicos ON citas.idMedico = medicos.idMedico SET citas.idPaciente = null, citas.modalidad = null WHERE medicos.bloqueadoMedico = 1 AND medicos.idMedico = ? AND CONCAT(citas.fecha, ' ', citas.horaInicio) >= NOW();", [id], (err, result) => {
                if (err) return res.send(err);
              });
            }

            res.json('Médico actualizado.');
          });
        }
      }
    );
  });
};




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
      res.json('medico eliminado!')
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

    const correoMedico = req.body.correoMedico; // Correo del médico a crear

    // Verificar si el correo ya existe en otros usuarios
    conn.query(
      'SELECT COUNT(*) AS count FROM (SELECT correoMedico FROM medicos UNION SELECT correoRecepcionista FROM recepcionistas UNION SELECT correoPaciente FROM pacientes) AS usuarios WHERE correoMedico = ?',
      [correoMedico],
      async (err, result) => {
        if (err) return res.send(err)

        const count = result[0].count;
        
        if (count > 0) {
          // El correo ya existe en otro usuario, enviar una respuesta indicando el problema
          return res.json('Correo inválido. El correo ya está registrado en otro usuario.');
        }else{
    // Si el correo no existe en otros usuarios, continuar con la inserción del médico
    req.body.contrasenaMedico = await generarHashContraseña(req.body.contrasenaMedico); 

    conn.query('INSERT INTO medicos SET ?', [req.body], (err, rows) => {
      if (err) return res.send(err)

      res.json('¡Médico agregado!');
    });
        }

    
      }
    );
  });
};

/**
 *Se obtienen las especialidades de la base de datos
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */

 medicoController.obtenerEspecialidades = (req, res) =>{
    req.getConnection((err, conn) =>{
         if(err) return res.send(err)

         conn.query('SELECT * FROM especialidades', (err, rows) =>{
             if(err) return res.send(err)
             res.json(rows)
        })
   })
}
/**
 *Se obtienen las citas atendidas y programadas del médico
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
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
/**
 *Se obtienen las citas disponibles del médico
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
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
/**
 *Se obtienen las citas programadas del médico 
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
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
/**
 * Encripta una contraseña utilizando el algoritmo SHA256.
 * @param {string} password - La contraseña del usuario.
 * @return {string} El hash de la contraseña en formato hexadecimal.
 */
function generarHashContraseña(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  return hash;
}

module.exports = medicoController