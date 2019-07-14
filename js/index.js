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
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
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

//Assignment//

const logo = document.getElementById("logo-img");
logo.setAttribute ("src", siteContent["nav"]["img-src"]);

const middleImage = document.getElementById("middle-img")
middleImage.src = (siteContent["main-content"]["middle-img-src"]);


let navigationLinks =   document.querySelectorAll("nav a");
navigationLinks.forEach(( link, item) => {
link.textContent = siteContent.nav[`nav-item-${item + 1}`];


link.style.color = 'lime';
link.style.fontSize = '15px';
 });

 navigationLinks = document.getElementsByTagName('nav')[0];
 let makeNewLink = (name) => {
   let addNavLink= document.createElement('a');
   addNavLink.textContent = name;
   addNavLink.style.color = 'fuchsia';
   addNavLink.style.fontSize = '20px';
   return addNavLink;
 }

 const newHeader = document.querySelector('h1');
 newHeader.textContent = siteContent.cta.h1;

const newButton = document.querySelector('button');
newButton.textContent = siteContent.cta.button;

 const ctaImage = document.getElementById('cta-img');
 ctaImage.src = (siteContent["cta"]["img-src"]);

let newMainContent = document.querySelectorAll('.text-content');

newMainContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
newMainContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];
newMainContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
newMainContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];
newMainContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
newMainContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];
newMainContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
newMainContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content'];
newMainContent[4].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
newMainContent[4].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];


let replaceContact = document.querySelectorAll('.contact');
replaceContact[0].getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
replaceContact[0].getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
replaceContact[0].getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
replaceContact[0].getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

 navigationLinks.prepend(makeNewLink('Connect'));
 navigationLinks.append(makeNewLink('Survey'));

 const replaceFooter = document.querySelector('footer');
replaceFooter.textContent = siteContent.footer.copyright;

