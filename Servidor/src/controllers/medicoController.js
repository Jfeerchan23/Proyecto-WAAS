const medicoController = {}

medicoController.obtenerTodos = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM medicos', (err, rows) =>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}


medicoController.obtener = (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('SELECT * FROM medicos WHERE idMedico = ?', [id], (err, rows) => {
        if (err) return res.send(err);
  
        const medico = rows[0];
        const fecha = new Date(medico.fechaNacimientoMedico);
        medico.fechaNacimientoMedico = fecha.toISOString().slice(0,10);
  
        res.json(medico);
      });
    });
  }
medicoController.actualizar =(req, res) => {
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
medicoController.eliminar =  (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('DELETE FROM medicos WHERE idMedico = ?', [id], (err, rows) => {
        if (err) return res.send(err);
        res.send('medico eliminado!')
      });
    });
  }
medicoController.insertar = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
  
        console.log(req.body)
        conn.query('INSERT INTO medicos set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)
  
            res.send('medico agregado!')
        })
    })
  }

module.exports = medicoController