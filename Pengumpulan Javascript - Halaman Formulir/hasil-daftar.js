document.addEventListener("DOMContentLoaded", function () {
    const rawData = localStorage.getItem("dataHasilDaftar");

    // Jika halaman hasil dibuka tanpa melalui pengisian formulir
    if (!rawData) {
        document.getElementById("bannerSukses").className = "kotak-error";
        document.getElementById("bannerSukses").innerHTML =
            "<strong>⚠️ Data Pendaftaran Tidak Ditemukan!</strong><p>Silakan lengkapi formulir Open Recruitment terlebih dahulu.</p>";
        document.getElementById("wadahHasil").classList.add("sembunyikan");
        return;
    }

    const data = JSON.parse(rawData);

    // Menampilkan seluruh informasi penting dari formulir ke halaman hasil baru
    document.getElementById("resNoReg").textContent = data.nomorRegistrasi;
    document.getElementById("resWaktu").textContent = data.waktuDaftar;
    document.getElementById("resNama").textContent = data.nama;
    document.getElementById("resNIM").textContent = data.nim;
    document.getElementById("resProdi").textContent = data.prodi;
    document.getElementById("resEmail").textContent = data.email;
    document.getElementById("resWA").textContent = data.wa;
    document.getElementById("resMotivasi").textContent = data.motivasi;
});