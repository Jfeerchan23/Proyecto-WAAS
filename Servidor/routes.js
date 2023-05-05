const express = require('express')
const routes = express.Router()

/* Obtener todos los recepcionistas */
routes.get('/recepcionistas', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM recepcionistas', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })

    })
})



/* Insertar un recepcionista */
routes.post('/recepcionistas', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        console.log(req.body)
        conn.query('INSERT INTO recepcionistas set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('recepcionista agregado!')
        })
    })
})


/* Obtener todos los usuarios */

routes.get('/todos', (req, res) => {
    const queries = {
      recepcionistas: 'SELECT * FROM recepcionistas',
      medicos: 'SELECT * FROM medicos',
      pacientes: 'SELECT * FROM pacientes'
    };
    
    const results = {};
  
    req.getConnection((err, conn) => {
      if (err) return res.status(500).send(err);
  
      let count = 0;
      for (const key in queries) {
        if (queries.hasOwnProperty(key)) {
          const query = queries[key];
  
          conn.query(query, (err, rows) => {
            if (err) return res.status(500).send(err);
  
            results[key] = rows;
  
            count++;
            if (count === Object.keys(queries).length) {
              res.status(200).json(results);
            }
          });
        }
      }
    });
  });
  

module.exports = routes;