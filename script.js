/* ===========================
   АГА-ТУР — Landing Page JS
   Scroll animations, language switcher, mobile nav, counter, form
   =========================== */

// ========== TRANSLATIONS ==========
const translations = {
    ru: {
        nav_about: 'О проекте', nav_sections: 'Разделы',
        nav_team: 'Команда', nav_contacts: 'Контакты',
        hero_badge: '🌏 Туристический портал',
        hero_title_1: 'Весь Агинский округ', hero_title_2: 'в твоём смартфоне',
        hero_subtitle: 'Откройте для себя удивительную природу, культуру и гостеприимство Агинского Бурятского округа. Степи, горы, дацаны и древние традиции — всё в одном месте.',
        hero_cta_more: 'Узнать больше', hero_cta_contact: 'Связаться',
        hero_scroll: 'Листайте вниз',
        about_label: 'О ПРОЕКТЕ', about_title: 'Больше, чем путеводитель',
        about_desc: 'АГА-ТУР — это современная цифровая экосистема для путешественников. Мы создаём живой, актуальный и удобный портал, который объединяет всё: от маршрутов и базы отдыха до бурятской кухни и уникальных сувениров. Здесь нет устаревших данных — только проверенная информация от местных.',
        stat_area: 'Площадь округа', stat_objects: 'Природных объектов', stat_event: 'Год запуска портала',
        eco_label: 'ЭКОСИСТЕМА', eco_title: 'Что будет на портале',
        eco_desc: 'Шесть ключевых модулей, которые сделают ваше путешествие по Агинскому округу комфортным и незабываемым.',
        eco_stay_title: 'Где остановиться', eco_stay_desc: 'Турбазы, гостиницы, кемпинги с фото, рейтингом и GPS-координатами',
        eco_eat_title: 'Где поесть', eco_eat_desc: 'Кафе и рестораны с акцентом на аутентичную бурятскую кухню: буузы, бухулёр, саламат',
        eco_routes_title: 'Маршруты', eco_routes_desc: 'Готовые гайды: Алханай, этно-туры, степные дороги и джип-маршруты',
        eco_events_title: 'Календарь событий', eco_events_desc: 'Алтаргана, Сагаалган, скачки, ярмарки и культурные фестивали округа',
        eco_shop_title: 'Маркетплейс «Ага-Сувенир»', eco_shop_desc: 'Изделия местных мастеров, сувениры, аудиогиды и уникальные подарки',
        eco_sos_title: 'Экстренные контакты', eco_sos_desc: 'МЧС, дежурные больницы, заправки, СТО — всегда под рукой',
        partners_label: 'ПАРТНЁРАМ', partners_title: 'Развивайте бизнес вместе с нами',
        partners_desc: 'Разместите свой бизнес на главном туристическом портале округа. Турбазы, кафе, гиды, мастера — мы ждём вас!',
        benefit_photo: 'Карточка с качественными фото и описанием', benefit_gps: 'GPS-координаты и навигация для туристов',
        benefit_rating: 'Система рейтингов и отзывов', benefit_booking: 'Прямая ссылка на бронирование',
        price_basic_badge: 'Старт', price_basic_name: 'Базовый', price_basic_price: 'Бесплатно',
        price_basic_f1: '✓ Карточка бизнеса', price_basic_f2: '✓ Контактные данные',
        price_basic_f3: '✓ GPS-метка на карте', price_basic_f4: '✗ Приоритет в поиске', price_basic_cta: 'Подключить',
        price_ext_popular: 'Популярный', price_ext_badge: 'Рост', price_ext_name: 'Расширенный', price_ext_period: '/мес',
        price_ext_f1: '✓ Всё из «Базового»', price_ext_f2: '✓ До 10 фотографий',
        price_ext_f3: '✓ Приоритет в поиске', price_ext_f4: '✓ Ссылка на бронирование', price_ext_cta: 'Подключить',
        price_vip_badge: 'Максимум', price_vip_name: 'Верифицированный', price_vip_period: '/мес',
        price_vip_f1: '✓ Всё из «Расширенного»', price_vip_f2: '✓ Значок верификации ✓',
        price_vip_f3: '✓ Персональный менеджер', price_vip_f4: '✓ Продвижение в соцсетях', price_vip_cta: 'Подключить',
        team_label: 'КОМАНДА', team_title: 'Люди, которые создают АГА-ТУР',
        team_role_1: 'Руководитель проекта', team_desc_1: 'Стратег и вдохновитель АГА-ТУР. Развивает туристическую инфраструктуру Агинского Бурятского округа и продвигает регион на федеральном уровне.',
        showcase_label: 'ДЕМО ПОРТАЛА', showcase_title: 'Как это будет выглядеть', showcase_desc: 'Примеры карточек и контента, которые появятся на портале. Каждый объект — с фото, описанием и координатами.',
        showcase_tab_stay: '🏠 Где остановиться', showcase_tab_eat: '🍽️ Где поесть', showcase_tab_routes: '🗺️ Маршруты', showcase_tab_events: '📆 События',
        contacts_label: 'КОНТАКТЫ', contacts_title: 'Свяжитесь с нами',
        contacts_desc: 'Есть вопросы, хотите стать партнёром или просто узнать больше? Напишите нам!',
        form_name_label: 'Ваше имя', form_name_placeholder: 'Введите ваше имя',
        form_contact_label: 'Телефон или Telegram', form_contact_placeholder: '+7 (___) ___-__-__ или @username',
        form_message_label: 'Сообщение', form_message_placeholder: 'Расскажите, чем мы можем помочь',
        form_submit: 'Отправить заявку',
        contact_tg_value: 'Быстрая связь с командой', contact_phone: 'Телефон',
        footer_desc: 'Современный туристический портал Агинского Бурятского округа. Откройте для себя Забайкалье!',
        footer_nav_title: 'Навигация', footer_social_title: 'Мы в соцсетях', footer_rights: 'Все права защищены.',
        toast_success: 'Заявка отправлена! Мы скоро свяжемся с вами.'
    },
    en: {
        nav_about: 'About', nav_sections: 'Sections',
        nav_team: 'Team', nav_contacts: 'Contacts',
        hero_badge: '🌏 Tourism Portal',
        hero_title_1: 'Entire Aga District', hero_title_2: 'in your smartphone',
        hero_subtitle: 'Discover the amazing nature, culture and hospitality of the Aga Buryat District. Steppes, mountains, datsans and ancient traditions — all in one place.',
        hero_cta_more: 'Learn More', hero_cta_contact: 'Contact Us',
        hero_scroll: 'Scroll down',
        about_label: 'ABOUT', about_title: 'More Than a Guide',
        about_desc: 'AGA-TOUR is a modern digital ecosystem for travelers. We create a live, up-to-date and convenient portal that combines everything: from routes and accommodation to Buryat cuisine and unique souvenirs.',
        stat_area: 'District Area', stat_objects: 'Natural Sites', stat_event: 'Portal Launch Year',
        eco_label: 'ECOSYSTEM', eco_title: 'What Will Be on the Portal',
        eco_desc: 'Six key modules that will make your trip across the Aga District comfortable and unforgettable.',
        eco_stay_title: 'Accommodation', eco_stay_desc: 'Tourist bases, hotels, campsites with photos, ratings and GPS',
        eco_eat_title: 'Where to Eat', eco_eat_desc: 'Cafes and restaurants featuring authentic Buryat cuisine: buuzy, bukhler, salamat',
        eco_routes_title: 'Routes', eco_routes_desc: 'Ready-made guides: Alkhanai, ethno-tours, steppe roads and jeep routes',
        eco_events_title: 'Events Calendar', eco_events_desc: 'Altargana, Sagaalgan, horse racing, fairs and cultural festivals',
        eco_shop_title: 'AGA Souvenir Market', eco_shop_desc: 'Crafts by local artisans, souvenirs, audio guides and unique gifts',
        eco_sos_title: 'Emergency Contacts', eco_sos_desc: 'Emergency services, hospitals, gas stations, car service — always at hand',
        partners_label: 'PARTNERS', partners_title: 'Grow Your Business With Us',
        partners_desc: 'List your business on the main tourism portal of the district. Lodges, cafes, guides, artisans — we welcome you!',
        benefit_photo: 'Business card with quality photos', benefit_gps: 'GPS coordinates and navigation',
        benefit_rating: 'Rating and review system', benefit_booking: 'Direct booking link',
        price_basic_badge: 'Start', price_basic_name: 'Basic', price_basic_price: 'Free',
        price_basic_f1: '✓ Business listing', price_basic_f2: '✓ Contact details',
        price_basic_f3: '✓ GPS pin on map', price_basic_f4: '✗ Search priority', price_basic_cta: 'Get Started',
        price_ext_popular: 'Popular', price_ext_badge: 'Growth', price_ext_name: 'Extended', price_ext_period: '/mo',
        price_ext_f1: '✓ Everything in Basic', price_ext_f2: '✓ Up to 10 photos',
        price_ext_f3: '✓ Search priority', price_ext_f4: '✓ Booking link', price_ext_cta: 'Get Started',
        price_vip_badge: 'Maximum', price_vip_name: 'Verified', price_vip_period: '/mo',
        price_vip_f1: '✓ Everything in Extended', price_vip_f2: '✓ Verification badge ✓',
        price_vip_f3: '✓ Personal manager', price_vip_f4: '✓ Social media promo', price_vip_cta: 'Get Started',
        team_label: 'TEAM', team_title: 'The People Behind AGA-TOUR',
        team_role_1: 'Project Lead', team_desc_1: 'Strategist and inspirer of AGA-TOUR. Develops tourism infrastructure and promotes the region at the federal level.',
        showcase_label: 'PORTAL DEMO', showcase_title: 'How It Will Look', showcase_desc: 'Sample cards and content that will appear on the portal. Each entry includes photos, descriptions, and coordinates.',
        showcase_tab_stay: '🏠 Accommodation', showcase_tab_eat: '🍽️ Where to Eat', showcase_tab_routes: '🗺️ Routes', showcase_tab_events: '📆 Events',
        contacts_label: 'CONTACTS', contacts_title: 'Get In Touch',
        contacts_desc: 'Have questions, want to partner, or just learn more? Write to us!',
        form_name_label: 'Your Name', form_name_placeholder: 'Enter your name',
        form_contact_label: 'Phone or Telegram', form_contact_placeholder: '+7 or @username',
        form_message_label: 'Message', form_message_placeholder: 'Tell us how we can help',
        form_submit: 'Send Request',
        contact_tg_value: 'Quick contact with the team', contact_phone: 'Phone',
        footer_desc: 'Modern tourism portal of the Aga Buryat District. Discover Transbaikal!',
        footer_nav_title: 'Navigation', footer_social_title: 'Social Media', footer_rights: 'All rights reserved.',
        toast_success: 'Request sent! We will contact you soon.'
    },
    mn: {
        nav_about: 'Төслийн тухай', nav_sections: 'Хэсгүүд',
        nav_team: 'Баг', nav_contacts: 'Холбоо барих',
        hero_badge: '🌏 Аялал жуулчлалын портал',
        hero_title_1: 'Агын бүх дүүрэг', hero_title_2: 'таны ухаалаг утсанд',
        hero_subtitle: 'Агын Буриад дүүргийн гайхалтай байгаль, соёл, зочломтгой байдлыг нээж мэдээрэй. Тал, уул, дацан, эртний уламжлал — бүгдийг нэг дороос.',
        hero_cta_more: 'Дэлгэрэнгүй', hero_cta_contact: 'Холбоо барих',
        hero_scroll: 'Доош гүйлгэ',
        about_label: 'ТӨСЛИЙН ТУХАЙ', about_title: 'Гарын авлагаас илүү',
        about_desc: 'АГА-ТУР бол жуулчдад зориулсан орчин үеийн дижитал экосистем юм. Бид маршрут, амралтын газраас эхлээд буриад хоол, өвөрмөц бэлэг дурсгалын зүйл хүртэл бүгдийг нэгтгэсэн порталыг бүтээж байна.',
        stat_area: 'Дүүргийн талбай', stat_objects: 'Байгалийн объект', stat_event: 'Портал нээгдэх жил',
        eco_label: 'ЭКОСИСТЕМ', eco_title: 'Порталд юу байх вэ',
        eco_desc: 'Агын дүүргээр аялахад тав тухтай, мартагдашгүй болгох зургаан гол модуль.',
        eco_stay_title: 'Хаана байрлах', eco_stay_desc: 'Жуулчны бааз, зочид буудал, кемпинг',
        eco_eat_title: 'Хаана идэх', eco_eat_desc: 'Буриад хоол: бууз, бухлёр, саламат',
        eco_routes_title: 'Маршрутууд', eco_routes_desc: 'Алханай, угсаатны аялал, талын замууд',
        eco_events_title: 'Үйл явдлын хуанли', eco_events_desc: 'Алтаргана, Цагаан сар, морин уралдаан',
        eco_shop_title: '«Ага-Бэлэг дурсгал»', eco_shop_desc: 'Орон нутгийн урчуудын бүтээн, бэлэг дурсгал',
        eco_sos_title: 'Яаралтай холбоо', eco_sos_desc: 'Онцгой байдал, эмнэлэг, шатахуун, засвар',
        partners_label: 'ТҮНШҮҮД', partners_title: 'Бидэнтэй хамт бизнесээ хөгжүүл',
        partners_desc: 'Дүүргийн гол аялал жуулчлалын порталд бизнесээ байрлуулаарай.',
        benefit_photo: 'Чанартай зурагтай карт', benefit_gps: 'GPS координат, навигаци',
        benefit_rating: 'Үнэлгээ, сэтгэгдлийн систем', benefit_booking: 'Захиалгын шууд холбоос',
        price_basic_badge: 'Эхлэл', price_basic_name: 'Үндсэн', price_basic_price: 'Үнэгүй',
        price_basic_f1: '✓ Бизнесийн карт', price_basic_f2: '✓ Холбоо барих мэдээлэл',
        price_basic_f3: '✓ Газрын зураг дээр GPS', price_basic_f4: '✗ Хайлтын давуу эрх', price_basic_cta: 'Холбогдох',
        price_ext_popular: 'Алдартай', price_ext_badge: 'Өсөлт', price_ext_name: 'Өргөтгөсөн', price_ext_period: '/сар',
        price_ext_f1: '✓ Үндсэн бүгд', price_ext_f2: '✓ 10 хүртэлх зураг',
        price_ext_f3: '✓ Хайлтын давуу эрх', price_ext_f4: '✓ Захиалгын холбоос', price_ext_cta: 'Холбогдох',
        price_vip_badge: 'Дээд', price_vip_name: 'Баталгаажсан', price_vip_period: '/сар',
        price_vip_f1: '✓ Өргөтгөсөн бүгд', price_vip_f2: '✓ Баталгаажилтын тэмдэг ✓',
        price_vip_f3: '✓ Хувийн менежер', price_vip_f4: '✓ Сошиал сүлжээнд сурталчилгаа', price_vip_cta: 'Холбогдох',
        team_label: 'БАГ', team_title: 'АГА-ТУР-ыг бүтээгчид',
        team_role_1: 'Төслийн удирдагч', team_desc_1: 'АГА-ТУР-ын стратегич. Аялал жуулчлалын дэд бүтцийг хөгжүүлж байна.',
        showcase_label: 'ПОРТАЛЫН ДЕМО', showcase_title: 'Хэрхэн харагдах вэ', showcase_desc: 'Порталд гарах картууд.',
        showcase_tab_stay: '🏠 Хаана байрлах', showcase_tab_eat: '🍽️ Хаана идэх', showcase_tab_routes: '🗺️ Маршрутууд', showcase_tab_events: '📆 Үйл явдлууд',
        contacts_label: 'ХОЛБОО БАРИХ', contacts_title: 'Бидэнтэй холбогдоорой',
        contacts_desc: 'Асуулт байгаа юу, хамтран ажиллах уу? Бидэнд бичээрэй!',
        form_name_label: 'Таны нэр', form_name_placeholder: 'Нэрээ бичнэ үү',
        form_contact_label: 'Утас эсвэл Telegram', form_contact_placeholder: 'Утасны дугаар эсвэл @username',
        form_message_label: 'Мессеж', form_message_placeholder: 'Бид яаж тусалж чадах вэ',
        form_submit: 'Хүсэлт илгээх',
        contact_tg_value: 'Багтай шууд холбоо', contact_phone: 'Утас',
        footer_desc: 'Агын Буриад дүүргийн орчин үеийн аялал жуулчлалын портал.',
        footer_nav_title: 'Навигаци', footer_social_title: 'Сошиал сүлжээ', footer_rights: 'Бүх эрх хуулиар хамгаалагдсан.',
        toast_success: 'Хүсэлт илгээгдлээ! Бид тантай удахгүй холбогдоно.'
    },
    zh: {
        nav_about: '关于项目', nav_sections: '板块',
        nav_team: '团队', nav_contacts: '联系我们',
        hero_badge: '🌏 旅游门户',
        hero_title_1: '整个阿金区', hero_title_2: '尽在您的手机',
        hero_subtitle: '探索阿金布里亚特区令人惊叹的自然风光、文化和热情好客。草原、山脉、寺院和古老传统——一切尽在此处。',
        hero_cta_more: '了解更多', hero_cta_contact: '联系我们',
        hero_scroll: '向下滚动',
        about_label: '关于项目', about_title: '不只是指南',
        about_desc: 'AGA-TOUR是为旅行者打造的现代数字生态系统。我们创建了一个活跃、最新且便捷的门户，汇集从路线和住宿到布里亚特美食和独特纪念品的一切信息。',
        stat_area: '区域面积', stat_objects: '自然景点', stat_event: '门户启动年份',
        eco_label: '生态系统', eco_title: '门户上将有什么',
        eco_desc: '六个关键模块，让您在阿金区的旅行舒适难忘。',
        eco_stay_title: '住宿', eco_stay_desc: '旅游基地、酒店、露营地，附照片、评分和GPS',
        eco_eat_title: '美食', eco_eat_desc: '以正宗布里亚特美食为特色的餐厅和咖啡馆',
        eco_routes_title: '路线', eco_routes_desc: '现成的攻略：阿尔哈纳、民族之旅、草原之路',
        eco_events_title: '活动日历', eco_events_desc: '阿尔塔尔加纳、沙加尔干、赛马和文化节',
        eco_shop_title: '阿加纪念品市场', eco_shop_desc: '当地工匠作品、纪念品、语音导览和独特礼品',
        eco_sos_title: '紧急联系方式', eco_sos_desc: '紧急服务、医院、加油站、汽车维修——随时可用',
        partners_label: '合作伙伴', partners_title: '与我们一起发展业务',
        partners_desc: '在区域主要旅游门户上展示您的业务。旅馆、咖啡馆、导游、工匠——欢迎您！',
        benefit_photo: '配有优质照片的商家卡片', benefit_gps: 'GPS坐标和导航',
        benefit_rating: '评分和评论系统', benefit_booking: '直接预订链接',
        price_basic_badge: '起步', price_basic_name: '基础版', price_basic_price: '免费',
        price_basic_f1: '✓ 商家列表', price_basic_f2: '✓ 联系方式',
        price_basic_f3: '✓ 地图GPS标记', price_basic_f4: '✗ 搜索优先', price_basic_cta: '开始使用',
        price_ext_popular: '热门', price_ext_badge: '成长', price_ext_name: '扩展版', price_ext_period: '/月',
        price_ext_f1: '✓ 基础版全部功能', price_ext_f2: '✓ 最多10张照片',
        price_ext_f3: '✓ 搜索优先', price_ext_f4: '✓ 预订链接', price_ext_cta: '开始使用',
        price_vip_badge: '顶级', price_vip_name: '认证版', price_vip_period: '/月',
        price_vip_f1: '✓ 扩展版全部功能', price_vip_f2: '✓ 认证标志 ✓',
        price_vip_f3: '✓ 专属客户经理', price_vip_f4: '✓ 社交媒体推广', price_vip_cta: '开始使用',
        team_label: '团队', team_title: '创建AGA-TOUR的人们',
        team_role_1: '项目负责人', team_desc_1: 'AGA-TOUR的战略家。发展旅游基础设施，在联邦层面推广该地区。',
        showcase_label: '门户演示', showcase_title: '它将如何呈现', showcase_desc: '将出现在门户上的示例卡片。每个条目包含照片、描述和坐标。',
        showcase_tab_stay: '🏠 住宿', showcase_tab_eat: '🍽️ 美食', showcase_tab_routes: '🗺️ 路线', showcase_tab_events: '📆 活动',
        contacts_label: '联系我们', contacts_title: '与我们联系',
        contacts_desc: '有问题、想合作或只是想了解更多？请联系我们！',
        form_name_label: '您的姓名', form_name_placeholder: '请输入您的姓名',
        form_contact_label: '电话或Telegram', form_contact_placeholder: '电话号码或@用户名',
        form_message_label: '留言', form_message_placeholder: '告诉我们如何帮助您',
        form_submit: '发送请求',
        contact_tg_value: '与团队快速联系', contact_phone: '电话',
        footer_desc: '阿金布里亚特区现代旅游门户。发现外贝加尔！',
        footer_nav_title: '导航', footer_social_title: '社交媒体', footer_rights: '版权所有。',
        toast_success: '请求已发送！我们将尽快与您联系。'
    }
};

let currentLang = 'ru';

// ========== DOM ELEMENTS ==========
const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langCurrent = document.getElementById('langCurrent');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// ========== HEADER SCROLL EFFECT ==========
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScroll = scrollY;

    // Update active nav link
    updateActiveNav();
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ========== MOBILE MENU ==========
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========== LANGUAGE SWITCHER ==========
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
});

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        switchLanguage(lang);
        langDropdown.classList.remove('active');
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    const langNames = { ru: 'RU', en: 'EN', mn: 'MN', zh: 'ZH' };
    langCurrent.textContent = langNames[lang];

    // Update active class
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// ========== SCROLL ANIMATIONS ==========
const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animateObserver.observe(el);
});

// ========== COUNTER ANIMATION ==========
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                animateCounter(counter);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const statsEl = document.querySelector('.stats');
if (statsEl) counterObserver.observe(statsEl);

function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);
        el.textContent = current.toLocaleString('ru-RU');
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString('ru-RU');
        }
    }
    requestAnimationFrame(update);
}

// ========== HERO PARTICLES ==========
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = window.innerWidth < 768 ? 8 : 15;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 15 + 15;
        const opacity = Math.random() * 0.3 + 0.1;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            background: ${Math.random() > 0.5 ? 'rgba(212, 168, 67, ' + opacity + ')' : 'rgba(255, 255, 255, ' + opacity + ')'};
        `;
        container.appendChild(particle);
    }
}
createParticles();

// ========== SMOOTH ANCHOR SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ========== CONTACT FORM ==========
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic form — show toast and reset
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);

    contactForm.reset();
});

// ========== SHOWCASE TABS ==========
document.querySelectorAll('.showcase-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.showcase-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabId = tab.dataset.tab;
        document.querySelectorAll('.showcase-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ========== SKELETON LOADING ==========
window.addEventListener('load', () => {
    const skeleton = document.getElementById('skeleton');
    if (skeleton) {
        setTimeout(() => {
            skeleton.classList.add('hidden');
            setTimeout(() => skeleton.remove(), 600);
        }, 800);
    }
});

// ========== DARK/LIGHT THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('aga-tour-theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('aga-tour-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('aga-tour-theme', 'dark');
    }
    // Haptic feedback on theme switch
    if (navigator.vibrate) navigator.vibrate(15);
});

// ========== RIPPLE EFFECT ==========
document.querySelectorAll('.ripple-btn, .btn').forEach(btn => {
    btn.classList.add('ripple-btn');
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});

// ========== HAPTIC FEEDBACK ==========
document.querySelectorAll('.btn, .showcase-tab, .theme-toggle, .lang-option').forEach(el => {
    el.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(10);
    });
});

// ========== TILT EFFECT (Gyroscope on mobile, mouse on desktop) ==========
const tiltCards = document.querySelectorAll('.tilt-card');

// Desktop: mouse-based tilt
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Mobile: gyroscope-based tilt
if (window.DeviceOrientationEvent) {
    let tiltEnabled = false;

    // iOS 13+ requires permission
    const enableGyro = () => {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(resp => { if (resp === 'granted') tiltEnabled = true; })
                .catch(() => { });
        } else {
            tiltEnabled = true;
        }
    };

    document.addEventListener('touchstart', enableGyro, { once: true });

    window.addEventListener('deviceorientation', (e) => {
        if (!tiltEnabled) return;
        const gamma = e.gamma || 0; // left-right tilt (-90 to 90)
        const beta = e.beta || 0;   // front-back tilt (-180 to 180)
        const rotateY = (gamma / 90) * 6;
        const rotateX = ((beta - 45) / 90) * -6;

        tiltCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
    });
}

// ========== PULL-TO-REVEAL ==========
const pullReveal = document.getElementById('pullReveal');
const pullFact = document.getElementById('pullFact');
const facts = [
    { emoji: '🏇', text: 'Агинский округ — родина более 30 олимпийских чемпионов по борьбе!' },
    { emoji: '🏔️', text: 'Национальный парк Алханай — священная гора бурят, высота 1662 м!' },
    { emoji: '🥟', text: 'Буузы (бурятские позы) — главное блюдо, с 33 защипами по краю!' },
    { emoji: '🐎', text: 'Скачки на приз Губернатора собирают более 10 000 зрителей!' },
    { emoji: '🎭', text: 'Фестиваль Алтаргана — крупнейший бурятский праздник в мире!' },
    { emoji: '🌾', text: 'Площадь Агинского округа — 19 600 км², как 3 Кипра!' },
    { emoji: '☸️', text: 'В округе более 15 действующих дацанов — буддийских храмов!' },
    { emoji: '🎻', text: 'Моринхур — бурятская скрипка с головой коня, символ степи!' },
];
let factIndex = 0;
let pullTimeout = null;

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // user is at top — detect overscroll
    }
});

let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    if (window.scrollY === 0) {
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        if (diff > 80 && pullReveal) {
            const fact = facts[factIndex % facts.length];
            pullReveal.querySelector('.pull-reveal__emoji').textContent = fact.emoji;
            pullFact.textContent = fact.text;
            pullReveal.classList.add('visible');
            factIndex++;
            clearTimeout(pullTimeout);
            pullTimeout = setTimeout(() => {
                pullReveal.classList.remove('visible');
            }, 3500);
        }
    }
});

// Desktop: pull-to-reveal via scroll at top 
let prevScrollY = 0;
window.addEventListener('scroll', () => {
    if (prevScrollY > 0 && window.scrollY === 0 && pullReveal) {
        const fact = facts[factIndex % facts.length];
        pullReveal.querySelector('.pull-reveal__emoji').textContent = fact.emoji;
        pullFact.textContent = fact.text;
        pullReveal.classList.add('visible');
        factIndex++;
        clearTimeout(pullTimeout);
        pullTimeout = setTimeout(() => {
            pullReveal.classList.remove('visible');
        }, 3500);
    }
    prevScrollY = window.scrollY;
});

// ========== SWIPE GALLERY 3D ROTATION ==========
document.querySelectorAll('.swipe-gallery__track').forEach(track => {
    let isDown = false;
    let startX, scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseup', () => isDown = false);
    track.addEventListener('mouseleave', () => isDown = false);
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });

    // 3D rotation based on scroll position
    const update3D = () => {
        const slides = track.querySelectorAll('.swipe-gallery__slide');
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;

        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const offset = (slideCenter - center) / (trackRect.width / 2);
            const rotation = offset * 15; // max 15 degrees
            const scale = 1 - Math.abs(offset) * 0.08;
            slide.style.transform = `perspective(800px) rotateY(${rotation}deg) scale(${Math.max(scale, 0.85)})`;
        });
    };

    track.addEventListener('scroll', update3D);
    window.addEventListener('resize', update3D);
    setTimeout(update3D, 100);
});

// ========== INITIAL STATE ==========
updateActiveNav();
