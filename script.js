// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 1. DAFTAR FILE GAMBAR
// Pastikan nama file "tegaya.png" sudah sesuai dengan yang kamu rename
const noImages = [
    "yakin.png",
    "beneran nih.png",
    "pikirin lagi.png",
    "plis klik yes.png",
    "jahat banget.png",
    "nanti nyesel lho.png",
    "gak mau tau klik yes.png",
    "kok masih NO sih.png",
    "tegaya.png" 
];

// Preload gambar
noImages.forEach((src) => {
    const img = new Image();
    img.src = src;
});

let noIndex = 0;
let yesScale = 1;

// 2. LOGIKA BUKA AMPLOP
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// 3. LOGIKA TOMBOL NO
yesBtn.style.transition = "transform 0.3s ease"; 

noBtn.addEventListener("click", () => {
    
    // A. Ganti Gambar (Jika belum habis)
    if (noIndex < noImages.length) {
        noBtn.src = noImages[noIndex]; 
        noIndex++; 
    }
    
    // B. Perbesar Tombol Yes (Selalu jalan)
    yesScale += 0.5; 
    
    // Pindahkan YES ke tengah layer paling atas
    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.zIndex = "1000"; 
    }
    
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// 4. LOGIKA TOMBOL YES (PESAN AKHIR & WHATSAPP)
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    
    // Animasi window final
    document.querySelector(".letter-window").classList.add("final");
    
    // Sembunyikan semua tombol
    buttons.style.display = "none";
    yesBtn.style.display = "none"; 

    // Tampilkan pesan akhir
    finalText.style.display = "block";
    
    // Klik pesan -> WhatsApp
    finalText.onclick = function() {
        window.location.href = "https://wa.me/6282249912100";
    };
});
