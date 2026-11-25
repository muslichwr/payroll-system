const pegawai= {
    gajiPokok : 4000000,
    tunjangan : 200000,
    potongan : 100000
}

const pegawaiKedua = {
    gajiPokok : 3000000,
    tunjangan : 150000,
    potongan : 50000
}

const daftarPegawai = [pegawai, pegawaiKedua]

const hitungGaji = require("./hitung-gaji")

for (const data of daftarPegawai) { if (data.gajiPokok === undefined) {
    console.log("Gaji pokok belum diisi")
} else
    console.log(hitungGaji(data))
}