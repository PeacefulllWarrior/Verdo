  // ______START____//
  
  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".header");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".hero-section__title");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".services-section__image");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".services-section__list");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".services-section__container-head-service-1");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll(".services-section__container-head-service-2");
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      listItem.classList.add("animate");
    }
  });
  

//____________________GO______________________________________//
  
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.advantages-section__container-item');
let elements1 = document.querySelectorAll('.advantages-section__container-text');
let elements2 = document.querySelectorAll('.place-section__car-div__img');
let elements3 = document.querySelectorAll('.place-section__photo-box-div__img');
let elements4 = document.querySelectorAll('.place-section__text-div__hero-text');
let elements5 = document.querySelectorAll('.place-section__text-div__text-with-backgroung-photo-1');
let elements6 = document.querySelectorAll('.place-section__text-div__text-with-backgroung-photo-2');
let elements7 = document.querySelectorAll('.place-section__text-div__text-with-backgroung-photo-3');
let elements8 = document.querySelectorAll('.place-section__text-div__text-question');
let elements9 = document.querySelectorAll('.garbage-removal-section__export__case');
let elements10 = document.querySelectorAll('.garbage-removal-section__export__title-div');
let elements11 = document.querySelectorAll('.garbage-removal-section__export__green-hands');
// let elements12 = document.querySelectorAll('.garbage-removal-section__green-info__woman-box');
let elements12 = document.querySelectorAll('.garbage-removal-section__green-info__list-info-1');
let elements13= document.querySelectorAll('.garbage-removal-section__green-info__list-info-2');
let elements14 = document.querySelectorAll('.garbage-removal-section__green-info__list-info-3');
let elements15 = document.querySelectorAll('.garbage-removal-section__green-info__title');
let elements16 = document.querySelectorAll('.garbage-removal-section__green-info__pre-title');
let elements17 = document.querySelectorAll('.footer-menu-div');
let elements18 = document.querySelectorAll('.address-list');
let elements19 = document.querySelectorAll('.company-info-section-work');


elements.forEach(elm => observer.observe(elm));
elements1.forEach(elm => observer.observe(elm));
elements2.forEach(elm => observer.observe(elm));
elements3.forEach(elm => observer.observe(elm));
elements4.forEach(elm => observer.observe(elm));
elements5.forEach(elm => observer.observe(elm));
elements6.forEach(elm => observer.observe(elm));
elements7.forEach(elm => observer.observe(elm));
elements8.forEach(elm => observer.observe(elm));
elements9.forEach(elm => observer.observe(elm));
elements10.forEach(elm => observer.observe(elm));
elements11.forEach(elm => observer.observe(elm));
// elements12.forEach(elm => observer.observe(elm));
elements12.forEach(elm => observer.observe(elm));
elements13.forEach(elm => observer.observe(elm));
elements14.forEach(elm => observer.observe(elm));
elements15.forEach(elm => observer.observe(elm));
elements16.forEach(elm => observer.observe(elm));
elements17.forEach(elm => observer.observe(elm));
elements18.forEach(elm => observer.observe(elm));
elements19.forEach(elm => observer.observe(elm));