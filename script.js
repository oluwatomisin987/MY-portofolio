"use strict";


document.querySelector('.header2-div').addEventListener ('click', function(e) {
 e.preventDefault();
// console.log(e.target);
if (e.target.classList.contains('third-p-header')) {

  console.log('lonk');
     const id = e.target.getAttribute("href");
     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}

})



const allSection = document.querySelectorAll('.section')





const revealSection = function (entries, observer) {
const [entry] = entries;
// console.log(entry);


  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);

}


const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.17 ,
});


allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});



// lazy images

const imgTargets = document.querySelectorAll("img[data-src]");



const loadImg = function (entries, observer){
entries.forEach(entry =>{
  // console.log(entry);

  if(!entry.isIntersecting) return

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function(){entry.target.classList.remove('lazy-img')


    observer.unobserve(entry.target);

  })
})
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
  rootMargin: "-100px",
});



imgTargets.forEach((img) => imgObserver.observe(img));


