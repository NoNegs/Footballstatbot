const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static("./public"))

app.use(morgan('combined'))

app.post('/suggestions_create', (req, res) => {
    console.log("Trying to store new suggestion")

    console.log("First Name: " + req.body.create_first_name)
    const firstName = req.body.create_first_name
    const secondName = req.body.create_second_name
    const suggestions = req.body.create_suggestions


    const queryString = "INSERT INTO suggestions (first_name, second_name, suggestions) VALUES (?, ?, ?)"
    getConnection().query(queryString, [firstName, secondName, suggestions], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted new suggestion")
        res.end()
    })

})

function getConnection () {
    return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nationwide'
})
}

app.get('/liverpool/:month', (req, res) => {
    console.log("Fetching goals scored in the Month of " + req.params.month)
   
    const connection = getConnection()
    
    const gMonth = req.params.month
    const queryString = "SELECT * FROM Liverpool WHERE Month = ?"
    connection.query(queryString, [gMonth], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query of goals: " + err)
            res.sendStatus(500)
            return
        }
        console.log("I think goals were fetched successfully")
       res.json(rows)
    })

})

app.get('/liverpool', (req, res) => {
   
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'nationwide'
    })
    
    const queryString = "SELECT * FROM Liverpool"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query goals: " + err)
            res.sendStatus(500)
            return
        }
        res.json(rows)
    })

})

app.listen(3003, () => {
    console.log("Server is up and listening on 3003...")
})