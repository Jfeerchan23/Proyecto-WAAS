const citaController = {}

citaController.obtenerTodos = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM citas', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
}

citaController.obtener = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM citas WHERE idCita = ?', [id], (err, rows) => {
            if (err) return res.send(err);

            const elemento = rows[0];

            res.json(elemento);
        });
    });
}

citaController.reservar = (req, res) => {
    const id = req.params.id;
    const updated = req.body;

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('UPDATE citas SET ? WHERE idCita = ?', [updated, id], (err, result) => {
            if (err) return res.send(err);

            res.send(`Cita con id ${id} actualizado.`);
        });
    });
}

/**
 * Crea las citas del medico para un rango de fechas
 * @param {*} req Contiene la petición del usuario
 * @param {*} res Contiene la respuesta que se enviara a la peticion
 */
citaController.crearCitas = (req, res) => {
    const { idMedico, fechaInicio, fechaFin, duracionCitas, horaInicio, horaFin, inicioAlmuerzo, finAlmuerzo } = req.body;
    if (!idMedico || !fechaInicio || !fechaFin || !duracionCitas || !horaInicio || !horaFin || !inicioAlmuerzo || !finAlmuerzo) return res.status(400).send("Datos incompletos");

    let diasAProgramar = obtenerDiasEntreFechas(fechaInicio,fechaFin);
    let citas = [];
    let primerPeriodo = obtenerSeccionesEntreHoras(horaInicio, inicioAlmuerzo, duracionCitas);
    primerPeriodo.forEach(seccion => {
        citas.push(seccion);
    });

    let segundoPeriodo = obtenerSeccionesEntreHoras(finAlmuerzo, horaFin, duracionCitas);
    segundoPeriodo.forEach(seccion => {
        citas.push(seccion);
    });

    const fechasProgramadas = [];
    diasAProgramar.forEach(diaAProgramar => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            conn.query('SELECT idCita FROM citas WHERE idMedico =  ? AND fecha = ?',
                [idMedico, diaAProgramar], (err, rows) => {
                    if (err) return res.send(err)
                    if (rows.length > 0) {
                        fechasProgramadas.push(diaAProgramar);
                    }
                })
        })
    })

    setTimeout(()=> {
        if (fechasProgramadas.length == 0) {
            diasAProgramar.forEach(diaAProgramar => {
                citas.forEach(cita => {
                    const datosCita = {
                        idMedico: idMedico,
                        fecha: diaAProgramar,
                        horaInicio: cita.horaInicio,
                        horaTermino: cita.horaFin
                    }
    
                    req.getConnection((err, conn) => {
                        if (err) return res.send(err)
    
                        conn.query('INSERT INTO citas set ?', [datosCita], (err, rows) => {
                            if (err) return res.send(err)
                        })
                    })
                });
            });
            res.send("Citas generadas")
        } else {
            res.send("El/Los dia(s) " + fechasProgramadas.toString() + " ya se encuentra(n) programado(s)")
        }
    }, 1000);
    
}

/**
 * Regresa un arreglo con las secciones de un intervalo de horas
 * @param {string} horaInicio hora inicial del intervalo a seccionar
 * @param {string} horaFin hora final del intervalo a seccionar
 * @param {string} tiempoSeccion Tiempo a seccionar en entre las horas
 */
function obtenerSeccionesEntreHoras(horaInicio, horaFin, tiempoSeccion) {
    let horaInicioSeccion = horaInicio;
    let secciones = [];

    while (horaInicioSeccion < horaFin) {
        const [horasString, minutosString, segundosString] = horaInicioSeccion.split(':');
        let horas = parseInt(horasString);
        let minutos = parseInt(minutosString);
        let segundos = parseInt(segundosString);

        minutos += parseInt(tiempoSeccion);
        if (minutos >= 60) {
            horas++;
            minutos -= 60;
        }

        //Formateamos la hora para poder compararlas
        const horasStringFinSeccion = horas.toString().padStart(2, '0');
        const minutosStringFinSeccion = minutos.toString().padStart(2, '0');
        const segundosStringFinSeccion = segundos.toString().padStart(2, '0');
        const horaFinSeccion = `${horasStringFinSeccion}:${minutosStringFinSeccion}:${segundosStringFinSeccion}`;

        if (horaFinSeccion <= horaFin) {
            const seccion = {
                horaInicio: horaInicioSeccion,
                horaFin: horaFinSeccion
            };
            secciones.push(seccion);
            horaInicioSeccion = horaFinSeccion;
        }
    }
    return secciones;
}

/**
 * Regresa un arreglo de los dias con formado YYYY-MM-DD a partir de un intervalo de fechas 
 * @param {DATE} fechaInicio Fecha inicial del intervalo de fechas a obtener
 * @param {Date} fechaFin Fecha final del intervalo de fechas a obtener
 */
function obtenerDiasEntreFechas(fechaInicio, fechaFin) {
    const dias = [];
    
    //Corregimos los problemas de la conversion de fecha
    let fechaActual = new Date();
    const [anioFechaInicio, mesFechaInicio, diaFechaInicio] = fechaInicio.split('-');
    fechaActual.setFullYear(anioFechaInicio);
    fechaActual.setMonth(parseInt(mesFechaInicio) -1);
    fechaActual.setDate(diaFechaInicio);

    //Corregimos los problemas de la conversion de fecha
    let fechaLimite = new Date();
    const [anioFechaFin, mesFechaFin, diaFechaFin] = fechaInicio.split('-');
    fechaLimite.setFullYear(anioFechaFin);
    fechaLimite.setMonth(parseInt(mesFechaFin) -1);
    fechaLimite.setDate(diaFechaFin);

    while (fechaActual <= fechaLimite) {
        //Formateamos la fecha
        let anio = fechaActual.getFullYear();
        let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
        let dia = fechaActual.getDate().toString().padStart(2, '0');
        dias.push(`${anio}-${mes}-${dia}`);
        fechaActual.setDate(fechaActual.getDate() + 1);
    }
    return dias;
}

citaController.citasDisponibles = (req, res) => {
    const id = req.body.idMedico;
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query("SELECT * FROM citas WHERE idMedico= ? AND fecha=? AND idPaciente IS NULL AND CONCAT(citas.fecha, ' ', citas.horaInicio) >= NOW()", [req.body.idMedico,req.body.fechaCita], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
}
  
citaController.citasProgramadas = (req, res)=>{
   
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query("SELECT citas.fecha, medicos.idMedico, pacientes.idPaciente, citas.horaInicio, citas.modalidad, medicos.nombreMedico, medicos.consultorioMedico, citas.idCita, pacientes.nombrePaciente, pacientes.CURPPaciente FROM medicos JOIN citas JOIN pacientes WHERE citas.idPaciente=pacientes.idPaciente AND medicos.idMedico=citas.idMedico AND citas.notasConsultas IS NULL AND CONCAT(citas.fecha, ' ', citas.horaInicio) >= NOW()", (err, rows) => {
        if (err) return res.send(err);
  
        for (let i = 0; i < rows.length; i++) {
          const fecha = new Date(rows[i].fecha);
          rows[i].fecha = fecha.toISOString().slice(0, 10);
        }
        res.json(rows)
       
      });
    });
  }

module.exports = citaController