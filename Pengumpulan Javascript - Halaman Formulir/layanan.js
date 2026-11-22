// Data pemetaan layanan berdasarkan departemen tujuan
const layananDepartemen = {
    kaderisasi: ["Konsultasi Alur Kaderisasi", "Permohonan Mentoring Agama", "Pengajuan Sertifikat Training"],
    humas: ["Permohonan Kerjasama Ormawa", "Undangan Audensi / Benchmark", "Permohonan Pemateri Luar"],
    kajian: ["Request Topik Kajian", "Peminjaman Kitab / Referensi", "Permohonan Diskusi Publik"],
    keputrian: ["Konsultasi Kemuslimahan", "Pendaftaran Sharing Circle", "Kajian Fikih Wanita"],
    danus: ["Pemesanan Merchandise LDMI", "Kemitraan Sponsorship", "Sewa Alat Operasional"],
    media: ["Request Desain Pamflet Kegiatan", "Liputan Media & Dokumentasi", "Publikasi Informasi di Sosmed"]
};

let nilaiRating = 0;

// Seleksi Elemen DOM
const formTerpadu = document.getElementById("formTerpadu");
const pesanError = document.getElementById("pesanError");
const cekAnonim = document.getElementById("cekAnonim");
const blokIdentitas = document.getElementById("blokIdentitas");
const inputNama = document.getElementById("inputNama");
const inputNIM = document.getElementById("inputNIM");
const pilihBidang = document.getElementById("pilihBidang");

const radioInteraksi = document.querySelectorAll('input[name="interaksi"]');
const petunjukDetail = document.getElementById("petunjukDetail");
const blokLayanan = document.getElementById("blokLayanan");
const opsiLayanan = document.getElementById("opsiLayanan");
const blokEvaluasi = document.getElementById("blokEvaluasi");
const ratingBintang = document.getElementById("ratingBintang");
const inputEvaluasi = document.getElementById("inputEvaluasi");
const blokAspirasi = document.getElementById("blokAspirasi");
const judulIde = document.getElementById("judulIde");
const deskripsiIde = document.getElementById("deskripsiIde");
const sisaKarakter = document.getElementById("sisaKarakter");

// 1. Toggle Mode Anonim
cekAnonim.addEventListener("change", function () {
    if (this.checked) {
        inputNama.disabled = true;
        inputNIM.disabled = true;
        inputNama.value = "";
        inputNIM.value = "";
        blokIdentitas.classList.add("nonaktif");
    } else {
        inputNama.disabled = false;
        inputNIM.disabled = false;
        blokIdentitas.classList.remove("nonaktif");
    }
});

// 2. Isi Opsi Layanan Dinamis Sesuai Departemen
pilihBidang.addEventListener("change", function () {
    const dept = this.value;
    opsiLayanan.innerHTML = '<option value="">-- Pilih Layanan Spesifik --</option>';

    if (dept && layananDepartemen[dept]) {
        layananDepartemen[dept].forEach(layanan => {
            const opt = document.createElement("option");
            opt.value = layanan;
            opt.textContent = layanan;
            opsiLayanan.appendChild(opt);
        });
    }
});

// 3. Tampilkan Sub-Form Sesuai Radio Button Interaksi
radioInteraksi.forEach(radio => {
    radio.addEventListener("change", function () {
        petunjukDetail.classList.add("sembunyikan");
        blokLayanan.classList.add("sembunyikan");
        blokEvaluasi.classList.add("sembunyikan");
        blokAspirasi.classList.add("sembunyikan");

        if (this.value === "layanan") {
            blokLayanan.classList.remove("sembunyikan");
        } else if (this.value === "evaluasi") {
            blokEvaluasi.classList.remove("sembunyikan");
        } else if (this.value === "aspirasi") {
            blokAspirasi.classList.remove("sembunyikan");
        }
    });
});

// 4. Rating Bintang Interaktif
ratingBintang.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const posisiKlik = e.clientX - rect.left;
    const hitungRating = Math.ceil((posisiKlik / rect.width) * 5);

    nilaiRating = Math.min(Math.max(hitungRating, 1), 5);

    let tampilanBintang = "";
    for (let i = 1; i <= 5; i++) {
        tampilanBintang += i <= nilaiRating ? "★ " : "☆ ";
    }
    this.textContent = tampilanBintang.trim();
});

// 5. Penghitung Sisa Karakter Deskripsi Ide
deskripsiIde.addEventListener("input", function () {
    sisaKarakter.textContent = 300 - this.value.length;
});

// Fungsi Menampilkan Pesan Validasi Error
function tampilkanError(pesan) {
    pesanError.textContent = "⚠️ " + pesan;
    pesanError.classList.remove("sembunyikan");
    pesanError.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 6. Validasi Input Wajib & Pengiriman Data ke Halaman Hasil Baru
formTerpadu.addEventListener("submit", function (event) {
    event.preventDefault();
    pesanError.classList.add("sembunyikan");

    const isAnonim = cekAnonim.checked;
    const nama = inputNama.value.trim();
    const nim = inputNIM.value.trim();
    const kodeBidang = pilihBidang.value;
    const namaBidang = pilihBidang.options[pilihBidang.selectedIndex].text;

    let jenisDipilih = "";
    radioInteraksi.forEach(r => {
        if (r.checked) jenisDipilih = r.value;
    });

    // Validasi Input Wajib
    if (!isAnonim && (nama === "" || nim === "")) {
        tampilkanError("Nama Lengkap dan NIM wajib diisi (atau centang opsi Anonim).");
        return;
    }

    if (kodeBidang === "") {
        tampilkanError("Silakan pilih Bidang / Departemen tujuan terlebih dahulu.");
        return;
    }

    if (jenisDipilih === "") {
        tampilkanError("Silakan pilih salah satu Jenis Interaksi.");
        return;
    }

    let labelInteraksi = "";
    let rincianUtama = "";
    let keteranganTambahan = "-";

    if (jenisDipilih === "layanan") {
        if (opsiLayanan.value === "") {
            tampilkanError("Silakan pilih Jenis Layanan Spesifik yang dibutuhkan.");
            return;
        }
        labelInteraksi = "Request Layanan Bidang";
        rincianUtama = opsiLayanan.value;
        keteranganTambahan = "Menunggu tindak lanjut admin departemen terkait.";
    } else if (jenisDipilih === "evaluasi") {
        const ulasan = inputEvaluasi.value.trim();
        if (nilaiRating === 0 || ulasan === "") {
            tampilkanError("Berikan rating bintang dan tuliskan ulasan evaluasi Anda.");
            return;
        }
        labelInteraksi = "Evaluasi & Penilaian Kinerja";
        rincianUtama = `${"★".repeat(nilaiRating)}${"☆".repeat(5 - nilaiRating)} (${nilaiRating}/5 Bintang)`;
        keteranganTambahan = ulasan;
    } else if (jenisDipilih === "aspirasi") {
        const judul = judulIde.value.trim();
        const deskripsi = deskripsiIde.value.trim();
        if (judul === "" || deskripsi === "") {
            tampilkanError("Judul Gagasan dan Deskripsi Lengkap wajib diisi.");
            return;
        }
        labelInteraksi = "Pengajuan Ide / Aspirasi Baru";
        rincianUtama = judul;
        keteranganTambahan = deskripsi;
    }

    // Pengolahan Data Hasil Formulir
    const nomorTiket = "LDMI-" + Math.floor(100000 + Math.random() * 900000);
    const waktuKirim = new Date().toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short"
    });

    const dataHasil = {
        nomorTiket: nomorTiket,
        waktuKirim: waktuKirim,
        namaPengirim: isAnonim ? "Anonim (Identitas Disembunyikan)" : nama,
        nimPengirim: isAnonim ? "-" : nim,
        bidangTujuan: namaBidang,
        jenisInteraksi: labelInteraksi,
        rincianUtama: rincianUtama,
        keteranganTambahan: keteranganTambahan
    };

    // Simpan ke localStorage dan buka halaman hasil baru
    localStorage.setItem("dataHasilLayanan", JSON.stringify(dataHasil));
    window.location.href = "hasil-layanan.html";
});