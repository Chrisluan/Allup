const exp = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = exp();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "chrisluan123123",
    database:"nodues"
})

//Routes

app.get('/', (req, res) =>{
    
    return res.json("From backend")
})



app.post('/create', async (req, res) => {
    const { email, password, userName } = req.body;

    const createdAt = new Date();
    const updatedAt = new Date();
    const insertUserQuery = "INSERT INTO users (email, password, createdAt, updatedAt, userName) VALUES (?, ?, ?, ?, ?)";

    db.query(insertUserQuery, [email, password, createdAt, updatedAt, userName], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ error: "Error inserting user" });
        }

        const userId = result.insertId;
        const initialAmount = 0;
        const flex = 0;
        const fix = 0;
        const initialPaymentDate = new Date();
        const insertPaymentHistoryQuery = "INSERT INTO paymenthistory (user_id, monthValue, paymentdate, flex, fix) VALUES (?, ?, ?, ?, ?)";

        db.query(insertPaymentHistoryQuery, [userId, initialAmount, initialPaymentDate, flex, fix], (err, result) => {
            if (err) {
                console.error("Error inserting payment history:", err);
                return res.status(500).json({ error: "Error inserting payment history" });
            }

            console.log("User and payment history inserted successfully");
            res.json({ message: "User and payment history inserted successfully" }); // Envie a resposta apenas uma vez aqui
        });
    });
});


app.get('/paymenthistory/:userId', async (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT * FROM paymenthistory WHERE user_id = ?';

    db.query(query, [userId], (err, data) => {
        if (err) {
            console.error("Error fetching payment history:", err);
            return res.status(500).json({ error: "Error fetching payment history" });
        }
        return res.json(data);
    });
});

// Other routes remain the same

app.get('/checkRegister', async(req,res)=>{
    const { email } = req.query;
    const reqs = "SELECT * FROM users WHERE email = ?";
    var req = db.query(reqs, [email], (err,data)=> {
        if(err) {
            console.error("Error checking user account:", err);
            return res.status(500).json({ error: "Error checking user account" });
        }
        if(data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log(data[0])
        return res.json(data[0]);
    });
   
});



app.get('/checkAccount', async(req,res)=>{
    const { email, password } = req.query;
    const reqs = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(reqs, [email, password], (err,data)=> {
        if(err) {
            console.error("Error checking user account:", err);
            return res.status(500).json({ error: "Error checking user account" });
        }
        if(data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(data[0]);
    });
});
let port = 9900;
app.listen(port, (req,res)=>{
    console.log("Server's running...")
});