
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  inertia: .5,
  multiplier: .9,
  touchMultiplier: .9
});




var eventpage = document.querySelector(".events");
document.querySelector("#navevents").addEventListener("click", scrolltoevents);
function scrolltoevents() {
  scroll.scrollTo(eventpage);
}

var aboutpage = document.querySelector(".aboutsection");
document.querySelector("#navabout").addEventListener("click", scrolltoabout);
function scrolltoabout() {
  scroll.scrollTo(aboutpage);
}

var newspage = document.querySelector(".news");
document.querySelector("#navnews").addEventListener("click", scrolltonews);
function scrolltonews() {
  scroll.scrollTo(newspage);
}

var faqpage = document.querySelector(".faq");
document.querySelector("#navfaqs").addEventListener("click", scrolltofaq);
function scrolltofaq() {
  scroll.scrollTo(faqpage);
}

var contactpage = document.querySelector(".contact");
document.querySelector("#navcontact").addEventListener("click", scrolltocontact);
function scrolltocontact() {
  scroll.scrollTo(contactpage);
}