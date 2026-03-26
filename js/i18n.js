/* ══════════════════════════════════════════════
   PEASE — Internationalization (i18n)
   ══════════════════════════════════════════════ */

(function () {
  'use strict';

  var T = {
    ru: {
      /* ── Nav ── */
      nav_home: 'Главная',
      nav_schemes: 'Схемы',
      nav_quiz: 'Тест',
      nav_guides: 'Гайды',
      nav_contacts: 'Контакты',
      nav_cta: 'Пройти тест',

      /* ── Footer ── */
      footer_tagline: 'Образовательный проект о защите от мошенничества. Защити себя и близких.',
      footer_sections: 'Разделы',
      footer_link_schemes: 'Схемы мошенников',
      footer_link_quiz: 'Тест на знания',
      footer_link_guides: 'Гайды',
      footer_link_contacts: 'Контакты',
      footer_help: 'Помощь',
      footer_help1: 'Что делать если обманули',
      footer_help2: 'Куда звонить',
      footer_help3: 'Сообщить о схеме',
      footer_about: 'О проекте',
      footer_about_team: 'Команда PEASE',
      footer_about_sources: 'Источники',
      footer_about_privacy: 'Конфиденциальность',
      footer_copyright: '&copy; 2026 PEASE. Все права защищены.',
      footer_slogan: 'Защити себя и близких',

      /* ═══ index.html ═══ */
      index_title: 'PEASE — Защити себя и близких от мошенников',
      index_hero_badge: 'Образовательный проект 2026',
      index_hero_h1: 'Не дай себя<br><span class="accent">обмануть.</span>',
      index_hero_p: 'PEASE — образовательная платформа о мошенничестве в интернете. Узнайте, как работают популярные схемы обмана и защитите себя и своих близких.',
      index_hero_btn1: 'Схемы мошенников',
      index_hero_btn2: 'Проверить знания',
      index_stat1_num: '2.8 млн',
      index_stat1_lbl: 'Жертв в 2025',
      index_stat2_num: '100 млрд ₸',
      index_stat2_lbl: 'Украдено',
      index_stat3_lbl: 'Схем разобрано',
      index_stat4_lbl: 'Бесплатно',
      index_why_tag: 'Почему это важно',
      index_why_h2: 'Каждые 9 секунд — новая жертва',
      index_why_sub: 'Мошенники становятся всё изобретательнее. Знание их методов — ваша лучшая защита.',
      index_why1_h3: 'Телефонные схемы',
      index_why1_p: 'Звонки от «банков», «полиции», «родственников в беде» — самый распространённый вид мошенничества.',
      index_why2_h3: 'Онлайн-мошенничество',
      index_why2_p: 'Фишинговые сайты, поддельные магазины, фейковые розыгрыши — интернет полон ловушек.',
      index_why3_h3: 'Финансовые пирамиды',
      index_why3_p: 'Обещания «гарантированного дохода» и «инвестиций без риска» — прямой путь к потере денег.',
      index_why4_h3: 'Deepfake и ИИ',
      index_why4_p: 'Новые технологии позволяют подделывать голос и видео. Мошенники идут в ногу со временем.',
      index_links_tag: 'Разделы сайта',
      index_links_h2: 'Изучите и защитите себя',
      index_links_sub: 'Всё, что нужно знать о безопасности в интернете — в одном месте.',
      index_link1_h3: 'Каталог схем',
      index_link1_p: '12 подробно разобранных схем мошенников с красными флагами и рекомендациями.',
      index_link1_arrow: 'Изучить →',
      index_link2_h3: 'Тест на знания',
      index_link2_p: '10 реалистичных сценариев. Проверьте, сможете ли вы распознать мошенников.',
      index_link2_arrow: 'Пройти тест →',
      index_link3_h3: 'Гайды по безопасности',
      index_link3_p: '8 подробных руководств: от паролей до защиты пожилых родственников.',
      index_link3_arrow: 'Читать →',
      index_link4_h3: 'Экстренная помощь',
      index_link4_p: 'Что делать, если вас обманули. Контакты экстренных служб и пошаговый план.',
      index_link4_arrow: 'Контакты →',
      index_stats_tag: 'Статистика',
      index_stats_h2: 'Мошенничество в цифрах',
      index_stats_sub: 'Данные за 2025 год по Казахстану. Источник: АРРФР, МВД РК.',
      index_num1_lbl: 'жертв — люди 25–55 лет',
      index_num2_lbl: 'атак — через телефон',
      index_num3_lbl: 'денег не возвращают',
      index_num4_lbl: 'среднее время атаки',

      /* ═══ schemes.html ═══ */
      schemes_title: 'Схемы мошенников — PEASE',
      schemes_hero_badge: 'Каталог мошеннических схем',
      schemes_hero_h1: 'Знай врага<br><span class="accent">в лицо.</span>',
      schemes_hero_p: '12 самых распространённых схем обмана. Узнайте, как они работают, по каким признакам их распознать и что делать, если вы столкнулись с мошенниками.',
      schemes_tag: 'Все схемы',
      schemes_h2: 'Каталог мошеннических схем',
      schemes_sub: 'Фильтруйте по категории, чтобы быстро найти нужную информацию.',
      filter_all: 'Все',
      filter_phone: '<i class="fa-solid fa-mobile-screen-button"></i> Телефонные',
      filter_online: '<i class="fa-solid fa-laptop"></i> Онлайн',
      filter_financial: '<i class="fa-solid fa-coins"></i> Финансовые',
      filter_social: '<i class="fa-solid fa-users"></i> Социальные',
      scheme_how: 'Как это работает',
      scheme_flags: 'Красные флаги',
      scheme_what: 'Что делать',
      badge_high: 'Высокая опасность',
      badge_medium: 'Средняя опасность',

      s1_h3: 'Фишинг', s1_p: 'Поддельные сайты и письма, копирующие банки, eGov и популярные сервисы для кражи логинов и данных карт.',
      s2_h3: 'Звонки от «банка»', s2_p: 'Мошенники звонят, представляясь сотрудниками банка или Нацбанка РК, и убеждают перевести деньги на «безопасный счёт».',
      s3_h3: 'Фейковые магазины', s3_p: 'Поддельные интернет-магазины с невероятными ценами. Товар не приходит, деньги не возвращают.',
      s4_h3: 'Романтические аферы', s4_p: 'Мошенники заводят романтические отношения онлайн, чтобы затем выманить деньги под различными предлогами.',
      s5_h3: 'Крипто-мошенничество', s5_p: 'Фейковые криптобиржи, «инвестиционные платформы» и «сигнальные группы» в Telegram с обещанием быстрого обогащения.',
      s6_h3: 'Фейковые вакансии', s6_p: 'Несуществующие вакансии с высокой зарплатой, которые используют для кражи персональных данных или денег.',
      s7_h3: 'Фейковые лотереи и розыгрыши', s7_p: '«Вы выиграли приз!» — знакомое сообщение? Чтобы «получить» выигрыш, нужно заплатить «налог» или «комиссию».',
      s8_h3: 'Инвестиционные пирамиды', s8_p: 'Схема Понци: первые вкладчики получают деньги за счёт новых. Когда поток новых участников иссякает — все теряют.',
      s9_h3: 'Фейковая техподдержка', s9_p: 'Звонки или всплывающие окна с предупреждением о «вирусе» на компьютере и предложением платной «помощи».',
      s10_h3: 'QR-код мошенничество', s10_p: 'Поддельные QR-коды на объявлениях, чеках и товарах, ведущие на фишинговые сайты.',
      s11_h3: 'Взлом соцсетей', s11_p: 'Взлом аккаунтов в Instagram, Telegram, WhatsApp для рассылки просьб о деньгах друзьям жертвы.',
      s12_h3: 'Фейковые благотворительные сборы', s12_p: 'Ложные сборы на «лечение ребёнка» или «помощь пострадавшим» — деньги идут мошенникам.',

      /* ═══ quiz.html ═══ */
      quiz_title: 'Тест на знания — PEASE',
      quiz_hero_badge: 'Проверка знаний',
      quiz_hero_h1: 'Сможешь ли ты<br><span class="accent">распознать обман?</span>',
      quiz_hero_p: '10 реалистичных сценариев — от SMS до deepfake-звонков. Три уровня сложности: новичок, продвинутый, эксперт. Проверьте, насколько вы защищены от мошенников.',

      /* ═══ guides.html ═══ */
      guides_title: 'Гайды по безопасности — PEASE',
      guides_hero_badge: 'Практические руководства',
      guides_hero_h1: 'Безопасность —<br><span class="accent">это навык.</span>',
      guides_hero_p: '8 подробных гайдов с пошаговыми инструкциями, советами экспертов и разбором типичных ошибок. От проверки сайтов до защиты пожилых родственников.',
      guides_tag: 'Библиотека знаний',
      guides_h2: 'Гайды по безопасности',
      guides_sub: 'Нажмите на карточку, чтобы раскрыть полное руководство.',
      g1_h3: 'Как проверить сайт на подлинность',
      g1_p: 'Научитесь отличать настоящие сайты от поддельных за 2 минуты',
      g2_h3: 'Безопасность паролей',
      g2_p: 'Создание надёжных паролей и управление ими без головной боли',
      g3_h3: 'Что делать после мошенничества',
      g3_p: 'Пошаговый план действий, если вас уже обманули',
      g4_h3: 'Защита пожилых родственников',
      g4_p: 'Как обезопасить родителей и бабушек/дедушек от мошенников',
      g5_h3: 'Безопасность в соцсетях',
      g5_p: 'Настройки приватности и правила поведения в Instagram, Telegram, WhatsApp',
      g6_h3: 'Безопасные онлайн-платежи',
      g6_p: 'Правила безопасных покупок и переводов в интернете',
      g7_h3: 'Как распознать мошеннический звонок',
      g7_p: 'Техники манипуляции и как им противостоять',
      g8_h3: 'Чек-лист безопасных покупок',
      g8_p: 'Проверяйте перед каждой покупкой онлайн',

      /* ═══ contacts.html ═══ */
      contacts_title: 'Экстренная помощь — PEASE',
      contacts_hero_badge: 'Экстренная помощь',
      contacts_hero_h1: 'Вас обманули?<br><span class="accent">Действуйте сейчас.</span>',
      contacts_hero_p: 'Пошаговый план действий, экстренные контакты и ответы на главные вопросы. Чем быстрее вы среагируете, тем больше шансов вернуть деньги.',
      contacts_timeline_tag: 'Пошаговый план',
      contacts_timeline_h2: 'Вас только что обманули — делайте это по порядку',
      contacts_timeline_sub: 'Каждая минута на счету. Следуйте этим шагам в указанном порядке.',
      ct1_h4: 'Немедленно — Заблокируйте карту',
      ct1_p: 'Позвоните в банк по номеру на обратной стороне карты или заблокируйте через мобильное приложение. Это остановит дальнейшие списания. Не звоните по номерам из подозрительных SMS.',
      ct2_h4: 'В течение 5 минут — Смените пароли',
      ct2_p: 'Если вы вводили пароли или данные на подозрительном сайте — смените их. Начните с email, потом банковские приложения, затем соцсети. Включите двухфакторную аутентификацию.',
      ct3_h4: 'В течение 15 минут — Зафиксируйте доказательства',
      ct3_p: 'Сделайте скриншоты: переписка, SMS, email, сайт мошенника, история звонков. Запишите номера телефонов, адреса сайтов, суммы переводов. Не удаляйте ничего.',
      ct4_h4: 'В течение часа — Заявление в банк',
      ct4_p: 'Подайте заявление о спорной операции. По закону банк обязан рассмотреть его в течение 30 дней (60 дней для международных операций). Сохраните номер обращения.',
      ct5_h4: 'В течение суток — Заявление в полицию',
      ct5_p: 'Обратитесь в ближайший отдел полиции лично. Возьмите с собой все доказательства: скриншоты, выписки из банка. Получите талон-уведомление о принятии заявления.',
      ct6_h4: 'Дополнительно — Сообщите в АРРФР',
      ct6_p: 'Подайте жалобу через интернет-приёмную АРРФР (finreg.kz). Это поможет зафиксировать мошенническую схему и защитить других людей от тех же мошенников.',
      contacts_emerg_tag: 'Экстренные контакты',
      contacts_emerg_h2: 'Куда звонить',
      contacts_emerg_sub: 'Сохраните эти номера в телефоне прямо сейчас.',
      ce1_h3: 'Ваш банк', ce1_phone: 'Номер на карте', ce1_p: 'Звоните по номеру на обратной стороне вашей карты. Работает круглосуточно. Попросите заблокировать карту и оформить заявление о мошенничестве.',
      ce2_h3: 'Полиция', ce2_phone: '102', ce2_p: 'Единый номер полиции. Подайте заявление о мошенничестве лично в ближайшем отделе. Возьмите с собой все доказательства.',
      ce3_h3: 'АРРФР (финансовый регулятор)', ce3_phone: '1459', ce3_p: 'Бесплатный номер для жалоб на финансовые организации. Также можно подать обращение через интернет-приёмную на finreg.kz.',
      ce4_h3: 'Министерство цифрового развития РК', ce4_phone: '1414', ce4_p: 'Для блокировки мошеннических сайтов. Подайте жалобу через портал eOtinish (eotinish.gov.kz). Помогите заблокировать ресурс мошенников.',
      contacts_faq_tag: 'Частые вопросы',
      contacts_faq_h2: 'FAQ после мошенничества',
      contacts_faq_sub: 'Ответы на самые важные вопросы, которые возникают после столкновения с мошенниками.',
      faq1_q: 'Можно ли вернуть деньги, переведённые мошенникам?',
      faq1_a: '<p>Шансы есть, если действовать быстро. По закону банк обязан рассмотреть заявление о спорной операции. Если вы подали заявление в день операции и мошенник ещё не снял деньги — банк может заморозить средства. Статистически возвращают около 4-8% от украденных сумм, но при быстром обращении шансы значительно выше.</p>',
      faq2_q: 'Нужно ли идти в полицию, если сумма небольшая?',
      faq2_a: '<p>Да, обязательно. Даже если сумма небольшая, ваше заявление поможет: 1) зафиксировать мошенническую схему, 2) объединить его с другими заявлениями по тем же мошенникам, 3) привлечь преступников к ответственности. Полиция не имеет права отказать в принятии заявления независимо от суммы.</p>',
      faq3_q: 'Мне стыдно, что я попался. Что делать?',
      faq3_a: '<p>Мошенники — профессиональные психологи. Они используют страх, срочность и авторитет, чтобы отключить критическое мышление. Жертвами становятся образованные, успешные люди. Это не ваша вина — это преступление мошенников. Не стесняйтесь обращаться за помощью и расскажите о своём опыте, чтобы защитить других.</p>',
      faq4_q: 'Мошенники знают мои данные. Чем это грозит?',
      faq4_a: '<p>Если утекли ФИО + телефон — вам будут звонить с новыми схемами. Если утекли данные удостоверения личности — на вас могут оформить кредит. Что делать: 1) смените все пароли, 2) включите 2FA везде, 3) проверяйте свою кредитную историю через ПКБ (1cb.kz), 4) установите добровольный отказ от получения кредитов через eGov.kz.</p>',
      faq5_q: 'Как проверить, не оформлен ли на меня кредит?',
      faq5_a: '<p>Через Первое кредитное бюро (1cb.kz) вы можете бесплатно запросить кредитную историю. Также можно установить добровольный отказ от получения кредитов через eGov.kz — это бесплатно и защитит от оформления кредитов мошенниками.</p>',
      faq6_q: 'Могу ли я подать заявление в полицию онлайн?',
      faq6_a: '<p>Да, вы можете подать обращение через портал Qamqor (qamqor.gov.kz), но для возбуждения дела потребуется личный визит в отделение. Онлайн-обращение ускоряет процесс — к вашему приходу заявление уже будет зарегистрировано. Также можно позвонить по номеру 102 и получить консультацию.</p>',
      contacts_report_tag: 'Помогите другим',
      contacts_report_h2: 'Сообщить о мошеннической схеме',
      contacts_report_sub: 'Расскажите нам о новой схеме мошенничества, чтобы мы предупредили других. Ваша информация поможет защитить людей.',
      form_name: 'Ваше имя',
      form_name_ph: 'Иван Иванов',
      form_email: 'Email',
      form_email_ph: 'ivan@example.com',
      form_type: 'Тип мошенничества',
      form_type_default: 'Выберите тип',
      form_type_phone: 'Телефонное мошенничество',
      form_type_online: 'Онлайн-мошенничество',
      form_type_financial: 'Финансовое мошенничество',
      form_type_social: 'Социальная инженерия',
      form_type_other: 'Другое',
      form_desc: 'Опишите схему',
      form_desc_ph: 'Подробно опишите, как действовали мошенники: что говорили, какие ссылки отправляли, какие данные запрашивали...',
      form_evidence: 'Ссылки или номера телефонов мошенников',
      form_evidence_ph: 'Номер телефона, URL сайта, email мошенника...',
      form_submit: 'Отправить сообщение',
      toast_success: 'Спасибо! Ваше сообщение отправлено.',
      toast_error: 'Ошибка отправки. Попробуйте позже.',
      form_sending: 'Отправка...',

      /* ═══ team.html ═══ */
      team_title: 'Команда PEASE — О нас',
      team_hero_badge: 'О проекте',
      team_hero_h1: 'Команда<br><span class="accent">PEASE</span>',
      team_hero_p: 'Мы — группа студентов, объединённых одной целью: сделать интернет безопаснее для каждого казахстанца. Наш проект помогает людям распознавать мошенничество и защищать себя и своих близких.',
      team_mission_tag: 'Наша миссия',
      team_mission_h2: 'Почему мы создали PEASE',
      team_mission_sub: 'Каждый день тысячи казахстанцев становятся жертвами мошенников. Мы верим, что знание — лучшая защита.',
      tm1_h3: 'Образование', tm1_p: 'Мы объясняем сложные схемы мошенничества простым и понятным языком, чтобы каждый мог защитить себя.',
      tm2_h3: 'Доступность', tm2_p: 'Все материалы бесплатны и доступны каждому. Мы не продаём услуги — мы помогаем людям.',
      tm3_h3: 'Актуальность', tm3_p: 'Мошенники постоянно придумывают новые схемы. Мы следим за трендами и обновляем информацию.',
      team_team_tag: 'Наша команда',
      team_team_h2: 'Кто стоит за проектом',
      team_team_sub: 'PEASE — это студенческий образовательный проект, созданный для защиты казахстанцев от мошенничества.',
      tp1_role: 'Digital Platform & Content Lead, Organizer',
      tp1_desc: 'Разработка цифровой платформы, создание контента и координация проекта.',
      tp2_role: 'Media & Content Lead, Organizer',
      tp2_desc: 'Медиа-стратегия, создание контента и продвижение проекта.',
      tp3_role: 'Researcher, Organizer',
      tp3_desc: 'Исследование схем мошенничества, анализ данных и проверка фактов.',
      tp4_role: 'Contract Manager, Organizer',
      tp4_desc: 'Управление партнёрствами, контрактами и организационная поддержка.',
      team_values_tag: 'Наши ценности',
      team_values_h2: 'Что означает PEASE',
      team_values_sub: 'Каждая буква в названии нашей команды отражает ключевую ценность, которой мы руководствуемся.',
      tv_p: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">P</span> — Patience · Терпение',
      tv_p_desc: 'Мошенники давят на срочность — мы учим не торопиться. Терпение и спокойствие помогают принимать правильные решения даже под давлением.',
      tv_e1: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">E</span> — Empathy · Эмпатия',
      tv_e1_desc: 'Жертвой мошенничества может стать каждый. Мы подходим к каждой истории с пониманием и без осуждения — стыд не должен мешать людям обращаться за помощью.',
      tv_a: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">A</span> — Adaptability · Адаптивность',
      tv_a_desc: 'Мошенники постоянно меняют тактику — мы тоже не стоим на месте. Мы следим за новыми схемами и оперативно обновляем материалы.',
      tv_s: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">S</span> — Security · Безопасность',
      tv_s_desc: 'Защита ваших данных и финансов — наш главный приоритет. Мы учим практическим навыкам цифровой безопасности, которые работают в реальной жизни.',
      tv_e2: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">E</span> — Empowerment · Расширение возможностей',
      tv_e2_desc: 'Знание — сила. Мы даём людям инструменты и знания, чтобы они могли самостоятельно распознавать угрозы и защищать себя и своих близких.',
      team_ig_tag: 'Мы в соцсетях',
      team_ig_h2: 'Подписывайтесь на наш Instagram',
      team_ig_sub: 'Следите за новостями, новыми схемами мошенников и полезными советами по безопасности.',
      team_ig_btn: '<i class="fa-brands fa-instagram"></i> @pease_project',
      team_ig_btn2: 'Сообщить о схеме',

      /* ═══ sources.html ═══ */
      sources_title: 'Источники — PEASE',
      sources_hero_badge: 'Прозрачность',
      sources_hero_h1: 'Наши<br><span class="accent">источники</span>',
      sources_hero_p: 'Вся информация на сайте PEASE основана на официальных данных государственных органов, финансовых регуляторов и проверенных исследований. Ниже — полный список источников.',
      sources_gov_tag: 'Государственные органы',
      sources_gov_h2: 'Официальные источники',
      sources_gov_sub: 'Данные государственных органов Республики Казахстан.',
      src_arrfr: 'АРРФР', src_arrfr_p: 'Агентство Республики Казахстан по регулированию и развитию финансового рынка — основной финансовый регулятор страны.',
      src_mvd: 'МВД Республики Казахстан', src_mvd_p: 'Министерство внутренних дел — статистика по киберпреступлениям и мошенничеству, данные о раскрытых схемах.',
      src_mcr: 'Министерство цифрового развития РК', src_mcr_p: 'Данные о блокировке мошеннических сайтов и мерах по защите граждан в цифровом пространстве.',
      src_kgd: 'Комитет государственных доходов', src_kgd_p: 'Информация о налоговых мошенничествах и фишинговых схемах, маскирующихся под КГД.',
      sources_fin_tag: 'Финансовые организации',
      sources_fin_h2: 'Банки и финансовые сервисы',
      sources_fin_sub: 'Рекомендации и данные от финансовых организаций Казахстана.',
      src_kaspi_p: 'Рекомендации по безопасности для пользователей Kaspi.kz, информация о распространённых схемах мошенничества.',
      src_halyk_p: 'Материалы по финансовой грамотности и защите от мошенников.',
      src_pkb: 'Первое кредитное бюро', src_pkb_p: 'Данные о кредитном мошенничестве и инструменты проверки кредитной истории.',
      src_egov_p: 'Портал электронного правительства — информация о государственных услугах и защите персональных данных.',
      sources_res_tag: 'Исследования',
      sources_res_h2: 'Аналитика и исследования',
      sources_res_sub: 'Международные и казахстанские исследования в области кибербезопасности.',
      src_interpol_p: 'Международная статистика по киберпреступлениям и рекомендации по борьбе с онлайн-мошенничеством.',
      src_cert_p: 'Служба реагирования на компьютерные инциденты — данные о киберугрозах в Казахстане.',
      src_kazinform_p: 'Международное информационное агентство — новости о мошенничестве и кибербезопасности в Казахстане.',
      src_kaspersky_p: 'Исследования в области кибербезопасности, статистика по фишингу и вредоносному ПО в Центральной Азии.',
      sources_disc_h2: 'Важное примечание',
      sources_disc_p: 'PEASE — образовательный проект. Мы не являемся юридической или финансовой организацией. Информация на сайте носит ознакомительный характер. Для получения юридической помощи обращайтесь к квалифицированным специалистам.',
      sources_disc_btn1: 'На главную',
      sources_disc_btn2: 'Экстренная помощь',

      /* ═══ privacy.html ═══ */
      privacy_title: 'Конфиденциальность — PEASE',
      privacy_hero_badge: 'Политика',
      privacy_hero_h1: 'Конфиден-<br><span class="accent">циальность</span>',
      privacy_hero_p: 'Мы уважаем вашу конфиденциальность. Эта страница объясняет, как мы обращаемся с данными на сайте PEASE.',
      privacy_tag: 'Политика конфиденциальности',
      privacy_h2: 'Как мы обращаемся с вашими данными',
      privacy_sub: 'Последнее обновление: март 2026'
    },

    /* ═══════════════════════════════════════════════════════
       ENGLISH TRANSLATIONS
       ═══════════════════════════════════════════════════════ */
    en: {
      /* ── Nav ── */
      nav_home: 'Home',
      nav_schemes: 'Schemes',
      nav_quiz: 'Quiz',
      nav_guides: 'Guides',
      nav_contacts: 'Contacts',
      nav_cta: 'Take Quiz',

      /* ── Footer ── */
      footer_tagline: 'Educational project about fraud protection. Protect yourself and your loved ones.',
      footer_sections: 'Sections',
      footer_link_schemes: 'Fraud Schemes',
      footer_link_quiz: 'Knowledge Quiz',
      footer_link_guides: 'Guides',
      footer_link_contacts: 'Contacts',
      footer_help: 'Help',
      footer_help1: 'What to do if scammed',
      footer_help2: 'Who to call',
      footer_help3: 'Report a scheme',
      footer_about: 'About',
      footer_about_team: 'PEASE Team',
      footer_about_sources: 'Sources',
      footer_about_privacy: 'Privacy Policy',
      footer_copyright: '&copy; 2026 PEASE. All rights reserved.',
      footer_slogan: 'Protect yourself and your loved ones',

      /* ═══ index.html ═══ */
      index_title: 'PEASE — Protect Yourself and Your Loved Ones from Fraud',
      index_hero_badge: 'Educational Project 2026',
      index_hero_h1: 'Don\'t let yourself<br><span class="accent">get fooled.</span>',
      index_hero_p: 'PEASE is an educational platform about online fraud. Learn how popular scam schemes work and protect yourself and your loved ones.',
      index_hero_btn1: 'Fraud Schemes',
      index_hero_btn2: 'Test Your Knowledge',
      index_stat1_num: '2.8M',
      index_stat1_lbl: 'Victims in 2025',
      index_stat2_num: '100B ₸',
      index_stat2_lbl: 'Stolen',
      index_stat3_lbl: 'Schemes covered',
      index_stat4_lbl: 'Free of charge',
      index_why_tag: 'Why It Matters',
      index_why_h2: 'Every 9 seconds — a new victim',
      index_why_sub: 'Fraudsters are getting smarter. Knowing their methods is your best protection.',
      index_why1_h3: 'Phone Scams',
      index_why1_p: 'Calls from "banks", "police", "relatives in trouble" — the most common type of fraud.',
      index_why2_h3: 'Online Fraud',
      index_why2_p: 'Phishing sites, fake stores, fake giveaways — the internet is full of traps.',
      index_why3_h3: 'Financial Pyramids',
      index_why3_p: 'Promises of "guaranteed income" and "risk-free investments" lead straight to losing money.',
      index_why4_h3: 'Deepfake & AI',
      index_why4_p: 'New technologies allow voice and video faking. Fraudsters keep up with the times.',
      index_links_tag: 'Site Sections',
      index_links_h2: 'Learn and Protect Yourself',
      index_links_sub: 'Everything you need to know about online safety — in one place.',
      index_link1_h3: 'Scheme Catalog',
      index_link1_p: '12 detailed fraud schemes with red flags and recommendations.',
      index_link1_arrow: 'Explore →',
      index_link2_h3: 'Knowledge Quiz',
      index_link2_p: '10 realistic scenarios. Test if you can spot the scammers.',
      index_link2_arrow: 'Take Quiz →',
      index_link3_h3: 'Security Guides',
      index_link3_p: '8 detailed guides: from passwords to protecting elderly relatives.',
      index_link3_arrow: 'Read →',
      index_link4_h3: 'Emergency Help',
      index_link4_p: 'What to do if you were scammed. Emergency contacts and a step-by-step plan.',
      index_link4_arrow: 'Contacts →',
      index_stats_tag: 'Statistics',
      index_stats_h2: 'Fraud by the Numbers',
      index_stats_sub: '2025 data for Kazakhstan. Source: ARDFM, Ministry of Internal Affairs.',
      index_num1_lbl: 'victims are aged 25–55',
      index_num2_lbl: 'of attacks via phone',
      index_num3_lbl: 'of money is unrecovered',
      index_num4_lbl: 'average attack duration',

      /* ═══ schemes.html ═══ */
      schemes_title: 'Fraud Schemes — PEASE',
      schemes_hero_badge: 'Fraud Scheme Catalog',
      schemes_hero_h1: 'Know your enemy<br><span class="accent">by sight.</span>',
      schemes_hero_p: '12 of the most common fraud schemes. Learn how they work, how to recognize them, and what to do if you encounter scammers.',
      schemes_tag: 'All Schemes',
      schemes_h2: 'Fraud Scheme Catalog',
      schemes_sub: 'Filter by category to quickly find the information you need.',
      filter_all: 'All',
      filter_phone: '<i class="fa-solid fa-mobile-screen-button"></i> Phone',
      filter_online: '<i class="fa-solid fa-laptop"></i> Online',
      filter_financial: '<i class="fa-solid fa-coins"></i> Financial',
      filter_social: '<i class="fa-solid fa-users"></i> Social',
      scheme_how: 'How it works',
      scheme_flags: 'Red flags',
      scheme_what: 'What to do',
      badge_high: 'High danger',
      badge_medium: 'Medium danger',

      s1_h3: 'Phishing', s1_p: 'Fake websites and emails mimicking banks, eGov, and popular services to steal logins and card data.',
      s2_h3: '"Bank" calls', s2_p: 'Scammers call pretending to be bank employees, convincing victims to transfer money to a "safe account".',
      s3_h3: 'Fake stores', s3_p: 'Fake online stores with unbelievable prices. Products never arrive, money is never returned.',
      s4_h3: 'Romance scams', s4_p: 'Scammers build romantic relationships online to eventually extort money under various pretexts.',
      s5_h3: 'Crypto fraud', s5_p: 'Fake crypto exchanges, "investment platforms" and "signal groups" in Telegram promising quick riches.',
      s6_h3: 'Fake job offers', s6_p: 'Non-existent vacancies with high salaries used to steal personal data or money.',
      s7_h3: 'Fake lotteries & giveaways', s7_p: '"You won a prize!" — sound familiar? To "claim" the winnings, you must pay a "tax" or "fee".',
      s8_h3: 'Investment pyramids', s8_p: 'Ponzi scheme: early investors get paid with new investors\' money. When new money stops coming — everyone loses.',
      s9_h3: 'Fake tech support', s9_p: 'Calls or pop-ups warning about a "virus" on your computer and offering paid "help".',
      s10_h3: 'QR code fraud', s10_p: 'Fake QR codes on ads, receipts, and products leading to phishing sites.',
      s11_h3: 'Social media hacking', s11_p: 'Hacking accounts on Instagram, Telegram, WhatsApp to send money requests to the victim\'s friends.',
      s12_h3: 'Fake charity drives', s12_p: 'Fake fundraisers for "a sick child" or "disaster victims" — the money goes to scammers.',

      /* ═══ quiz.html ═══ */
      quiz_title: 'Knowledge Quiz — PEASE',
      quiz_hero_badge: 'Knowledge Check',
      quiz_hero_h1: 'Can you<br><span class="accent">spot the scam?</span>',
      quiz_hero_p: '10 realistic scenarios — from SMS to deepfake calls. Three difficulty levels: beginner, intermediate, expert. Test how protected you are from scammers.',

      /* ═══ guides.html ═══ */
      guides_title: 'Security Guides — PEASE',
      guides_hero_badge: 'Practical Guides',
      guides_hero_h1: 'Security is<br><span class="accent">a skill.</span>',
      guides_hero_p: '8 detailed guides with step-by-step instructions, expert tips, and common mistake breakdowns. From checking websites to protecting elderly relatives.',
      guides_tag: 'Knowledge Library',
      guides_h2: 'Security Guides',
      guides_sub: 'Click on a card to reveal the full guide.',
      g1_h3: 'How to verify a website',
      g1_p: 'Learn to tell real websites from fake ones in 2 minutes',
      g2_h3: 'Password security',
      g2_p: 'Creating strong passwords and managing them without the headache',
      g3_h3: 'What to do after being scammed',
      g3_p: 'Step-by-step action plan if you\'ve already been scammed',
      g4_h3: 'Protecting elderly relatives',
      g4_p: 'How to keep parents and grandparents safe from scammers',
      g5_h3: 'Social media safety',
      g5_p: 'Privacy settings and behavior rules for Instagram, Telegram, WhatsApp',
      g6_h3: 'Safe online payments',
      g6_p: 'Rules for safe purchases and transfers online',
      g7_h3: 'How to recognize a scam call',
      g7_p: 'Manipulation techniques and how to resist them',
      g8_h3: 'Safe shopping checklist',
      g8_p: 'Check before every online purchase',

      /* ═══ contacts.html ═══ */
      contacts_title: 'Emergency Help — PEASE',
      contacts_hero_badge: 'Emergency Help',
      contacts_hero_h1: 'Been scammed?<br><span class="accent">Act now.</span>',
      contacts_hero_p: 'Step-by-step action plan, emergency contacts, and answers to key questions. The faster you react, the better your chances of recovering your money.',
      contacts_timeline_tag: 'Step-by-Step Plan',
      contacts_timeline_h2: 'You\'ve just been scammed — do this in order',
      contacts_timeline_sub: 'Every minute counts. Follow these steps in the given order.',
      ct1_h4: 'Immediately — Block your card',
      ct1_p: 'Call your bank using the number on the back of your card or block it via the mobile app. This will stop further charges. Do not call numbers from suspicious SMS.',
      ct2_h4: 'Within 5 minutes — Change passwords',
      ct2_p: 'If you entered passwords or data on a suspicious site — change them. Start with email, then banking apps, then social media. Enable two-factor authentication.',
      ct3_h4: 'Within 15 minutes — Collect evidence',
      ct3_p: 'Take screenshots: conversations, SMS, emails, the scammer\'s site, call history. Write down phone numbers, website addresses, transfer amounts. Don\'t delete anything.',
      ct4_h4: 'Within an hour — File a bank claim',
      ct4_p: 'Submit a disputed transaction claim. By law, the bank must review it within 30 days (60 days for international transactions). Save the reference number.',
      ct5_h4: 'Within 24 hours — File a police report',
      ct5_p: 'Visit the nearest police station in person. Bring all evidence: screenshots, bank statements. Get a notification receipt confirming your report was accepted.',
      ct6_h4: 'Additionally — Report to ARDFM',
      ct6_p: 'File a complaint through the ARDFM online portal (finreg.kz). This will help record the fraudulent scheme and protect others from the same scammers.',
      contacts_emerg_tag: 'Emergency Contacts',
      contacts_emerg_h2: 'Who to call',
      contacts_emerg_sub: 'Save these numbers in your phone right now.',
      ce1_h3: 'Your bank', ce1_phone: 'Number on card', ce1_p: 'Call the number on the back of your card. Available 24/7. Ask to block your card and file a fraud report.',
      ce2_h3: 'Police', ce2_phone: '102', ce2_p: 'National police number. File a fraud report in person at the nearest station. Bring all evidence.',
      ce3_h3: 'ARDFM (financial regulator)', ce3_phone: '1459', ce3_p: 'Free number for complaints about financial organizations. You can also file online at finreg.kz.',
      ce4_h3: 'Ministry of Digital Development', ce4_phone: '1414', ce4_p: 'For blocking fraudulent websites. File a complaint via the eOtinish portal (eotinish.gov.kz). Help block the scammer\'s resource.',
      contacts_faq_tag: 'FAQ',
      contacts_faq_h2: 'FAQ after fraud',
      contacts_faq_sub: 'Answers to the most important questions that arise after encountering scammers.',
      faq1_q: 'Can I get my money back after transferring to scammers?',
      faq1_a: '<p>There is a chance if you act quickly. By law, the bank must review a disputed transaction claim. If you filed on the same day and the scammer hasn\'t withdrawn the money yet, the bank can freeze the funds. Statistically, about 4-8% of stolen amounts are recovered, but quick action significantly improves your chances.</p>',
      faq2_q: 'Should I go to the police even if the amount is small?',
      faq2_a: '<p>Yes, absolutely. Even if the amount is small, your report helps: 1) record the fraudulent scheme, 2) combine it with other reports about the same scammers, 3) bring criminals to justice. Police cannot refuse to accept your report regardless of the amount.</p>',
      faq3_q: 'I\'m ashamed I fell for it. What should I do?',
      faq3_a: '<p>Scammers are professional psychologists. They use fear, urgency, and authority to disable critical thinking. Educated, successful people become victims. It\'s not your fault — it\'s the scammers\' crime. Don\'t hesitate to seek help and share your experience to protect others.</p>',
      faq4_q: 'Scammers know my personal data. What are the risks?',
      faq4_a: '<p>If your name + phone leaked — you\'ll get calls with new schemes. If your ID data leaked — fraudsters may take out loans in your name. What to do: 1) change all passwords, 2) enable 2FA everywhere, 3) check your credit history via PKB (1cb.kz), 4) set up voluntary credit refusal via eGov.kz.</p>',
      faq5_q: 'How to check if someone took out a loan in my name?',
      faq5_a: '<p>Through the First Credit Bureau (1cb.kz) you can request your credit history for free. You can also set up voluntary credit refusal via eGov.kz — it\'s free and will protect you from fraudsters taking out loans in your name.</p>',
      faq6_q: 'Can I file a police report online?',
      faq6_a: '<p>Yes, you can submit a report through the Qamqor portal (qamqor.gov.kz), but a personal visit to the station is required to open a case. An online report speeds up the process — your report will already be registered by the time you arrive. You can also call 102 for a consultation.</p>',
      contacts_report_tag: 'Help Others',
      contacts_report_h2: 'Report a Fraud Scheme',
      contacts_report_sub: 'Tell us about a new fraud scheme so we can warn others. Your information will help protect people.',
      form_name: 'Your name',
      form_name_ph: 'John Doe',
      form_email: 'Email',
      form_email_ph: 'john@example.com',
      form_type: 'Type of fraud',
      form_type_default: 'Select type',
      form_type_phone: 'Phone fraud',
      form_type_online: 'Online fraud',
      form_type_financial: 'Financial fraud',
      form_type_social: 'Social engineering',
      form_type_other: 'Other',
      form_desc: 'Describe the scheme',
      form_desc_ph: 'Describe in detail how the scammers operated: what they said, what links they sent, what data they requested...',
      form_evidence: 'Links or phone numbers of scammers',
      form_evidence_ph: 'Phone number, website URL, scammer\'s email...',
      form_submit: 'Submit report',
      toast_success: 'Thank you! Your report has been sent.',
      toast_error: 'Sending failed. Please try again later.',
      form_sending: 'Sending...',

      /* ═══ team.html ═══ */
      team_title: 'PEASE Team — About Us',
      team_hero_badge: 'About',
      team_hero_h1: 'The<br><span class="accent">PEASE</span> Team',
      team_hero_p: 'We are a group of students united by one goal: to make the internet safer for every citizen of Kazakhstan. Our project helps people recognize fraud and protect themselves and their loved ones.',
      team_mission_tag: 'Our Mission',
      team_mission_h2: 'Why we created PEASE',
      team_mission_sub: 'Every day thousands of people in Kazakhstan fall victim to scammers. We believe that knowledge is the best protection.',
      tm1_h3: 'Education', tm1_p: 'We explain complex fraud schemes in simple, understandable language so everyone can protect themselves.',
      tm2_h3: 'Accessibility', tm2_p: 'All materials are free and available to everyone. We don\'t sell services — we help people.',
      tm3_h3: 'Relevance', tm3_p: 'Scammers constantly invent new schemes. We follow the trends and keep our information up to date.',
      team_team_tag: 'Our Team',
      team_team_h2: 'Who\'s behind the project',
      team_team_sub: 'PEASE is a student educational project created to protect people in Kazakhstan from fraud.',
      tp1_role: 'Digital Platform & Content Lead, Organizer',
      tp1_desc: 'Digital platform development, content creation, and project coordination.',
      tp2_role: 'Media & Content Lead, Organizer',
      tp2_desc: 'Media strategy, content creation, and project promotion.',
      tp3_role: 'Researcher, Organizer',
      tp3_desc: 'Fraud scheme research, data analysis, and fact-checking.',
      tp4_role: 'Contract Manager, Organizer',
      tp4_desc: 'Partnership management, contracts, and organizational support.',
      team_values_tag: 'Our Values',
      team_values_h2: 'What PEASE stands for',
      team_values_sub: 'Each letter in our team name reflects a core value that guides us.',
      tv_p: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">P</span> — Patience',
      tv_p_desc: 'Scammers push urgency — we teach people to slow down. Patience and calm help make the right decisions even under pressure.',
      tv_e1: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">E</span> — Empathy',
      tv_e1_desc: 'Anyone can become a victim of fraud. We approach every story with understanding and without judgment — shame should not prevent people from seeking help.',
      tv_a: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">A</span> — Adaptability',
      tv_a_desc: 'Scammers constantly change tactics — so do we. We monitor new schemes and promptly update our materials.',
      tv_s: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">S</span> — Security',
      tv_s_desc: 'Protecting your data and finances is our top priority. We teach practical digital security skills that work in real life.',
      tv_e2: '<span style="color:var(--accent-light); font-family:\'Bebas Neue\',sans-serif; font-size:1.8rem;">E</span> — Empowerment',
      tv_e2_desc: 'Knowledge is power. We give people tools and knowledge so they can independently recognize threats and protect themselves and their loved ones.',
      team_ig_tag: 'Social Media',
      team_ig_h2: 'Follow us on Instagram',
      team_ig_sub: 'Stay updated on news, new fraud schemes, and useful security tips.',
      team_ig_btn: '<i class="fa-brands fa-instagram"></i> @pease_project',
      team_ig_btn2: 'Report a scheme',

      /* ═══ sources.html ═══ */
      sources_title: 'Sources — PEASE',
      sources_hero_badge: 'Transparency',
      sources_hero_h1: 'Our<br><span class="accent">sources</span>',
      sources_hero_p: 'All information on the PEASE website is based on official data from government agencies, financial regulators, and verified research. Below is the full list of sources.',
      sources_gov_tag: 'Government Agencies',
      sources_gov_h2: 'Official Sources',
      sources_gov_sub: 'Data from government agencies of the Republic of Kazakhstan.',
      src_arrfr: 'ARDFM', src_arrfr_p: 'Agency of the Republic of Kazakhstan for Regulation and Development of the Financial Market — the main financial regulator of the country.',
      src_mvd: 'Ministry of Internal Affairs', src_mvd_p: 'Ministry of Internal Affairs — cybercrime and fraud statistics, data on uncovered schemes.',
      src_mcr: 'Ministry of Digital Development', src_mcr_p: 'Data on blocking fraudulent websites and measures to protect citizens in the digital space.',
      src_kgd: 'State Revenue Committee', src_kgd_p: 'Information about tax fraud and phishing schemes disguised as the State Revenue Committee.',
      sources_fin_tag: 'Financial Organizations',
      sources_fin_h2: 'Banks and Financial Services',
      sources_fin_sub: 'Recommendations and data from financial organizations of Kazakhstan.',
      src_kaspi_p: 'Security recommendations for Kaspi.kz users, information about common fraud schemes.',
      src_halyk_p: 'Financial literacy materials and fraud protection guidance.',
      src_pkb: 'First Credit Bureau', src_pkb_p: 'Credit fraud data and credit history verification tools.',
      src_egov_p: 'E-government portal — information about government services and personal data protection.',
      sources_res_tag: 'Research',
      sources_res_h2: 'Analytics and Research',
      sources_res_sub: 'International and Kazakhstani cybersecurity research.',
      src_interpol_p: 'International cybercrime statistics and recommendations for combating online fraud.',
      src_cert_p: 'Computer incident response service — data on cyber threats in Kazakhstan.',
      src_kazinform_p: 'International news agency — news about fraud and cybersecurity in Kazakhstan.',
      src_kaspersky_p: 'Cybersecurity research, phishing and malware statistics in Central Asia.',
      sources_disc_h2: 'Important Notice',
      sources_disc_p: 'PEASE is an educational project. We are not a legal or financial organization. The information on this website is for educational purposes only. For legal assistance, please consult qualified specialists.',
      sources_disc_btn1: 'Home',
      sources_disc_btn2: 'Emergency Help',

      /* ═══ privacy.html ═══ */
      privacy_title: 'Privacy Policy — PEASE',
      privacy_hero_badge: 'Policy',
      privacy_hero_h1: 'Privacy<br><span class="accent">Policy</span>',
      privacy_hero_p: 'We respect your privacy. This page explains how we handle data on the PEASE website.',
      privacy_tag: 'Privacy Policy',
      privacy_h2: 'How we handle your data',
      privacy_sub: 'Last updated: March 2026'
    }
  };

  /* ═══════════════════════════════════════════════════════
     QUIZ DATA (English)
     ═══════════════════════════════════════════════════════ */

  window.QUIZ_DATA = {
    en: [
      {
        level: 'beginner', levelName: 'Beginner', scenario: 'SMS message',
        text: 'You received an SMS: "Dear customer! Your card has been blocked. To unblock it, follow the link: kaspi-unlock.xyz and enter your card details. Kaspi Bank Security Service."',
        options: [
          'Click the link and enter card details',
          'Call the number on the back of your card to verify the information',
          'Forward the SMS to friends to check',
          'Reply to the SMS asking for more information'
        ],
        correct: 1,
        feedback: 'Banks never ask for card details via SMS. The domain kaspi-unlock.xyz is fake. Always call your bank using the official number on the back of your card.'
      },
      {
        level: 'beginner', levelName: 'Beginner', scenario: 'Phone call',
        text: 'You get a call from someone claiming to be a police officer. They say your relative was in a car accident and you need to urgently transfer 300,000 ₸ to "resolve the issue". They ask you not to tell anyone.',
        options: [
          'Urgently transfer the money — your relative is in trouble',
          'Ask them to call back in 5 minutes while you call your relative directly',
          'Ask for their name and title, then transfer the money',
          'Ask for the case number and transfer half the amount'
        ],
        correct: 1,
        feedback: 'This is the classic "relative in trouble" scheme. Real police never demand money over the phone. Always call your relative personally!'
      },
      {
        level: 'beginner', levelName: 'Beginner', scenario: 'Email',
        text: 'You received an email from "Kazpost": "Your package is held at customs. Pay the 5,000 ₸ duty to receive it. Payment link: kazpost-pay.com". You didn\'t order anything.',
        options: [
          'Pay the 5,000 ₸ — it\'s a small amount',
          'Ignore the email — you didn\'t order anything and the link is suspicious',
          'Click the link to see what package it is',
          'Reply to the email asking about the package'
        ],
        correct: 1,
        feedback: 'If you didn\'t order anything — it\'s fraud. The domain kazpost-pay.com is fake. The official Kazpost website is post.kz.'
      },
      {
        level: 'intermediate', levelName: 'Intermediate', scenario: 'Online store',
        text: 'You found an online store selling iPhone 15 Pro for 150,000 ₸ (normal price ~500,000 ₸). The site looks professional but has only been running for 2 months. Payment is only by transfer to an individual\'s card.',
        options: [
          'Buy it — great discount, the site looks reliable',
          'Don\'t buy — the price is too low, the site is new, and card transfer payment are signs of fraud',
          'Order with cash on delivery',
          'Contact support and ask for an even bigger discount'
        ],
        correct: 1,
        feedback: 'Three major red flags: 1) price 4 times below market, 2) site only exists for 2 months, 3) payment by transfer to an individual\'s card. This is 100% fraud.'
      },
      {
        level: 'intermediate', levelName: 'Intermediate', scenario: 'Messenger',
        text: 'An "investment consultant" messages you on Telegram, offering to invest in cryptocurrency with a guaranteed return of 30% per month. They show screenshots of other clients\' profits and pressure you to decide quickly.',
        options: [
          'Invest a small amount to test',
          'Refuse — a guaranteed 30% monthly return is impossible, this is a sign of a pyramid scheme',
          'Ask to see a license and then invest',
          'Wait a month and see the results'
        ],
        correct: 1,
        feedback: 'A guaranteed 30% monthly return is impossible even for the world\'s best investors. Screenshots are easily faked. This is a classic pyramid scheme.'
      },
      {
        level: 'intermediate', levelName: 'Intermediate', scenario: 'Social media',
        text: 'A "friend" messages you on Instagram: "Hi! Vote for my niece in a contest, you just need to log in through Instagram via this link." The link leads to insta-vote-auth.com.',
        options: [
          'Click the link and log in — a friend is asking',
          'Call your friend and ask if they really sent this',
          'Click the link but don\'t enter the password',
          'Log in but then change your password'
        ],
        correct: 1,
        feedback: 'Your friend\'s account may have been hacked. The link insta-vote-auth.com is a phishing site. Always verify such requests through another communication channel (call, different messenger).'
      },
      {
        level: 'intermediate', levelName: 'Intermediate', scenario: 'QR code',
        text: 'At a bus stop you see a sign: "Free Wi-Fi! Scan the QR code to connect." After scanning, a page opens asking for your phone number and an SMS code.',
        options: [
          'Enter the data — it\'s free Wi-Fi',
          'Don\'t enter data and don\'t scan suspicious QR codes on the street',
          'Enter someone else\'s phone number',
          'Connect to the Wi-Fi and check the speed'
        ],
        correct: 1,
        feedback: 'Scammers post fake QR codes in public places. Scanning can lead to a phishing site or download malware. Free Wi-Fi doesn\'t require SMS verification.'
      },
      {
        level: 'expert', levelName: 'Expert', scenario: 'Complex attack',
        text: 'Someone calls claiming to be from the National Bank, knows your full name, last 4 digits of your card, and your last transaction. They say suspicious operations are happening on your accounts and you need to transfer money to a "safe account".',
        options: [
          'Transfer the money — they know my details, so they must be from the bank',
          'Hang up and call the bank yourself using the number on your card',
          'Ask them to send an official email',
          'Transfer part of the money to check'
        ],
        correct: 1,
        feedback: 'Scammers can know your details from data breaches. The National Bank never calls citizens and never offers "safe accounts". Always hang up and call the bank yourself.'
      },
      {
        level: 'expert', levelName: 'Expert', scenario: 'Deepfake video call',
        text: 'Your "boss" calls you on video and urgently asks you to transfer money to a contractor using new bank details. The face and voice look right, but the video quality is slightly worse than usual, and the request is atypical.',
        options: [
          'Make the transfer — it\'s the boss on video',
          'Call the boss through a different channel to confirm',
          'Make the transfer but for a smaller amount',
          'Ask for confirmation via email'
        ],
        correct: 1,
        feedback: 'Deepfake technology can fake faces and voices in real time. For any atypical financial requests, always confirm through a different communication channel. This protects against deepfake fraud.'
      },
      {
        level: 'expert', levelName: 'Expert', scenario: 'Multi-stage attack',
        text: 'You received an email from the "tax authority" about an unpaid fine. You went to the site (looks like kgd.gov.kz), entered your ID number. Now someone calls you "from the tax office", knows your ID number, and demands payment by transfer to an account, or they\'ll take you to court.',
        options: [
          'Pay the fine — they know my ID number',
          'Recognize this is a multi-stage attack: the phishing site collected your ID, and the call uses that data to pressure you. Check on the official kgd.gov.kz website.',
          'Ask them to send a receipt by mail',
          'Clarify the account details and pay half'
        ],
        correct: 1,
        feedback: 'This is a multi-stage attack: first the phishing site collects your data, then scammers use it for a convincing call. The State Revenue Committee never demands payment by transfer. Check debts only on kgd.gov.kz via eGov.kz.'
      }
    ]
  };

  /* ═══════════════════════════════════════════════════════
     QUIZ ENGINE TEXT
     ═══════════════════════════════════════════════════════ */

  window.QUIZ_UI = {
    ru: {
      question: 'Вопрос',
      next: 'Следующий вопрос →',
      result: 'Показать результат →',
      correct: '✓ Правильно!',
      wrong: '✗ Неправильно.',
      restart: 'Пройти ещё раз',
      guides_link: 'Изучить гайды',
      score_correct: 'Правильных',
      score_accuracy: 'Точность',
      score_level: 'Уровень',
      lvl_expert: 'Эксперт',
      lvl_medium: 'Средний',
      lvl_beginner: 'Новичок',
      r_expert_title: 'Эксперт по безопасности!',
      r_expert_desc: 'Вы отлично разбираетесь в схемах мошенников. Поделитесь знаниями с близкими!',
      r_good_title: 'Хороший результат!',
      r_good_desc: 'Вы знаете основные схемы, но стоит изучить продвинутые методы мошенников.',
      r_warn_title: 'Будьте внимательнее!',
      r_warn_desc: 'Вы знаете базовые правила, но мошенники могут вас обмануть. Изучите наши гайды.',
      r_bad_title: 'Вы в зоне риска!',
      r_bad_desc: 'Мошенники могут легко вас обмануть. Обязательно изучите раздел со схемами и гайды по безопасности.'
    },
    en: {
      question: 'Question',
      next: 'Next question →',
      result: 'Show result →',
      correct: '✓ Correct!',
      wrong: '✗ Incorrect.',
      restart: 'Try again',
      guides_link: 'Read guides',
      score_correct: 'Correct',
      score_accuracy: 'Accuracy',
      score_level: 'Level',
      lvl_expert: 'Expert',
      lvl_medium: 'Intermediate',
      lvl_beginner: 'Beginner',
      r_expert_title: 'Security Expert!',
      r_expert_desc: 'You have excellent knowledge of scam schemes. Share your knowledge with loved ones!',
      r_good_title: 'Good result!',
      r_good_desc: 'You know the basic schemes, but it\'s worth studying advanced fraud methods.',
      r_warn_title: 'Be more careful!',
      r_warn_desc: 'You know the basic rules, but scammers could fool you. Check out our guides.',
      r_bad_title: 'You\'re at risk!',
      r_bad_desc: 'Scammers can easily fool you. Make sure to study the schemes section and security guides.'
    }
  };

  /* ═══════════════════════════════════════════════════════
     APPLY LANGUAGE
     ═══════════════════════════════════════════════════════ */

  function getLang() {
    return localStorage.getItem('pease_lang') || 'ru';
  }

  function applyLang(lang) {
    var dict = T[lang];
    if (!dict) return;

    // data-i18n → innerHTML
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // data-i18n-placeholder → placeholder attr
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Update <html lang>
    document.documentElement.lang = lang;

    // Update <title>
    var titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    // Toggle button active state
    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('pease_lang', lang);
    window.currentLang = lang;
  }

  /* ── Init ── */
  function init() {
    var lang = getLang();

    // Bind toggle clicks
    document.querySelectorAll('.lang-option').forEach(function (el) {
      el.addEventListener('click', function () {
        var newLang = el.getAttribute('data-lang');
        if (newLang && newLang !== window.currentLang) {
          applyLang(newLang);
          // Re-render quiz if on quiz page
          if (typeof window.restartQuiz === 'function') window.restartQuiz();
        }
      });
    });

    // Apply saved lang (skip if already RU default and no saved pref)
    if (lang !== 'ru') {
      applyLang(lang);
    } else {
      window.currentLang = 'ru';
      document.querySelectorAll('.lang-option').forEach(function (el) {
        el.classList.toggle('active', el.getAttribute('data-lang') === 'ru');
      });
    }
  }

  // Expose
  window.I18N = { translations: T, applyLang: applyLang, getLang: getLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
