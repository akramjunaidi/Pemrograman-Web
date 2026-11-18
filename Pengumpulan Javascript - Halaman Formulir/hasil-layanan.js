document.addEventListener("DOMContentLoaded", function () {
    const rawData = localStorage.getItem("dataHasilLayanan");

    // Jika halaman hasil dibuka langsung tanpa mengisi form terlebih dahulu
    if (!rawData) {
        document.getElementById("bannerSukses").className = "kotak-error";
        document.getElementById("bannerSukses").innerHTML =
            "<strong>⚠️ Data Tidak Ditemukan!</strong><p>Silakan isi formulir terlebih dahulu pada halaman Portal Layanan.</p>";
        document.getElementById("wadahHasil").classList.add("sembunyikan");
        return;
    }

    const data = JSON.parse(rawData);

    // Menampilkan seluruh informasi penting dari formulir ke halaman hasil baru
    document.getElementById("resTiket").textContent = data.nomorTiket;
    document.getElementById("resWaktu").textContent = data.waktuKirim;
    document.getElementById("resNama").textContent = data.namaPengirim;
    document.getElementById("resNIM").textContent = data.nimPengirim;
    document.getElementById("resBidang").textContent = data.bidangTujuan;
    document.getElementById("resJenis").textContent = data.jenisInteraksi;
    document.getElementById("resRincian").textContent = data.rincianUtama;
    document.getElementById("resKeterangan").textContent = data.keteranganTambahan;
});