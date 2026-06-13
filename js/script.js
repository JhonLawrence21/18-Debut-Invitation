/* =========================================================
   MELANIE SHANE CABOLBOL - 18th DEBUT INVITATION
   Vanilla JavaScript
   ========================================================= */

/* ---------- LOADING SCREEN ---------- */
(function initLoading() {
  const loaderEnter = document.getElementById('loaderEnter');
  const loadingScreen = document.getElementById('loading-screen');
  if (!loaderEnter || !loadingScreen) return;

  document.body.style.overflow = 'hidden';

  function showEnterButton() {
    loaderEnter.classList.add('show');
  }

  function enterSite() {
    loadingScreen.classList.add('hidden');
    document.body.style.overflow = 'auto';
    playMusic();
  }

  // Show the "Tap to Open" button after DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(showEnterButton, 2200);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(showEnterButton, 2200);
    });
  }

  // Fallback: force show button after 6s no matter what
  setTimeout(showEnterButton, 6000);

  loaderEnter.addEventListener('click', enterSite);
  loaderEnter.addEventListener('touchend', (e) => {
    e.preventDefault();
    enterSite();
  });
})();

/* ---------- MUSIC ---------- */
const audioEl = document.getElementById('bgMusic1');
let isPlaying = false;

function playMusic() {
  const btn = document.getElementById('music-btn');
  if (!btn || !audioEl) return;
  isPlaying = true;
  audioEl.currentTime = 0;
  audioEl.volume = 1;
  audioEl.play().catch(() => {});
  btn.classList.add('playing');
  btn.querySelector('i').className = 'fas fa-pause';
}

function pauseMusic() {
  const btn = document.getElementById('music-btn');
  isPlaying = false;
  audioEl.pause();
  btn.classList.remove('playing');
  btn.querySelector('i').className = 'fas fa-music';
}

/* ---------- HERO BACKGROUND SLIDESHOW ---------- */
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-bg-slide');
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 7000);
})();

/* ---------- SPARKLE PARTICLES ---------- */
(function createSparkles() {
  const container = document.getElementById('sparkles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.width = (Math.random() * 4 + 2) + 'px';
    sparkle.style.height = sparkle.style.width;
    sparkle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    sparkle.style.animationDelay = (Math.random() * 8) + 's';
    if (Math.random() > 0.5) {
      sparkle.style.boxShadow = '0 0 6px 2px rgba(201,169,110,0.4)';
    } else {
      sparkle.style.boxShadow = '0 0 6px 2px rgba(232,160,180,0.4)';
      sparkle.style.background = 'var(--rose-gold)';
    }
    container.appendChild(sparkle);
  }
})();

/* ---------- FLOATING PETALS ---------- */
(function createPetals() {
  const container = document.getElementById('petals-container');
  if (!container) return;
  const petalCount = 15;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 14 + 12) + 'px';
    petal.style.animationDuration = (Math.random() * 12 + 10) + 's';
    petal.style.animationDelay = (Math.random() * 15) + 's';
    petal.style.opacity = Math.random() * 0.3 + 0.2;
    if (Math.random() > 0.5) {
      petal.style.color = 'var(--champagne)';
    } else {
      petal.style.color = 'var(--rose-gold)';
    }
    container.appendChild(petal);
  }
})();

/* ---------- SCROLL PROGRESS + PARALLAX + NAVBAR ---------- */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const progressBar = document.getElementById('scroll-progress');
const heroSlides = document.querySelector('.hero-bg-slider');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = progress + '%';
  }

  if (scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (heroSlides) {
    heroSlides.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
  }
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ---------- COUNTDOWN TIMER ---------- */
(function initCountdown() {
  const targetDate = new Date('June 24, 2026 18:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

/* ---------- 18 TREASURES ---------- */
(function buildTreasures() {
  const grid = document.getElementById('treasuresGrid');
  if (!grid) return;

  const treasures = [
    'Maria Perez',
    'Fermina Habil',
    'Chrisha Lagrosas',
    'Dannah Fernandez',
    'Larrah Gonzales',
    'Britz Nicole Talaroc',
    'Sharllyn Kirit',
    'Precious Baroman',
    'Daniela Ugat',
    'Samantha Nicole Dadulo',
    'Jade Pagutayao',
    'Nicole Dela Cruz',
    'Jaden Jo',
    'Elrod Dayta',
    'Kyle Waga',
    'Apple Palubon',
    'Margaux Dacoco',
    'Jezalyn Cabolbol',
  ];

  treasures.forEach((name, index) => {
    const card = document.createElement('div');
    card.className = 'treasure-card';
    card.innerHTML = `
      <div class="treasure-icon">&#10084;</div>
      <div class="rose-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="rose-name">${name}</div>
    `;
    grid.appendChild(card);
  });
})();

/* ---------- 18 ROSES ---------- */
(function buildRoses() {
  const grid = document.getElementById('rosesGrid');
  if (!grid) return;

  const roses = [
    'Charls Javie Cabolbol',
    'William Meot',
    'Crisler Josh Cabolbol',
    'Jhon Lawrence Cabolbol',
    'Ralph BRandhone',
    'Frank Batiancila',
    'Kenzen Castillion',
    'EC James Lusterio',
    'Kian Sacabin',
    'Arden Avila',
    'Andrei Tongao',
    'James Alcher Reyes',
    'Cyrus Chio',
    'Calvin Jay Acain',
    'Kyle Wagnener Waga',
    'Lorens Micheal Daguman',
    'Edrapael Abucejo',
    'Tony Raphael Kamdon',
  ];

  roses.forEach((name, index) => {
    const card = document.createElement('div');
    card.className = 'rose-card';
    card.innerHTML = `
      <div class="rose-icon">&#127801;</div>
      <div class="rose-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="rose-name">${name}</div>
    `;
    grid.appendChild(card);
  });
})();

/* ---------- 18 CANDLES ---------- */
(function buildCandles() {
  const grid = document.getElementById('candlesGrid');
  if (!grid) return;

  const candles = [
    'Sofia Ysabella Magpulong',
    'Alyana Colegado',
    'Hillary Asequia',
    'Preshious Jovaine Caburatan',
    'Bhea Balabat',
    'Angelina Mier Dumaom',
    'Candace Dawn Meot',
    'Kristel Marie Cahoy',
    'Shanese Faye Almeñana',
    'Emieve Arevalo',
    'Zainab Nouf Bangkero',
    'Daniella Faith Ligaray',
    'Crizel Joy Lonongan',
    'Mariecor Maghanoy',
    'Merry Rose Ragase',
    'Mhariel Israel',
    'Edrapael Abucejo',
    'Tony Raphael Kamdon',
  ];

  candles.forEach((name, index) => {
    const card = document.createElement('div');
    card.className = 'candle-card';
    card.innerHTML = `
      <div class="candle-icon">&#128367;</div>
      <div class="rose-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="rose-name">${name}</div>
    `;
    grid.appendChild(card);
  });
})();

/* ---------- 18 BILLS ---------- */
(function buildBills() {
  const grid = document.getElementById('billsGrid');
  if (!grid) return;

  const bills = [
    'Mr. Raymond Ordinario',
    'Mrs. Cherilie B. Vega',
    'Ms. Ging Rosal',
    'Mrs. Scarlet Oliveros',
    'Mrs. Rosie Joy Arevalo',
    'Mrs. Rinah Valdehueza',
    'Mr. and Mrs. Ligaray',
    'Mr. and Mrs. Bangkero',
    'Ms. Jessica Canaya',
    'Mr. Kenneth Balanay',
    'Mr. Paida Amomonpon',
    'Ms. Lyn Actub',
    'Paquingan Family',
    'Mr. and Mrs. Sususco',
    'Mr. Joseph Cabolbol',
    'Mrs. Rodelyn Cabolbol',
    'Mr. Dionie Hemagan',
    'Mrs. Evelyn Cabolbol',
  ];

  bills.forEach((name, index) => {
    const card = document.createElement('div');
    card.className = 'bill-card';
    card.innerHTML = `
      <div class="bill-icon">&#128176;</div>
      <div class="rose-num">${String(index + 1).padStart(2, '0')}</div>
      <div class="rose-name">${name}</div>
    `;
    grid.appendChild(card);
  });
})();

/* ---------- FADE-IN SCROLL OBSERVER ---------- */
(function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('reveal');
        }
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('.stagger-children').forEach(el => {
    observer.observe(el);
  });
})();

/* ---------- RSVP FORM ---------- */
(function initRSVP() {
  const form = document.getElementById('rsvpForm');
  if (!form) return;

  const nameInput = document.getElementById('rsvpName');
  const contactInput = document.getElementById('rsvpContact');
  const attendSelect = document.getElementById('rsvpAttend');
  const overnightSelect = document.getElementById('rsvpOvernight');
  const messageTextarea = document.getElementById('rsvpMessage');
  const successModal = document.getElementById('successModal');

  function showError(input, message) {
    const group = input.closest('.form-group');
    group.classList.add('error');
    const err = group.querySelector('.form-error');
    if (err) err.textContent = message;
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    group.classList.remove('error');
    const err = group.querySelector('.form-error');
    if (err) err.textContent = '';
  }

  function validateName() {
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your full name');
      return false;
    }
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, 'Name is too short');
      return false;
    }
    clearError(nameInput);
    return true;
  }

  function validateContact() {
    const val = contactInput.value.trim();
    if (!val) {
      showError(contactInput, 'Please enter your FACEBOOK ACC');
      return false;
    }
    if (val.replace(/[\s\-\+\(\)]/g, '').length < 7) {
      showError(contactInput, 'Please enter a valid FACEBOOK ACC');
      return false;
    }
    clearError(contactInput);
    return true;
  }

  function validateAttend() {
    if (!attendSelect.value) {
      showError(attendSelect, 'Please select your attendance');
      return false;
    }
    clearError(attendSelect);
    return true;
  }



  nameInput.addEventListener('blur', validateName);
  nameInput.addEventListener('input', function() {
    if (this.closest('.form-group').classList.contains('error')) validateName();
  });
  contactInput.addEventListener('blur', validateContact);
  contactInput.addEventListener('input', function() {
    if (this.closest('.form-group').classList.contains('error')) validateContact();
  });
  attendSelect.addEventListener('change', validateAttend);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isContactValid = validateContact();
    const isAttendValid = validateAttend();

    if (!isNameValid || !isContactValid || !isAttendValid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      const payload = {
        name: document.getElementById('rsvpName').value.trim(),
        contact: document.getElementById('rsvpContact').value.trim(),
        attendance: document.getElementById('rsvpAttend').value,
        overnight: document.getElementById('rsvpOvernight').value,
        message: document.getElementById('rsvpMessage').value.trim(),
        timestamp: new Date().toLocaleString()
      };
      await fetch('https://script.google.com/macros/s/AKfycbx_zRcyJ3I6QmLjC5RBhuLU_zddkRj1B1vanMQ-PgT9faO17tA5GKJgf8b6snQCb5Ge/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      successModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      launchConfetti();
      form.reset();
      [nameInput, contactInput, attendSelect, overnightSelect].forEach(el => clearError(el));
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send RSVP';
    }
  });

  /* Close modal */
  const modalClose = successModal.querySelector('.modal-close');
  modalClose.addEventListener('click', () => {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
  });
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();

/* ---------- CONFETTI ---------- */
function launchConfetti() {
  const colors = ['#e8a0b4', '#c9a96e', '#f7e7ce', '#f8e1e7', '#d4859d', '#dfc08a', '#ffffff'];
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 4) + 'px';
    piece.style.height = (Math.random() * 8 + 4) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

/* ---------- MUSIC PLAYER TOGGLE ---------- */
(function initMusicToggle() {
  const btn = document.getElementById('music-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });
})();
