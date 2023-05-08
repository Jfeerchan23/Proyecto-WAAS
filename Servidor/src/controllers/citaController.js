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
citaController.actualizar = (req, res) => {
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
citaController.eliminar = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('DELETE FROM citas WHERE idCita = ?', [id], (err, rows) => {
            if (err) return res.send(err);
            res.send('cita eliminada!')
        });
    });
}
citaController.insertar = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        console.log(req.body)
        conn.query('INSERT INTO citas set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('nueva cita!')
        })
    })
}

citaController.crearCitas = (req, res) => {

    const fechaInicio = new Date(fechaHoy()); // fecha de inicio (en formato YYYY-MM-DD)
    const fechaFin = new Date(req.body.fecha); // fecha de fin (en formato YYYY-MM-DD)
    const fechasEntre = obtenerFechasEntre(fechaInicio, fechaFin); // obtiene todas las fechas entre la fecha de inicio y la fecha de fin
    let y = fechasEntre; // muestra el array de fechas en la consola del navegador o de Node.js

    let x = crearLapsos(req.body.horaInicio, req.body.descansoInicio, req.body.duracion);


    y.forEach(objeto1 => {
        x.forEach(objeto => {
            const cita = {
                idMedico: req.params.id,
                fecha: objeto1,
                horaInicio: objeto.horaInicio,
                horaTermino: objeto.horaFin
            }
           

            req.getConnection((err, conn) => {
                if (err) return res.send(err)
        
                conn.query('INSERT INTO citas set ?', [cita], (err, rows) => {
                    if (err) return res.send(err)
                })
            })




        });

    });
    res.send('citas creadas!')

}

function crearLapsos(horaInicio, horaFin, duracion) {

    let horaOriginal = horaInicio;
    let horaLimite = horaFin;

    let lapsos = []; // Declarar un arreglo vacío para almacenar los pares primeraHora y horaOriginal

    while (horaOriginal < horaLimite) {

        if (horaOriginal >= horaLimite) {
            break;
        }

        const [horasStr, minutosStr, segundosStr] = horaOriginal.split(':');

        let horas = parseInt(horasStr);
        let minutos = parseInt(minutosStr);
        let segundos = parseInt(segundosStr);

        minutos += parseInt(duracion);

        if (minutos >= 60) {
            horas++;
            minutos -= 60;
        }

        const horasStrActualizadas = horas.toString().padStart(2, '0');
        const minutosStrActualizados = minutos.toString().padStart(2, '0');
        const segundosStrActualizados = segundos.toString().padStart(2, '0');

        const horaActualizada = `${horasStrActualizadas}:${minutosStrActualizados}:${segundosStrActualizados}`;

        if (horaActualizada >= horaLimite) {
            break;
        }

        const objetoLapso = { // Crear un objeto literal con las propiedades primeraHora y horaOriginal
            horaInicio: horaOriginal,
            horaFin: horaActualizada
        };

        lapsos.push(objetoLapso); // Agregar el objeto al arreglo lapsos

        horaOriginal = horaActualizada;
    }


    return lapsos; // Retornar el arreglo lapsos con los pares primeraHora y horaOriginal
}

function obtenerFechasEntre(fechaInicio, fechaFin) {
    const fechas = []; // crea un array vacío para almacenar las fechas
    let fechaActual = new Date(fechaInicio); // crea un objeto Date con la fecha de inicio
    while (fechaActual <= fechaFin) { // mientras la fecha actual sea menor o igual a la fecha de fin
        fechas.push(new Date(fechaActual)); // añade una copia de la fecha actual al array de fechas
        fechaActual.setDate(fechaActual.getDate() + 1); // incrementa la fecha actual en un día
    }
    return fechas; // devuelve el array de fechas
}

function fechaHoy() {
    const hoy = new Date();  // crea un nuevo objeto Date con la fecha y hora actuales
    hoy.setDate(hoy.getDate() + 1); // suma un día a la fecha de hoy
    const anioDeHoy = hoy.getFullYear(); // obtiene el año actual (por ejemplo, 2023)
    const mesDeHoy = (hoy.getMonth() + 1).toString().padStart(2, "0"); // obtiene el mes actual (del 0 al 11) y lo convierte en una cadena de texto con dos dígitos, agregando un cero a la izquierda si es necesario
    const diaDeHoy = hoy.getDate().toString().padStart(2, "0"); // obtiene el día del mes (del 1 al 31) y lo convierte en una cadena de texto con dos dígitos, agregando un cero a la izquierda si es necesario
    const fechaDeHoy = anioDeHoy + "-" + mesDeHoy + "-" + diaDeHoy; // concatena los valores obtenidos para formar la fecha completa
    return fechaDeHoy;
  }
  
citaController.citasDisponibles = (req, res) => {
    const id = req.body.idMedico;
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM citas WHERE idMedico= ? AND fecha=? AND idPaciente IS NULL', [req.body.idMedico,req.body.fechaCita], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
}
  
module.exports = citaController