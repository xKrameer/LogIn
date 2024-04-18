exports.createUser = async (req, res) => {
    try {
/*         connection.query("SELECT * FROM proyectologin.users", function(error, response, fields) {
            response.map(rsp => {
                console.log(rsp)
            })
        }) */
        const data = req.body
        console.log(data.body)
        connection
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

/* INSERT INTO `proyectologin`.`users` (`username`, `password`) VALUES ('jdballen', '1212'); */