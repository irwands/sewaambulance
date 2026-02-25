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
// === AMBULANCE INTERAKTIF ===

const ambulanceImg = document.querySelector('.ambulance-img');
const ambulanceWrapper = document.querySelector('.ambulance-wrapper');
const lights = document.querySelectorAll('.light');

// 1. Hover effect
ambulanceImg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
});

ambulanceImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// 2. Click effect (Klakson)
ambulanceImg.addEventListener('click', function() {
    // Efek getar
    this.style.transition = 'transform 0.1s';
    this.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
    
    // Lampu menyangat terang
    lights.forEach(light => {
        light.style.background = '#ff6666';
        light.style.boxShadow = '0 0 40px #ff0000, 0 0 80px #ff0000, 0 0 120px #ff0000';
    });
    
    setTimeout(() => {
        lights.forEach(light => {
            light.style.background = '#ff0000';
            light.style.boxShadow = '0 0 20px #ff0000, 0 0 40px #ff0000';
        });
    }, 200);
});


// 3. Parallax effect saat scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const ambulance = document.querySelector('.ambulance-img');
    
    if (scrollY > 0 && window.innerWidth > 768) {
        // Gambar bergerak ke kiri pelan
        const moveX = scrollY * 0.08;
        ambulance.style.transform = `translateX(-${moveX}px)`;
    } else {
        ambulance.style.transform = 'translateX(0)';
    }
});


// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// === REVEAL ON SCROLL ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    }); 
}, observerOptions);

document.querySelectorAll('.services').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
