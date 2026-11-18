// Seleksi Elemen DOM
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanError = document.getElementById("pesanError");
const inputNama = document.getElementById("namaLengkap");
const inputNIM = document.getElementById("nimAnggota");
const selectProdi = document.getElementById("prodiAnggota");
const inputEmail = document.getElementById("emailAnggota");
const inputWA = document.getElementById("waAnggota");
const inputMotivasi = document.getElementById("motivasi");
const sisaKarakterMotivasi = document.getElementById("sisaKarakterMotivasi");

// 1. Penghitung Sisa Karakter Real-Time pada Kolom Motivasi
inputMotivasi.addEventListener("input", function () {
    const sisa = 200 - this.value.length;
    sisaKarakterMotivasi.textContent = sisa;
    sisaKarakterMotivasi.style.color = sisa <= 25 ? "#dc2626" : "inherit";
});

// Fungsi Menampilkan Pesan Validasi Error
function tampilkanError(pesan) {
    pesanError.textContent = "⚠️ " + pesan;
    pesanError.classList.remove("sembunyikan");
    pesanError.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 2. Validasi Input Wajib & Pengiriman Data ke Halaman Hasil Baru
formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();
    pesanError.classList.add("sembunyikan");

    const nama = inputNama.value.trim();
    const nim = inputNIM.value.trim();
    const kodeProdi = selectProdi.value;
    const namaProdi = selectProdi.options[selectProdi.selectedIndex].text;
    const email = inputEmail.value.trim();
    const wa = inputWA.value.trim();
    const motivasi = inputMotivasi.value.trim();

    // Validasi sederhana agar input wajib tidak kosong
    if (nama === "") {
        tampilkanError("Nama Lengkap wajib diisi.");
        return;
    }

    if (nim === "") {
        tampilkanError("NIM wajib diisi.");
        return;
    }

    if (kodeProdi === "") {
        tampilkanError("Silakan pilih Program Studi Anda.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        tampilkanError("Masukkan alamat Email yang valid.");
        return;
    }

    if (wa === "" || wa.length < 10) {
        tampilkanError("Masukkan Nomor WhatsApp aktif (minimal 10 digit).");
        return;
    }

    if (motivasi === "") {
        tampilkanError("Motivasi Bergabung wajib diisi.");
        return;
    }

    // Pengolahan data pendaftaran
    const nomorRegistrasi = "OPREC-" + Math.floor(100000 + Math.random() * 900000);
    const waktuDaftar = new Date().toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short"
    });

    const dataHasil = {
        nomorRegistrasi: nomorRegistrasi,
        waktuDaftar: waktuDaftar,
        nama: nama,
        nim: nim,
        prodi: `${namaProdi} (${kodeProdi})`,
        email: email,
        wa: wa,
        motivasi: motivasi
    };

    // Simpan ke localStorage dan arahkan ke halaman hasil baru
    localStorage.setItem("dataHasilDaftar", JSON.stringify(dataHasil));
    window.location.href = "hasil-daftar.html";
});