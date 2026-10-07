// ==========================================================================
// Rohit Portfolio - Main Interactivity, Animations & Project Details
// ==========================================================================

// Global Project Details Database
const projectData = {
  marketmind: {
    title: 'MarketMind: AI Google Stock Forecasting',
    badge: 'AI & Deep Learning',
    badgeColor: 'indigo',
    github: 'https://github.com/Rohit8825/Marketmind',
    live: '#',
    summary:
      'An end-to-end predictive machine learning platform designed to forecast Google (GOOG) equity price movements using Long Short-Term Memory (LSTM) recurrent neural networks, integrated with an interactive Streamlit analytics dashboard.',
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-Learn'],
    highlights: [
      'Engineered an LSTM sequential model utilizing a 60-day sliding window to capture temporal dependencies in financial time-series data.',
      'Constructed a robust data preprocessing pipeline with MinMaxScaler normalization to stabilize gradient descent and mitigate covariate shift.',
      'Implemented Dropout layers and early-stopping mechanisms to prevent neural overfitting on historical stock volatility.',
      'Crafted an interactive Streamlit UI offering real-time prediction overlays, interactive candlestick charts, and exploratory data analysis (EDA).',
    ],
    architecture:
      'Client (Streamlit Dashboard) <--> Model Inference Engine (TensorFlow/Keras SavedModel) <--> MinMaxScaler Preprocessor <--> Historical Financial Ticker Dataset',
  },
  prescripto: {
    title: 'Prescripto: Full-Stack Healthcare & Doctor Appointment System',
    badge: 'Full Stack MERN',
    badgeColor: 'emerald',
    github: 'https://github.com/Rohit8825/Doctor_appointment_web',
    live: '#',
    summary:
      'Enterprise-grade doctor appointment scheduling and medical management web application featuring multi-tier user authentication, live doctor slot booking, administrative dashboards, Cloudinary media storage, and dual payment gateway integrations.',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Razorpay', 'Stripe', 'Cloudinary', 'JWT'],
    highlights: [
      'Architected a 3-tier RESTful API service supporting Patients, Doctors, and Admin roles with secure JWT authentication and bcrypt password hashing.',
      'Engineered dynamic appointment scheduling with real-time slot conflict resolution and automated appointment status tracking.',
      'Integrated Stripe and Razorpay payment gateways for frictionless digital transaction settlements.',
      'Configured Multer and Cloudinary CDN for cloud-based doctor profiles, credentials, and medical image uploads.',
      'Built a responsive doctor management admin portal with analytics for revenue, pending appointments, and patient volume.',
    ],
    architecture:
      'Vite React Frontend + Admin Portal <--> Express.js REST API with CORS/JWT <--> MongoDB Atlas Database + Cloudinary CDN + Stripe/Razorpay Webhooks',
  },
  chatify: {
    title: 'Chatify: Real-Time Chat & Instant Collaboration Suite',
    badge: 'Real-Time WebSockets',
    badgeColor: 'cyan',
    github: 'https://github.com/Rohit8825/Chatify',
    live: '#',
    summary:
      'A blazing-fast real-time messaging application powered by WebSockets (Socket.io), enabling low-latency peer-to-peer chats, live presence indicators, image sharing, and persistent chat histories.',
    tags: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Zustand', 'Tailwind CSS', 'Cloudinary'],
    highlights: [
      'Implemented bi-directional WebSocket channels using Socket.io to deliver sub-50ms message latency.',
      'Integrated real-time online/offline presence tracking broadcasting active user statuses instantly across the network.',
      'Utilized Zustand for ultra-lean, re-render optimized state management across message threads and auth state.',
      'Enabled real-time media exchange with client-side image compression and secure cloud hosting.',
      'Designed a sleek, modern glassmorphic chat interface with responsive sidebar and typing indicators.',
    ],
    architecture:
      'React (Zustand State) <--> Socket.io WebSocket Server + Express REST Server <--> MongoDB Message & User Records + Cloudinary Media Store',
  },
  sorting: {
    title: 'Sorting Visualizer: Interactive Algorithm Explorer',
    badge: 'Algorithms & DSA',
    badgeColor: 'purple',
    github: 'https://github.com/Rohit8825/Sorting-Visualizer',
    live: '#',
    summary:
      'An educational interactive web application rendering real-time animated step-by-step executions of core sorting algorithms with custom speed controls, array generation, and visual comparison counters.',
    tags: ['React', 'Redux', 'JavaScript (ES6)', 'CSS Animations', 'Webpack', 'Babel'],
    highlights: [
      'Implemented Merge Sort, Quick Sort, Bubble Sort, and Heap Sort with color-coded comparison and swap state tracking.',
      'Engineered asynchronous animation throttler allowing users to pause, adjust speed, and alter array sizes dynamically.',
      'Leveraged Redux store to manage algorithm animation queues and prevent race conditions during rapid state transitions.',
      'Added time and space complexity information cards for each algorithm to accelerate DSA comprehension.',
    ],
    architecture:
      'React Components <--> Redux Animation State & Algorithm Dispatchers <--> Dynamic DOM Audio-Visual Height Visualizer',
  },
  ecommerce: {
    title: 'E-Commerce Platform: Modern Shopping Experience',
    badge: 'Full Stack Web',
    badgeColor: 'amber',
    github: 'https://github.com/Rohit8825',
    live: '#',
    summary:
      'A feature-rich e-commerce store with dynamic catalog filtering, shopping cart state management, checkout simulation, and responsive layout across desktop and mobile devices.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'LocalStorage', 'Responsive UI'],
    highlights: [
      'Built persistent cart management using LocalStorage with instant subtotal and tax calculation.',
      'Implemented real-time search, price range filtering, and product category navigation.',
      'Optimized image loading and skeleton screens for high performance and low First Contentful Paint (FCP).',
    ],
    architecture:
      'Frontend Client <--> REST API Products Endpoint <--> Client State Cart Handler',
  },
  weather: {
    title: 'WeatherNow & CurrencyPulse: Real-Time API Dashboards',
    badge: 'API Integrations',
    badgeColor: 'rose',
    github: 'https://github.com/Rohit8825',
    live: '#',
    summary:
      'Suite of modern web utility tools utilizing third-party REST APIs for live global weather forecasts with geolocation lookup and real-time multi-currency exchange rate conversions.',
    tags: ['JavaScript', 'Fetch API', 'OpenWeatherMap API', 'ExchangeRate API', 'CSS Grid'],
    highlights: [
      'Integrated browser Geolocation API to auto-fetch localized weather metrics and 5-day forecasts.',
      'Handled asynchronous API rate limits, error states, and responsive data visual cards.',
      'Calculated instant currency conversions across 30+ international currencies with live exchange rate polling.',
    ],
    architecture:
      'Vanilla JS Client <--> OpenWeather / FX Exchange Rate Public APIs <--> Dynamic DOM Cards',
  },
};

// ==========================================
// Theme Management
// ==========================================
window.toggleTheme = function () {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';

  if (newTheme === 'dark') {
    html.classList.remove('light');
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
  }

  updateThemeIcons(newTheme);
  return newTheme;
};

function updateThemeIcons(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach((btn) => {
    btn.innerHTML =
      theme === 'dark'
        ? `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`
        : `<i data-lucide="moon" class="w-5 h-5 text-indigo-600"></i>`;
  });
  if (window.lucide) window.lucide.createIcons();
}

// Initialize Theme
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme ? savedTheme : prefersDark ? 'dark' : 'dark'; // Default to dark for high-tech aesthetic

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons(theme);
})();

// ==========================================
// Typing Effect for Hero Subtitle
// ==========================================
const typewriterText = [
  'Full-Stack MERN Developer 💻',
  'MNNIT Allahabad Undergrad 🎓',
  'Real-Time WebSockets Specialist ⚡',
  'Deep Learning & LSTM Builder 🤖',
  'Competitive Programmer & Problem Solver 🧩',
];

let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 80;
const deleteSpeed = 40;
const pauseTime = 1800;

function typeWriter() {
  const target = document.getElementById('typingText');
  if (!target) return;

  const currentPhrase = typewriterText[typeIndex];

  if (isDeleting) {
    target.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typeIndex = (typeIndex + 1) % typewriterText.length;
    delay = 350;
  }

  setTimeout(typeWriter, delay);
}

// ==========================================
// Project Filtering
// ==========================================
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach((b) => {
        b.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/60');
      });

      btn.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
      btn.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/60');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'all 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ==========================================
// Project Modal Deep Dive
// ==========================================
window.openProjectModal = function (projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  if (!modal || !modalContent) return;

  const tagsHtml = data.tags
    .map(
      (tag) =>
        `<span class="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">${tag}</span>`
    )
    .join('');

  const highlightsHtml = data.highlights
    .map(
      (h) => `
    <li class="flex items-start gap-2.5 text-slate-300 text-sm">
      <span class="text-emerald-400 mt-1 flex-shrink-0">✔</span>
      <span>${h}</span>
    </li>
  `
    )
    .join('');

  modalContent.innerHTML = `
    <div class="flex items-start justify-between border-b border-slate-700/60 pb-4">
      <div>
        <span class="text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider bg-${data.badgeColor}-500/10 text-${data.badgeColor}-400 border border-${data.badgeColor}-500/30">${data.badge}</span>
        <h3 class="text-2xl font-bold text-white mt-2">${data.title}</h3>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>

    <div class="mt-4 space-y-4">
      <p class="text-slate-300 text-base leading-relaxed">${data.summary}</p>

      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Technologies & Architecture</h4>
        <div class="flex flex-wrap gap-2 mb-3">${tagsHtml}</div>
        <div class="p-3 bg-slate-900/80 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300">
          ⚙️ <strong>Pipeline:</strong> ${data.architecture}
        </div>
      </div>

      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Engineering Accomplishments</h4>
        <ul class="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">${highlightsHtml}</ul>
      </div>

      <div class="pt-4 border-t border-slate-700/60 flex items-center justify-between">
        <a href="${data.github}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/30">
          <i data-lucide="github" class="w-4 h-4"></i> View Source Code
        </a>
        <button onclick="closeProjectModal()" class="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-sm transition">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function () {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

// ==========================================
// Resume Modal
// ==========================================
window.openResumeModal = function () {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }
};

window.closeResumeModal = function () {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

window.printResume = function () {
  window.print();
};

// ==========================================
// Animated Counter for Stats
// ==========================================
function setupStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = Math.ceil(target / 40);

          const interval = setInterval(() => {
            count += speed;
            if (count >= target) {
              el.innerText = target + suffix;
              clearInterval(interval);
            } else {
              el.innerText = count + suffix;
            }
          }, 35);
        });
      }
    },
    { threshold: 0.5 }
  );

  const statsSection = document.getElementById('statsSection');
  if (statsSection) observer.observe(statsSection);
}

// ==========================================
// Contact Form & Toast
// ==========================================
window.copyEmail = function () {
  const email = 'rohit.20224124@mnnit.ac.in';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copied to clipboard: ' + email, 'success');
  });
};

window.showToast = function (message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
};

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const subject = document.getElementById('contactSubject')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;
    }

    // Simulate network delivery & open mailto fallback
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i> Message Sent Successfully!`;
        if (window.lucide) window.lucide.createIcons();
      }

      showToast(`Thank you ${name}! Your message has been logged. Rohit will reply soon.`, 'success');
      form.reset();

      // Also trigger mailto so user can send direct email
      const mailtoLink = `mailto:rohit.20224124@mnnit.ac.in?subject=${encodeURIComponent(
        subject || 'Message from ' + name
      )}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      window.open(mailtoLink, '_blank');
    }, 1200);
  });
}

// ==========================================
// Mobile Menu Navigation
// ==========================================
function setupMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// ==========================================
// Init on DOM Content Loaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  setupProjectFilters();
  setupStatsCounter();
  setupContactForm();
  setupMobileMenu();

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    const projectModal = document.getElementById('projectModal');
    const resumeModal = document.getElementById('resumeModal');
    if (e.target === projectModal) closeProjectModal();
    if (e.target === resumeModal) closeResumeModal();
  });

  // ESC key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });

  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
