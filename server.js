const express = require("express")

const hitungGaji = require("./hitung-gaji")

const app = express()
app.use(express.json())

const daftarPegawai = [
    {id: 1, nama: "Rina"}
]

app.get("/", function (req,res) {
    res.send("Server payroll aktif")
})

app.get("/employees", function (req,res) {
    res.json(daftarPegawai)
})

app.post("/employees", function (req,res) {
    if (req.body.nama === undefined) {
        return res.status(400).send("Nama wajib diisi")
    }
    daftarPegawai.push(req.body)
    res.json(req.body)
})

app.post("/payroll/preview", function (req,res) {
    const total = hitungGaji(req.body)
    res.json({total:total})
})

app.listen (3000)