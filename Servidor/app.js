const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const keys = require('./settings/keys')

app.set('key', keys.key);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(3000, ()=>{
    console.log('servidor UP en http://localhost:3000');
});

//en el '/' se pone la ruta donde van a entrar los datos para devolver el token
app.post('/', (req, res)=>{
    //Aqui se controla que el usuario y el password sean correctos, hay que cambiar las condiciones del if
    if(req.body.usuario == 'admin' && req.body.pass == '12345'){
        const payload = {
            check:true
        };
        //Aqui se indica en cuanto tiempo expira el token
        const token = jwt.sign(payload, "clavesupermegasecreta",{
            expiresIn: '7d'
        });

        res.json({
            message:'Autenticación Exitosa!!',
            token: token
        });
    }else{
        res.json({
            message:'Usuario o Password incorrectos'
        });
    }
});

//Ejemplo//
app.post('/verificacion', (req, res)=>{
    const aquitaToken=req.body.token

    var payload
	try {
		payload = jwt.verify(req.body.token, "clavesupermegasecreta")
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {

			return res.status(401).end()
		}
		return res.status(400).end()
	}
	res.send(`Welcome ${payload.username}!`)

})

