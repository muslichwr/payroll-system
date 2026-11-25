function hitungGaji(dataPegawai) {
    return dataPegawai.gajiPokok + dataPegawai.tunjangan - dataPegawai.potongan + 50000
}

module.exports = hitungGaji