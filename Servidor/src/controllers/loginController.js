const loginController = {}

loginController.login = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        //Que los roles sean por numeros
       /*  paciente-1
        medico-2
        recepcion-3
        admin-4 */
         const datos ={
            id:8,
            rol:3
         }
       res.json(datos);
      })
    
};

module.exports = loginController;