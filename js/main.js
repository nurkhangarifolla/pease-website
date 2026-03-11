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
  document.querySelectorAll('.scheme-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      btn.classList.toggle('active');
      content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
    });
  });

  /* ── Guide Card Toggle ── */
  document.querySelectorAll('.guide-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.guide-card');
      const content = card.querySelector('.guide-card-content');
      const isOpen = card.classList.contains('open');

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

      emailjs.send('service_ysoz63p', 'template_uec68id', {
        name: reportForm.name.value,
        email: reportForm.email.value,
        type: reportForm.type.value,
        description: reportForm.description.value,
        evidence: reportForm.evidence.value
      }).then(() => {
        showToast('Спасибо! Ваше сообщение отправлено.');
        reportForm.reset();
      }).catch(() => {
        showToast('Ошибка отправки. Попробуйте позже.');
      }).finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
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
    const q = quizData[currentQuestion];
    const shuffled = shuffleOptions(q);
    const letters = ['А', 'Б', 'В', 'Г'];
    answered = false;

    const progress = ((currentQuestion) / quizData.length) * 100;

    quizContainer.innerHTML = `
      <div class="quiz-progress">
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
        <span class="progress-text">${currentQuestion + 1} / ${quizData.length}</span>
      </div>
      <div class="quiz-level-badge ${getLevelClass(q.level)}">${q.levelName} — Вопрос ${currentQuestion + 1}</div>
      <div class="quiz-question-card">
        <div class="quiz-scenario">
          <div class="label">📩 ${q.scenario}</div>
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
          ${currentQuestion < quizData.length - 1 ? 'Следующий вопрос →' : 'Показать результат →'}
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
      if (currentQuestion < quizData.length) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function handleAnswer(index, correctIndex) {
    if (answered) return;
    answered = true;

    const q = quizData[currentQuestion];
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
      feedback.innerHTML = '<strong>✓ Правильно!</strong> ' + q.feedback;
    } else {
      feedback.className = 'quiz-feedback wrong';
      feedback.innerHTML = '<strong>✗ Неправильно.</strong> ' + q.feedback;
    }

    feedback.style.display = 'block';
    nextBtn.style.display = 'inline-flex';
  }

  function renderResult() {
    let badge, title, desc;
    const pct = Math.round((score / quizData.length) * 100);

    if (score >= 9) {
      badge = '🛡️';
      title = 'Эксперт по безопасности!';
      desc = 'Вы отлично разбираетесь в схемах мошенников. Поделитесь знаниями с близкими!';
    } else if (score >= 7) {
      badge = '👍';
      title = 'Хороший результат!';
      desc = 'Вы знаете основные схемы, но стоит изучить продвинутые методы мошенников.';
    } else if (score >= 5) {
      badge = '⚠️';
      title = 'Будьте внимательнее!';
      desc = 'Вы знаете базовые правила, но мошенники могут вас обмануть. Изучите наши гайды.';
    } else {
      badge = '🚨';
      title = 'Вы в зоне риска!';
      desc = 'Мошенники могут легко вас обмануть. Обязательно изучите раздел со схемами и гайды по безопасности.';
    }

    const resultClass = score >= 8 ? 'great' : score >= 5 ? 'good' : 'poor';

    quizContainer.innerHTML = `
      <div class="quiz-question-card quiz-result">
        <div class="result-badge ${resultClass}">${badge}</div>
        <h2 style="font-size:1.6rem; margin-bottom:8px;">${title}</h2>
        <p style="color:var(--text-muted); margin-bottom:24px;">${desc}</p>
        <div class="quiz-score">
          <div class="score-item">
            <div class="val">${score}/${quizData.length}</div>
            <div class="label">Правильных</div>
          </div>
          <div class="score-item">
            <div class="val">${pct}%</div>
            <div class="label">Точность</div>
          </div>
          <div class="score-item">
            <div class="val">${score >= 8 ? 'Эксперт' : score >= 5 ? 'Средний' : 'Новичок'}</div>
            <div class="label">Уровень</div>
          </div>
        </div>
        <div class="btn-group" style="justify-content:center; margin-top:16px;">
          <button class="btn btn-accent" id="quizRestart">Пройти ещё раз</button>
          <a href="guides.html" class="btn btn-outline">Изучить гайды</a>
        </div>
      </div>
    `;

    document.getElementById('quizRestart').addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      renderQuestion();
    });
  }

  // Start quiz
  renderQuestion();

});
