document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      var nama = document.getElementById("nama").value;
      var email = document.getElementById("email").value;
      var pesan = document.getElementById("pesan").value;
      var errorMessage = document.getElementById("errorMessage");
      var successMessage = document.getElementById("successMessage");

      errorMessage.textContent = "";
      successMessage.textContent = "";

      // Validasi Nama
      if (nama.trim() === "") {
        errorMessage.textContent = "Nama tidak boleh kosong!";
        event.preventDefault(); // Mencegah pengiriman form
        return;
      }

      // Validasi Email
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email tidak valid!";
        event.preventDefault(); // Mencegah pengiriman form
        return;
      }

      // Validasi Pesan
      if (pesan.trim() === "") {
        errorMessage.textContent = "Pesan tidak boleh kosong!";
        event.preventDefault(); // Mencegah pengiriman form
        return;
      }

      // Menampilkan pesan sukses
      successMessage.textContent = "Terima kasih, pesan Anda telah dikirim!";
      event.preventDefault(); // Hapus baris ini jika Anda ingin mengirimkan form
    });
  } else {
    console.error("Form dengan ID 'contactForm' tidak ditemukan.");
  }
});

// Fungsi menyapa
function greet() {
  alert("Ini adalah website personal milik  Norbilouz!");
}

// Fungsi modal
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModal");
  var span = document.getElementsByClassName("close")[0];

  if (btn && modal && span) {
    btn.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  } else {
    console.error("Elemen modal tidak ditemukan.");
  }
});
