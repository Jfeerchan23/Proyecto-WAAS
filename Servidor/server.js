const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT|| 8080)
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nimbo'
}

//Middlewares
app.use(myconn(mysql, dbConfig, 'single'))
app.use(express.json())

/* Habilitacion de CORS */
const cors = require('cors');
app.use(cors());


// Rutas
app.use('/api', routes)

//Ejecucion de servidor
app.listen(app.get('port'), ()=> {
    console.log('Server running on port', app.get('port'))
})