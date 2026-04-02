/* ══════════════════════════════════════════════
   PEASE — Anti-Fraud Education Website
   Shared JavaScript
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile Nav Toggle ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Scroll Fade-In (IntersectionObserver) ── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Generic Accordion ── */
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      // Close siblings within same parent
      const parent = btn.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-btn.active').forEach(other => {
          if (other !== btn) {
            other.classList.remove('active');
            other.nextElementSibling.style.maxHeight = null;
          }
        });
      }

      btn.classList.toggle('active');
      content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
    });
  });

  /* ── Scheme Detail Accordions ── */
  document.querySelectorAll('.scheme-detail-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      if (!isOpen) trackSchemeViewed(Math.floor(idx / 3));

      btn.classList.toggle('active');
      content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
    });
  });

  /* ── Guide Card Toggle ── */
  document.querySelectorAll('.guide-card-header').forEach((header, idx) => {
    header.addEventListener('click', () => {
      const card = header.closest('.guide-card');
      const content = card.querySelector('.guide-card-content');
      const isOpen = card.classList.contains('open');

      if (!isOpen) trackGuideRead(idx);

      card.classList.toggle('open');
      content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
    });
  });

  /* ── Filter Bar ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const cards = document.querySelectorAll('[data-category]');

        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s, transform 0.4s';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Toast ── */
  window.showToast = function(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  };

  /* ── Report Form ── */
  const reportForm = document.getElementById('reportForm');
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = reportForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Отправка...';
      btn.disabled = true;

      const lang = window.currentLang || localStorage.getItem('pease_lang') || 'ru';
      const T = window.I18N && window.I18N.translations && window.I18N.translations[lang];
      const toastOk  = (T && T.toast_success) || 'Спасибо! Ваше сообщение отправлено.';
      const toastErr = (T && T.toast_error)   || 'Ошибка отправки. Попробуйте позже.';

      emailjs.send('service_ysoz63p', 'template_uec68id', {
        name: reportForm.name.value,
        email: reportForm.email.value,
        type: reportForm.type.value,
        description: reportForm.description.value,
        evidence: reportForm.evidence.value
      }).then(() => {
        showToast(toastOk);
        reportForm.reset();
      }).catch(() => {
        showToast(toastErr);
      }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
    });
  }

  /* ── Progress Tracking ── */
  const COUNTAPI = 'https://api.counterapi.dev/v1';
  const COUNTAPI_NS = 'pease-kz-edu';

  function animateNum(el, target) {
    const duration = 1400;
    const start = performance.now();
    (function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target).toLocaleString();
      if (t < 1) requestAnimationFrame(step);
    })(start);
  }

  async function fetchPlatformStats() {
    const ids = ['globalVisits', 'globalQuizCompletions', 'globalGuidesOpened', 'globalSchemesViewed'];
    const keys = ['visits', 'quiz-completions', 'guides-opened', 'schemes-viewed'];
    if (!document.getElementById(ids[0])) return;

    try {
      // visits: increment only once per device, then read on subsequent loads
      const visited = localStorage.getItem('pease_visited');
      const visitUrl = visited
        ? `${COUNTAPI}/${COUNTAPI_NS}/visits/`
        : `${COUNTAPI}/${COUNTAPI_NS}/visits/up`;
      if (!visited) localStorage.setItem('pease_visited', '1');

      const [v, q, g, s] = await Promise.all([
        fetch(visitUrl).then(r => r.json()),
        fetch(`${COUNTAPI}/${COUNTAPI_NS}/quiz-completions/`).then(r => r.json()),
        fetch(`${COUNTAPI}/${COUNTAPI_NS}/guides-opened/`).then(r => r.json()),
        fetch(`${COUNTAPI}/${COUNTAPI_NS}/schemes-viewed/`).then(r => r.json())
      ]);
      [v, q, g, s].forEach((data, i) => {
        const el = document.getElementById(ids[i]);
        const val = data.count ?? data.value;
        if (el && val != null) animateNum(el, val);
      });
    } catch (_) { /* silent fail — dashes remain */ }
  }

  fetchPlatformStats();

  function trackSchemeViewed(schemeIdx) {
    const set = JSON.parse(localStorage.getItem('pease_schemes_set') || '[]');
    if (!set.includes(schemeIdx)) {
      set.push(schemeIdx);
      localStorage.setItem('pease_schemes_set', JSON.stringify(set));
      fetch(`${COUNTAPI}/${COUNTAPI_NS}/schemes-viewed/up`).catch(() => {});
    }
  }

  function trackGuideRead(idx) {
    const set = JSON.parse(localStorage.getItem('pease_guides_set') || '[]');
    if (!set.includes(idx)) {
      set.push(idx);
      localStorage.setItem('pease_guides_set', JSON.stringify(set));
      fetch(`${COUNTAPI}/${COUNTAPI_NS}/guides-opened/up`).catch(() => {});
    }
  }

  function trackQuizComplete(score) {
    const attempts = parseInt(localStorage.getItem('pease_quiz_attempts') || '0', 10) + 1;
    localStorage.setItem('pease_quiz_attempts', attempts);
    const best = localStorage.getItem('pease_quiz_best');
    if (best === null || score > parseInt(best, 10)) {
      localStorage.setItem('pease_quiz_best', score);
    }
    fetch(`${COUNTAPI}/${COUNTAPI_NS}/quiz-completions/up`).catch(() => {});
    if (typeof window.updateProgressSection === 'function') window.updateProgressSection();
  }

  window.updateProgressSection = function () {
    let el;
    el = document.getElementById('statQuizAttempts');
    if (el) el.textContent = localStorage.getItem('pease_quiz_attempts') || '0';

    el = document.getElementById('statBestScore');
    if (el) {
      const best = localStorage.getItem('pease_quiz_best');
      el.textContent = best !== null ? best + '/10' : '—';
    }

    el = document.getElementById('statGuidesRead');
    if (el) el.textContent = JSON.parse(localStorage.getItem('pease_guides_set') || '[]').length;

    el = document.getElementById('statSchemesViewed');
    if (el) el.textContent = JSON.parse(localStorage.getItem('pease_schemes_set') || '[]').length;
  };

  window.updateProgressSection();

  const resetBtn = document.getElementById('resetProgress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      ['pease_quiz_attempts', 'pease_quiz_best', 'pease_guides_set', 'pease_schemes_set']
        .forEach(k => localStorage.removeItem(k));
      window.updateProgressSection();
    });
  }

  /* ══════════════════════════════════════
     QUIZ ENGINE
     ══════════════════════════════════════ */

  const quizData = [
    // Beginner (1-3)
    {
      level: 'beginner',
      levelName: 'Новичок',
      scenario: 'SMS-сообщение',
      text: 'Вы получили SMS: «Уважаемый клиент! Ваша карта заблокирована. Для разблокировки перейдите по ссылке: kaspi-unlock.xyz и введите данные карты. Служба безопасности Kaspi Bank.»',
      options: [
        'Перейти по ссылке и ввести данные карты',
        'Позвонить по номеру на обратной стороне карты, чтобы проверить информацию',
        'Переслать SMS друзьям для проверки',
        'Ответить на SMS с просьбой предоставить больше информации'
      ],
      correct: 1,
      feedback: 'Банк никогда не просит данные карты по SMS. Домен kaspi-unlock.xyz — поддельный. Всегда звоните в банк по официальному номеру с обратной стороны карты.'
    },
    {
      level: 'beginner',
      levelName: 'Новичок',
      scenario: 'Телефонный звонок',
      text: 'Вам звонят и представляются сотрудником полиции. Говорят, что ваш родственник попал в ДТП и нужно срочно перевести 300 000 ₸ для «решения вопроса». Просят никому не рассказывать.',
      options: [
        'Срочно перевести деньги — родственник в беде',
        'Попросить перезвонить через 5 минут, а пока позвонить родственнику напрямую',
        'Попросить назвать ФИО и должность, а потом перевести деньги',
        'Попросить номер дела и перевести половину суммы'
      ],
      correct: 1,
      feedback: 'Это классическая схема «родственник в беде». Настоящие полицейские никогда не требуют деньги по телефону. Всегда перезвоните родственнику лично!'
    },
    {
      level: 'beginner',
      levelName: 'Новичок',
      scenario: 'Электронная почта',
      text: 'Вы получили email от «Казпочты»: «Ваша посылка задержана на таможне. Оплатите пошлину 5 000 ₸ для получения. Ссылка для оплаты: kazpost-pay.com». Вы ничего не заказывали.',
      options: [
        'Оплатить 5 000 ₸ — сумма небольшая',
        'Игнорировать письмо — вы ничего не заказывали и ссылка подозрительная',
        'Перейти по ссылке, чтобы посмотреть, что за посылка',
        'Ответить на письмо с вопросом о посылке'
      ],
      correct: 1,
      feedback: 'Если вы ничего не заказывали — это мошенничество. Домен kazpost-pay.com — поддельный. Официальный сайт Казпочты — post.kz.'
    },
    // Intermediate (4-7)
    {
      level: 'intermediate',
      levelName: 'Продвинутый',
      scenario: 'Интернет-магазин',
      text: 'Вы нашли интернет-магазин с iPhone 15 Pro за 150 000 ₸ (обычная цена ~500 000 ₸). Сайт выглядит профессионально, но работает только 2 месяца. Оплата — только переводом на карту физлица.',
      options: [
        'Купить — отличная скидка, сайт выглядит надёжно',
        'Не покупать — слишком низкая цена, молодой сайт и оплата на карту физлица — признаки мошенничества',
        'Заказать с наложенным платежом',
        'Написать в поддержку сайта и попросить скидку ещё больше'
      ],
      correct: 1,
      feedback: 'Три главных красных флага: 1) цена в 4 раза ниже рыночной, 2) сайт существует только 2 месяца, 3) оплата переводом на карту физлица. Это 100% мошенничество.'
    },
    {
      level: 'intermediate',
      levelName: 'Продвинутый',
      scenario: 'Мессенджер',
      text: 'В Telegram вам пишет «инвестиционный консультант» и предлагает вложить деньги в криптовалюту с гарантированной доходностью 30% в месяц. Показывает скриншоты прибыли других клиентов и торопит с решением.',
      options: [
        'Вложить небольшую сумму для проверки',
        'Отказаться — гарантированная доходность 30% в месяц невозможна, это признак финансовой пирамиды',
        'Попросить показать лицензию и вложить деньги',
        'Подождать месяц и посмотреть на результаты'
      ],
      correct: 1,
      feedback: 'Гарантированная доходность 30% в месяц — это невозможно даже для лучших инвесторов мира. Скриншоты легко подделать. Это классическая финансовая пирамида.'
    },
    {
      level: 'intermediate',
      levelName: 'Продвинутый',
      scenario: 'Социальная сеть',
      text: 'Вам пишет «друг» в Instagram: «Привет! Проголосуй за мою племянницу в конкурсе, нужно всего лишь авторизоваться через Instagram по этой ссылке». Ссылка ведёт на insta-vote-auth.com.',
      options: [
        'Перейти по ссылке и авторизоваться — друг просит',
        'Позвонить другу и спросить, действительно ли он это писал',
        'Перейти по ссылке, но не вводить пароль',
        'Авторизоваться, но потом сменить пароль'
      ],
      correct: 1,
      feedback: 'Аккаунт друга мог быть взломан. Ссылка insta-vote-auth.com — фишинговая. Всегда проверяйте такие просьбы через другой канал связи (звонок, другой мессенджер).'
    },
    {
      level: 'intermediate',
      levelName: 'Продвинутый',
      scenario: 'QR-код',
      text: 'На остановке вы видите объявление: «Бесплатный Wi-Fi! Отсканируйте QR-код для подключения». После сканирования открывается страница с просьбой ввести номер телефона и код из SMS.',
      options: [
        'Ввести данные — это же бесплатный Wi-Fi',
        'Не вводить данные и не сканировать подозрительные QR-коды на улице',
        'Ввести чужой номер телефона',
        'Подключиться к Wi-Fi и проверить скорость'
      ],
      correct: 1,
      feedback: 'Мошенники расклеивают поддельные QR-коды в публичных местах. Сканирование может привести на фишинговый сайт или загрузить вредоносное ПО. Бесплатный Wi-Fi не требует SMS-подтверждения.'
    },
    // Expert (8-10)
    {
      level: 'expert',
      levelName: 'Эксперт',
      scenario: 'Сложная атака',
      text: 'Вам звонит человек, представляется сотрудником Нацбанка РК, называет ваше ФИО, последние 4 цифры карты и последнюю операцию. Говорит, что по вашим счетам проходят подозрительные операции и нужно перевести деньги на «безопасный счёт».',
      options: [
        'Перевести деньги — он знает мои данные, значит действительно из банка',
        'Положить трубку и самостоятельно позвонить в банк по номеру с карты',
        'Попросить прислать официальное письмо на email',
        'Перевести часть денег для проверки'
      ],
      correct: 1,
      feedback: 'Мошенники могут знать ваши данные из утечек баз данных. Нацбанк РК никогда не звонит гражданам и не предлагает «безопасные счета». Всегда кладите трубку и звоните в банк сами.'
    },
    {
      level: 'expert',
      levelName: 'Эксперт',
      scenario: 'Deepfake-видеозвонок',
      text: 'Ваш «руководитель» звонит по видеосвязи и просит срочно перевести деньги контрагенту по новым реквизитам. Лицо и голос похожи, но качество видео немного хуже обычного, а просьба нетипичная.',
      options: [
        'Выполнить перевод — это же руководитель на видео',
        'Перезвонить руководителю по другому каналу для подтверждения',
        'Выполнить перевод, но на меньшую сумму',
        'Попросить прислать подтверждение по email'
      ],
      correct: 1,
      feedback: 'Deepfake-технологии позволяют подделывать лицо и голос в реальном времени. При любых нетипичных финансовых просьбах — подтверждайте через другой канал связи. Это защитит от deepfake-мошенничества.'
    },
    {
      level: 'expert',
      levelName: 'Эксперт',
      scenario: 'Многоэтапная атака',
      text: 'Вы получили email от «налоговой» о неуплаченном штрафе. Перешли на сайт (похож на kgd.gov.kz), ввели ИИН. Теперь вам звонят «из налоговой», называют ваш ИИН и просят оплатить штраф переводом на счёт, иначе дело передадут в суд.',
      options: [
        'Оплатить штраф — они знают мой ИИН',
        'Понять, что это многоэтапная атака: фишинговый сайт собрал ИИН, а звонок использует эти данные для давления. Проверить на официальном сайте kgd.gov.kz.',
        'Попросить прислать квитанцию по почте',
        'Уточнить реквизиты и оплатить половину'
      ],
      correct: 1,
      feedback: 'Это многоэтапная атака: сначала фишинговый сайт собирает ваши данные, затем мошенники используют их для убедительного звонка. КГД никогда не требует оплату переводом. Проверяйте задолженности только на kgd.gov.kz через eGov.kz.'
    }
  ];

  const quizContainer = document.getElementById('quizContainer');
  if (!quizContainer) return;

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function getActiveData() {
    const lang = window.currentLang || localStorage.getItem('pease_lang') || 'ru';
    if (lang === 'en' && window.QUIZ_DATA && window.QUIZ_DATA.en) return window.QUIZ_DATA.en;
    return quizData;
  }

  function getUI() {
    const lang = window.currentLang || localStorage.getItem('pease_lang') || 'ru';
    return (window.QUIZ_UI && window.QUIZ_UI[lang]) || window.QUIZ_UI.ru;
  }

  function getLevelClass(level) {
    if (level === 'beginner') return 'level-beginner';
    if (level === 'intermediate') return 'level-intermediate';
    return 'level-expert';
  }

  function shuffleOptions(q) {
    const indices = q.options.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return {
      options: indices.map(i => q.options[i]),
      correct: indices.indexOf(q.correct)
    };
  }

  function renderQuestion() {
    const data = getActiveData();
    const ui = getUI();
    const q = data[currentQuestion];
    const shuffled = shuffleOptions(q);
    const letters = ['А', 'Б', 'В', 'Г'];
    answered = false;

    const progress = (currentQuestion / data.length) * 100;

    quizContainer.innerHTML = `
      <div class="quiz-progress">
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <span class="progress-text">${currentQuestion + 1} / ${data.length}</span>
      </div>
      <div class="quiz-level-badge ${getLevelClass(q.level)}">${q.levelName} — ${ui.question} ${currentQuestion + 1}</div>
      <div class="quiz-question-card">
        <div class="quiz-scenario">
          <div class="label"><i class="fa-solid fa-envelope"></i> ${q.scenario}</div>
          <p>${q.text}</p>
        </div>
        <div class="quiz-options">
          ${shuffled.options.map((opt, i) => `
            <button class="quiz-option" data-index="${i}">
              <span class="letter">${letters[i]}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
        <button class="btn btn-accent quiz-next" id="quizNext">
          ${currentQuestion < data.length - 1 ? ui.next : ui.result}
        </button>
      </div>
    `;

    // Bind option clicks
    quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index), shuffled.correct));
    });

    // Bind next
    document.getElementById('quizNext').addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < getActiveData().length) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function handleAnswer(index, correctIndex) {
    if (answered) return;
    answered = true;

    const data = getActiveData();
    const ui = getUI();
    const q = data[currentQuestion];
    const options = quizContainer.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('quizNext');

    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === correctIndex) opt.classList.add('correct');
      if (i === index && i !== correctIndex) opt.classList.add('wrong');
    });

    if (index === correctIndex) {
      score++;
      feedback.className = 'quiz-feedback correct';
      feedback.innerHTML = '<strong>' + ui.correct + '</strong> ' + q.feedback;
    } else {
      feedback.className = 'quiz-feedback wrong';
      feedback.innerHTML = '<strong>' + ui.wrong + '</strong> ' + q.feedback;
    }

    feedback.style.display = 'block';
    nextBtn.style.display = 'inline-flex';
  }

  function renderResult() {
    trackQuizComplete(score);
    const data = getActiveData();
    const ui = getUI();
    let badge, title, desc;
    const pct = Math.round((score / data.length) * 100);

    if (score >= 9) {
      badge = '<i class="fa-solid fa-shield-halved"></i>';
      title = ui.r_expert_title;
      desc = ui.r_expert_desc;
    } else if (score >= 7) {
      badge = '<i class="fa-solid fa-thumbs-up"></i>';
      title = ui.r_good_title;
      desc = ui.r_good_desc;
    } else if (score >= 5) {
      badge = '<i class="fa-solid fa-triangle-exclamation"></i>';
      title = ui.r_warn_title;
      desc = ui.r_warn_desc;
    } else {
      badge = '<i class="fa-solid fa-circle-exclamation"></i>';
      title = ui.r_bad_title;
      desc = ui.r_bad_desc;
    }

    const resultClass = score >= 8 ? 'great' : score >= 5 ? 'good' : 'poor';
    const levelLabel = score >= 8 ? ui.lvl_expert : score >= 5 ? ui.lvl_medium : ui.lvl_beginner;

    quizContainer.innerHTML = `
      <div class="quiz-question-card quiz-result">
        <div class="result-badge ${resultClass}">${badge}</div>
        <h2 style="font-size:1.6rem; margin-bottom:8px;">${title}</h2>
        <p style="color:var(--text-muted); margin-bottom:24px;">${desc}</p>
        <div class="quiz-score">
          <div class="score-item">
            <div class="val">${score}/${data.length}</div>
            <div class="label">${ui.score_correct}</div>
          </div>
          <div class="score-item">
            <div class="val">${pct}%</div>
            <div class="label">${ui.score_accuracy}</div>
          </div>
          <div class="score-item">
            <div class="val">${levelLabel}</div>
            <div class="label">${ui.score_level}</div>
          </div>
        </div>
        <div class="btn-group" style="justify-content:center; margin-top:16px;">
          <button class="btn btn-accent" id="quizRestart">${ui.restart}</button>
          <a href="guides.html" class="btn btn-outline">${ui.guides_link}</a>
        </div>
      </div>
    `;

    document.getElementById('quizRestart').addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      renderQuestion();
    });
  }

  // Expose for i18n language switch
  window.restartQuiz = function () {
    currentQuestion = 0;
    score = 0;
    renderQuestion();
  };

  // Start quiz
  renderQuestion();

});
