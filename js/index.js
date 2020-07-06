const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src',siteContent.cta["img-src"])

let headerNav = document.querySelectorAll('header nav a')

console.log(headerNav)
headerNav[0].textContent = siteContent['nav']['nav-item-1']
headerNav[1].textContent = siteContent['nav']['nav-item-2']
headerNav[2].textContent = siteContent['nav']['nav-item-3']
headerNav[3].textContent = siteContent['nav']['nav-item-4']
headerNav[4].textContent = siteContent['nav']['nav-item-5']
headerNav[5].textContent = siteContent['nav']['nav-item-6']

let ctaText = document.querySelector('.cta-text h1')
console.log(ctaText)
ctaText.textContent = siteContent.cta.h1
let ctaButton = document.querySelector('.cta-text button')
console.log(ctaButton)
ctaButton.textContent = siteContent.cta.button



//Green Nav
headerNav.forEach(link => {
  link.style.color = 'green';
})

let contentHeaders = document.querySelectorAll('.main-content h4')
console.log(contentHeaders)

contentHeaders[0].textContent = siteContent['main-content']['features-h4']
contentHeaders[1].textContent = siteContent['main-content']['about-h4']
contentHeaders[2].textContent = siteContent['main-content']['services-h4']
contentHeaders[3].textContent = siteContent['main-content']['product-h4']
contentHeaders[4].textContent = siteContent['main-content']['vision-h4']

let contentParagraphs = document.querySelectorAll('.main-content p')

contentParagraphs[0].textContent = siteContent['main-content']['features-content']
contentParagraphs[1].textContent = siteContent['main-content']['about-content']
contentParagraphs[2].textContent = siteContent['main-content']['services-content']
contentParagraphs[3].textContent = siteContent['main-content']['product-content']
contentParagraphs[4].textContent = siteContent['main-content']['vision-content']


let contactTitle = document.querySelector('.contact h4')

contactTitle.textContent = siteContent.contact['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')

console.log(contactInfo)

contactInfo[0].textContent = siteContent.contact['address']
contactInfo[1].textContent = siteContent.contact['phone']
contactInfo[2].textContent = siteContent.contact['email']

let copyright = document.querySelector('footer p')

copyright.textContent = siteContent.footer.copyright