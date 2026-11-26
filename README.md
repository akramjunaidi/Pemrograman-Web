<div align="center">

# 🌐 Portal Informasi & Layanan Digital UKM LDMI Al-Fajr
**Proyek Akhir Mata Kuliah Pemrograman Web — Kelas A7**  
Program Studi Teknologi Informasi, Fakultas Dakwah dan Ilmu Komunikasi  
**Universitas Islam Negeri (UIN) Mataram**

![HTML5](https://img.shields.io/badge/HTML5-Semantik-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive_Layout-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-DOM_%26_Web_Storage-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📌 Deskripsi Proyek

Repositori ini berisi dokumentasi lengkap pengembangan aplikasi web **UKM LDMI Al-Fajr UIN Mataram** yang dibangun secara bertahap mulai dari struktur dasar **HTML**, penataan visual **CSS**, hingga interaktivitas dinamis menggunakan **JavaScript (Manipulasi DOM & Web Storage API)**.

Website ini berfungsi sebagai pusat informasi organisasi, direktori 35 pengurus aktif, katalog program kerja, serta portal layanan administrasi digital (pendaftaran anggota, penyetoran karya kader, dan pengajuan layanan antarbidang) yang berjalan sepenuhnya di sisi klien (*client-side*).

---

## 👥 Identitas Anggota Kelompok (Kelas A7)

| No | Nama Lengkap | NIM | Kelas | Fokus Tanggung Jawab Utama |
| :-: | :--- | :---: | :---: | :--- |
| **1** | **Akram Junaidi** | `250306033` | A7 | Direktori 35 Pengurus (Modal Biografi & Filter), Portal Layanan Bidang, & Integrasi Repositori |
| **2** | **Alka Sanaya** | `250306047` | A7 | Profil Organisasi & Modul Formulir Rekrutmen Anggota Dinamis |
| **3** | **Nayla Ghassani** | `250306055` | A7 | Katalog Kegiatan Organisasi & Modul Formulir Penyetoran Karya Kader |

---

## 🗂️ Peta Pembagian File & Modul Per Anggota (Versi Final)

Untuk memudahkan penilaian pada tahap akhir (**`Pengumpulan Javascript - Halaman Informasi dan Formulir Dinamis/`**), berikut adalah rincian file kode yang dikerjakan oleh masing-masing anggota beserta fitur teknisnya:

### 1. Akram Junaidi (`250306033`) — Modul Organisasi, Pengurus & Layanan Bidang
| File Kode | Jenis Halaman | Implementasi Teknis & Fitur Utama |
| :--- | :--- | :--- |
| `organisasi.html` & `organisasi.js` | Halaman Informasi Dinamis | Menampilkan profil LDMI Al-Fajr, rendering **35 data pengurus** dari *array of objects* JS, fitur **pencarian nama *real-time***, **filter per bidang**, serta **Modal Biografi** interaktif saat kartu diklik. |
| `layanan.html` & `layanan.js` | Halaman Formulir Dinamis | Portal pengajuan layanan antarbidang dengan validasi input JavaScript dan penyimpanan data pengajuan ke **Web Storage**. |
| `hasil-layanan.html` & `hasil-layanan.js` | Halaman Output Dinamis | Membaca data dari **Web Storage** dan menampilkan ringkasan/bukti pengajuan layanan secara otomatis. |

### 2. Alka Sanaya (`250306047`) — Modul Rekrutmen & Pendaftaran Anggota
| File Kode | Jenis Halaman | Implementasi Teknis & Fitur Utama |
| :--- | :--- | :--- |
| `daftar.html` & `daftar.js` | Halaman Formulir Dinamis | Formulir pendaftaran calon anggota baru LDMI Al-Fajr dengan validasi kelengkapan data di sisi klien sebelum disimpan ke **Web Storage**. |
| `hasil-daftar.html` & `hasil-daftar.js` | Halaman Output Dinamis | Menampilkan kartu konfirmasi dan rincian biodata pendaftar secara dinamis berdasarkan data yang tersimpan di **Web Storage**. |

### 3. Nayla Ghassani (`250306055`) — Modul Katalog Kegiatan & Penyetoran Karya
| File Kode | Jenis Halaman | Implementasi Teknis & Fitur Utama |
| :--- | :--- | :--- |
| `kegiatan.html` & `kegiatan.js` | Halaman Informasi Dinamis | Katalog program kerja dan agenda kegiatan organisasi yang di-render dari *array* JavaScript menggunakan **manipulasi DOM** beserta fitur pencarian/filter. |
| `karya.html` & `karya.js` | Halaman Formulir Dinamis | Formulir penyetoran karya kader (tulisan, desain grafis, media dakwah) dilengkapi validasi JavaScript dan penyimpanan ke **Web Storage**. |
| `hasil-karya.html` & `hasil-karya.js` | Halaman Output Dinamis | Halaman pratinjau/tanda terima penyetoran karya yang ditarik langsung dari **Web Storage**. |

### 4. File Kolaborasi & Aset Bersama (Shared Resources)
File berikut digunakan secara kolektif oleh seluruh anggota sebagai kerangka desain dan navigasi terpadu:
* **`index.html`** *(Root)* — Gerbang navigasi utama untuk mengakses setiap tahap pengumpulan tugas dari awal hingga akhir.
* **`style.css`** — *Stylesheet* global yang menjaga konsistensi warna, tipografi, kartu (*card*), formulir, dan tata letak responsif di seluruh halaman.
* **`logo.png`, `banner.png`, `placeholder.jpeg`** — Aset identitas visual resmi UKM LDMI Al-Fajr.
* **`Data Pengurus LDMI 2026.docx`** — Dokumen sumber data kepengurusan yang diolah menjadi struktur data JavaScript.
* **Laporan Praktikum Individu (`.docx`)** — Tersedia di dalam setiap folder tahap pengumpulan dengan format `Nama Lengkap_NIM_A7.docx`.

---

## 📈 Kronologi 5 Tahap Perkembangan Tugas

Repositori ini disusun secara kronologis sesuai tahapan evaluasi mata kuliah Pemrograman Web:

| Tahap | Nama Folder di Repositori | Fokus Capaian & Evolusi Sistem | Laporan `.docx` |
| :---: | :--- | :--- | :---: |
| **1** | [`Pengumpulan HTML/`](./Pengumpulan%20HTML) | Penyusunan struktur semantik HTML murni untuk halaman terpisah (*Informasi Organisasi*, *Informasi Kegiatan*, dan *Informasi Bidang-Struktur*). | ✅ Lengkap (3 Anggota) |
| **2** | [`Pengumpulan CSS/`](./Pengumpulan%20CSS) | Penambahan `style.css` eksternal untuk mengatur tipografi, warna identitas, box model, dan tata letak halaman awal. | ✅ Lengkap (3 Anggota) |
| **3** | [`Pengumpulan HTML+CSS/`](./Pengumpulan%20HTML%2BCSS) | Integrasi navigasi 5 halaman utama (`organisasi.html`, `kegiatan.html`, `daftar.html`, `karya.html`, `layanan.html`) beserta aset banner dan logo. | ✅ Lengkap (3 Anggota) |
| **4** | [`Pengumpulan Javascript - Halaman Informasi/`](./Pengumpulan%20Javascript%20-%20Halaman%20Informasi) | Transformasi halaman informasi statis menjadi dinamis menggunakan **Array JS & Manipulasi DOM** (`organisasi.js` dan `kegiatan.js`). | ✅ Lengkap (3 Anggota) |
| **5** | [`Pengumpulan Javascript - Halaman Informasi dan Formulir Dinamis/`](./Pengumpulan%20Javascript%20-%20Halaman%20Informasi%20dan%20Formulir%20Dinamis) | **Versi Final:** Seluruh halaman informasi dan formulir (`daftar`, `karya`, `layanan`) terhubung dengan validasi JS dan **Web Storage** menuju halaman `hasil-*.html`. | ✅ Lengkap (3 Anggota) |

---

## 📁 Struktur Direktori Repositori

```text
pemrograman-web/
├── index.html                                                  # Portal navigasi utama antar tahap
├── README.md                                                   # Dokumentasi utama repositori
│
├── Pengumpulan HTML/                                           # Tahap 1: Struktur HTML dasar + Laporan
├── Pengumpulan CSS/                                            # Tahap 2: Styling CSS eksternal + Laporan
├── Pengumpulan HTML+CSS/                                       # Tahap 3: Integrasi layout 5 halaman + Aset
├── Pengumpulan Javascript - Halaman Informasi/                 # Tahap 4: DOM Manipulation (Organisasi & Kegiatan)
│
└── Pengumpulan Javascript - Halaman Informasi dan Formulir Dinamis/  # Tahap 5 (FINAL)
    ├── organisasi.html & organisasi.js                         # [Akram] Direktori 35 pengurus + Modal Biografi
    ├── layanan.html & layanan.js                               # [Akram] Formulir layanan bidang
    ├── hasil-layanan.html & hasil-layanan.js                   # [Akram] Output dinamis layanan (Web Storage)
    ├── daftar.html & daftar.js                                 # [Alka]  Formulir pendaftaran anggota
    ├── hasil-daftar.html & hasil-daftar.js                     # [Alka]  Output dinamis pendaftaran (Web Storage)
    ├── kegiatan.html & kegiatan.js                             # [Nayla] Katalog kegiatan dinamis
    ├── karya.html & karya.js                                   # [Nayla] Formulir penyetoran karya
    ├── hasil-karya.html & hasil-karya.js                       # [Nayla] Output dinamis karya (Web Storage)
    ├── style.css                                               # [Bersama] Stylesheet global aplikasi
    ├── logo.png, banner.png, placeholder.jpeg                  # [Bersama] Aset visual & media
    ├── Data Pengurus LDMI 2026.docx                            # [Bersama] Sumber data pengurus
    ├── Akram Junaidi_250306033_A7.docx                         # Laporan individu Akram
    ├── Alka Sanaya_250306047_A7.docx                           # Laporan individu Alka
    └── Nayla Ghassani_250306055_A7.docx                        # Laporan individu Nayla
