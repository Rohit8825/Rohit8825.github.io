// ==========================================================================
// Rohit Portfolio - Interactive Developer Terminal (CLI)
// ==========================================================================

(function () {
  const terminalBody = document.getElementById('terminalOutput');
  const terminalInput = document.getElementById('terminalInput');
  const terminalContainer = document.getElementById('terminalContainer');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  if (!terminalInput || !terminalBody) return;

  let commandHistory = [];
  let historyIndex = -1;
  let soundEnabled = true;

  // Web Audio API for typing click sound
  let audioCtx = null;
  function playKeySound() {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600 + Math.random() * 200, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.innerHTML = soundEnabled
        ? `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i>`
        : `<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  const commands = {
    help: () => `
<div class="text-cyan-400 font-semibold mb-1">Available Commands:</div>
  <span class="text-emerald-400">about</span>        - Get to know Rohit & background
  <span class="text-emerald-400">skills</span>       - Inspect technical competencies & stack
  <span class="text-emerald-400">projects</span>     - Browse flagship projects & architectures
  <span class="text-emerald-400">education</span>    - View academic details (MNNIT Allahabad)
  <span class="text-emerald-400">contact</span>      - Get social links & contact information
  <span class="text-emerald-400">resume</span>       - View & print/download Rohit's resume
  <span class="text-emerald-400">theme</span>        - Toggle between Dark and Light mode
  <span class="text-emerald-400">matrix</span>       - Toggle digital rain matrix effect
  <span class="text-emerald-400">sudo hire rohit</span> - Recruiter fast-track easter egg
  <span class="text-emerald-400">clear</span>        - Clear the terminal console
`,

    about: () => `
<div class="space-y-1 text-slate-300">
  <p><span class="text-indigo-400 font-bold">Rohit</span> | Software Engineer & Full Stack Developer</p>
  <p class="text-slate-400">📍 Prayagraj / Allahabad, India</p>
  <p class="mt-2">🎓 B.Tech student at <span class="text-cyan-400 font-medium">Motilal Nehru National Institute of Technology (MNNIT) Allahabad</span> (Batch 2022–2026).</p>
  <p>🚀 Passionate about crafting high-performance, real-time web architectures, distributed systems, and predictive machine learning models.</p>
  <p>💡 Experienced in building full-scale MERN applications with WebSockets, payment gateways (Razorpay/Stripe), and deep learning LSTM models.</p>
</div>
`,

    skills: () => `
<div class="space-y-2 text-slate-300">
  <div><span class="text-indigo-400 font-semibold">Languages:</span> JavaScript (ES6+), TypeScript, Python, C++, HTML5, CSS3, SQL</div>
  <div><span class="text-cyan-400 font-semibold">Frontend:</span> React.js, Tailwind CSS, Redux / Zustand, Vite, HTML5 Canvas, Responsive UI</div>
  <div><span class="text-emerald-400 font-semibold">Backend & APIs:</span> Node.js, Express.js, RESTful APIs, WebSockets (Socket.io), JWT, Multer</div>
  <div><span class="text-amber-400 font-semibold">Databases & Cloud:</span> MongoDB, Mongoose ODM, MySQL, Cloudinary, Razorpay, Stripe</div>
  <div><span class="text-purple-400 font-semibold">AI & Machine Learning:</span> TensorFlow, Keras, LSTM Neural Networks, Scikit-Learn, Pandas, NumPy, Streamlit</div>
  <div><span class="text-rose-400 font-semibold">Dev Tools:</span> Git, GitHub, Postman, Linux/Bash, VS Code, npm/yarn, Vercel</div>
</div>
`,

    projects: () => `
<div class="space-y-2 text-slate-300">
  <div>
    <span class="text-cyan-300 font-bold">1. MarketMind</span> <span class="text-xs px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-500/30">AI / ML</span>
    <p class="text-slate-400 text-sm">Deep learning LSTM stock forecasting system with interactive Streamlit dashboard, 60-day sliding window, and real-time visualization.</p>
  </div>
  <div>
    <span class="text-cyan-300 font-bold">2. Prescripto</span> <span class="text-xs px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-500/30">MERN Stack</span>
    <p class="text-slate-400 text-sm">Full-stack healthcare & doctor appointment booking platform with Razorpay/Stripe, Cloudinary uploads, and role-based admin/patient portal.</p>
  </div>
  <div>
    <span class="text-cyan-300 font-bold">3. Chatify</span> <span class="text-xs px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300 border border-cyan-500/30">Real-Time WebSockets</span>
    <p class="text-slate-400 text-sm">End-to-end real-time chat application with Socket.io, Zustand, online user status, instant messaging, and responsive UI.</p>
  </div>
  <div>
    <span class="text-cyan-300 font-bold">4. Sorting Visualizer</span> <span class="text-xs px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">Algorithms</span>
    <p class="text-slate-400 text-sm">Interactive algorithm visualizer for Merge, Quick, Bubble, and Heap Sort with step-by-step visual animation and time complexity tracking.</p>
  </div>
</div>
`,

    education: () => `
<div class="space-y-1 text-slate-300">
  <div class="font-bold text-indigo-400">Motilal Nehru National Institute of Technology (MNNIT) Allahabad</div>
  <div class="text-cyan-300">Bachelor of Technology (B.Tech) • 2022 - 2026</div>
  <p class="text-slate-400 text-sm mt-1">Key Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, Object-Oriented Programming (OOP), Machine Learning.</p>
</div>
`,

    contact: () => `
<div class="space-y-1 text-slate-300">
  <div>📧 <span class="text-slate-400">Email:</span> <a href="mailto:rohit.20224124@mnnit.ac.in" class="text-cyan-400 hover:underline">rohit.20224124@mnnit.ac.in</a></div>
  <div>🐙 <span class="text-slate-400">GitHub:</span> <a href="https://github.com/Rohit8825" target="_blank" class="text-cyan-400 hover:underline">github.com/Rohit8825</a></div>
  <div>🌐 <span class="text-slate-400">Portfolio:</span> <span class="text-emerald-400">rohit-portfolio.dev</span></div>
  <div>💼 <span class="text-slate-400">Status:</span> <span class="text-emerald-400">Open to Software Engineering Roles & Summer/Fall Opportunities</span></div>
</div>
`,

    resume: () => {
      const modal = document.getElementById('resumeModal');
      if (modal) modal.classList.remove('hidden');
      return `<span class="text-emerald-400">Opening resume viewer modal...</span>`;
    },

    theme: () => {
      if (typeof window.toggleTheme === 'function') {
        const current = window.toggleTheme();
        return `<span class="text-cyan-400">Switched theme to: ${current}</span>`;
      }
      return `<span class="text-yellow-400">Theme toggled.</span>`;
    },

    matrix: () => {
      const canvas = document.getElementById('matrixCanvas');
      if (!canvas) return `<span class="text-red-400">Matrix canvas not found.</span>`;
      if (canvas.style.display === 'block') {
        canvas.style.display = 'none';
        return `<span class="text-yellow-400">Matrix mode deactivated.</span>`;
      } else {
        canvas.style.display = 'block';
        initMatrixRain();
        return `<span class="text-emerald-400 font-bold">Wake up, Neo... Matrix mode activated! (Type 'matrix' again to exit)</span>`;
      }
    },

    'sudo hire rohit': () => `
<div class="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-lg text-emerald-300 space-y-2">
  <div class="font-bold text-base flex items-center gap-2">
    🎉 ACCESS GRANTED: Offer Dispatch Protocol Initiated!
  </div>
  <p>You've unlocked the executive recruiter shortcut. Rohit is currently available for Full-Time SWE and Internship opportunities.</p>
  <div class="mt-2 text-white">
    👉 Reach out immediately at: <a href="mailto:rohit.20224124@mnnit.ac.in?subject=Job%20Opportunity%20for%20Rohit" class="text-cyan-300 underline font-semibold">rohit.20224124@mnnit.ac.in</a>
  </div>
</div>
`,

    clear: () => {
      terminalBody.innerHTML = '';
      return '';
    },
  };

  // Matrix Rain Effect
  let matrixInterval = null;
  function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = terminalContainer ? terminalContainer.clientWidth : 800;
    canvas.height = terminalContainer ? terminalContainer.clientHeight : 400;

    const characters = '01ROHITMNNIT2026MERNSTACKREACTNODEPYTHONLSTM';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    if (matrixInterval) clearInterval(matrixInterval);

    matrixInterval = setInterval(() => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 45);
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Append Command to output
    const cmdLine = document.createElement('div');
    cmdLine.className = 'flex items-center gap-2 text-slate-400 mt-2';
    cmdLine.innerHTML = `<span class="text-emerald-400 font-bold">rohit@mnnit:~$</span> <span>${escapeHtml(cmd)}</span>`;
    terminalBody.appendChild(cmdLine);

    const lowerCmd = cmd.toLowerCase();
    let responseHtml = '';

    if (commands[lowerCmd]) {
      responseHtml = commands[lowerCmd]();
    } else {
      responseHtml = `<div class="text-rose-400">Command not found: <span class="font-mono text-white">'${escapeHtml(cmd)}'</span>. Type <span class="text-emerald-400 font-bold underline cursor-pointer" onclick="document.getElementById('terminalInput').value='help';document.getElementById('terminalInput').focus();">'help'</span> for a list of commands.</div>`;
    }

    if (lowerCmd !== 'clear' && responseHtml) {
      const respLine = document.createElement('div');
      respLine.className = 'mt-1 mb-3';
      respLine.innerHTML = responseHtml;
      terminalBody.appendChild(respLine);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  // Event Listeners
  terminalInput.addEventListener('keydown', (e) => {
    playKeySound();

    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = terminalInput.value.trim().toLowerCase();
      if (!current) return;
      const match = Object.keys(commands).find((k) => k.startsWith(current));
      if (match) {
        terminalInput.value = match;
      }
    }
  });

  // Focus input when clicking anywhere in terminal
  if (terminalContainer) {
    terminalContainer.addEventListener('click', () => {
      terminalInput.focus();
    });
  }
})();
