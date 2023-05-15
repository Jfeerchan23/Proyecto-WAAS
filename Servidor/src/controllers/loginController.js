const loginController = {}

loginController.login = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
         const datos ={
            id:7,
            rol:'paciente'
         }
       res.json(datos);
      })
    
};

module.exports = loginController;