const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const QRCodeGenerator = require('qrcode');
const HTMLtoPDF = require('html-pdf-node');
const mailSystem = require('nodemailer');

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

const transporter = mailSystem.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'NimboApi@outlook.com',
        pass: 'contrasenasegura123'
    }
});

//Middleware
app.use(myconn(mysql, dbConfig, 'single'))
app.use(express.json())

/* Habilitacion de CORS */
const cors = require('cors');
app.use(cors());


// Rutas
app.get('/', (req, res)=>{
    res.send('Welcome')
})

app.use('/api', routes)

app.get('/QRtest', (req, res) =>{
    QRCodeGenerator.toDataURL('Texto a transformar', {
        errorCorrectionLevel: 'H',
      }, function(err, data) {
        if (err)  return res.send(err)
        res.send(`<img src=\"${data}\" >`)
      });
})

app.get('/HTMLPDFTest', async (req, res) =>{
    let options = { format: 'A4' };
    let file = { content: "<h1>Welcome to html-pdf-node</h1>" };
    let PDF = await HTMLtoPDF.generatePdf(file, options);
    res.write(PDF,'binary');
    res.send()
})

app.get('/CorreosTest', async (req, res) =>{
    let conexionSistemaCorreos = await transporter.verify();

    if(conexionSistemaCorreos){
        var message = {
            from: "NimboApi@outlook.com",
            to: "a16003059@alumnos.uady.mx",
            subject: "Message test",
            text: "Prueba del sistema de correos de nimbo"
          };
          transporter.sendMail(message, (err, info) =>{
            console.info("err: " + err);
            console.info("info: " + info.response);
          })
    }
    res.send()
})


//Ejecucion de servidor
app.listen(app.get('port'), ()=> {
    console.log('Server running on port', app.get('port'))
})