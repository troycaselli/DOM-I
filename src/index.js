const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// header
const services = document.querySelector('nav a:nth-of-type(1)');
const product = document.querySelector('nav a:nth-of-type(2)');
const  vision = document.querySelector('nav a:nth-of-type(3)');
const features = document.querySelector('nav a:nth-of-type(4)');
const about = document.querySelector('nav a:nth-of-type(5)');
const contact = document.querySelector('nav a:nth-of-type(6)');

services.textContent = siteContent['nav']['nav-item-1'];
services.classList.add('italic');
product.textContent = siteContent['nav']['nav-item-2'];
product.classList.add('italic');
vision.textContent = siteContent['nav']['nav-item-3'];
vision.classList.add('italic');
features.textContent = siteContent['nav']['nav-item-4'];
features.classList.add('italic');
about.textContent = siteContent['nav']['nav-item-5'];
about.classList.add('italic');
contact.textContent = siteContent['nav']['nav-item-6'];
contact.classList.add('italic');

const logo = document.querySelector('header img');
logo.src = siteContent['images']['logo-img'];

// CTA section
const title = document.querySelector('.cta h1');
title.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta button');
button.textContent = siteContent['cta']['button'];

const circleImg = document.querySelector('.cta img');
circleImg.src = siteContent['images']['cta-img'];


// main content section

const featuresMain = document.querySelector('.text-content:nth-of-type(1) h4');
const aboutMain = document.querySelector('.text-content:nth-of-type(2) h4');
const servicesMain = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const productMain = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const visionMain = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');

featuresMain.textContent = siteContent['main-content']['features-h4'];
aboutMain.textContent = siteContent['main-content']['about-h4'];
servicesMain.textContent = siteContent['main-content']['services-h4'];
productMain.textContent = 'Product';
visionMain.textContent = 'Vision';

const featuresText = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const aboutText = document.querySelector('.top-content .text-content:nth-of-type(2) p');
const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

featuresText.textContent = siteContent['main-content']['features-content'];
aboutText.textContent = siteContent['main-content']['about-content'];
servicesText.textContent = siteContent['main-content']['services-content'];
productText.textContent = siteContent['main-content']['product-content'];
visionText.textContent = siteContent['main-content']['vision-content'];

const imgMain = document.querySelector('#middle-img');
imgMain.src = siteContent['images']['accent-img'];


// contact section
const contactBottom = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactBottom.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// footer
const copyright = document.querySelector('footer a');
copyright.textContent = siteContent['footer']['copyright'];
copyright.classList.add('bold');