const express = require("express")

const hitungGaji = require("./hitung-gaji")
const pool = require("./db")

const app = express()
app.use(express.json())

app.get("/", function (req,res) {
    res.send("Server payroll aktif")
})

app.get("/employees", async function (req,res) {
    const result = await pool.query("SELECT id, name AS nama FROM employees")
    res.json(result.rows)
})

app.get("/employees/names", async function (req,res) {
    const result = await pool.query("SELECT name AS nama FROM employees ORDER BY id")
    const daftarNama = []
        for (const dataPegawai of result.rows) {
            daftarNama.push(dataPegawai.nama)
        }
    res.json(daftarNama)
})

app.get("/employees/count", async function (req,res) {
    const result = await pool.query ("SELECT COUNT(*) AS count FROM employees")
    const total = Number(result.rows[0].count)
    res.json({count:total})
})

app.post("/employees", async function (req,res) {
    if (req.body.nama === undefined) { 
        return res.status(400).send("Nama wajib diisi") }
    const values = [
    req.body.nama,
    req.body.email,
    req.body.employee_id,
    req.body.salary,
    req.body.account_number,
    req.body.bank_code
    ]
    if (values.some(value => value === undefined || value === null)) {
        return res.status(400).send("value bermasalah")
    }
    const sql = `
    INSERT INTO employees (name, email, employee_id, salary, account_number, bank_code)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, name AS nama
    `
    const result = await pool.query(sql,values)
    res.json(result.rows[0])
})

app.post("/payroll/preview", function (req,res) {
    const total = hitungGaji(req.body)
    res.json({total:total})
})

app.listen (3000)
