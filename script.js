// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Open / close mobile menu

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close menu after clicking navigation

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// =========================
// NAVIGATION
// =========================

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // =========================
    // AKTIFKAN MENU YANG DIKLIK
    // =========================

    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");

    // =========================
    // SCROLL KE TARGET
    // =========================

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const header = document.querySelector(".header");
      const headerHeight = header.offsetHeight;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // =========================
    // MOBILE MENU
    // =========================

    navMenu.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// =========================
// SCROLL TO TOP
// =========================

const backTop = document.querySelector(".back-top");

if (backTop) {
  backTop.addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =========================
// SKILLS - LIHAT SEMUA
// =========================

const seeAllSkills = document.getElementById("see-all-skills");
const extraSkills = document.querySelectorAll(".extra-skill");

if (seeAllSkills) {
  seeAllSkills.addEventListener("click", function (e) {
    e.preventDefault();

    const isShowing = this.classList.contains("showing");

    extraSkills.forEach((skill) => {
      skill.classList.toggle("show", !isShowing);
    });

    if (!isShowing) {
      this.classList.add("showing");

      this.innerHTML = 'Sembunyikan Skills <i class="fas fa-arrow-up"></i>';
    } else {
      this.classList.remove("showing");

      this.innerHTML = 'Lihat Semua Skills <i class="fas fa-arrow-right"></i>';
    }
  });
}

// =========================
// PROJECT SLIDER
// =========================

const slides = document.querySelectorAll(".project-slide");
const dots = document.querySelectorAll(".project-dot");

const prevButton = document.querySelector(".project-prev");
const nextButton = document.querySelector(".project-next");

let currentSlide = 0;

function showSlide(index) {
  if (slides.length === 0) return;

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// Tombol Next

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
}

// Tombol Previous

if (prevButton) {
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
}

// Titik indikator

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// =========================
// AUTO SLIDE PROJECT
// =========================

document.querySelectorAll(".project-card").forEach((card) => {
  const nextButton = card.querySelector(".project-next");

  if (!nextButton) return;

  setInterval(() => {
    nextButton.click();
  }, 3000);
});

// =========================
// CERTIFICATIONS - LIHAT SEMUA
// =========================

const seeAllCertifications = document.getElementById("see-all-certifications");

const certificationList = document.querySelector(".certification-list");

if (seeAllCertifications && certificationList) {
  seeAllCertifications.addEventListener("click", function (e) {
    // Mencegah href="#" membuat halaman scroll ke atas
    e.preventDefault();

    // Tampilkan / sembunyikan gambar sertifikat
    certificationList.classList.toggle("show-certificates");
  });
}
