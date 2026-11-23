document.addEventListener("DOMContentLoaded", function () {
    const rawData = localStorage.getItem("dataHasilKarya");

    // Jika halaman hasil dibuka langsung tanpa mengisi form terlebih dahulu
    if (!rawData) {
        document.getElementById("bannerSukses").className = "kotak-error";
        document.getElementById("bannerSukses").innerHTML =
            "<strong>⚠️ Data Penyetoran Tidak Ditemukan!</strong><p>Silakan isi formulir partisipasi atau penyetoran karya terlebih dahulu.</p>";
        document.getElementById("wadahHasil").classList.add("sembunyikan");
        return;
    }

    const data = JSON.parse(rawData);

    // Menampilkan seluruh informasi penting dari formulir ke halaman hasil baru
    document.getElementById("resKode").textContent = data.kodePenyetoran;
    document.getElementById("resWaktu").textContent = data.waktuKirim;
    document.getElementById("resNama").textContent = data.nama;
    document.getElementById("resNIM").textContent = data.nim;
    document.getElementById("resKategori").textContent = data.kategori;
    document.getElementById("resDetail").textContent = data.detailUtama;
    document.getElementById("resLampiran").textContent = data.infoLampiran;
});