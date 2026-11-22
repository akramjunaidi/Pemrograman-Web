// Seleksi Elemen DOM
const formKarya = document.getElementById("formKarya");
const pesanError = document.getElementById("pesanError");
const inputNama = document.getElementById("namaPengirim");
const inputNIM = document.getElementById("nimPengirim");
const kategoriInput = document.getElementById("kategoriInput");

const blokDaftarEvent = document.getElementById("blokDaftarEvent");
const pilihEvent = document.getElementById("pilihEvent");
const blokKaryaTulisan = document.getElementById("blokKaryaTulisan");
const judulKarya = document.getElementById("judulKarya");
const fileDokumen = document.getElementById("fileDokumen");
const blokKaryaVideo = document.getElementById("blokKaryaVideo");
const urlKarya = document.getElementById("urlKarya");

const previewArea = document.getElementById("previewArea");
const teksPreview = document.getElementById("teksPreview");

// 1. Tampilkan Blok Input Dinamis Berdasarkan Kategori
kategoriInput.addEventListener("change", function () {
    blokDaftarEvent.classList.add("sembunyikan");
    blokKaryaTulisan.classList.add("sembunyikan");
    blokKaryaVideo.classList.add("sembunyikan");

    if (this.value === "event") {
        blokDaftarEvent.classList.remove("sembunyikan");
    } else if (this.value === "tulisan") {
        blokKaryaTulisan.classList.remove("sembunyikan");
    } else if (this.value === "video") {
        blokKaryaVideo.classList.remove("sembunyikan");
    }

    perbaruiPreview();
});

// 2. Pratinjau Real-Time Sebelum Dikirim
function perbaruiPreview() {
    const nama = inputNama.value.trim() || "Peserta";
    const kategori = kategoriInput.value;

    if (kategori === "") {
        previewArea.classList.add("sembunyikan");
        return;
    }

    previewArea.classList.remove("sembunyikan");

    if (kategori === "event") {
        const namaEvent = pilihEvent.options[pilihEvent.selectedIndex].text;
        teksPreview.innerHTML = `<strong>${nama}</strong> mendaftar pada kegiatan: <em>${namaEvent}</em>`;
    } else if (kategori === "tulisan") {
        const judul = judulKarya.value.trim() || "(Judul belum diisi)";
        const namaFile = fileDokumen.files.length > 0 ? fileDokumen.files[0].name : "(Belum memilih file)";
        teksPreview.innerHTML = `<strong>${nama}</strong> menyetor Karya Tulisan: "<em>${judul}</em>" — Berkas: ${namaFile}`;
    } else if (kategori === "video") {
        const tautan = urlKarya.value.trim() || "(Tautan belum diisi)";
        teksPreview.innerHTML = `<strong>${nama}</strong> menyetor Karya Desain/Video: <em>${tautan}</em>`;
    }
}

[inputNama, pilihEvent, judulKarya, urlKarya].forEach(el => {
    el.addEventListener("input", perbaruiPreview);
});
fileDokumen.addEventListener("change", perbaruiPreview);

// Fungsi Menampilkan Pesan Validasi Error
function tampilkanError(pesan) {
    pesanError.textContent = "⚠️ " + pesan;
    pesanError.classList.remove("sembunyikan");
    pesanError.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 3. Validasi Input Wajib & Pengiriman Data ke Halaman Hasil Baru
formKarya.addEventListener("submit", function (event) {
    event.preventDefault();
    pesanError.classList.add("sembunyikan");

    const nama = inputNama.value.trim();
    const nim = inputNIM.value.trim();
    const kategori = kategoriInput.value;
    const labelKategori = kategoriInput.options[kategoriInput.selectedIndex].text;

    if (nama === "") {
        tampilkanError("Nama Lengkap wajib diisi.");
        return;
    }

    if (nim === "") {
        tampilkanError("NIM wajib diisi.");
        return;
    }

    if (kategori === "") {
        tampilkanError("Silakan pilih Kategori Keperluan terlebih dahulu.");
        return;
    }

    let detailUtama = "";
    let infoLampiran = "-";

    if (kategori === "event") {
        detailUtama = pilihEvent.options[pilihEvent.selectedIndex].text;
        infoLampiran = "Terdaftar sebagai peserta kegiatan resmi LDMI Al-Fajr.";
    } else if (kategori === "tulisan") {
        const judul = judulKarya.value.trim();
        if (judul === "") {
            tampilkanError("Judul Tulisan wajib diisi.");
            return;
        }
        if (fileDokumen.files.length === 0) {
            tampilkanError("Silakan unggah dokumen karya (PDF/DOCX) terlebih dahulu.");
            return;
        }
        const berkas = fileDokumen.files[0];
        const ukuranKB = (berkas.size / 1024).toFixed(1);
        detailUtama = judul;
        infoLampiran = `${berkas.name} (${ukuranKB} KB)`;
    } else if (kategori === "video") {
        const tautan = urlKarya.value.trim();
        if (tautan === "") {
            tampilkanError("Link Google Drive / YouTube Karya wajib diisi.");
            return;
        }
        detailUtama = "Karya Desain / Video Digital";
        infoLampiran = tautan;
    }

    // Pengolahan data penyetoran
    const kodePenyetoran = "KRY-" + Math.floor(100000 + Math.random() * 900000);
    const waktuKirim = new Date().toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short"
    });

    const dataHasil = {
        kodePenyetoran: kodePenyetoran,
        waktuKirim: waktuKirim,
        nama: nama,
        nim: nim,
        kategori: labelKategori,
        detailUtama: detailUtama,
        infoLampiran: infoLampiran
    };

    // Simpan ke localStorage dan arahkan ke halaman hasil baru
    localStorage.setItem("dataHasilKarya", JSON.stringify(dataHasil));
    window.location.href = "hasil-karya.html";
});