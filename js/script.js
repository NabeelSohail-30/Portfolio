/* ================================================
   NABEEL SOHAIL — DEEP SPACE TERMINAL JS
   ================================================ */

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = -100, my = -100, fx = -100, fy = -100;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function followCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(followCursor);
})();

document.querySelectorAll('a, button, .tech-pill, .svc-card, .proj-card, .lead-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.6)';
    cursor.style.background = 'transparent';
    cursor.style.border = '1.5px solid var(--accent)';
    follower.style.transform = 'translate(-50%,-50%) scale(0.5)';
    follower.style.opacity = '0.5';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'var(--accent)';
    cursor.style.border = 'none';
    follower.style.transform = 'translate(-50%,-50%) scale(1)';
    follower.style.opacity = '1';
  });
});

// ---- NAVBAR ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- HAMBURGER ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 66 });
    }
  });
});

// ---- REVEAL ON SCROLL ----
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ---- PARTICLE CANVAS ----
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.r  = Math.random() * 1.2 + 0.3;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(58, 78, 255,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 110; i++) particles.push(new Particle());

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < maxDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(58, 78, 255,${0.06 * (1 - d / maxDist)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(loop);
  }
  loop();
})();

// ---- TERMINAL TYPER ----
(function initTerminal() {
  const cmdEl    = document.getElementById('termCmd');
  const outputEl = document.getElementById('termOutput');
  const statusEl = document.getElementById('statusText');
  if (!cmdEl) return;

  const sequences = [
    {
      cmd: 'nabeel --info',
      output: [
        { label: 'name',    val: 'Mohammad Nabeel Sohail' },
        { label: 'role',    val: 'Senior AI Engineer · Team Lead' },
        { label: 'company', val: 'FTech Solutions — Dawat-e-Islami' },
        { label: 'status',  val: 'open to international opportunities' },
      ]
    },
    {
      cmd: 'nabeel --stack',
      output: [
        { label: 'ai',       val: 'LLMs · RAG · Agentic AI · NLP · Vision' },
        { label: 'backend',  val: 'Python · Django · FastAPI · Flask' },
        { label: 'fullstack',val: 'MERN · TypeScript · REST APIs' },
        { label: 'infra',    val: 'AWS · Docker · CI/CD · PostgreSQL' },
      ]
    },
    {
      cmd: 'nabeel --leadership',
      output: [
        { label: 'ieee',  val: 'Vice Chair @ IEEE SSUET SB' },
        { label: 'acm',   val: 'Vice Chair @ ACM SSUET' },
        { label: 'gdg',   val: 'Comm & Marketing Lead @ GDGoC SSUET' },
        { label: 'smec',  val: 'Director Geeks & Mentor @ SMEC\'25' },
      ]
    }
  ];

  const statusMessages = [
    'Initializing profile...',
    'Loading engineer data...',
    'Systems online.',
    'Ready to build.',
    '🇬🇧 British National',
    'Based in Karachi, PK',
    'Open to Relocation & Remote',
  ];

  let seqIdx = 0, charIdx = 0, lineIdx = 0, phase = 'typing';

  function typeChar() {
    const seq = sequences[seqIdx];
    const cmd = seq.cmd;

    if (phase === 'typing') {
      if (charIdx <= cmd.length) {
        cmdEl.textContent = cmd.slice(0, charIdx++);
        setTimeout(typeChar, 55 + Math.random() * 30);
      } else {
        phase = 'output'; lineIdx = 0;
        setTimeout(showNextLine, 300);
      }
    }
  }

  function showNextLine() {
    const seq = sequences[seqIdx];
    if (lineIdx < seq.output.length) {
      const { label, val } = seq.output[lineIdx++];
      const line = document.createElement('div');
      line.innerHTML = `<span class="to-line">${label}:</span> <span class="to-val">${val}</span>`;
      line.style.opacity = '0';
      line.style.transform = 'translateX(-6px)';
      line.style.transition = 'all 0.3s ease';
      outputEl.appendChild(line);
      setTimeout(() => { line.style.opacity = '1'; line.style.transform = 'none'; }, 20);
      setTimeout(showNextLine, 280);
    } else {
      setTimeout(nextSequence, 2800);
    }
  }

  function nextSequence() {
    seqIdx = (seqIdx + 1) % sequences.length;
    charIdx = 0; lineIdx = 0; phase = 'typing';
    cmdEl.textContent = '';
    outputEl.innerHTML = '';
    setTimeout(typeChar, 400);
  }

  setTimeout(typeChar, 800);

  // Status text cycle
  let sIdx = 0;
  function cycleStatus() {
    if (statusEl) {
      statusEl.style.opacity = '0';
      setTimeout(() => {
        sIdx = (sIdx + 1) % statusMessages.length;
        statusEl.textContent = statusMessages[sIdx];
        statusEl.style.opacity = '1';
        statusEl.style.transition = 'opacity 0.4s';
      }, 300);
    }
    setTimeout(cycleStatus, 3000);
  }
  setTimeout(cycleStatus, 1200);
})();

// ---- ACTIVE NAV HIGHLIGHTING ----
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  const pos = window.scrollY + 90;
  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      const id = sec.getAttribute('id');
      navLinks.querySelectorAll('.nav-item').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });

// ---- CARD TILT ----
document.querySelectorAll('.proj-card, .svc-card, .lead-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-8px) rotateY(${x * 5}deg) rotateX(${-y * 3}deg)`;
    card.style.transformStyle = 'preserve-3d';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ---- DYNAMIC FOOTER YEAR ----
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- CONTACT FORM ----
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value;
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !email || !message) return;

    const btnText   = form.querySelector('.cf-btn-text');
    const btnLoad   = form.querySelector('.cf-btn-loading');
    const successEl = document.getElementById('cfSuccess');
    const submitBtn = document.getElementById('cfSubmit');

    btnText.style.display = 'none';
    btnLoad.style.display = 'inline-flex';
    submitBtn.disabled = true;

    const sub  = subject ? '[Portfolio] ' + subject + ' — ' + name : '[Portfolio] Message from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    const url  = 'mailto:nabeel.dev.ai@gmail.com?subject=' + encodeURIComponent(sub) + '&body=' + encodeURIComponent(body);

    setTimeout(function() {
      window.location.href = url;
      btnText.style.display = 'inline-flex';
      btnLoad.style.display = 'none';
      submitBtn.disabled = false;
      successEl.style.display = 'flex';
      form.reset();
      setTimeout(function() { successEl.style.display = 'none'; }, 6000);
    }, 900);
  });
})();

// ---- TECH PILL STAGGER ON SCROLL ----
const techObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.tech-pill').forEach((pill, i) => {
        setTimeout(() => {
          pill.style.opacity = '1';
          pill.style.transform = 'translateY(0)';
        }, i * 60);
      });
      techObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

const techGrid = document.querySelector('.tech-grid');
if (techGrid) {
  techGrid.querySelectorAll('.tech-pill').forEach(p => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(16px)';
    p.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });
  techObs.observe(techGrid);
}

// ---- BACK TO TOP ----
const backTop = document.getElementById('backTop');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
}
