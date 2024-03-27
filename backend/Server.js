const exp = require('express');
const sql2 = require('mysql2');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = exp();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'chrisluan123123',
    database:'nodues'
})

//Routes

app.get('/', (req, res) =>{
    return res.json("From backend")
})
app.post('/create', async(req,res)=>{
    const { email, password } = req.body;

    const createdAt = new Date();
    const updatedAt = new Date();
    const insertQuery = "INSERT INTO users (email, password, createdAt, updatedAt) VALUES (?, ?, ?, ?)";
    db.query(insertQuery, [email, password, createdAt, updatedAt], (err, result) => {
        if(err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ error: "Error inserting user" });
        }
        console.log("User inserted successfully");
        return res.json({ message: "User inserted successfully" });
    });
});

app.get('/checkAccount', async(req,res)=>{
    const reqs = "SELECT * FROM users"
    db.query(reqs,(err,data)=> {
        if(err) return err.json();
        return res.json();
    });
})

let port = 9900;
app.listen(port, (req,res)=>{
    console.log("Server's running...")
});