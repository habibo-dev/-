const $ = (s, scope = document) => scope.querySelector(s);
const icon = (name) => ({plane:'✈', passport:'▣', hotel:'⌂', shield:'◇'})[name] || '✦';

function renderCards() {
  $('#services-grid').innerHTML = travelData.services.map((item) => `<article class="service-card"><span class="service-icon">${icon(item.icon)}</span><h3>${item.title}</h3><p>${item.description}</p><a href="#contact" aria-label="${item.title}">اكتشف الخدمة <span>←</span></a></article>`).join('');
  $('#destination-grid').innerHTML = travelData.destinations.map((item) => `<a class="destination-card" href="offers.html?destination=${item.slug}"><img src="${item.image}" alt="${item.alt}" loading="lazy"><span></span><div><small>${item.country}</small><h3>${item.name}</h3><b>اكتشف <i>←</i></b></div></a>`).join('');
  renderPackages('all');
}
function renderPackages(filter) {
  const entries = travelData.packages.filter((item) => filter === 'all' || item.category === filter);
  $('#packages-grid').innerHTML = entries.map((item) => `<article class="package-card"><div class="package-image"><img src="${item.image}" alt="${item.alt}" loading="lazy"><span class="tag">${item.label}</span><button aria-label="حفظ ${item.title}" type="button">♡</button></div><div class="package-info"><div><small>${item.country}</small><h3>${item.title}</h3></div><p>${item.description}</p><div class="card-footer"><span>${item.duration}</span><a href="#contact">اطلب التفاصيل <i>←</i></a></div></div></article>`).join('');
}

renderCards();
document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach((b) => b.classList.toggle('selected', b === button)); renderPackages(button.dataset.filter); }));

$('.menu-toggle').addEventListener('click', (event) => { const open = document.body.classList.toggle('menu-open'); event.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', () => document.body.classList.remove('menu-open')));

$('#booking-form').addEventListener('submit', (event) => { event.preventDefault(); const destination = new FormData(event.currentTarget).get('destination'); $('#booking-feedback').textContent = `تم تسجيل اهتمامك بـ ${destination}. اترك بياناتك أدناه ليعاود الفريق الاتصال بك.`; $('#contact').scrollIntoView({behavior: 'smooth'}); });
$('#contact-form').addEventListener('submit', (event) => { event.preventDefault(); if (!event.currentTarget.checkValidity()) return; $('#contact-feedback').textContent = 'شكرًا لك. تم تجهيز طلبك للمتابعة من فريق الوكالة.'; event.currentTarget.reset(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), {threshold: .12});
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
