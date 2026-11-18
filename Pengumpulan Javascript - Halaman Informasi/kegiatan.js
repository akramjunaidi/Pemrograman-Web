const dataKegiatan = [
    { nama: "Public Speaking Class", deskripsi: "Pelatihan komunikasi dan teknik berorasi di depan umum.", kategori: "Pelatihan" },
    { nama: "MABIT", deskripsi: "Malam Bina Iman dan Taqwa untuk mempererat ukhuwah kader.", kategori: "Spiritual" },
    { nama: "Creative Media Class", deskripsi: "Pelatihan desain grafis, fotografi, dan editing video.", kategori: "Pelatihan" },
    { nama: "Safari Ramadhan", deskripsi: "Kegiatan sosial dan dakwah masyarakat di bulan Ramadhan.", kategori: "Sosial" },
    { nama: "Dauroh Al-Qur'an", deskripsi: "Bimbingan dan pendalaman bacaan serta hafalan Al-Qur'an.", kategori: "Spiritual" },
    { nama: "Business Innovation Lab", deskripsi: "Wadah kewirausahaan dan inkubasi bisnis mahasiswa.", kategori: "Ekonomi" }
];

const kontainerKegiatan = document.getElementById('kontainerKegiatan');
const totalKegiatanText = document.getElementById('totalKegiatan');
const inputCari = document.getElementById('inputCari');
function renderKegiatan(daftar) {
    kontainerKegiatan.innerHTML = '';
    totalKegiatanText.textContent = daftar.length;
    if (daftar.length === 0) {
        kontainerKegiatan.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#777;">Kegiatan tidak ditemukan.</p>';
        return;
    }

    daftar.forEach(item => {
        const kartu = document.createElement('div');
        kartu.className = 'item-kegiatan';
        kartu.innerHTML = `
            <h3>${item.nama}</h3>
            <span class="lencana-kategori">${item.kategori}</span>
            <p>${item.deskripsi}</p>
        `;
        kontainerKegiatan.appendChild(kartu);
    });
}

inputCari.addEventListener('input', function() {
    const kataKunci = this.value.toLowerCase();
    const hasilFilter = dataKegiatan.filter(item => 
        item.nama.toLowerCase().includes(kataKunci) || 
        item.deskripsi.toLowerCase().includes(kataKunci) ||
        item.kategori.toLowerCase().includes(kataKunci)
    );
    renderKegiatan(hasilFilter);
});

renderKegiatan(dataKegiatan);