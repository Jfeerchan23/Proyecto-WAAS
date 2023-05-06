const pacienteController = {}

pacienteController.obtenerTodos = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM pacientes', (err, rows) =>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}


pacienteController.obtener = (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('SELECT * FROM pacientes WHERE idPaciente = ?', [id], (err, rows) => {
        if (err) return res.send(err);
  
        const paciente = rows[0];
        const fecha = new Date(paciente.fechaNacimientoPaciente);
        paciente.fechaNacimientoPaciente = fecha.toISOString().slice(0,10);
       
  
        res.json(paciente);
      });
    });
  }
pacienteController.actualizar =(req, res) => {
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
pacienteController.eliminar =  (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('DELETE FROM pacientes WHERE idPaciente = ?', [id], (err, rows) => {
        if (err) return res.send(err);
        res.send('paciente eliminado!')
      });
    });
  }
pacienteController.insertar = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
  
        console.log(req.body)
        conn.query('INSERT INTO pacientes set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)
  
            res.send('paciente agregado!')
        })
    })
  }

module.exports = pacienteController