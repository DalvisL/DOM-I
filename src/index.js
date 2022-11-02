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

const allAnchors = document.querySelectorAll('nav a');
// adding text to nav anchors
allAnchors.forEach((el, index)=> {
  el.textContent = siteContent['nav'][`nav-item-${index+1}`];
})
// adding .italic class to nav links
allAnchors.forEach(el => {
  el.className = 'italic';
});

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// MAIN CONTENT
const mainH4 = document.querySelectorAll('.main-content h4');
const mainP = document.querySelectorAll('.text-content p');
// creating array from the values at siteContent[mainContent]
const mainContentFromObj = Object.values(siteContent['main-content']);
const h4Content = [];
const mainText = [];
// pushes all even items in mainContentFromObj to h4Content and all odd objects to mainText
for(let i = 0; i < mainContentFromObj.length; i++ ) {
  if(i%2 !== 0) {
    mainText.push(mainContentFromObj[i]);
  } else h4Content.push(mainContentFromObj[i]);
}

// runs through each array and adds the corresponding content to each element
mainH4.forEach((el, index) => {
  el.textContent = h4Content[index];
})
mainP.forEach((el, index) => {
  el.textContent = mainText[index];
})

// CONTACT SECTION 
const contactH4 = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];
contactText.forEach((el, index) => {
  el.textContent = Object.values(siteContent['contact'])[index+1];
} )

// FOOTER SECTION

const footerAnchor = document.querySelector('footer a');

footerAnchor.textContent = siteContent['footer']['copyright'];
footerAnchor.className = 'bold';

// IMAGES

const images = document.querySelectorAll('img');

images.forEach((el, index) => {
  el.src = Object.values(siteContent['images'])[index];
})
