const dataPengurus = [
    { nama: "Moh. Muftitamimi", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Dompu", jabatan: "Rois ‘Amm", bidang: "A. Pengurus Inti", noHp: "082236871135", foto: "placeholder.jpeg" },
    { nama: "Muhammad Tamiah", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Gerung", jabatan: "Wakil Rois ‘Amm", bidang: "A. Pengurus Inti", noHp: "081999757236", foto: "placeholder.jpeg" },
    { nama: "Ahmad Agus Alwii", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Guunungsari", jabatan: "Sekretaris ‘Ammah", bidang: "A. Pengurus Inti", noHp: "087701058661", foto: "placeholder.jpeg" },
    { nama: "Sila Watun Aini", kampus: "UIN Mataram", jurusan: "MD", alamat: "Batulayar", jabatan: "Bendahara ‘Ammah", bidang: "A. Pengurus Inti", noHp: "081337466419", foto: "placeholder.jpeg" },

    { nama: "Muhammad Asrori", kampus: "UIN Mataram", jurusan: "Matematika", alamat: "Lendang Danger", jabatan: "Kepala Departemen Kaderisasi", bidang: "B. Departemen Kaderisasi", noHp: "085338108839", foto: "placeholder.jpeg" },
    { nama: "Muhammad Dira Alfarizi", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Kekalik", jabatan: "Sekretaris Departemen Kaderisasi", bidang: "B. Departemen Kaderisasi", noHp: "087810254420", foto: "placeholder.jpeg" },
    { nama: "Sri Sukma Rani Mutiara", kampus: "UIN Mataram", jurusan: "PPI", alamat: "Suralaga", jabatan: "Anggota Departemen Kaderisasi", bidang: "B. Departemen Kaderisasi", noHp: "082340837424", foto: "placeholder.jpeg" },
    { nama: "Mardiana Musel Parhiani", kampus: "UIN Mataram", jurusan: "HES", alamat: "Batu Nyale", jabatan: "Anggota Departemen Kaderisasi", bidang: "B. Departemen Kaderisasi", noHp: "083114650356", foto: "placeholder.jpeg" },
    { nama: "Muhammad Hilmi Hidayatullah", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Praya", jabatan: "Anggota Departemen Kaderisasi", bidang: "B. Departemen Kaderisasi", noHp: "085961544291", foto: "placeholder.jpeg" },

    { nama: "Az Achmad Zainul Islam", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Ampenan", jabatan: "Kepala Departemen Humas", bidang: "C. Departemen Humas", noHp: "085955369022", foto: "placeholder.jpeg" },
    { nama: "Robi’ul Jannah", kampus: "UIN Mataram", jurusan: "PPI", alamat: "Gerung", jabatan: "Sekretaris Departemen Humas", bidang: "C. Departemen Humas", noHp: "085959194062", foto: "placeholder.jpeg" },
    { nama: "Hidayah", kampus: "UIN Mataram", jurusan: "TBI", alamat: "Narmada", jabatan: "Anggota Departemen Humas", bidang: "C. Departemen Humas", noHp: "087882217595", foto: "placeholder.jpeg" },
    { nama: "Muhammad Rizki", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Bare Julat", jabatan: "Anggota Departemen Humas", bidang: "C. Departemen Humas", noHp: "083848145875", foto: "placeholder.jpeg" },

    { nama: "Muhammad Husnul Sabrani", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Tegal Maja", jabatan: "Kepala Departemen Kajian dan Keilmuan", bidang: "D. Departemen Kajian dan Keilmuan", noHp: "082359127317", foto: "placeholder.jpeg" },
    { nama: "Ridwan", kampus: "UIN Mataram", jurusan: "PPI", alamat: "Kopang", jabatan: "Sekretaris Departemen Kajian dan Keilmuan", bidang: "D. Departemen Kajian dan Keilmuan", noHp: "081933306136", foto: "placeholder.jpeg" },
    { nama: "Hairullah", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Malaka", jabatan: "Anggota Departemen Kajian dan Keilmuan", bidang: "D. Departemen Kajian dan Keilmuan", noHp: "085961151184", foto: "placeholder.jpeg" },
    { nama: "Yulia Saputri", kampus: "UIN Mataram", jurusan: "PGMI", alamat: "Batu Nyale", jabatan: "Anggota Departemen Kajian dan Keilmuan", bidang: "D. Departemen Kajian dan Keilmuan", noHp: "087731994880", foto: "placeholder.jpeg" },
    { nama: "Safira Rizki Awaliah", kampus: "UIN Mataram", jurusan: "MD", alamat: "Bima", jabatan: "Anggota Departemen Kajian dan Keilmuan", bidang: "D. Departemen Kajian dan Keilmuan", noHp: "082340837424", foto: "placeholder.jpeg" },

    { nama: "Maulida Azzahra", kampus: "UIN Mataram", jurusan: "PBA", alamat: "Pringgarata", jabatan: "Kepala Departemen Keputrian", bidang: "E. Departemen Keputrian", noHp: "087754840866", foto: "placeholder.jpeg" },
    { nama: "Tatia Ping Sawitri", kampus: "UIN Mataram", jurusan: "HKI", alamat: "Pengadang", jabatan: "Sekretaris Departemen Keputrian", bidang: "E. Departemen Keputrian", noHp: "083166510310", foto: "placeholder.jpeg" },
    { nama: "Desi Khairunnisa", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Labuhan Haji", jabatan: "Anggota Departemen Keputrian", bidang: "E. Departemen Keputrian", noHp: "082341251619", foto: "placeholder.jpeg" },
    { nama: "Amanda Malik", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Kediri", jabatan: "Anggota Departemen Keputrian", bidang: "E. Departemen Keputrian", noHp: "087743347265", foto: "placeholder.jpeg" },
    { nama: "Fina Ainunnisa", kampus: "UIN Mataram", jurusan: "KPI", alamat: "Aik Berik", jabatan: "Anggota Departemen Keputrian", bidang: "E. Departemen Keputrian", noHp: "087731539578", foto: "placeholder.jpeg" },

    { nama: "Rahmatin Ni’am", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Batu Kute", jabatan: "Kepala Departemen Dana dan Usaha", bidang: "F. Departemen Dana dan Usaha", noHp: "087835443455", foto: "placeholder.jpeg" },
    { nama: "Wasiah", kampus: "UIN Mataram", jurusan: "KPI", alamat: "Wanasaba", jabatan: "Sekretaris Departemen Dana dan Usaha", bidang: "F. Departemen Dana dan Usaha", noHp: "083154969239", foto: "placeholder.jpeg" },
    { nama: "Khairil Muhaimin", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Praya", jabatan: "Anggota Departemen Dana dan Usaha", bidang: "F. Departemen Dana dan Usaha", noHp: "083145680884", foto: "placeholder.jpeg" },
    { nama: "Gading Nugraha Al-Gifari", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Batukliang", jabatan: "Anggota Departemen Dana dan Usaha", bidang: "F. Departemen Dana dan Usaha", noHp: "085737087737", foto: "placeholder.jpeg" },

    { nama: "Wardah Azizah Nur", kampus: "UIN Mataram", jurusan: "IQT", alamat: "Bima", jabatan: "Kepala Departemen Media", bidang: "G. Departemen Media", noHp: "081936389038", foto: "placeholder.jpeg" },
    { nama: "Akram Junaidi", kampus: "UIN Mataram", jurusan: "TI", alamat: "Sumbawa Barat", jabatan: "Sekretaris Departemen Media", bidang: "G. Departemen Media", noHp: "085737079598", foto: "placeholder.jpeg" },
    { nama: "Imron Ahmad Rofi", kampus: "UIN Mataram", jurusan: "PBA", alamat: "Tanjung", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "082235318874", foto: "placeholder.jpeg" },
    { nama: "Chairil Razani", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Malaka", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "082340434949", foto: "placeholder.jpeg" },
    { nama: "Mas Topan Abdul Aziz", kampus: "UIN Mataram", jurusan: "PAI", alamat: "Lombok Tengah", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "085955138959", foto: "placeholder.jpeg" },
    { nama: "Lina Tasya", kampus: "UIN Mataram", jurusan: "KPI", alamat: "Narmada", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "087835443441", foto: "placeholder.jpeg" },
    { nama: "Ahmad Reivan Zukhro", kampus: "UIN Mataram", jurusan: "BKI", alamat: "Lombok Timur", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "087878201008", foto: "placeholder.jpeg" },
    { nama: "Nadila Kristina", kampus: "UIN Mataram", jurusan: "KPI", alamat: "Kediri", jabatan: "Anggota Departemen Media", bidang: "G. Departemen Media", noHp: "085924764867", foto: "placeholder.jpeg" }
];

const kontainerStruktur = document.getElementById("kontainer-struktur");
const totalPengurusText = document.getElementById("totalPengurus");
const inputCari = document.getElementById("cariPengurus");

const modalBiografi = document.getElementById("modalBiografi");
const tutupModal = document.getElementById("tutupModal");
const modalFoto = document.getElementById("modalFoto");
const modalNama = document.getElementById("modalNama");
const modalJabatan = document.getElementById("modalJabatan");
const modalBidang = document.getElementById("modalBidang");
const modalProdi = document.getElementById("modalProdi");
const modalAlamat = document.getElementById("modalAlamat");
const modalNoHP = document.getElementById("modalNoHP");

function renderPengurus(daftar, kataKunciAktif = "") {
    kontainerStruktur.innerHTML = "";
    totalPengurusText.textContent = daftar.length;

    if (daftar.length === 0) {
        kontainerStruktur.innerHTML = `
            <p style="text-align:center; color:#64748b; padding:20px; background:#f8fafc; border-radius:6px; border:1px dashed #cbd5e1;">
                Pengurus dengan nama atau kata kunci "<strong>${kataKunciAktif}</strong>" tidak ditemukan.
            </p>`;
        return;
    }

    const daftarBidang = [...new Set(daftar.map(item => item.bidang))];

    daftarBidang.forEach(namaBidang => {
        const judulDept = document.createElement("h3");
        judulDept.className = "judul-departemen";
        judulDept.textContent = namaBidang;
        kontainerStruktur.appendChild(judulDept);

        const gridDept = document.createElement("div");
        gridDept.className = "grid-pengurus";

        const anggotaBidang = daftar.filter(p => p.bidang === namaBidang);

        anggotaBidang.forEach(pengurus => {
            const kartu = document.createElement("div");
            kartu.className = "kartu-pengurus";
            kartu.innerHTML = `
                <img src="${pengurus.foto}" alt="Foto ${pengurus.nama}">
                <span class="lencana-jabatan">${pengurus.jabatan}</span>
                <h4>${pengurus.nama}</h4>
                <p class="detail-pengurus">${pengurus.jurusan} • ${pengurus.kampus}</p>
                <p class="info-kontak">${pengurus.alamat} | ${pengurus.noHp}</p>
                <small style="display:block; margin-top:8px; color:#117a4e; font-weight:600;">Klik untuk detail →</small>
            `;

            kartu.addEventListener("click", function () {
                modalFoto.src = pengurus.foto;
                modalNama.textContent = pengurus.nama;
                modalJabatan.textContent = pengurus.jabatan;
                modalBidang.textContent = pengurus.bidang.replace(/^[A-G]\.\s/, "");
                modalProdi.textContent = `${pengurus.jurusan} — ${pengurus.kampus}`;
                modalAlamat.textContent = pengurus.alamat;
                modalNoHP.textContent = pengurus.noHp;
                modalBiografi.style.display = "block";
            });

            gridDept.appendChild(kartu);
        });

        kontainerStruktur.appendChild(gridDept);
    });
}

inputCari.addEventListener("input", function () {
    const kataKunci = this.value.toLowerCase().trim();

    const hasilFilter = dataPengurus.filter(p =>
        p.nama.toLowerCase().includes(kataKunci) ||
        p.jabatan.toLowerCase().includes(kataKunci) ||
        p.bidang.toLowerCase().includes(kataKunci) ||
        p.jurusan.toLowerCase().includes(kataKunci) ||
        p.alamat.toLowerCase().includes(kataKunci)
    );

    renderPengurus(hasilFilter, this.value.trim());
});

tutupModal.addEventListener("click", function () {
    modalBiografi.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modalBiografi) {
        modalBiografi.style.display = "none";
    }
});

renderPengurus(dataPengurus);