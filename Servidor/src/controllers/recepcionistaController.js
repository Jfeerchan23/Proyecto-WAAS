const recepcionistaController = {}

recepcionistaController.obtenerTodos = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM recepcionistas', (err, rows) =>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
}


recepcionistaController.obtener = (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('SELECT * FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
        if (err) return res.send(err);
  
        const recepcionista = rows[0];
        const fecha = new Date(recepcionista.fechaNacimientoRecepcionista);
        recepcionista.fechaNacimientoRecepcionista = fecha.toISOString().slice(0,10);
        res.json(recepcionista);
      });
    });
  }
recepcionistaController.actualizar =(req, res) => {
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
recepcionistaController.eliminar =  (req, res) => {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
  
      conn.query('DELETE FROM recepcionistas WHERE idRecepcionista = ?', [id], (err, rows) => {
        if (err) return res.send(err);
        res.send('recepcionista eliminado!')
      });
    });
  }
recepcionistaController.insertar = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
  
        console.log(req.body)
        conn.query('INSERT INTO recepcionistas set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)
  
            res.send('recepcionista agregado!')
        })
    })
  }

module.exports = recepcionistaController