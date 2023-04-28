const express = require('express')
const routes = express.Router()

routes.get('/recepcionistas', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM recepcionistas', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

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

module.exports = routes;