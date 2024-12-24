const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const PORT = 3040

app.use(cors())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
});

app.use(express.json())


const optionsConnectionDB = {
    host: 'localhost',
    user: 'idiomavi_porfUss',
    password: '2024PorfUss',
    database: 'idiomavi_porfolio',
    clearExpired: true,
    checkExpirationInterval: 3600000, //1hr
    expiration: 1000
}

const DB = mysql.createConnection(optionsConnectionDB)

app.get('/porfolio_api/proyectos', (req, res) => {
    const SQL_QUERY = 'SELECT * FROM proyectos'
    DB.query(SQL_QUERY, (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.send(result)
        }
    })
})

app.listen(PORT, () => {
    console.log(`corriento en el puerto http://localhost:${PORT}`)
})