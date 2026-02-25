// Menambahkan event listener agar fungsi jalan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Mengambil elemen form
    const form = document.getElementById('waForm');

    // Menambahkan event submit pada form
    form.addEventListener('submit', function(event) {
        // Mencegah form refresh halaman (perilaku default form)
        event.preventDefault();

        // Memanggil fungsi kirim pesan
        sendToWA();
    });

});

function sendToWA() {
    // 1. Ambil nilai dari input form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const layanan = document.getElementById('jenis_layanan').value;
    const pesan = document.getElementById('pesan').value;

    // 2. Ganti nomor WhatsApp tujuan di sini
    // PENTING: Gunakan format internasional (62 untuk Indonesia), tanpa tanda + atau -
    // Contoh: 6281234567890
    const nomorWA = "6289631746622"; 

    // 3. Format teks pesan yang akan dikirim
    // Tanda \n untuk Enter (baris baru), * untuk Bold (tebal)
    const text = `*Pemesanan Ambulance*\n\n` +
                 `*Nama:* ${nama}\n` +
                 `*Email:* ${email}\n` +
                 `*Layanan:* ${layanan}\n` +
                 `*Detail Pesan:*\n${ pesan }`;

    // 4. Encode teks agar aman untuk digunakan di URL
    const encodedText = encodeURIComponent(text);

    // 5. Buat URL lengkap WhatsApp
    const url = `https://wa.me/${nomorWA}?text=${encodedText}`;

    // 6. Buka tab baru untuk membuka WhatsApp
    window.open(url, '_blank');
}

    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Toggle menu
    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Tutup menu setelah klik link (mobile)
    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });
